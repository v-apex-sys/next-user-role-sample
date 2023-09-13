import { NextRequest, NextResponse } from 'next/server';
import {
  getApiUrl,
  isAccountPage,
  isAdmin,
  isAuthorized,
  isHogePage,
  isLoginPage,
} from './mwFunctions';
const appEnv = process.env.APP_ENV || 'development';

// ISR とか SSR とか pre rendering時はどうなる？
// middlewareで
// 1段階
// ログインで弾かれたページのプレレンダリングが行われるか
// 2段階
// 動的ルーティングのページ、getStaticPathで指定した所がプレレンダリングされるか

export async function middleware(request: NextRequest) {
  console.log('ran', request.nextUrl.pathname);

  const API_URL = getApiUrl(appEnv);
  // NOTE: middleware上で必要なためfetchAPIで取得しているが、以降もrole情報が必要なため別途APIを叩いてroleを取得する
  let response;
  if (process.env.APP_ENV === 'local') {
    response = { json: () => ({ role: 'admin' }) };
  } else {
    response = await fetch(API_URL + '/api/roles').catch((err) => {
      console.error(err);
      return { json: () => ({ role: '' }) };
    });
  }

  let data;
  try {
    data = await response?.json();
  } catch (err) {
    console.error(err);
    data = { role: '' };
  }

  // middlewareファイルは1つしか持てないので、肥大化しないように判定ロジックは関数に切り出す
  if (isLoginPage(request) && isAuthorized(request, appEnv)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // アカウントページはログインしていないと見れない
  if (isAccountPage(request) && !isAuthorized(request, appEnv)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Admin権限で閲覧できないページ
  if (isAdmin(data.role)) {
    if (isHogePage(request)) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|next.svg|thirteen.svg|vercel.svg).*)',
  ],
};
