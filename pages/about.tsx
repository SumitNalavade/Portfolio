import React, { useState }  from 'react';
import type { NextPage } from 'next';
import Image from "next/image";
import ReactMarkdown from 'react-markdown';

import Navbar from '../components/Navbar';
import SectionWithDescription from '../components/SectionWithDescription';
import { FeaturedProject } from '../components/Projects';

import { IFeaturedProject, IProject } from '../utils/Project';

interface Props {
    pinnedProjects: IProject[]
}

const About: NextPage<Props> = ({ pinnedProjects }) => {
    const [featuredProject, setFeaturedProject] = useState<IFeaturedProject>({
        ...pinnedProjects[0],
        longDescription: pinnedProjects[0].description
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