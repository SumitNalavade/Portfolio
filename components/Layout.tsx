import React from 'react';
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
    children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
        <Head>
            <title>Sumit Nalavade</title>
            <meta name="description" content="Sumit Nalavade - Full-stack developer based in Frisco, Texas. Incoming engineering freshman at Texas A&M University"></meta>
        </Head>
            <div className='h-100'>
                <Navbar />
                    { children }
                <Footer />
            </div>
        </>
        
    )
};

export default Layout;