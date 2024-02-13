import Head from "next/head";
// import Image from 'next/image'
import Link from "next/link";
// import Image from 'next/image'
// import Navbar from "/components/navbar";
// import Footer from "/components/footer";
import styles from "../styles/Home.module.scss";
// import styles from '../styles/Nav.module.scss';

export default function Home() {
  return (
    <div className='container-fluid bg-image'>
      <Head>
        <title>
          jasonleewilson.com &#8211; Building the web pixel by pixel
        </title>
        <meta
          name='description'
          content='I offer a complete solution ranging from website creation, design and maintenance for internet-based clients worldwide. By Jason Wilson. Founder. Jason Lee Wilson'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta name="google-site-verification" content="Av07LDlnBz4lQ-wTmL6oB2AXeux75nX8UmLCgw3l76Y" />
      </Head>

      <main className="container">
        <div className='row vh-100'>
          <div className='col-sm-12 col-md-6 align-self-center'>
            <h1 className={styles.title}>
              “The word&apos;s “<s>CAN&apos;T</s>” or “<s>TRY</s>” are NOT in my
              vocabulary.”
            </h1>
            <p className='text-right'>by: Jason Lee Wilson</p>
          </div>
          <div className='col-sm-12 col-md-6 align-self-center'>
            <p>
              Jason Lee Wilson is a Front-End Developer who can not only design
              and develop technical solutions using the most up to-date
              frameworks and languages, but also can lead additional development
              resources based on project needs. I am an innovator who is
              up-to-date on the latest technology and can push it in new
              directions. Building the web pixel by pixel.
            </p>
            <button
              type="button"
              href='/contact'
              className='btn btn-danger float-right'
              aria-label='Get in touch'
              alt='Get in touch'
            >
              <Link href="/work/">Goto Work</Link>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
