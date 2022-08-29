import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


import Aboutme from '../components/layouts/aboutme'
import Footer from '../components/layouts/footer'
import Wide from '../components/elements/neumorphism-wide'
import Short from '../components/elements/neumorphism-short'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>waarrk　| Yusaku Washio</title>
        <meta name="description" content="Yusaku Washio Personal Page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='min-h-screen pt-8'>
        <div className='flex justify-center'>
          <div className='w-10/12 max-w-5xl lg:flex lg:justify-between'>
            <Wide title='About me'>
              I am a Japanese ( Niigata, Nagaoka ) Software Programmer and also Electronic Circuit Designer.<br/>
              I have knowledge of embedded system development using C++, Eagle, etc., simple smartphone application development, and web/network.
            </Wide>
            <Aboutme/>
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='w-10/12 max-w-5xl lg:flex lg:justify-between'>
            <Short title='Short'>
              I am a Japanese ( Niigata, Nagaoka ) Software Programmer and also Electronic Circuit Designer.<br/>
              I have knowledge of embedded system development using C++, Eagle, etc., simple smartphone application development, and web/network.
            </Short>
            <Wide title='Wide'>
              I am a Japanese ( Niigata, Nagaoka ) Software Programmer and also Electronic Circuit Designer.<br/>
              I have knowledge of embedded system development using C++, Eagle, etc., simple smartphone application development, and web/network.
            </Wide>
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='w-10/12 max-w-5xl lg:flex lg:justify-between'>
            <Wide title='Wide'>
              I am a Japanese ( Niigata, Nagaoka ) Software Programmer and also Electronic Circuit Designer.<br/>
              I have knowledge of embedded system development using C++, Eagle, etc., simple smartphone application development, and web/network.
            </Wide>
            <Short title='Short'>
              I am a Japanese ( Niigata, Nagaoka ) Software Programmer and also Electronic Circuit Designer.<br/>
              I have knowledge of embedded system development using C++, Eagle, etc., simple smartphone application development, and web/network.
            </Short>
          </div>
        </div>

      </main>

      <Footer/>
    </div>
  )
}

export default Home
