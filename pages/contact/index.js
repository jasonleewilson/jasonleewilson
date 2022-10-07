import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Nav from "/components/nav";
import styles from "../../styles/Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact-jasonleewilson.com</title>
        <meta
          name="description"
          content="I offer a complete solution ranging from website creation, design and maintenance for internet-based clients worldwide. By Jason Wilson. Founder. Jason Lee Wilson"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <h1>Contact</h1>
        <p>
          Jason Lee Wilson
          <br />
          Email:
          <a href="mailto:info@jasonleewilson.com">info@jasonleewilson.com</a>
        </p>
      </main>
    </div>
  );
}
