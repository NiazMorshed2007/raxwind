import MainController from '@/controller/MainController';
import '@/styles/style.scss'
import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => <MainController>{page}</MainController>);
  return <>{getLayout(<Component {...pageProps} />)}</>
}
