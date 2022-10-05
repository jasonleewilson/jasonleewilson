import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Footer() {
  return (
        <footer className={styles.footer}>
            <a
                href="https://jasonleewilson.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <span className={styles.logo}>
                {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
                <Image src="/logo.svg" alt="Logo" width={16} height={16} />
                </span>
            </a>
        </footer>
  )
}