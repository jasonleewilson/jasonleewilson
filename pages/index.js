import Head from "next/head";
// import Image from 'next/image'
import Link from "next/link";
// import Image from 'next/image'
// import Navbar from "/components/navbar";
// import Footer from "/components/footer";
import styles from "../styles/Home.module.scss";
// import styles from '../styles/Nav.module.scss';
import {
  SiTailwindcss,
  SiHtml5,
  SiSass,
  SiCss3,
  SiJavascript,
  SiReact,
} from "react-icons/si";

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
        <meta
          name='google-site-verification'
          content='Av07LDlnBz4lQ-wTmL6oB2AXeux75nX8UmLCgw3l76Y'
        />
        <link rel='preload' href='/photo1.jpg' as='image' />
      </Head>

      <main className='container'>
        <div className='row vh-100'>
          <div className='col-sm-12 col-md-6 align-self-center'>
            <h1 className={styles.title}>
              “The word&apos;s “<s>CAN&apos;T</s>” or “<s>TRY</s>” are NOT in my
              vocabulary.”
            </h1>
            <p className='text-right'>by: Jason Lee Wilson</p>
            <p className='text-right icons'>
              <SiHtml5 className='html5' /> <SiCss3 className='css3' />{" "}
              <SiSass className='sass' />
              {/*<SiTailwindcss className="tailwind" />*/}{" "}
              <SiJavascript className='js' />
              <SiReact className='react' />
            </p>
          </div>
          <div className='col-sm-12 col-md-6 align-self-center'>
            <p>
              Jason Lee Wilson is a Front-End Developer who can not only design
              and develop technical solutions using the most up to-date
              frameworks and languages but also can lead additional development
              resources based on project needs. I am an innovator who is
              up-to-date on the latest technology and can push it in new
              directions. Building the web pixel by pixel.
            </p>

            {/* <Link to="/work/">Goto Work</Link> */}

            <Link href='/work/'>
              <button
                type='button'
                // href='/work/'
                className='btn btn-danger float-right'
                aria-label='Goto Work'
                // data-href="/work/"
              >
                Go to Work
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
