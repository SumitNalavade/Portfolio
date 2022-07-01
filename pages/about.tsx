import React from 'react';
import type { NextPage } from 'next';
import Image from "next/image";
import ReactMarkdown from 'react-markdown';

import Navbar from '../components/Navbar';
import SectionHeader from '../components/SectionHeader';

const About: NextPage = () => {
    return (
        <div className={"h-100"}>
            <Navbar />              
                <div className={`container-lg d-flex align-items-center my-5 mobileStacked`}>
                    <div className='mx-md-3 mx-lg-5 w-75'>
                        <Image src="/Images/sumit-rounded.png" layout='responsive' width={5} height={5} className={`border border-8 rounded-circle border-tertiary`} />
                    </div>

                    <div className='container d-flex justify-content-center mx-md-3 mx-lg-5 flex-column text-main'> 
                        <SectionHeader title="About Me" />
                        <p>'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error id illo ducimus unde rerum, quis incidunt sed, numquam excepturi sunt reiciendis. Officia, placeat amet! Ab quis veniam nemo illum nihil?
                            Perferendis earum explicabo magnam, corporis temporibus et distinctio dolorum culpa ea officia inventore quia quo? Vel repellendus cupiditate nam ab voluptas facilis, tempore earum! Atque facere eaque hic dicta? Placeat.
                            Ducimus vero, architecto rerum culpa quisquam temporibus obcaecati, amet dolores in consequuntur saepe dolor voluptatibus reprehenderit reiciendis dolorem adipisci harum laboriosam laudantium minus aliquam atque aut unde tempora. Voluptates, at!'</p>
                 
                        <ReactMarkdown className='mt-5 d-flex justify-content-center'>
                            ![Sumit's GitHub stats](https://github-readme-stats.vercel.app/api?username=SumitNalavade&theme=radical&count_private=true)
                        </ReactMarkdown>
                    </div>
                </div>
                <div className='container-lg d-flex justify-content-center mb-4'>
                    <img src="https://ghchart.rshah.org/f24087/SumitNalavade" className='github-calendar' style={{ width: "75%" }} />
                </div>
        </div>
    );
};

export default About;

//#f24087