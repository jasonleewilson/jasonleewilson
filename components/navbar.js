// import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav className={styles.links}>
      <Link href="/">
        <a className='logo'><Image src="/logo.svg" alt="Logo" width={32} height={32} /></a>
      </Link>
          <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about/">About</Link></li>
              <li><Link href="/skills/">Skills</Link></li>
              <li><Link href="/contact/">Contact</Link></li>
          </ul>
      </nav>
    </div>
  )
};

export default Navbar;