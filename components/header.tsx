//  @use-client
'use client'
import { createContext } from 'react'

const Context = createContext()
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion';

type Props = {}

export default function Header({}:Props){
    return (
    <header className='sticky top-0 p-5 flex items-center justify-between mx-auto max-w-7xl z-20 xl:item'>
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
        <motion.div 
        initial={{
            x:500,
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
            <p className='uppercase hidden md:inline-flex text-sm text-grey-400 '>GET IN TOUCH</p>
        </motion.div>
    </header>
    )
}