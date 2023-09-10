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
                 <Skill directionLeft={false} skillImage='https://media.licdn.com/dms/image/C5622AQEaSzZNrNFgUQ/feedshare-shrink_800/0/1678383920919?e=1697068800&v=beta&t=ltjLHSU7rnePF3UbVWrrNxwn8zy9RLiwAE1JwfdtskU' proficiency={50}/>
                <Skill directionLeft={false} skillImage='https://user-images.githubusercontent.com/98990/89711240-4172a200-d989-11ea-8d51-4aaf922fa407.png' proficiency={70}/>
                <Skill directionLeft={false} skillImage='https://www.iconarchive.com/download/i73026/cornmanthe3rd/plex/Other-html-5.ico' proficiency={80}/>
                <Skill directionLeft={false} skillImage='https://cdn.iconscout.com/icon/free/png-256/free-java-60-1174953.png' proficiency={60}/>
                <Skill directionLeft={false} skillImage='https://cdn.dribbble.com/users/4878/screenshots/15802274/framer_2_2x.png' proficiency={50}/>
                <Skill directionLeft={false} skillImage='data:image/png;base64,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' proficiency={50}/>
                <Skill directionLeft={false} skillImage='https://cdn.worldvectorlogo.com/logos/postman.svg' proficiency={70}/>              
               
            </div>
        </motion.div>
    )
}