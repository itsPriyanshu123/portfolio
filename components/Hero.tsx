'use client'
import React from 'react'
import { Cursor,useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
type Props = {}

export default function Hero({}: Props) {
    const[text,count]=useTypewriter({
        words:[
            "Hi I am Priyanshu",
                "Guy-Who-❤️-☕",
                "<But Love Code More>"
        ],
        loop:true,
        delaySpeed:2000,
    })
  return (
    <div className='h-screen space-y-8 items-center flex flex-col justify-center overflow-hidden text-center '>
        <BackgroundCircles/>
        <img className='h-32 w-32 rounded-full relative object-cover mx-auto'
         src='https://c4.wallpaperflare.com/wallpaper/553/367/746/stuart-the-minion-4k-funny-minions-8k-wallpaper-preview.jpg' 
        alt='image'/>
        <div>
            <h2 className='text-sm uppercase tracking-[15px] text-gray-500 pb-2'>Software Engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F&AB0A' />
        </h1>

   </div>
   <div>
    <button className='heroButton'>About</button>
    <button  className='heroButton'>Experience</button>
    <button  className='heroButton'>Skills</button>
    <button  className='heroButton'>Projects</button>
    
   </div>

    </div>
  )
}