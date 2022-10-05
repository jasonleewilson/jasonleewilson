import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Footer() {
  return (
        <footer className={styles.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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