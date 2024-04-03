import Link from "next/link";
import Image from "next/image";
// import styles from "../styles/Footer.module.scss";

import {
  SiLinkedin,
  SiTwitter,
  SiGithub,
  SiInstagram,
  SiPinterest,
  SiCodepen,
  SiX,
} from "react-icons/si";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='grid sm:grid-cols-1 md:grid-cols-2 item-center justify-center p-4'>
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
            <SiLinkedin className='linkedin' title='linkedin' />
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
            <SiX className='twitter' title='twitter' />
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
            href='https://www.pinterest.com/jasonleewilson/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='pinterest'
          >
            <SiPinterest className='pinterest' title='pinterest' />
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
            <SiCodepen className='codepen' title='codepen' />
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
            <SiGithub className='github' title='github' />
          </a>
        </div>
      </div>
      <div className='md:text-right text-gray-700'>
        &#169; Copyright 1999-{year} jasonleewilson.com
      </div>
    </footer>
  );
}
