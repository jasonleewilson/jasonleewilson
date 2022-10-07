import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Nav from "/components/nav";
import styles from "../../styles/Skills.module.scss";

export default function Skills() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skills-jasonleewilson.com</title>
        <meta
          name="description"
          content="I offer a complete solution ranging from website creation, design and maintenance for internet-based clients worldwide. By Jason Wilson. Founder. Jason Lee Wilson"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <h1>Skills</h1>
        <ul>
          <li>HTML</li>
          <li>Javascript</li>
          <li>SCSS</li>
          <li>Components</li>
          <li>UI/UX</li>
          <li>Design</li>
          <li>Pagespeed</li>
          <li>Google Anyltics / GTM</li>
        </ul>
      </main>
    </div>
  );
}
