import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Myanmar Jokes | Home </title>
        <meta name="description" content="Myanmar Jokes" />
      
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>he purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.</p>
     
      <p className={styles.text}>he purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.</p>

      <Link href='/ninjas'>
        <a className={styles.btn}>မြန်မာဟာသများ</a>
      </Link>

    </div>
  )
}
