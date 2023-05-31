import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Sumit Nalavade - Portfolio</title>
        <meta
          name="description"
          content="Sumit Nalavade - Texas A&M Engineering"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <Navbar />

      <div className="p-4 flex justify-between flex-wrap mx-auto max-w-[1400px] h-[75vh]">
        {children}
      </div>
    </>
  );
};

export default Layout;
