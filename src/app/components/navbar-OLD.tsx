// this is a client component
"use client";

// import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentRoute = usePathname();
  // styles for all links
  const linkStyle =
    "flex items-center pl-[15px] pr-[15px] h-full no-underline hover:text-primary duration-300 py-2";

  // styles for active and non-active links
  const activeStyle =
    linkStyle +
    " bg-gray-200 hover:bg-gray-100 border-b-4 border-primary hover:border-gray-200 text-black text-center py-2 px-4 rounded";

  const nonActiveStyle = linkStyle + " text-black";

  return (
    <>
      <header className='p-4 shadow-sm'>
        <div className='inline-block text-lg py-2'>
          <Link href='/'>
            <Image
              src='/logo.svg'
              alt='Logo'
              width='0'
              height='0'
              sizes='100vw'
              className='inline-block w-[32px] h-[32px]'
              priority={true}
            />
          </Link>
          <h1 className='inline-block ml-4'>jasonleewilson.com</h1>
        </div>
        <div className='inline-block top-auto float-right rounded-full mx-1 px-2'>
          <Link
            href='/contact'
            className={
              currentRoute === "/contact" ? activeStyle : nonActiveStyle
            }
          >
            Contact
          </Link>
        </div>
        <div className='inline-block top-auto float-right rounded-full mx-1 px-2'>
          <Link
            href='/skills'
            className={
              currentRoute === "/skills" ? activeStyle : nonActiveStyle
            }
          >
            Skills
          </Link>
        </div>
        <div className='inline-block top-auto float-right rounded-full mx-1 px-2'>
          <Link
            href='/work'
            className={currentRoute === "/work" ? activeStyle : nonActiveStyle}
          >
            Work
          </Link>
        </div>
        <div className='inline-block top-auto float-right rounded-full mx-1 px-2'>
          <Link
            href='/about'
            className={currentRoute === "/about" ? activeStyle : nonActiveStyle}
          >
            About
          </Link>
        </div>
        <div className='inline-block top-auto float-right rounded-full px-2'>
          <Link
            href='/'
            className={currentRoute === "/" ? activeStyle : nonActiveStyle}
          >
            Home
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
