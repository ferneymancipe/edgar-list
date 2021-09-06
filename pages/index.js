import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css'

export default function Home() {
   return (
      <>
         <Head>
            <title>Edgar List | Home</title>
            <meta name="keywords" content="edgar" />
         </Head>
         <div>
            <h1 className={styles.title}>Homepage</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio similique excepturi ipsa quos repellat eos rem, accusamus tempore, vero amet dolorem! Dolores cupiditate sit ipsum eius sunt. Animi, nostrum adipisci?</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio similique excepturi ipsa quos repellat eos rem, accusamus tempore, vero amet dolorem! Dolores cupiditate sit ipsum eius sunt. Animi, nostrum adipisci?</p>
            <Link href="/edgar">
               <a  className={styles.btn}>See Edgar Listing</a>
            </Link>
         </div>
      </>
   )
}
