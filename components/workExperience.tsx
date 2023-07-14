//  @use-client
'use client'

import ExperienceCard from "./ExperienceCard"
import { motion } from 'framer-motion'
export default function WorkExperience() {
    return (
        <div className="relative space-y-36 flex flex-col items-center h-screen max-w-full px-10 mx-auto text-center justify-evenly md:flex-row md:text-left">
            <h3 className="absolute tracking-[15px] md:tracking-[20px] text-2xl text-gray-500 top-24 mb-10 md:top-12 md:mb-[120px] uppercase">Experience</h3>

            <div className="flex w-full items-center p-10 space-x-5 overflow-hidden overflow-x-scroll scrollbar-none snap-x snap-mandatory'">
          
                    <ExperienceCard logo={""} companyName={""} designation={""} techlogo={""} />

                <ExperienceCard logo={""} companyName={""} designation={""} techlogo={""} />
                <ExperienceCard logo={""} companyName={""} designation={""} techlogo={""} />  

            </div>
        </div>
    )
}
