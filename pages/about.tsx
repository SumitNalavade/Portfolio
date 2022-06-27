import React from 'react';
import type { NextPage } from 'next';
import Image from "next/image";

import Navbar from '../components/Navbar';

import styles from "../styles/about.module.scss";

const About: NextPage = () => {
    return (
        <div className="h-100">
            <Navbar />              
                <div className={`container-lg d-flex align-items-center my-5 ${styles.flexContainer}`}>
                    <div className='mx-md-3 mx-lg-5 w-75'>
                        <Image src="/Images/sumit-rounded.png" layout='responsive' width={5} height={5} className={`border border-8 rounded-circle border-tertiary ${styles.profilePic}`} />
                    </div>

                    <div className='container d-flex mx-md-3 mx-lg-5 flex-column text-main'>  
                        <u className={`text-tertiary ${styles.textDecorate}`}><p className="display-6 text-main">About Me</p></u>
                        <div className=''>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error id illo ducimus unde rerum, quis incidunt sed, numquam excepturi sunt reiciendis. Officia, placeat amet! Ab quis veniam nemo illum nihil?
                            Perferendis earum explicabo magnam, corporis temporibus et distinctio dolorum culpa ea officia inventore quia quo? Vel repellendus cupiditate nam ab voluptas facilis, tempore earum! Atque facere eaque hic dicta? Placeat.
                            Ducimus vero, architecto rerum culpa quisquam temporibus obcaecati, amet dolores in consequuntur saepe dolor voluptatibus reprehenderit reiciendis dolorem adipisci harum laboriosam laudantium minus aliquam atque aut unde tempora. Voluptates, at!
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default About;