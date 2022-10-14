import Head from "next/head";

// Google TagManager

// import Image from 'next/image'
import Link from "next/link";
// import Image from 'next/image'
import Nav from "/components/nav";
import Footer from "/components/footer";
import styles from "../styles/Home.module.scss";
// import styles from '../styles/Nav.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          jasonleewilson.com &#8211; Building the web pixel by pixel
        </title>
        <meta
          name="description"
          content="I offer a complete solution ranging from website creation, design and maintenance for internet-based clients worldwide. By Jason Wilson. Founder. Jason Lee Wilson"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Image src="/logo.svg" alt="Logo" width={16} height={16} /> */}
      <Nav />
      <main className="container">
        <h1 className={styles.title}>jasonleewilson.com</h1>
        <p>
          Jason Lee Wilson is a Front-End Developer who can not only design and
          develop technical solutions using the most up to-date frameworks and
          languages, but also can lead additional development resources based on
          project needs. I am an innovator who is up-to-date on the latest
          technology and can push it in new directions. “The word’s “CAN’T” or
          “TRY” are NOT in my vocabulary.” by Jason Lee Wilson
        </p>
      </main>

      <Footer />
    </div>
  );
}
