"use client";

import Image from 'next/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import { FaReact, FaApple, FaAndroid, FaJsSquare, FaNpm } from "react-icons/fa";
import { BiLogoTypescript, BiLogoTailwindCss, BiLogoGoogleCloud, BiLogoNodejs } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='h-full space-y-6 sm:space-y-12'>
      <div
        className="md:h-[250px] h-[200px] w-full rounded-2xl bg-cover bg-center relative"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        {/* Overlay with blur */}
        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

        {/* Centered text */}
        <div className="absolute inset-0 flex flex-col justify-end mb-8 container mx-auto space-y-1 px-4">
          <h1 className="text-white md:text-8xl text-5xl font-bold">Sumit Nalavade</h1>
          <h2 className='text-white font-bold md:text-xl px-2'>Software Engineer at Texas A&M University</h2>
        </div>
      </div>

      <div className='text-white container mx-auto gap-x-4 flex font-bold text-xs sm:text-sm px-4'>
        <a href="" className='border border-1 border-white bg-white text-black px-4 sm:py-2 rounded-full hidden sm:flex'>
          <p>About Me</p>
        </a>

        <a href="https://www.linkedin.com/in/sumit-nalavade/" target='_blank' className='border border-1 border-white px-4 py-2 rounded-full flex items-center gap-x-2 hover:bg-white hover:text-black'>
          <FiLinkedin />
          <p>LinkedIn</p>
        </a>

        <a href="https://github.com/SumitNalavade" target='_blank' className='border border-1 border-white px-4 py-2 rounded-full flex items-center gap-x-2 hover:bg-white hover:text-black'>
          <FiGithub />
          <p>GitHub</p>
        </a>

        <a href="https://www.instagram.com/sumitnalavade_/" target='_blank' className='border border-1 border-white px-4 py-2 rounded-full flex items-center gap-x-2 hover:bg-white hover:text-black'>
          <FiInstagram />
          <p>Instagram</p>
        </a>
      </div>

      <div className='container mx-auto text-white text-xs sm:text-sm'>
        <p className='text-4xl font-bold pb-4 px-4'>Experience</p>

        <div className='flex items-center justify-between gap-x-8 hover:bg-[#171529] p-4 rounded-xl'>
          <Image
            src="/chase_logo.png"
            alt="Example"
            width={40} // Aspect ratio width
            height={9} // Aspect ratio height
          />

          <div className='w-full'>
            <p className='font-bold'>JP Morgan Chase</p>
          </div>

          <div className='w-full'>
            <p className='font-bold text-[#9E9E9E] text-right sm:text-left'>Software Engineering Intern</p>
          </div>

          <div className='w-full hidden sm:block'>
            <p className='font-bold text-[#9E9E9E] text-right'>Upcoming</p>
          </div>
        </div>

        <div className='flex items-center justify-between gap-x-8 p-4 rounded-xl hover:bg-[#171529]'>
          <Image
            src="/humana_logo.png"
            alt="Example"
            width={40} // Aspect ratio width
            height={9} // Aspect ratio height
          />

          <div className='w-full'>
            <p className='font-bold'>Humana</p>
          </div>

          <div className='w-full'>
            <p className='font-bold text-[#9E9E9E] text-right sm:text-left'>Software Engineering Intern</p>
          </div>

          <div className='w-full hidden sm:block'>
            <p className='font-bold text-[#9E9E9E] text-right'>May 2024 - Present</p>
          </div>
        </div>

        <div className='flex items-center justify-between gap-x-8 p-4 rounded-xl hover:bg-[#171529]'>
          <Image
            src="/tamu_hsc_logo.png"
            alt="Example"
            width={40} // Aspect ratio width
            height={9} // Aspect ratio height
          />

          <div className='w-full'>
            <p className='font-bold'>Texas A&M Health Science Center</p>
          </div>

          <div className='w-full'>
            <p className='font-bold text-[#9E9E9E] text-right sm:text-left'>Full-Stack Software Engineer</p>
          </div>

          <div className='w-full hidden sm:block'>
            <p className='font-bold text-[#9E9E9E] text-right'>June 2023 - Present</p>
          </div>
        </div>

        <div className='flex items-center justify-between gap-x-8 p-4 rounded-xl hover:bg-[#171529]'>
          <Image
            src="/tamu_coe_logo.png"
            alt="Example"
            width={40} // Aspect ratio width
            height={9} // Aspect ratio height
          />

          <div className='w-full'>
            <p className='font-bold'>Texas A&M College of Engineering</p>
          </div>

          <div className='w-full'>
            <p className='font-bold text-[#9E9E9E] text-right sm:text-left'>Undergraduate Teaching assistant</p>
          </div>

          <div className='w-full hidden sm:block'>
            <p className='font-bold text-[#9E9E9E] text-right'>June 2023 - Present</p>
          </div>
        </div>
      </div>

      <div className='container mx-auto text-white text-xs sm:text-sm px-4'>
        <div className='pb-4 space-y-2'>
          <p className='text-4xl font-bold'>Projects</p>
          <p>A collection of notable projects I&apos;ve built from web to mobile apps and everything in between.</p>
        </div>

        <Carousel responsive={responsive} centerMode={true}>
          <div className='hover:bg-[#171529] rounded-3xl p-5 space-y-2 flex flex-col justify-center items-center'>
            <div className='w-44 h-44 flex justify-center items-center' style={{ paddingRight: 15 }}>
              <Image
                src="/maroon_rides_demo.png"
                alt="Example"
                layout="responsive"
                width={40} // Aspect ratio width
                height={9} // Aspect ratio height
              />
            </div>

            <div className='space-y-1'>
              <p className='font-bold text-base text-center'>Maroon Rides</p>
              <div className='flex gap-x-2 items-center justify-center'>
                <FaApple />
                <FaAndroid />
                <FaReact />
                <FaJsSquare />
                <BiLogoTypescript />
                <BiLogoNodejs />
                <FaNpm />
              </div>
            </div>
          </div>

          <div className='hover:bg-[#171529] rounded-3xl p-5 space-y-2 flex flex-col justify-center items-center'>
            <div className='w-44 h-44 flex justify-center items-center' style={{ paddingRight: 15 }}>
              <Image
                src="/ichild_demo.png"
                alt="Example"
                layout="responsive"
                width={40} // Aspect ratio width
                height={9} // Aspect ratio height
              />
            </div>

            <div className='space-y-1'>
              <p className='font-bold text-base text-center'>intelligentCHILD</p>
              <div className='flex gap-x-2 items-center text-center justify-center'>
                <FaReact />
                <FaJsSquare />
                <BiLogoTypescript />
                <BiLogoTailwindCss />
                <BiLogoGoogleCloud />
              </div>
            </div>
          </div>

          <div className='hover:bg-[#171529] rounded-3xl p-5 space-y-2 flex flex-col justify-center items-center'>
            <div className='w-44 h-44 flex justify-center items-center' style={{ paddingRight: 15 }}>
              <Image
                src="/gradual_demo.png"
                alt="Example"
                layout="responsive"
                width={40} // Aspect ratio width
                height={9} // Aspect ratio height
              />
            </div>

            <div className='px-1 space-y-1'>
              <p className='font-bold text-base text-center'>Gradual Grades</p>
              <div className='flex gap-x-2 items-center justify-center'>
                <FaApple />
                <FaAndroid />
                <FaReact />
                <FaJsSquare />
                <BiLogoNodejs />
              </div>
            </div>
          </div>

          <div className='hover:bg-[#171529] rounded-3xl p-5 space-y-2 flex flex-col justify-center items-center'>
            <div className='w-44 h-44 flex justify-center items-center' style={{ paddingRight: 15 }}>
              <Image
                src="/vs_code_readme_editor_demo.png"
                alt="Example"
                layout="responsive"
                width={40} // Aspect ratio width
                height={9} // Aspect ratio height
              />
            </div>

            <div className='px-1 space-y-1'>
              <p className='font-bold text-base text-center'>ReadMe Editor</p>
              <div className='flex gap-x-2 items-center justify-center'>
                <VscVscode />
                <FaReact />
                <FaJsSquare />
                <BiLogoTypescript />
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      <div className='container mx-auto text-white text-xs md:text-sm px-4'>
        <div className='pb-4 space-y-4 rounded-3xl'>
          <p className='text-4xl font-bold'>About</p>
          <p>Howdy! I am a computer engineering student at Texas A&M University with a focus on computer science. With a passion for building software, I have hands on experience in modern technologies including full-stack and cross-platform development on web and mobile platforms.</p>
          <p>Currently, I am looking forward to starting my second software engineering internship at JP Morgan Chase while contiuing my software engineering co-op at Humana!</p>
        </div>
      </div>

    </div>
  );
}