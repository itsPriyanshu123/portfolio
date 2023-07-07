//  @use-client
'use client'
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
export default function Experience() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className='"h-screen flex  flex-col relative justify-evenly text-center md:text-left md:flex-row max-w-7xl mx-auto items-center px-10'
            // className=' h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
            >
            <h3 className="text-gray-500 absolute top-24 tracking-[20px] uppercase text-2xl">Experience</h3>
            <div className='w-full  md:mt-70 flex space-x-5 space-y-10 overflow-x-scroll p-10 snap-x snap-mandatory'>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>

        </motion.div>
    )
}   