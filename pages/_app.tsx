import { useEffect } from 'react';
import App, { AppProps, AppContext } from 'next/app';
import { useRouter } from "next/router";
import Head from "next/head";

import { IProject } from '../utils/project';
import { getPinnedProjects } from '../utils/github';

import 'bootstrap/dist/css/bootstrap.css'
import "../styles/cssreset.css";
import '../styles/globals.scss';


type TProps = Pick<AppProps, "Component" | "pageProps"> & {
  pinnedProjects: IProject[];
};
function MyCustomApp({ Component, pageProps, pinnedProjects }: TProps) {
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
    <Component {...pageProps} pinnedProjects={pinnedProjects} />
    </>
  );
}

MyCustomApp.getInitialProps = async (context: AppContext) => {
  const ctx = await App.getInitialProps(context);
  const pinnedProjects: IProject[] = await getPinnedProjects();

  return { ...ctx, pinnedProjects: [...pinnedProjects] };
};

export default MyCustomApp;

