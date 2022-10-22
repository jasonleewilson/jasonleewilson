import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
// import Navbar from "/components/navbar";
// import Footer from "/components/footer";
import styles from "../styles/Contact.module.scss";

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
      <main className="container">
        <div className="grid-home">
            <div>
            
            </div>
            <div>
              <h1>Contact</h1>
              <p>
                Jason Lee Wilson
                <br />
                Email:&nbsp;
                <a href="mailto:info@jasonleewilson.com">info@jasonleewilson.com</a>
              </p>
            </div>
          </div>
      </main>
    </div>
  );
}
