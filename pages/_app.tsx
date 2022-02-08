import "../styles/global.scss";
import { AppProps } from "next/app";
import Head from "next/head";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>GIF Converter</title>
        <link rel="shortcut icon" href="/favicon.svg?v=2" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
