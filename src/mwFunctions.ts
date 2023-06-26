import { NextRequest } from 'next/server';

export const getApiUrl = (appEnv: string) => {
  // NOTE: middlewareで環境変数の取得ができないためハードコーディング、process.envではアクセス可能
  if (appEnv === 'local') {
    return 'http://localhost:8881';
  }
  if (appEnv === 'development') {
    return 'http://127.0.0.1:8000';
  }
  if (appEnv === 'production') {
    return 'https://hoge.com';
  }
};

export const isLoginPage = (request: NextRequest) => {
  return request.nextUrl.pathname.startsWith('/login');
};

export const isHogePage = (request: NextRequest) => {
  return request.nextUrl.pathname.startsWith('/hoge');
};

/** login済みかのチェックを行う */
export const isAuthorized = (request: NextRequest) => {
  // NOTE: access_tokenはSecureとHttpOnlyによって悪意のあるサイトからのCookieの盗み出しを防いでいる
  // 万が一があっても、REST APIを叩く時にはサーバーサイド側でエラーを返すため、ログイン後にしか見れない情報が漏洩することはない
  return request.cookies.has('access_token');
};

export const isAdmin = (role: string) => {
  return role === 'admin';
};
