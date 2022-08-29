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

          <div className='max-w-xl  lg:max-w-none lg:w-3/6 mx-auto py-8 px-10 rounded-lg shadow-neumorphismdark'>
            <p className="text-xl leading-tight"> # ■ About me</p>
            <p className='text-base leading-normal text-gray-300 mt-2'>
              I am a Japanese ( Niigata, Nagaoka ) Software Programmer and also Electronic Circuit Designer.
            </p>
            <p className='text-base leading-normal text-gray-300 mt-1'>
              I have knowledge of embedded system development using C++, Eagle, etc., simple smartphone application development, and web/network.
            </p>
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
