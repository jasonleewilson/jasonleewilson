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
                <li><link href="http://lunarnewyear.com" target="_blank">LunarNewYear.com</link></li>
                <li><link href="https://pagodaasiangrill.com/" target="_blank">PagodaAsianGrill.com</link></li>
                <li><link href="https://www.pfchangs.com/" target="_blank">PFChangs.com</link></li>
                <li><link href="https://eptexas.com/" target="_blank">EPTexas.com</link></li>
                <li><link href="https://bitcoin-current-price.com/" target="_blank">Bitcoin-Current-Price.com</link></li>
                <li><link href="https://www.current-price.com/" target="_blank">Current-Price.com</link></li>
                <li><link href="https://luckycatfund.com/" target="_blank">LuckyCatFund.com</link></li>
                <li><link href="https://jasonleewilson.github.io/" target="_blank">jasonleewilson.github.io</link></li>

                

              </ul>
            </div>
          </div>
      </main>
    </div>
  );
}
