//  @use-client
'use client'
import { motion } from 'framer-motion'

type props={
    directionLeft:boolean,
    skillImage:string,
    proficiency:number
}
export default function Skill({directionLeft,skillImage,proficiency}:props) {
    return (
        <div className='relative flex cursor-pointer group'>
            <motion.img
                 initial={{ x: directionLeft ? -80 : 80, opacity: 0 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1 }}

            src={skillImage}
            className="object-cover w-16 h-16 transition duration-200 ease-in-out border-2 rounded-full border-darkGreen md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 2xl:w-28 2xl:h-28 filter group-hover:grayscale"
            />
           <div className="absolute z-0 w-16 h-16 transition duration-200 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 2xl:w-28 2xl:h-28">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-black opacity-100 md:text-3xl">{proficiency}%</p>
        </div>
            </div>
    

        </div>
    )
}