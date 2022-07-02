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
                        <Image src="https://lh3.googleusercontent.com/uzOvNGZgLJ1enbwmLKX2lV4Fl9D4AjNXEtoVBbsnLWRrvw_gywpKDiWH7bYyqte9eoSR0UIfpk1lUAvg-O55DHk_h6Oe8WqRj67ayyExWRP-OGpozXCofpsabMbtMcOZO6ChFxCs7rOT2FCnF28e6zj9hjDF9F_17aTgUv3yWjJOAKyp7n6TtJxUYQzKR5H9Rr_qIMrli000mJeagsDQXmgM-bcKMLqZuvenFCTstYYwk8M9yuBfbEtTBQEjJwl5Ft_8dvD7o0EiKPtkasU_MLkMazVtUn0P3JDwS3yDctMsPO9hi6nFQz0plL6w-OfXsPUZuxlbV5RbbDlta5VxAZeHyH4L37SsqPz7zz49QqXl_Hakibt58F3LStKZ8CVBFnWfVKaxdPMb4pFCcYi6KYJeZpoauYBuctTr839O1Du_aPpUO5ULV7EADZEMNc1fI_BydzKDVNtteiL3AY74tRuP7L7hsnHWN_QHXz5EmzSBQun3n-rZcMZqOQCbACul0b9g8uY0D0-ySwzv0eF1zeC3Xxt1Jon_t7bIdxl5xb5QV8DRPIDvIZccNe3ZSYQniR7KUO1C32uWDuR4yhIe4L04afIM-TpaQ5JCaWyqqc8sGHmVVUCwhfi1pNz03ZyzScH_crf-9wzXj0B8_CIAr6oHRwm6gDwCs4KHokFZCKiTqFLqgRh-YA1Ba3FN_wWk6acC67z-1fXESnZruenPcO5HY-NwWPTLAtf0YxOJ9DwM5jzXbKnSON_6wvL8p-ygjwx2qcFLuVz8n0fJnO1fz9Y65OPMysxAC0iL6m4Y4vai8miMIIrdD1cjwZeqs5PI1FFH3NMzYySYoOCIUt-qUIdXQwiDCmTw3D4DfH2YXWjTCch3g2T_eARlK74KvlbBXeI=w741-h926-no?authuser=0" alt='Image of myself' height={50} width={50} layout="responsive" className={`border border-8 rounded-circle border-tertiary`} />
                    </div>

                    <div className='container-lg d-flex mx-md-3 mx-lg-5 flex-column text-main'> 
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
                        <ReactMarkdown className='mt-5 d-flex justify-content-center justify-content-md-start'>
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