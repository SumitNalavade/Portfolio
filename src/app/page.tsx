import Image from 'next/image';
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";

export default function Home() {
  return (
    <div className='h-full space-y-12'>
      <div
        className="h-[300px] w-full rounded-2xl bg-cover bg-center relative"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        {/* Overlay with blur */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl"></div>

        {/* Centered text */}
        <div className="absolute inset-0 flex flex-col justify-end mb-12 px-12 space-y-1">
          <h1 className="text-white text-8xl font-bold">Sumit Nalavade</h1>
          <h2 className='text-white font-bold text-xl px-2'>Software Engineer at Texas A&M University</h2>
        </div>
      </div>

      <div className='text-white px-14 gap-x-4 flex font-bold text-sm'>
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
    </div>
  );
}