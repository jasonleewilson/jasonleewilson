"use client";
import Link from "next/link";
// import Image from "next/image";

import { usePathname } from "next/navigation";
import { disableNavWithFooter } from "../utils/disableNavWithFooter";

import dynamic from "next/dynamic";
const Clock = dynamic(() => import("../components/Clock"), { ssr: false });

import {
  SiLinkedin,
  SiGithub,
  SiInstagram,
  SiPinterest,
  SiCodepen,
  SiX,
  SiDiscord,
} from "react-icons/si";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const path = usePathname();

  return (
    <footer>
      {!disableNavWithFooter.includes(path) && (
        <div
          id='footer-mobile-menu'
          className='sm:block lg:hidden w-full text-center'
        >
          <ul className='mt-4'>
            <li className='py-4 w-full hover:bg-gray-200'>
              <Link href='/'>
                <p>Home</p>
              </Link>
            </li>
            <li className='py-4 w-full hover:bg-gray-200'>
              <Link href='/about'>
                <p>About</p>
              </Link>
            </li>
            <li className='py-4 w-full hover:bg-gray-200'>
              <Link href='/work'>
                <p>Work</p>
              </Link>
            </li>

            <li className='py-4 w-full hover:bg-gray-200'>
              <Link href='/skills'>
                <p>Skills</p>
              </Link>
            </li>

            <li className='py-4 w-full hover:bg-gray-200'>
              <Link href='/faq'>
                <p>FAQ</p>
              </Link>
            </li>

            <li className='py-4 w-full hover:bg-gray-200'>
              <Link href='/contact'>
                <p>Contact</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
      <div className='grid sm:grid-cols-1 md:grid-cols-2 item-center justify-center p-4 bg-gray-100 dark:bg-black text-center'>
        <div className='flex flex-row justify-evenly sm:justify-center md:justify-start icons mb-4 md:mb-0'>
          <div className='has-tooltip'>
            <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
              Linkedin
            </span>
            <a
              href='https://www.linkedin.com/in/jasonleewilson/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='linkedin'
            >
              <SiLinkedin className='linkedin' title='linkedin' tabIndex={0} />
            </a>
          </div>
          <div className='has-tooltip'>
            <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
              X
            </span>
            <a
              href='https://twitter.com/jasonleewilson'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='twitter'
            >
              <SiX title='twitter' tabIndex={0} />
            </a>
          </div>

          {/* <a
          href='https://instagram.com/jasonleewilson_'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='instagram'
        >
          <SiInstagram className='instagram' />
        </a> */}
          <div className='has-tooltip'>
            <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
              Pinterest
            </span>
            <a
              href='https://www.pinterest.com/jasonleewilson/_saved/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='pinterest'
            >
              <SiPinterest
                className='pinterest'
                title='pinterest'
                tabIndex={0}
              />
            </a>
          </div>

          <div className='has-tooltip'>
            <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
              Codepen
            </span>
            <a
              href='https://codepen.io/jasonleewilson'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='codepen'
            >
              <SiCodepen title='codepen' tabIndex={0} />
            </a>
          </div>
          <div className='has-tooltip'>
            <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
              Github
            </span>
            <a
              href='https://github.com/jasonleewilson'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='github'
            >
              <SiGithub title='github' tabIndex={0} />
            </a>
          </div>
          {/* <div className='has-tooltip'>
            <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
              Discord
            </span>
            <a
              href='https://discord.gg/ZcwJSDFDUs'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='discord'
            >
              <SiDiscord title='discord' tabIndex={0} />
            </a>
          </div> */}

          <Clock />
        </div>
        <div className='md:text-right text-gray-700 dark:text-white'>
          <Link href='/privacy' className='uppercase'>
            Privacy Policy
          </Link>
          &nbsp;&nbsp; &#169; COPYRIGHT&nbsp;1999-
          {year}.
        </div>
      </div>
      {/* <div className='h-[150x] text-[16em] text-gray-200 font-extrabold text-center'>
        JASONLEEWILSON
      </div> */}
    </footer>
  );
}
