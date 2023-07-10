//  @use-client
'use client'

import ExperienceCard from "./ExperienceCard"
import { motion } from 'framer-motion'
export default function WorkExperience() {
    return (
        <div className="relative flex flex-col items-center h-screen max-w-full px-10 mx-auto text-center justify-evenly md:flex-row md:text-left">
            <h3 className="absolute tracking-[20px] text-2xl text-gray-500 top-[24px] uppercase">Experience</h3>

            <div className="flex w-full p-10 space-x-5 overflow-hidden overflow-x-scroll scrollbar-none snap-x snap-mandatory'">
                {/* <div className="invisible"> */}
                    <ExperienceCard />
                {/* </div> */}
                <ExperienceCard />
                <ExperienceCard />

            </div>
        </div>
    )
}
