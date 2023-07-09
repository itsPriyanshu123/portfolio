//  @use-client
'use client'

import ExperienceCard from "./ExperienceCard"
import { motion } from 'framer-motion'
export default function WorkExperience() {
    return (
        <div className="h-screen relative flex flex-col mx-auto justify-evenly items-center text-center md:flex-row md:text-left max-w-7xl px-10">
            <h3 className="absolute tracking-[20px] text-2xl text-gray-500 top-[24px] uppercase">Experience</h3>

            <div className="  w-full   flex space-x-5 space-y-40 overflow-hidden  overflow-x-scroll p-10 snap-x snap-mandatory'">
                <div className="invisible">
                    <ExperienceCard />
                </div>
                <ExperienceCard />
                <ExperienceCard />

            </div>
        </div>
    )
}
