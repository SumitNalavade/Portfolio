import React, { useEffect } from 'react'
import type { NextPage } from 'next';
import Link from "next/link";

import styles from "../styles/pages/index.module.scss";

const Home: NextPage = () => {
  return (
    <div className={`container-fluid d-flex justify-content-center align-items-center h-100 ${styles.topContainer}`}>
          <div className={`card rounded bg-background m-lg-5 container-fluid ${styles.infoContainer}`}>
            <div className='card-body text-main text-center'>
                <div className='text-center'>
                  <p className="display-1 my-4">Sumit Nalavade</p>
                  <div className={styles.wrapper}>
                    <p className={`display-8 my-2 ${styles.typingDemo}`}>Full-Stack Developer</p>
                    <p className={`display-8 my-4 ${styles.typingDemo}`}>Texas A&M Engineering '26</p>
                  </div>
                </div>

                <div className="">
                  <Link className='text-main' href="/about">
                    <button type="button" className="btn btn-large btn-highlight text-main w-75 py-3">Check Out My Work!</button>
                  </Link>
                </div>
            </div>
          </div>
    </div>
  )
};


export default Home;