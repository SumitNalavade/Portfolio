"use client";

import Image from 'next/image';
import { BiLogoTypescript, BiLogoNodejs, BiLogoGoogleCloud, BiLogoTailwindCss } from 'react-icons/bi';
import { FaApple, FaAndroid, FaReact, FaJsSquare, FaNpm } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

export default function Work() {
    return (
        <div className='h-full space-y-6 sm:space-y-12'>
            <div
                className="h-[200px] md:h-[350px] w-full rounded-t-2xl bg-cover bg-center relative bg-gradient-to-r from-[#0a5cbc] to-[#07438a]"
            >
                {/* Centered text */}
                <div className="absolute inset-0 flex items-end justify-between mb-8 container mx-auto space-y-1 p-4 pt-6">
                    <div className='space-y-1'>
                        <h1 className="text-white md:text-8xl text-5xl font-bold">Notable Projects</h1>
                        <h2 className='text-white font-bold md:text-xl px-2'>Web, Mobile and everything in between</h2>
                    </div>
                </div>
            </div>

            <div className='container mx-auto text-white text-xs md:text-sm px-4 font-medium space-y-20 pb-8'>
                <div className='flex space-x-8'>
                    <div>
                        <Image
                            src="/maroon_rides_demo.png"
                            alt="Example"
                            className='max-w-[150px] md:max-w-[250px]'
                            width={300} // Aspect ratio width
                            height={9} // Aspect ratio height
                        />
                    </div>

                    <div className='mt-2 space-y-4'>
                        <div className='space-y-1 font-bold'>
                            <p className='text-3xl'>Maroon Rides</p>

                            <div className='flex gap-x-2 '>
                                <FaApple />
                                <FaAndroid />
                                <FaReact />
                                <FaJsSquare />
                                <BiLogoTypescript />
                                <BiLogoNodejs />
                                <FaNpm />
                            </div>
                        </div>

                        <p>
                            Cross platform mobile transportation app for
                            Texas A&M University Students
                        </p>
                    </div>
                </div>

                <div className='flex space-x-8'>
                    <div>
                        <Image
                            src="/ichild_demo.png"
                            className='max-w-[150px] md:max-w-[250px]'
                            alt="Example"
                            width={300} // Aspect ratio width
                            height={9} // Aspect ratio height
                        />
                    </div>

                    <div className='mt-2 space-y-4'>
                        <div className='space-y-1 font-bold'>
                            <p className='text-3xl'>intelligentCHILD</p>
                            <div className='flex gap-x-2'>
                                <FaReact />
                                <FaJsSquare />
                                <BiLogoTypescript />
                                <BiLogoTailwindCss />
                                <BiLogoGoogleCloud />
                            </div>
                        </div>

                        <p>RAG Based Semantic Search Engine for  indexing Curated Providers and Resources.</p>
                    </div>
                </div>

                <div className='flex space-x-8'>
                    <div>
                        <Image
                            src="/gradual_demo.png"
                            className='max-w-[150px] md:max-w-[250px]'
                            alt="Example"
                            width={300} // Aspect ratio width
                            height={9} // Aspect ratio height
                        />
                    </div>

                    <div className='mt-2 space-y-4'>
                        <div className='space-y-1 font-bold'>
                            <p className='text-3xl'>Gradual Grades</p>
                            <div className='flex gap-x-2'>
                                <FaApple />
                                <FaAndroid />
                                <FaReact />
                                <FaJsSquare />
                                <BiLogoNodejs />
                            </div>
                        </div>

                        <p>Cross platform mobile app  and api for Frisco ISD students to access their online gradebook</p>
                    </div>
                </div>

                <div className='flex space-x-8'>
                    <div>
                        <Image
                            src="/vs_code_readme_editor_demo.png"
                            className='max-w-[150px] md:max-w-[250px]'
                            alt="Example"
                            width={300} // Aspect ratio width
                            height={9} // Aspect ratio height
                        />
                    </div>

                    <div className='mt-2 space-y-4'>
                        <div className='space-y-1 font-bold'>
                            <p className='text-3xl'>VSCode ReadMe Editor</p>
                            <div className='flex gap-x-2'>
                                <VscVscode />
                                <FaReact />
                                <FaJsSquare />
                                <BiLogoTypescript />
                            </div>
                        </div>

                        <p>VSCode extension to create and edit ReadMe files directly from the editor.</p>
                    </div>
                </div>

                <a href='https://github.com/SumitNalavade' target='_blank' className='flex justify-center items-center'>
                    <button className='bg-gradient-to-r from-[#0a5ab9] to-[#084990] w-1/3 min-w-[300px] p-3 rounded-xl font-bold text-lg text-white'>
                        See More
                    </button>
                </a>
            </div>
        </div>
    );
}