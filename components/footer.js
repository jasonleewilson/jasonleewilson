import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.scss";

import {
  SiLinkedin,
  SiTwitter,
  SiGithub,
  SiInstagram,
  SiPinterest,
  SiCodepen,
} from "react-icons/si";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* <a href='https://robotici.com' target='_blank' rel='noopener noreferrer'>
        Powered by{" "}
        <span className={styles.logo}>
          <Image
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAABaCAYAAAC2Xso7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQVJREFUeNrs3LENgCAURVEwbGBryf4TWdIyg05gQqE/KufUNr7khkJiSgAAAAAAAAAAH5NHHupbPUx1bW17nnXDmd89csPFTPB+QgWhAkIFoQJCBYQKQgVCFRPEGPmoDU5UECogVBAqIFRAqCBUQKjAGBcegsz8hwecqCBUQKiAUEGogFABoYJQAaGCUAGhAkIFoQJCBYQKQgWECkI1AQgVECoIFRAqIFQQKiBUQKggVECoIFRAqIBQQaiAUAGhglCBhxUTxFjbnq2AExWECggVECoIFRAqIFQQKnAPFx6C9K0ef3wvFzmcqIBQQaiAUEGogFABoYJQAQAAAAAAAAAABpwCDAAVvhhAUFjukAAAAABJRU5ErkJggg=='
            alt='Logo'
            width={46}
            height={16}
          />
        </span>
      </a> */}
      <span className='text-right icons'>
        <a
          href='https://www.linkedin.com/in/jasonleewilson/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SiLinkedin className='linkedin' />
        </a>
        <a
          href='https://twitter.com/jasonleewilson'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SiTwitter className='twitter' />
        </a>
        <a
          href='https://github.com/jasonleewilson'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SiGithub className='github' />
        </a>
        {/* <a
          href='https://instagram.com/jasonleewilson_'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SiInstagram className='instagram' />
        </a> */}
        <a
          href='https://www.pinterest.com/jasonleewilson/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SiPinterest className='pinterest' />
        </a>
        <a
          href='https://codepen.io/jasonleewilson'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SiCodepen className='codepen' />
        </a>
      </span>
    </footer>
  );
}
