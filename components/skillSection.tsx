//  @use-client
'use client'
import { motion } from 'framer-motion'
import Skill from '../components/Skill'
export default function SkillSection(){
    return (
        <motion.div
        initial={{
            opacity: 0,
        }}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='flex flex-col relative text-center justify-center mx-auto md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen items-center'
        >
                   <h3 className='absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl'>Skills</h3>
             <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover on any screen for know proficiency</h3>
            <div className='grid grid-cols-4 gap-5 md:mt-10 '>
                <Skill directionLeft={false} skillImage='https://ionicframework.com/docs/icons/logo-react-icon.png' proficiency={80}/>
                <Skill directionLeft={false} skillImage='https://cdn.worldvectorlogo.com/logos/redux.svg' proficiency={60}/>
                <Skill directionLeft={false} skillImage='https://mui.com/static/logo.png' proficiency={70}/>
                <Skill directionLeft={false} skillImage='https://cdn-icons-png.flaticon.com/512/5968/5968292.png' proficiency={60}/>
                 <Skill directionLeft={false} skillImage='https://img.freepik.com/premium-vector/bootstrap-icon-b-letter-logo_781017-7.jpg' proficiency={70}/>
                 <Skill directionLeft={false} skillImage='https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png' proficiency={50}/>
                <Skill directionLeft={false} skillImage='https://user-images.githubusercontent.com/98990/89711240-4172a200-d989-11ea-8d51-4aaf922fa407.png' proficiency={70}/>
                <Skill directionLeft={false} skillImage='https://www.iconarchive.com/download/i73026/cornmanthe3rd/plex/Other-html-5.ico' proficiency={80}/>
                <Skill directionLeft={false} skillImage='https://cdn.iconscout.com/icon/free/png-256/free-java-60-1174953.png' proficiency={60}/>
                <Skill directionLeft={false} skillImage='https://cdn.dribbble.com/users/4878/screenshots/15802274/framer_2_2x.png' proficiency={50}/>
                <Skill directionLeft={false} skillImage='https://icons.iconarchive.com/icons/aniket-suvarna/box-logo/512/bxl-typescript-icon.png' proficiency={50}/>
                <Skill directionLeft={false} skillImage='https://cdn.worldvectorlogo.com/logos/postman.svg' proficiency={70}/>              
               
            </div>
        </motion.div>
    )
}