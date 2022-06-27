import React from 'react';
import type { NextPage } from 'next';
import Link from "next/link";
import Image from "next/image";

import Navbar from '../components/Navbar';

import styles from "../styles/about.module.scss";

const About: NextPage = () => {
    return (
        <div className="h-100">
            <Navbar />
            <div className='container d-flex flex-column text-main'>
                <u className={`text-tertiary ${styles.textDecorate}`}><p className="display-6 text-main">About Me</p></u>
                
                <div className='d-flex align-items-center'>
                    <div className='container-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deserunt itaque id? Non tempore fugiat aliquam dolorem saepe? Voluptas dignissimos commodi sit, doloribus modi ex. Sunt enim quod deleniti consectetur?
                    </div>

                    <div className='container-sm w-50'>
                        <Image src="/Images/sumit-rounded.png" layout='responsive' width={5} height={5} className={`border border-8 rounded-circle border-tertiary ${styles.profilePic}`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;