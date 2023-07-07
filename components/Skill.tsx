//  @use-client
'use client'
import { motion } from 'framer-motion'

type props={
    directionLeft:boolean,
}
export default function Skill({directionLeft}:props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
            initial={{
                x:directionLeft?-200:200 ,
                opacity:0,
            }}
            transition={{duration: 1}}
            whileInView={{opacity:1,x:0}}

            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRww1IQ_zIyo6xaGZnweymZOo2GxpKbzCow_BvWGvQL&s"
            className='rounded-full border object-cover border-gray-300 h-24 w-24 filter xl:h-32 xl:w-32 md:w-28 md:h-28 group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 h-24 w-24 xl:w-32 xl:h-32 md:28 md:h-28 rounded-full z-0  transition duration-300 ease-in-out group-hover:bg-white'>
            <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold opacity-100 text-red-950'>100</p>
        </div>
            </div>
    

        </div>
    )
}