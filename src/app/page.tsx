import Image from 'next/image';
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";

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

        <a href="" className='border border-1 border-white px-4 py-2 rounded-full flex items-center gap-x-2'>
          <FiLinkedin />
          <p>LinkedIn</p>
        </a>

        <a href="" className='border border-1 border-white px-4 py-2 rounded-full flex items-center gap-x-2'>
          <FiGithub />
          <p>GitHub</p>
        </a>

        <a href="" className='border border-1 border-white px-4 py-2 rounded-full flex items-center gap-x-2'>
          <FiInstagram />
          <p>Instagram</p>
        </a>
      </div>

      <div className='px-32 text-white space-y-4'>
        <p className='text-4xl font-bold pb-4'>Experience</p>

        <div className='flex items-center justify-between gap-x-8'>
          <Image
            src="/chase_logo.png"
            alt="Example"
            width={50} // Aspect ratio width
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
            width={50} // Aspect ratio width
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
            width={50} // Aspect ratio width
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
            width={50} // Aspect ratio width
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

      <div className='px-32 text-white space-y-4'>
        <div className='pb-4 space-y-2'>
          <p className='text-4xl font-bold'>Projects</p>
          <p>A collection of notable projects I've built from web to mobile apps and everything in between.</p>
        </div>

        <div className='flex gap-x-6'>
          <div className='bg-[#292A2A] rounded-3xl p-5 space-y-2'>
            <div className='w-44 h-44'>
              <div className='bg-[#D9D9D9] w-full h-full rounded-2xl'>

              </div>
            </div>

            <div className='px-1'>
              <p className='font-bold'>Project Header</p>
              <p>Subtitle</p>
            </div>
          </div>

          <div className='rounded-3xl p-5 space-y-2'>
            <div className='w-44 h-44'>
              <div className='bg-[#D9D9D9] w-full h-full rounded-2xl'>

              </div>
            </div>

            <div className='px-1'>
              <p className='font-bold'>Project Header</p>
              <p>Subtitle</p>
            </div>
          </div>

          <div className='rounded-3xl p-5 space-y-2'>
            <div className='w-44 h-44'>
              <div className='bg-[#D9D9D9] w-full h-full rounded-2xl'>

              </div>
            </div>

            <div className='px-1'>
              <p className='font-bold'>Project Header</p>
              <p>Subtitle</p>
            </div>
          </div>

          <div className='rounded-3xl p-5 space-y-2'>
            <div className='w-44 h-44'>
              <div className='bg-[#D9D9D9] w-full h-full rounded-2xl'>

              </div>
            </div>

            <div className='px-1'>
              <p className='font-bold'>Project Header</p>
              <p>Subtitle</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}