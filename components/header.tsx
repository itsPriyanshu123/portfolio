//  @use-client
'use client'
import { createContext } from 'react'

// const Context = createContext()
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion';
import Link from 'next/link'

type Props = {}

export default function Header({ }: Props) {
  return (
    <header className='sticky top-0 z-20 flex items-start justify-between p-5 mx-auto max-w-7xl xl:item'>
      <motion.div
        className='flex flex-row items-center'
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,

        }}
      >
        {/* Your SocialIcon components */}
        <SocialIcon
          url='https://www.linkedin.com/in/priyanshu-dubey-58821915b/'
          fgColor='grey'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.instagram.com/__.priyanshu.dubey/'
          fgColor='grey'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://github.com/itsPriyanshu123'
          fgColor='grey'
          bgColor='transparent'
        />
      </motion.div>
      {/* <Link href="#contact"> */}
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center text-center text-gray-300 cursor-pointer'
      >

        <SocialIcon 
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <div className='hidden text-sm uppercase md:inline-flex text-grey-400 '>GET IN TOUCH</div>
      </motion.div>
      {/* </Link> */}
    </header>
  )
}