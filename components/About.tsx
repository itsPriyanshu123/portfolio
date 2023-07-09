//  @use-client
'use client'
import { motion } from 'framer-motion'
export default function About() {
    return (
        <div className="h-screen flex  flex-col relative justify-evenly text-center md:text-left md:flex-row max-w-7xl mx-auto items-center px-10">
            <h3 className="text-gray-500 absolute top-24 tracking-[20px] uppercase text-2xl">About hello</h3>
            <motion.img
                initial={{
                    opacity: 0,
                    x: -200
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                src='https://wallpaperaccess.com/full/226242.jpg'
                className='-mb-20 rounded-full w-56 h-56 object-cover flex-shrink-0 md:w-64 md:h-95 md:rounded-lg '

            />
            <div className='space-y-10   md:px-10'>
                <h4 className='text-4xl font-semibold"'>Here is a <span className="underline decoration-[#F7AB0A]/50 text-5xl" >little</span>{' '}background</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, aperiam? Veritatis tempore odio quisquam saepe exercitationem. Sapiente earum natus, fugiat deserunt odio illum? Quod magni nesciunt molestiae id sapiente quibusdam placeat, numquam expedita quia  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veritatis quia voluptatem eius in maiores id provident, dolorum velit obcaecati iste reprehenderit beatae! </p>
            </div>
        </div>
    )
}
