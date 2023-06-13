import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sumit Nalavade - Portfolio</title>
        <meta
          name="description"
          content="Sumit Nalavade - Texas A&M Engineering"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Sumit Nalavade - Portfolio"
          key="title"
        />
        <meta
          property="og:description"
          content="I'm a computer engineering student at Texas A&M University '26! My interests include software design and development, machine learning and artificial intelligence."
          key="description"
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/48499839?v=4"
          key="description"
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
