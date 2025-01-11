"use client";

import Image from 'next/image';
import { FaRegEnvelope, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
    return (
        <div className='h-full space-y-6 sm:space-y-12'>
            <div
                className="h-[350px] w-full rounded-t-2xl bg-cover bg-center relative bg-gradient-to-r from-[#ac106e] to-[#7d0b50]"
            >
                {/* Centered text */}
                <div className="inset-0 flex items-end justify-between mb-8 container mx-auto space-y-1 p-4 pt-6">
                    <div>
                        <h1 className="text-white md:text-8xl text-5xl font-bold">Sumit Nalavade</h1>
                        <h2 className='text-white font-bold md:text-xl px-2'>Texas A&M Computer Engineering &apos;26</h2>
                    </div>

                    <div>
                        <Image
                            src="/self.png"
                            alt="Example"
                            width={300} // Aspect ratio width
                            height={100} // Aspect ratio height
                        />
                    </div>
                </div>
            </div>


            <div className='text-white container mx-auto gap-x-4 space-y-4 font-bold px-4'>
                <p>Howdy! I am a computer engineering student at Texas A&M University with a focus on computer science. With a passion for building software, I have hands on experience in modern technologies including full-stack and cross-platform development on web and mobile platforms.</p>
                <p>Currently, I am looking forward to starting my second software engineering internship at JP Morgan Chase while contiuing my software engineering co-op at Humana!</p>
            </div>

            <div className='container mx-auto text-white text-xs md:text-sm px-4 font-medium'>
                <div className='pb-4 space-y-4 rounded-3xl'>
                    <p className='text-4xl font-bold'>Contact</p>
                    <div className='text-lg flex space-x-20'>
                        <div className='space-y-2'>
                            <a href="mailto:vs.nalavade2003@gmail.com" className='flex items-center space-x-2'>
                                <FaRegEnvelope />
                                <p>vs.nalavade2003@gmail.com</p>
                            </a>

                            <a href="mailto:sumit.nalavade@tamu.edu" className='flex items-center space-x-2'>
                                <FaRegEnvelope />
                                <p>sumit.nalavade@tamu.edu</p>
                            </a>
                        </div>

                        <div className='space-y-2'>
                            <a href="https://www.linkedin.com/in/sumit-nalavade/" target='_blank' className='flex items-center space-x-2'>
                                <FaLinkedin />
                                <p>LinkedIn</p>
                            </a>

                            <a href="https://www.instagram.com/sumitnalavade_/" target='_blank' className='flex items-center space-x-2'>
                                <FaInstagram />
                                <p>Instagram</p>
                            </a>

                            <a href="https://github.com/SumitNalavade" target='_blank' className='flex items-center space-x-2'>
                                <FaGithub />
                                <p>GitHub</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}