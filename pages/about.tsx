import React from 'react';
import type { NextPage } from 'next';
import Image from "next/image";
import ReactMarkdown from 'react-markdown';

import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';

const About: NextPage = () => {
    return (
        <Layout>
            <div className={`container-lg d-flex align-items-center my-5 mobileStacked`}>
                    <div className='mx-md-3 mx-lg-5 w-75'>
                        <Image src="/Images/sumit-rounded.png" alt='Image of myself' height={50} width={50} layout="responsive" className={`border border-8 rounded-circle border-tertiary`} />
                    </div>

                    <div className='container d-flex justify-content-center mx-md-3 mx-lg-5 flex-column text-main'> 
                        <SectionHeader title="About Me" />
                        <p>
                            Hey there, <br />
                            My name is Sumit.
                        </p>
                        <p>
                            I am an incoming freshman at Texas A&M University (Gig 'Em)! as well as a full stack developer.
                        </p>
                        <p>
                            My primary area of experience working with the MERN stack including Next.js and Typescript. <br />
                            In addition, I have also created and deployed products with React Native for both Android and iOS.
                        </p>
                        <p>
                            Some of the technologies I'm looking forward to using include Svlete/Svelete Kit, SQL, Spring and more.
                        </p>
                        <p>
                            Feel free to take a look at some of my projects on this site and on my GitHub. <br />
                            If you want to contact me, don't be afraid to reach out on my Instagram or Email 😉
                        </p>
                        <ReactMarkdown className='mt-5 d-flex justify-content-center'>
                            ![Sumit's GitHub stats](https://github-readme-stats.vercel.app/api?username=SumitNalavade&theme=radical&count_private=true)
                        </ReactMarkdown>
                    </div>
                </div>
                <div className='container-lg d-flex justify-content-center mb-4'>
                    <img src="https://ghchart.rshah.org/f24087/SumitNalavade" className='github-calendar' alt="GitHub stats" style={{ width: "75%" }} />
                </div>
        </Layout>
    );
};

export default About;

//#f24087