// import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Nav.module.scss'


export default function Nav() {
  return (
    <div className={styles.navigation}>
      <nav className={styles.navigation_bar}>
      <Link href="/">
        <a className='logo'><Image src="/logo.svg" alt="Logo" width={32} height={32} /></a>
      </Link>
          <ul>
              <li><Link href="/"><a>Home</a></Link></li>
              <li><Link href="/about/"><a>About</a></Link></li>
              <li><Link href="/skills/"><a>Skills</a></Link></li>
              <li><Link href="/contact/"><a>Contact</a></Link></li>
          </ul>
      </nav>
    </div>
  )
}