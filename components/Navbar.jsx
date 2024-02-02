'use client';

import { useState, useEffect } from 'react';

import logo from '@/public/logo.webp';
import Image from 'next/image';
import { Globe } from 'lucide-react';
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setNavbar(!navbar);
  };
  return (
    <nav
      className={`w-full shadow fixed top-0 ${
        isScrolled ? 'bg-[#171717]' : 'bg-black'
      }
      ${navbar ? 'bg-white' : 'bg-[#171717]'}
      `}
    >
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <span className="sr-only">Home</span>
              <Image className="w-full" src={logo} alt="site logo" />
            </a>

            <div
              className={`md:hidden flex items-center ${
                navbar ? 'text-black' : 'text-white'
              }`}
            >
              <Globe size={20} className="mr-4 cursor-pointer" />
              <button
                className={`p-2 rounded-md outline-none 
                  
                `}
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li
                className={`${
                  navbar
                    ? 'text-black hover:text-black/75'
                    : 'text-white hover:text-white/75'
                } transition  font-medium hover:underline`}
              >
                <a href="/">Home</a>
              </li>
              <li
                className={`${
                  navbar
                    ? 'text-black hover:text-black/75'
                    : 'text-white hover:text-white/75'
                } transition  font-medium hover:underline`}
              >
                <a href="#services">Services</a>
              </li>
              <li
                className={`${
                  navbar
                    ? 'text-black hover:text-black/75'
                    : 'text-white hover:text-white/75'
                } transition  font-medium hover:underline`}
              >
                <a href="#testimonials">Testimonials</a>
              </li>
              <li
                className={`${
                  navbar
                    ? 'text-black hover:text-black/75'
                    : 'text-white hover:text-white/75'
                } transition  font-medium hover:underline`}
              >
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="sm:flex sm:gap-4 hidden items-center justify-center">
          <Globe size={24} color="#fff" className="mr-4 cursor-pointer" />
          <a
            className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow"
            href="/contact"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
