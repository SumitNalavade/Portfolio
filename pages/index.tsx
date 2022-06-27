import React from 'react'
import type { NextPage } from 'next';
import Image from "next/image";
import Link from "next/link";

import Navbar from '../components/navbar';

const Home: NextPage = () => {
  return (
    <div className="container d-flex align-items-center">
      <div className='container-fluid d-flex align-items-center flex-wrap'>
        <div className='col col-lg-6 order-lg-2 d-block'>
          <Image src="/Images/sumit-rounded.png" layout='responsive' width={10} height={10} className="border border-10 rounded-circle border-highlight" />
        </div>

        <div className='col col-sm-12 col-lg-6 order-lg-1'>
          <div className='card rounded bg-cardBackground'>
            <div className='card-body text-main text-center'>
                <div className='text-center'>
                  <p className="display-1 my-4">Sumit Nalavade</p>
                  <p className="display-8 my-4">Full-Stack Developer</p>
                  <p className="display-8 my-4">Texas A&M Engineering '26</p>
                </div>

                <div className="">
                  <Link className='text-main' href="/about">
                    <button type="button" className="btn btn-large btn-highlight text-main w-75 py-3">Check Out My Work!</button>
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;