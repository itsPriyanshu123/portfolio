/* eslint-disable @next/next/no-img-element */
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
     /*    <div className='flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center '> */
     <div  className='flex flex-col items-center justify-center h-screen overflow-hidden text-center ' style={{
        // paddingTop:'20px'
     }} >
            <BackgroundCircles />
            <img className='relative object-cover w-32 h-32 mx-auto rounded-full'
                src='https://c4.wallpaperflare.com/wallpaper/553/367/746/stuart-the-minion-4k-funny-minions-8k-wallpaper-preview.jpg'
                alt='image' />
            <div>
                <h2 className='text-sm uppercase tracking-[15px] text-gray-500 pb-2'>Software Engineer</h2>
                <h1 className='px-10 text-sm font-semibold lg:text-3xl'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F&AB0A' />
                </h1>

            </div>
            <div className=''>
                <Link href="#about">
                <button className='cursor-pointer heroButton'>About</button>
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