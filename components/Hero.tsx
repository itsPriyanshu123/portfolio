'use client'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
// import glo
type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi I am Priyanshu",
            "Guy-Who-❤️-☕",
            "<But Love Code More>"
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
     /*    <div className='h-screen space-y-8 items-center flex flex-col justify-center overflow-hidden text-center '> */
     <div  className=' h-screen flex flex-col items-center justify-center text-center overflow-hidden' style={{
        // paddingTop:'20px'
     }} >
            <BackgroundCircles />
            <img className='h-32 w-32 rounded-full relative object-cover mx-auto'
                src='https://c4.wallpaperflare.com/wallpaper/553/367/746/stuart-the-minion-4k-funny-minions-8k-wallpaper-preview.jpg'
                alt='image' />
            <div>
                <h2 className='text-sm uppercase tracking-[15px] text-gray-500 pb-2'>Software Engineer</h2>
                <h1 className='text-sm lg:text-3xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F&AB0A' />
                </h1>

            </div>
            <div className=''>
                <Link href='#about'>
                    <button className='heroButton'>About</button>
                </Link>
                <Link href='#projects'>
                    <button className='heroButton'>Projects</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                {/*         
    <button  className='heroButton'>Projects</button>
     */}
            </div>

        </div>
    )
}