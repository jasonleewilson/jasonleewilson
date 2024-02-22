import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
// import Navbar from "/components/navbar";
// import Footer from "/components/footer";
import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About-jasonleewilson.com</title>
        <meta
          name='description'
          content='I offer a complete solution ranging from website creation, design and maintenance for internet-based clients worldwide. By Jason Wilson. Founder. Jason Lee Wilson'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container'>
        <div className='grid-home'>
          <div></div>
          <div>
            <h1>About</h1>
            {/* <h2>Jason Lee Wilson</h2> */}
            <p>
              Hello, I am Jason Lee Wilson, a Front-End Developer, and Web
              Designer in the industry for over 20 years. Orignally a native
              from Texas, and currently a resident outside North Dallas, Texas.
              I hold a Bachelor&apos;s degree in Game Design from Collins
              College. I have worked with a number of clients, including IBM,
              P.F. Chang&apos;s, Microchip, Crocs, Primavera, Jetset Magazine,
              Coyotes NHL, Nicole Richie, Kellogg&apos;s, Blue Global Media,
              Checker Auto Parts, Microsoft, Hitachi, and Swift Transportation.
              Currently, I am responsible for designing graphics for websites
              and landing pages, coding websites and assisting in web
              development applications. I&apos;m someone who is passionate about
              designing and expressing my creative talents in an online
              environment. I offer a versatile range of graphic design, web
              design, and web development. As a Web / Print designer, within the
              intensely pressurized and demanding environment of the Online /
              Offline world. I offer a complete solution ranging from website
              creation, design and maintenance for internet-based clients
              worldwide. By Jason Lee Wilson
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
