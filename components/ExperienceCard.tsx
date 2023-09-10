//  @use-client
'use client'
import { motion } from "framer-motion";
import React from "react";
type props={
    logo: string,
    companyName: string,
    designation: string,
    startDate: string,
    endDate: string,
    about:string,
    id:number
    

    
}

export default function ExperienceCard({logo, companyName, designation,startDate,endDate,about,id}:props) {
  return (
    <article className=" flex drop-shadow-xl flex-col rounded-3xl items-center space-y-0 flex-shrink-0 w-72  md:w-[600px] xl:w-[700px] snap-center bg-[#FFFFFF] bg-gradient-to-tr from-white  to-darkGreen/20 p-5 md:p10 hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200 ">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className=" md:invisible xl:visible md:h-0 w-28 h-28 md:w-0 rounded-full xl:w-[150px] xl:h-[150px] mb-2 object-cover object-center"
        src={logo}
        alt=""
      />
      <div className="w-full px-0 md:px-10">
        <div className="items-center md:flex md:justify-between">
          <div>
            <h4 className="text-lg font-light text-black md:text-3xl">
              {designation}
            </h4>
            <p className="mt-1 font-bold text-md md:text-2xl text-lightGreen">
              {/* {experience?.company} */}
            </p>
            <div className="flex my-2 space-x-2">
              {/* {experience?.technologies.map((technology) => (
                <img
                  key={technology._id}
                  className="object-cover w-10 h-10 rounded-full"
                  src={urlFor(technology?.image).url()}
                  alt=""
                />
              ))} */}
            </div>
          </div>
          <motion.img
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="invisible object-cover object-center w-0 h-0 mb-0 rounded-full md:visible xl:invisible xl:h-0 xl:w-0 md:h-28 md:w-28"
            // src={urlFor(experience?.companyImage).url()}
            alt=""
          />
        </div>
        <p className="py-2 text-sm text-gray-500 uppercase md:py-5 md:text-lg">
        From: {startDate} to {endDate}
        </p>
      </div>
      <ul className="px-0 pl-5 pr-5 ml-0 space-y-2 overflow-y-scroll text-sm text-justify text-black list-disc  md:hidden md:px-10 md:text-lg scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-darkGreen/80">
      
          <li key={id}>{about}</li>
      
      </ul>
    </article>
  );
}
// import { motion } from 'framer-motion'
// type props={
//     logo: string,
//     companyName: string,
//     designation: string,
//     startDate: string,
//     endDate: string

    
// }
// export default function ExperienceCard({logo, companyName, designation,startDate,endDate}:props) {
//     return (
//         <article className='flex space-y-7 flex-col text-center md:pt-[40px] rounded-lg flex-shrink-0 items-center w-[300px] h-[400px] md:h-[500px] md:w-[500px]
//         snap-center bg-[#292929] opacity-40 hover:opacity-100 transition-opacity duration-200 
//         '>
//             <motion.img
//                 initial={{
//                     opacity: 0,
//                     y: -100
//                 }}
//                 transition={{ duration: 1.2 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 // viewport={{ once: true }}
//                 className="object-cover object-left w-auto h-20 mt-4 rounded-full "
//                 src={logo} alt="logo"
//             />
//             <div className='space-y-4'>
//                 <h3 className="text-4xl font-light">{companyName}</h3>
//                 <p className="mt-1 text-2xl font-bold">{designation}</p>
//                 <div className='flex items-center mx-auto space-x-2 '>
//                     {/* tech used */}
//                     <img className='w-8 h-8' src='https://w1.pngwing.com/pngs/136/126/png-transparent-javascript-logo-angularjs-nodejs-computer-programming-web-development-computer-software-jquery-yellow.png' alt='js logo' />
//                     <img className='w-8 h-8' src='https://w1.pngwing.com/pngs/136/126/png-transparent-javascript-logo-angularjs-nodejs-computer-programming-web-development-computer-software-jquery-yellow.png' alt='js logo' />
//                     <img className='w-8 h-8' src='https://w1.pngwing.com/pngs/136/126/png-transparent-javascript-logo-angularjs-nodejs-computer-programming-web-development-computer-software-jquery-yellow.png' alt='js logo' />
//                 </div>
//                 <p className='text-2xl text-gray-300 '>From: {startDate} to {endDate} </p>
//                 <ul className='ml-5 text-lg list-disc'>
//                     <li>HTML</li>
//                     <li>CSS</li>
//                     <li>JavaScript</li>
//                     <li>React</li>
//                     <li>Redux</li>

//                 </ul>
//             </div>
//         </article>
//     )
// }