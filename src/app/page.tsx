import Image from 'next/image'
import Header from '../../components/header'
import Hero from '../../components/Hero'
import Head from 'next/head'
import About from '../../components/About'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y  snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Priyanshu's Profile</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="Hero" className='snap-center'>
        <Hero />
      </section>
      {/* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact me */}
    </div>
  )
}
