import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Sumit Nalavade - Portfolio</title>
        <meta name="description" content="Sumit Nalavade - Texas A&M Engineering"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Sumit Nalavade - Portfolio" key="title" />
        <meta
          property="og:description"
          content="I'm a computer engineering student at Texas A&M University '26! My interests include software design and development, machine learning and artificial intelligence."
          key="description"
        />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/48499839?v=4" key="description" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
