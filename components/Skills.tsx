//  @use-client
'use client'
import { motion } from 'framer-motion'
import Skill from '../components/Skill'
export default function Skills() {
    return 
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative text-center justify-center mx-auto md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0  items-center'>
            <h3 className='absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl'>Skills</h3>
            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover on any screen for know proficiency</h3>
      
        </motion.div> 
    
}