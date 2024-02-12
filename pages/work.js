import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "/components/navbar";
import Footer from "/components/footer";
import styles from "../styles/Work.module.scss";

export default function Work() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Work-jasonleewilson.com</title>
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
              <h1>Work</h1>
              <ul>
                <li><a href="http://lunarnewyear.com" target="_blank" rel="noopener noreferrer">LunarNewYear.com</a></li>
                <li><a href="https://pagodaasiangrill.com/" target="_blank" rel="noopener noreferrer">PagodaAsianGrill.com</a></li>
                <li><a href="https://www.pfchangs.com/" target="_blank" rel="noopener noreferrer">PFChangs.com</a></li>
                <li><a href="https://eptexas.com/" target="_blank" rel="noopener noreferrer">EPTexas.com</a></li>
                <li><a href="https://bitcoin-current-price.com/" target="_blank" rel="noopener noreferrer">Bitcoin-Current-Price.com</a></li>
                <li><a href="https://www.current-price.com/" target="_blank" rel="noopener noreferrer">Current-Price.com</a></li>
                <li><a href="https://luckycatfund.com/" target="_blank" rel="noopener noreferrer">LuckyCatFund.com</a></li>
                <li><a href="https://jasonleewilson.github.io/" target="_blank" rel="noopener noreferrer">jasonleewilson.github.io</a></li>

              </ul>
            </div>
          </div>
      </main>
    </div>
  );
}
