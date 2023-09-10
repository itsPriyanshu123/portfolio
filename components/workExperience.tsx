/* eslint-disable react/jsx-key */
//  @use-client
'use client'

import ExperienceCard from "./ExperienceCard"
import { motion } from 'framer-motion'

// import { motion } from "framer-motion";
import React from "react";
// import { Experience } from "../typings";
// import ExperienceCard from "./ExperienceCard";

// type Props = { experiences: Experience[] ;

export default function WorkExperience() {
    const Experience=[
        {
            id:1,
            logo:"https://companieslogo.com/img/orig/WIT_BIG-0de2dc21.png?t=1648406781",
            name:'Wipro',
            designation:'Software Engineer',
            begin:"27/09/2021",
            end:'10/12/2022',
           about: "Contributed to the development of a comprehensive Dashboard for the Support Staff, an internal survey tool, and a series of websites using React.js and Next.js. This involved closely aligning with requirements provided by the management"
          
            
            
            
        },
        {
            id:2,
            logo:"data:image/png;base64,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",
            name:'Indipaisa',
            designation:'Software Engineer',
            begin:"12/12/2022",
            end:'12/6/2023',
            about:'As a Frontend Developer at Wipro from Aug 2022 to Dec 2022,I utilized my 1.3 years to excel in frontend development. Working with React Bootstrap, and Redux,I built dynamic interfaces, ensuring a smooth user experience. I delivered bug-free applications and collaborated effectively with QA teams.'
        }
    ]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen max-w-full px-10 mx-auto overflow-hidden text-left md:flex-row justify-evenly"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Experience
      </h3>

      {/* Experience cards */}
      <div className="flex w-screen p-10 pb-5 space-x-5 overflow-x-scroll text-left h-3/4 md:h-2/3 md:w-full md:pb-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80">
      {
                    Experience.map((item)=>{
                        return (
                        <ExperienceCard  id={item.id} about={item.about} logo={item.logo} companyName={item.name} designation={item.designation} startDate={item.begin} endDate={item.end}/>
                        )
                    })
                }
      </div>
    </motion.div>
  );
}
// export default function WorkExperience() {
    // const Experience=[
    //     {
    //         id:1,
    //         logo:"https://companieslogo.com/img/orig/WIT_BIG-0de2dc21.png?t=1648406781",
    //         name:'Wipro',
    //         designation:'Software Engineer',
    //         begin:"27/09/2021",
    //         end:'10/12/2022'
    //     },
    //     {
    //         id:2,
    //         logo:"data:image/png;base64,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",
    //         name:'Indipaisa',
    //         designation:'Software Engineer',
    //         begin:"12/12/2022",
    //         end:'12/6/2023'
    //     }
    // ]
//     return (
//         <div className="relative flex flex-col items-center h-screen max-w-full px-10 mx-auto text-center space-y-36 justify-evenly md:flex-row md:text-left">
//             <h3 className="absolute tracking-[15px] md:tracking-[20px] text-2xl text-gray-500 top-24 mb-10 md:top-12 md:text-4xl  md:mb-[120px] uppercase">Experience</h3>

//             <div className="flex items-center w-full p-10 space-x-10 overflow-hidden overflow-x-scroll md:px-10 scrollbar-none snap-x snap-mandatory'">         
                // {
                //     Experience.map((item)=>{
                //         return (
                //         <ExperienceCard logo={item.logo} companyName={item.name} designation={item.designation} startDate={item.begin} endDate={item.end}/>
                //         )
                //     })
                // }

//             </div>
//         </div>
//     )
// }
