/** @format */

import React from "react";
import Link from "next/link";
import { FaTwitter, FaGithub, FaYoutube, FaLaptop } from "react-icons/fa";
export default function Navbar() {
  return (
    <nav className='bg-slate-500 p-4 sticky top-0 drop-shadow-xl z-10'>
      <div className='flex justify-between prose prose-xl mx-auto flex-col sm:flex-row'>
        <Link href='/' className='text-white/90 no-underline hover:text-white'>
          Manaboy <span><FaLaptop /></span>
        </Link>

        <div className='flex'>
          <Link
            href='https://www.youtube.com'
            className='text-white/90 hover:text-white'>
            <FaYoutube />
          </Link>

          <Link
            href='https://www.github.com'
            className='text-white/90 hover:text-white'>
            <FaGithub />
          </Link>

          
          <Link
            href='https://www.twitter.com'
            className='text-white/90 hover:text-white'>
            <FaTwitter />
          </Link>
        </div>
      </div>
    </nav>
  );
}
