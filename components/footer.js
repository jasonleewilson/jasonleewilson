import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Footer.module.scss'

export default function Footer() {
  return (
        <footer className={styles.footer}>
            <a
                href="https://robotici.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <span className={styles.logo}>
                <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAABaCAYAAAC2Xso7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQVJREFUeNrs3LENgCAURVEwbGBryf4TWdIyg05gQqE/KufUNr7khkJiSgAAAAAAAAAAH5NHHupbPUx1bW17nnXDmd89csPFTPB+QgWhAkIFoQJCBYQKQgVCFRPEGPmoDU5UECogVBAqIFRAqCBUQKjAGBcegsz8hwecqCBUQKiAUEGogFABoYJQAaGCUAGhAkIFoQJCBYQKQgWECkI1AQgVECoIFRAqIFQQKiBUQKggVECoIFRAqIBQQaiAUAGhglCBhxUTxFjbnq2AExWECggVECoIFRAqIFQQKnAPFx6C9K0ef3wvFzmcqIBQQaiAUEGogFABoYJQAQAAAAAAAAAABpwCDAAVvhhAUFjukAAAAABJRU5ErkJggg==" alt="Logo" width={46} height={16} />
                </span>
            </a>
        </footer>
  )
}