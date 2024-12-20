import Image from 'next/image';
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import { FaReact, FaApple, FaAndroid, FaJsSquare, FaNpm } from "react-icons/fa";
import { BiLogoTypescript, BiLogoTailwindCss, BiLogoGoogleCloud, BiLogoNodejs } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";

export default function Home() {
  return (
    <div className='h-full space-y-12'>
      <div
        className="h-[250px] w-full rounded-2xl bg-cover bg-center relative"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        {/* Overlay with blur */}
        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

        {/* Centered text */}
        <div className="absolute inset-0 flex flex-col justify-end mb-8 px-20 space-y-1">
          <h1 className="text-white text-8xl font-bold">Sumit Nalavade</h1>
          <h2 className='text-white font-bold text-xl px-2'>Software Engineer at Texas A&M University</h2>
        </div>
      </div>

      <div className='text-white px-20 gap-x-4 flex font-bold text-sm'>
        <a href="" className='border border-1 border-white bg-white text-black px-4 py-2 rounded-full flex'>
          <p>About Me</p>
        </a>

        <a href="" className='border border-1 border-white px-4 py-2 rounded-full flex items-center gap-x-2 hover:bg-white hover:text-black'>
          <FiLinkedin />
          <p>LinkedIn</p>
        </a>

        <a href="" className='border border-1 border-white px-4 py-2 rounded-full flex items-center gap-x-2 hover:bg-white hover:text-black'>
          <FiGithub />
          <p>GitHub</p>
        </a>

        <a href="" className='border border-1 border-white px-4 py-2 rounded-full flex items-center gap-x-2 hover:bg-white hover:text-black'>
          <FiInstagram />
          <p>Instagram</p>
        </a>
      </div>

      <div className='px-32 text-white space-y-4 text-sm'>
        <p className='text-4xl font-bold pb-4'>Experience</p>

        <div className='flex items-center justify-between gap-x-8'>
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
            <p className='font-bold text-[#9E9E9E]'>Software Engineering Intern</p>
          </div>

          <div className='w-full'>
            <p className='font-bold text-[#9E9E9E] text-right'>Upcoming</p>
          </div>
        </div>

        <div className='flex items-center justify-between gap-x-8'>
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
            <p className='font-bold text-[#9E9E9E]'>Software Engineering Intern</p>
          </div>

          <div className='w-full'>
            <p className='font-bold text-[#9E9E9E] text-right'>May 2024 - Present</p>
          </div>
        </div>

        <div className='flex items-center justify-between gap-x-8'>
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
            <p className='font-bold text-[#9E9E9E]'>Full-Stack Software Engineer</p>
          </div>

          <div className='w-full'>
            <p className='font-bold text-[#9E9E9E] text-right'>June 2023 - Present</p>
          </div>
        </div>

        <div className='flex items-center justify-between gap-x-8'>
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
            <p className='font-bold text-[#9E9E9E]'>Undergraduate Teaching assistant</p>
          </div>

          <div className='w-full'>
            <p className='font-bold text-[#9E9E9E] text-right'>June 2023 - Present</p>
          </div>
        </div>
      </div>

      <div className='px-32 text-white space-y-4 text-sm'>
        <div className='pb-4 space-y-2'>
          <p className='text-4xl font-bold'>Projects</p>
          <p>A collection of notable projects I've built from web to mobile apps and everything in between.</p>
        </div>

        <div className='flex gap-x-6'>
          <div className='bg-[#292A2A] rounded-3xl p-5 space-y-2'>
            <div className='w-44 h-44'>
              <Image
                src="/maroon_rides_demo.png"
                alt="Example"
                layout="responsive"
                width={40} // Aspect ratio width
                height={9} // Aspect ratio height
              />
            </div>

            <div className='px-1 space-y-1'>
              <p className='font-bold text-base'>Maroon Rides</p>
              <div className='flex gap-x-2 items-center'>
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

          <div className='bg-[#292A2A] rounded-3xl p-5 space-y-2'>
            <div className='w-44 h-44 flex justify-center items-center'>
              <Image
                src="/ichild_demo.png"
                alt="Example"
                layout="responsive"
                width={40} // Aspect ratio width
                height={9} // Aspect ratio height
              />
            </div>

            <div className='px-1 space-y-1'>
              <p className='font-bold text-base'>intelligentCHILD</p>
              <div className='flex gap-x-2 items-center'>
                <FaReact />
                <FaJsSquare />
                <BiLogoTypescript />
                <BiLogoTailwindCss />
                <BiLogoGoogleCloud />
              </div>
            </div>
          </div>

          <div className='bg-[#292A2A] rounded-3xl p-5 space-y-2'>
            <div className='w-44 h-44 flex justify-center items-center'>
              <Image
                src="/gradual_demo.png"
                alt="Example"
                layout="responsive"
                width={40} // Aspect ratio width
                height={9} // Aspect ratio height
              />
            </div>

            <div className='px-1 space-y-1'>
              <p className='font-bold text-base'>Gradual Grades</p>
              <div className='flex gap-x-2 items-center'>
                <FaApple />
                <FaAndroid />
                <FaReact />
                <FaJsSquare />
                <BiLogoNodejs />
              </div>
            </div>
          </div>

          <div className='bg-[#292A2A] rounded-3xl p-5 space-y-2'>
            <div className='w-44 h-44 flex justify-center items-center'>
              <Image
                src="/vs_code_readme_editor_demo.png"
                alt="Example"
                layout="responsive"
                width={40} // Aspect ratio width
                height={9} // Aspect ratio height
              />
            </div>

            <div className='px-1 space-y-1'>
              <p className='font-bold text-base'>VS Code ReadMe Editor</p>
              <div className='flex gap-x-2 items-center'>
                <VscVscode />
                <FaReact />
                <FaJsSquare />
                <BiLogoTypescript />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='px-20 text-white space-y-4 py-10'>
        <div className='pb-4 space-y-4 px-12 py-6 bg-[#292A2A] rounded-3xl'>
          <p className='text-4xl font-bold'>About</p>
          <p>Howdy! I am a computer engineering student at Texas A&M University with a focus on computer science. With a passion for building software, I have hands on experience in modern technologies including full-stack and cross-platform development on web and mobile platforms.</p>
          <p>Currently, I am looking forward to starting my second software engineering internship at JP Morgan Chase while contiuing my software engineering co-op at Humana!</p>
        </div>
      </div>

    </div>
  );
}