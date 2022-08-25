import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


import Aboutme from '../components/layouts/aboutme'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>waarrk</title>
        <meta name="description" content="Yusaku Washio Personal Page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='min-h-screen pt-20 lg:pt-24 items-start flex justify-center'>
        <div className='w-10/12 max-w-5xl lg:flex lg:justify-around'>

          <div className='max-w-xl  lg:max-w-none lg:w-3/6 mx-auto flex py-8 px-10 rounded-lg shadow-neumorphismdark'>
            <p>This is waarrk's personal page.</p>
          </div>
          
          <Aboutme/>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
