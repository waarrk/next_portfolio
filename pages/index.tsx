import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.eyecatch}>
          <div className={styles.space}>
            <p>This is waarrk's personal page.</p>
          </div>

          <div className={styles.aboutme}>
            <div className={styles.name}>
              <div className='max-w-sm mx-auto flex py-8 px-10 bg-slate-900 rounded-lg shadow-xl'>
                <Image src="/images/kamo.jpg" width={90} height={90} objectFit="contain" className='rounded-full' />
                <div className="ml-6 pt-1">
                  <p className="text-2xl text-gray-200 leading-tight">Yusaku Washio</p>
                  <p className='text-base text-gray-400 leading-normal'>waarrk</p>
                </div>
              </div>
            </div>
          </div>
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
