import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Wrapper from './_wrapper';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Wrapper>
        <Component {...pageProps} />{' '}
      </Wrapper>
    </RecoilRoot>
  );
}
