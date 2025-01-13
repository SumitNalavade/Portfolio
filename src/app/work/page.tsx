"use client";

import Image from 'next/image';

export default function Work() {
    return (
        <div className='h-full space-y-12'>
            <div
                className="h-[200px] sm:h-[350px] w-full rounded-t-2xl bg-cover bg-center relative bg-gradient-to-r from-[#009073] to-[#00b18d]"
            >
                {/* Centered text */}
                <div className="absolute inset-0 flex items-end justify-between mb-8 container mx-auto space-y-1 p-4 pt-6">
                    <div className='space-y-1'>
                        <h1 className="text-white md:text-8xl text-5xl font-bold">Work Experience</h1>
                        <h2 className='text-white font-bold md:text-xl px-2'>Software Engineering Intern @ JPMorgan Chase</h2>
                    </div>
                </div>
            </div>

            <div className='container mx-auto text-white text-xs md:text-sm px-4 font-medium space-y-20 pb-8'>
                <div className='flex space-x-8'>
                    <div>
                        <Image
                            src="/chase_logo.png"
                            alt="Example"
                            width={100} // Aspect ratio width
                            height={9} // Aspect ratio height
                        />
                    </div>

                    <div className='mt-2 space-y-4'>
                        <div className='space-y-1 font-bold'>
                            <p className='text-3xl'>JPMorgan Chase</p>
                            <p>Software Engineering Intern</p>
                        </div>
                    </div>
                </div>

                <div className='flex space-x-8'>
                    <div>
                        <Image
                            src="/humana_logo.png"
                            className='max-w-[100px]'
                            alt="Example"
                            width={100} // Aspect ratio width
                            height={9} // Aspect ratio height
                        />
                    </div>

                    <div className='mt-2 space-y-4'>
                        <div className='space-y-1 font-bold'>
                            <p className='text-3xl'>Humana</p>
                            <p>Software Engineering Intern</p>
                        </div>

                        <p>Developed a RAG based Generative AI chat application using React, Java SpringBoot, PostgreSQL (PG Vector) and LangChain <br /> to answer customer questions from over 2000 Coverage PDFs and winning first place in the company-wide hackathon.</p>

                        <p>Implemented custom React components in TypeScript for Humana’s medicare enrollments platform as part of an Agile scrum team, <br /> writing clean and maintainable code, conducting code reviews and participating in Agile ceremonies.</p>
                    </div>
                </div>

                <div className='flex space-x-8'>
                    <div>
                        <Image
                            src="/tamu_hsc_logo.png"
                            className='max-w-[100px]'
                            alt="Example"
                            width={100} // Aspect ratio width
                            height={9} // Aspect ratio height
                        />
                    </div>

                    <div className='mt-2 space-y-4'>
                        <div className='space-y-1 font-bold'>
                            <p className='text-3xl'>Texas A&M University Health Science Center</p>
                            <p>Full-Stack Software Engineer</p>
                        </div>

                        <p>Contributed to OliviaHealth, a grant-funded project led by Texas A&M Health Science Center, enhancing maternal and familial care.</p>

                        <p>Developed an intuitive user interface using React, TypeScript, JWT (JSON Web Tokens), <br /> Google APIs and supporting client side libraries.</p>

                        <p>Built scalable backend services with Python, Flask and SQLAlchemy to securely handle server-side session based authentication, <br /> database querying and natural language processing.</p>

                        <p>Integrated cloud services such as AWS EC2 for scalable infrastructure, AWS S3 for storage, and AWS Lambda for serverless computing.</p>

                        <p>Integrated an SBERT machine learning model into an API to turn natural language prompts from users into PostgreSQL queries.</p>
                    </div>
                </div>

                <div className='flex space-x-8'>
                    <div>
                        <Image
                            src="/tamu_coe_logo.png"
                            alt="Example"
                            className='max-w-[100px]'
                            width={100} // Aspect ratio width
                            height={9} // Aspect ratio height
                        />
                    </div>

                    <div className='mt-2 space-y-4'>
                        <div className='space-y-1 font-bold'>
                            <p className='text-3xl'>Texas A&M College of Engineering</p>
                            <p>Undergraduate Teaching Assistant</p>
                        </div>

                        <p>Served as a peer tutor and technical lead for CSCE 482 (Senior Capstone Design), assisting students in building <br /> and deploying a full-stack web application to complete their degree requirements.</p>

                        <p>Served as a peer tutor for the ENGR 102 (Introduction to the design and development of computer applications for engineers in Python) course.</p>
                    </div>
                </div>

                <div className='flex space-x-8'>
                    <div>
                        <Image
                            src="/crypt_logo.png"
                            className='max-w-[100px]'
                            alt="Example"
                            width={100} // Aspect ratio width
                            height={9} // Aspect ratio height
                        />
                    </div>

                    <div className='mt-2 space-y-4'>
                        <div className='space-y-1 font-bold'>
                            <p className='text-3xl'>Crypt Cloud</p>
                            <p>Front-End Developer</p>
                        </div>

                        <p>Architected and developed Crypt Cloud’s front-end web application that ensures the secure encryption, <br /> storage, and retrieval of user data on the IPFS network, employing the SHA-256 and AES block cipher algorithms in a Next.js application.</p>

                        <p>Served as a peer tutor for the ENGR 102 (Introduction to the design and development of computer applications for engineers in Python) course.</p>
                    </div>
                </div>

                <a href='https://www.linkedin.com/in/sumit-nalavade/' target='_blank' className='flex justify-center items-center'>
                    <button className='bg-gradient-to-r from-[#009577] to-[#00CAA2] w-1/3 min-w-[300px] p-3 rounded-xl font-bold text-lg text-white'>
                        See More
                    </button>
                </a>
            </div>
        </div>
    );
}