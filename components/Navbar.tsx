import React, { useState } from "react";
import Link from "next/link";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 md:my-10 my-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <AiOutlineClose className="h-6 w-6" color="darkBlue" />
                ) : (
                  <AiOutlineMenu className="h-6 w-6" color="darkBlue" />
                )}
              </button>
            </div>
          </div>
          <div className="hidden md:flex w-screen text-stroke font-semibold text-lg justify-between">
            <div>
              <Link href="/" className="px-3 py-2 rounded-md hover:bg-blue-50">
                Home
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 rounded-md hover:bg-blue-50"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="px-3 py-2 rounded-md hover:bg-blue-50"
              >
                Projects
              </Link>
            </div>

            <div className="flex">
              <a
                href="https://github.com/SumitNalavade"
                target="_blank"
                className="font-medium py-2 px-4 rounded-lg hover:bg-blue-50 flex"
              >
                <AiOutlineGithub className="h-6 w-6 mr-2" />
              </a>
              <a
                href="https://www.linkedin.com/in/sumit-nalavade/"
                target="_blank"
                className="font-medium py-2 px-4 rounded-lg hover:bg-blue-50 flex"
              >
                <AiFillLinkedin className="h-6 w-6 mr-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pb-3 space-y-1 sm:px-3 text-stroke font-semibold text-lg text-center">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="block px-3 py-2 rounded-md"
            >
              Projects
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
