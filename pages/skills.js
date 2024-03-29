import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "/components/navbar";
import Footer from "/components/footer";
import styles from "../styles/Skills.module.scss";

export default function Skills() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skills-jasonleewilson.com</title>
        <meta
          name='description'
          content='I offer a complete solution ranging from website creation, design and maintenance for internet-based clients worldwide. By Jason Wilson. Founder. Jason Lee Wilson'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className='container'>
        <div className='grid-home'>
          <div></div>
          <div>
            <h1>Skills</h1>
            <p>
              HTML
              <br /> Javascript
              <br /> React.js
              <br /> Vue.js
              <br /> Next.js
              <br /> CSS
              <br /> SCSS
              <br /> Components
              <br /> UI/UX
              <br /> Design
              <br /> Pagespeed
              <br /> Google Anyltics / GTM
              <br /> Conversion Optimization Specialist
              <br /> Accessibility Guidelines (ADA/WCAG)
              <br />
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
