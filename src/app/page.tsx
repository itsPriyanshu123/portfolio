/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Header from '../../components/header'
import Hero from '../../components/Hero'
import Head from 'next/head'
import WorkExperience from '../../components/workExperience'
import About from '../../components/About'
import ContactSection from '../../components/contactSection'
import Project from '../../components/Project'
import SkillSection from '../../components/skillSection'
import favicon from './favicon.ico'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-[#F7AB0A]/80 snap-mandatory overflow-x-hidden overflow-y-scroll z-0'>
      <Head>
        <p>👋🏼</p>
      <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon192x192.png"
        />
        <title> 
        
          Priyanshu's Profile
          </title>
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
      <section id="experience" className='snap-start'>
        <WorkExperience />
      </section>
    <section id="Skill" className='snap-center'>
      <SkillSection/>
      </section>
      {/* Projects */}
      {/* <section id="project" className='snap-start'>

        <Project /> 
      </section> */}
      {/* Contact me */}
      <section id="contact" className='snap-start'>
        <ContactSection />
      </section>
    </div>
  )
}
