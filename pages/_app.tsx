import type { AppProps } from 'next/app'
import Head from "next/head";

import "../styles/cssreset.css";
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss';
import variables from "../styles/variables.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} /></>
  );
}

export default MyApp
