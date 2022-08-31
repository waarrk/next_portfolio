import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


import Aboutme from '../components/layouts/aboutme'
import Footer from '../components/layouts/footer'
import Wide from '../components/elements/neumorphism-wide'
import Short from '../components/elements/neumorphism-short'
import Year from '../components/elements/year'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>waarrk | Yusaku Washio</title>
        <meta name='description' content='Yusaku Washio Personal Page.' />
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
            <Short title='interests'>
              <p>
                In my private life, I like outdoor activities such as travel and photography.
                I'm practicing because I want to take cute portraits of my friends.
                Driving a car to go far away and photographing the starry sky at night are the greatest pleasures.<br/><br/>
                Recently, I've been working on the hardware abstraction layer for STM32.
                I feel that HAL is difficult to approach and library management is difficult.
                I would like to learn how to do it systematically.
                I'm also thinking about studying infrastructure recently.
                nice to meet you.
              </p>
            </Short>
            <Wide title='Bio'>
              <Year title={2003}>birth</Year>
              <Year title={2015}>Influenced by my sister, I became interested in programming. And get bored.</Year>
              <Year title={2017}>I got interested in software again.</Year>
              <Year title={2019}>Entered Nagaoka Kosen.</Year>
              <Year title={2020}>Join the 11Bigstone Corp.</Year>
              <Year title={2020}>Received the Mabuchi Motor Award at the Kosen Robocon National Convention ( Designed key network communications ).</Year>
              <Year title={2020}>Join the CodeforJapan.</Year>
              <Year title={2021}>Received the Honda Award at Kosen Robocon.</Year>
              <Year title={2021}>Received the Digital Day Encouragement Award from Japan Digital Agency as a CodeforJapan team.</Year>
              <Year title={2022}>Gain a 2nd class Qualified Certified Electrician.</Year>
            </Wide>
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='w-10/12 max-w-5xl lg:flex lg:justify-between'>
            <Wide title='Skill Set'>
              Software Programming lang.<br/>
              C/C++<br/>
              Python3 ( numPy scipy python-control etc.)<br/>
              React (Next.js)<br/>
              a little...<br/>
              Swift5 (shallow understanding of MVVM architecture)<br/><br/>

              Embedded programming<br/>
              Coretex Mx (STM32HAL, MbedOS)<br/>
              AVR ( e.g ATMega Of course Arduino can also be used)<br/><br/>

              electrical/mechanical design<br/>
              Creation of simple mechanical drawings in accordance with JIS standards<br/>
              I can design the circuit for embedded control using Eagle CAD.<br/>
              I also have experience in designing power control circuits for small-scale power bands.<br/>
              2nd class electrical work qualified person.
            </Wide>
            <Short title='This Site'>
              I will update when I feel like it.<br/>
              This site is built with Next.js and hosted with Vercel.
              I used AWS Route53 for routing. Since it is also used for experiments,
              it may be down from time to time. . .<br/>
              I would like to express my respect to everyone who developed this wonderful system.
            </Short>
          </div>
        </div>

      </main>

      <Footer/>
    </div>
  )
}

export default Home
