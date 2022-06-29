import React, { useState }  from 'react';
import type { NextPage } from 'next';
import Image from "next/image";
import ReactMarkdown from 'react-markdown';

import Navbar from '../components/Navbar';
import SectionWithDescription from '../components/SectionWithDescription';
import { FeaturedProject } from '../components/Projects';

import { IFeaturedProject } from '../utils/Project';

const About: NextPage = () => {
    const [featuredProject, setFeaturedProject] = useState<IFeaturedProject>({
        title: "YelpCamp",
        description: "2022 YelpCamp project from The Web Developer Bootcamp",
        imagePath: "https://user-images.githubusercontent.com/48499839/174972530-0c992a40-138b-473d-ae9a-bd7f2a02872a.png",
        url: "https://github.com/SumitNalavade/YelpCamp",
        longDescription: "Yelp-like full-stack web application from the 2022 Web Developer Bootcamp",
        language: "JavaScript"
    });

    return (
        <div className={"h-100"}>
            <Navbar />              
                <div className={`container-lg d-flex align-items-center my-5 mobileStacked`}>
                    <div className='mx-md-3 mx-lg-5 w-75'>
                        <Image src="/Images/sumit-rounded.png" layout='responsive' width={5} height={5} className={`border border-8 rounded-circle border-tertiary`} />
                    </div>

                    <SectionWithDescription title='About Me' content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error id illo ducimus unde rerum, quis incidunt sed, numquam excepturi sunt reiciendis. Officia, placeat amet! Ab quis veniam nemo illum nihil?
                            Perferendis earum explicabo magnam, corporis temporibus et distinctio dolorum culpa ea officia inventore quia quo? Vel repellendus cupiditate nam ab voluptas facilis, tempore earum! Atque facere eaque hic dicta? Placeat.
                            Ducimus vero, architecto rerum culpa quisquam temporibus obcaecati, amet dolores in consequuntur saepe dolor voluptatibus reprehenderit reiciendis dolorem adipisci harum laboriosam laudantium minus aliquam atque aut unde tempora. Voluptates, at!'>
                    
                        <ReactMarkdown className='mt-5'>
                            ![Sumit's GitHub stats](https://github-readme-stats.vercel.app/api?username=SumitNalavade&theme=radical&count_private=true)
                        </ReactMarkdown>
                    </SectionWithDescription>
                </div>
                
                <div className={`container-lg d-flex align-items-center my-10 mobileStacked`}>
                    <FeaturedProject proj={featuredProject} />
                </div>
        </div>
    );
};

export default About;