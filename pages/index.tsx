import About from '@components/About';
import Contact from '@components/Contact';
import CoverPage from '@components/CoverPage';
import Education from '@components/Education';
import Experience from '@components/Experience';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Projects from '@components/Projects';
import Skills from '@components/Skills';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react';

const Home: NextPage = () => {
  return (
    <div className="sm:flex sm:flex-col min-h-screen bg-gradient-to-br from-[rgb(126,232,250)] via-[rgb(127,244,181)] to-[rgb(128,255,114)]">
      <Head>
        <title>Pablo Armando Sandoval</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CoverPage />

      <Header />

      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default Home
