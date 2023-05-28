import Image from 'next/image'
import Header from '../../components/header'
import Hero from '../../components/Hero'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y  snap-mandatory overflow-scroll z-0'>
      <head>
        <title>Priyanshu's Profile</title>
      </head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />
      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact me */}
    </div>
  )
}
