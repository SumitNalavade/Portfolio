import React, { useState }  from 'react';
import type { NextPage } from 'next';
import Image from "next/image";

import Navbar from '../components/Navbar';
import SectionWithDescription from '../components/SectionWithDescription';
import DisplayFeaturedProject from '../components/FeaturedProject';

import { FeaturedProject } from '../utils/Project';

const About: NextPage = () => {
    const [featuredProject, setFeaturedProject] = useState<FeaturedProject>(new FeaturedProject("YelpCamp", "2022 YelpCamp project from The Web Developer Bootcamp", "https://user-images.githubusercontent.com/48499839/174972530-0c992a40-138b-473d-ae9a-bd7f2a02872a.png", "https://github.com/SumitNalavade/YelpCamp", "Yelp-like full-stack web application from the 2022 Web Developer Bootcamp"))

    return (
        <div className={"h-100"}>
            <Navbar />              
                <div className={`container-lg d-flex align-items-center my-5 mobileStacked`}>
                    <div className='mx-md-3 mx-lg-5 w-75'>
                        <Image src="/Images/sumit-rounded.png" layout='responsive' width={5} height={5} className={`border border-8 rounded-circle border-highlight`} />
                    </div>

                    <SectionWithDescription title='About Me' content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error id illo ducimus unde rerum, quis incidunt sed, numquam excepturi sunt reiciendis. Officia, placeat amet! Ab quis veniam nemo illum nihil?
                            Perferendis earum explicabo magnam, corporis temporibus et distinctio dolorum culpa ea officia inventore quia quo? Vel repellendus cupiditate nam ab voluptas facilis, tempore earum! Atque facere eaque hic dicta? Placeat.
                            Ducimus vero, architecto rerum culpa quisquam temporibus obcaecati, amet dolores in consequuntur saepe dolor voluptatibus reprehenderit reiciendis dolorem adipisci harum laboriosam laudantium minus aliquam atque aut unde tempora. Voluptates, at!'
                    />
                </div>

                <div className={`container-lg d-flex align-items-center my-10 mobileStacked`}>
                    <DisplayFeaturedProject proj={featuredProject} />
                </div>
        </div>
    );
};

export default About;