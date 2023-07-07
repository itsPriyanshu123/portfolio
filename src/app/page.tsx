import Image from 'next/image'
import Header from '../../components/header'
import Hero from '../../components/Hero'
import Head from 'next/head'
import WorkExperience from '../../components/WorkExperience'
import About from '../../components/About'
import Skills from '../../components/Skills'
import Project from '../../components/Project'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y  snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Priyanshu's Profile</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="Hero" className='snap-start mt-30'>
        <Hero />
      </section>
      {/* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>

      <section id="experience" className='snap-center'>

        <Skills />
      </section>
      {/* Projects */}
      <section id="project" className='snap-start'>

        <Project />
      </section>
      {/* Contact me */}
    </div>
  )
}
