import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from "next/router";
import Head from "next/head";

import 'bootstrap/dist/css/bootstrap.css'
import "../styles/cssreset.css";
import '../styles/globals.scss';
import variables from "../styles/variables.module.scss";


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);

  return (<>
    <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} /></>
  );
}

export default MyApp