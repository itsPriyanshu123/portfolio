//  @use-client
'use client'
import { motion } from 'framer-motion'
export default function ExperienceCard() {
    return (
        <article className='flex flex-col space-y-7 rounded-lg flex-shrink-0 items-center w-[500px] md:w-[600px] lg:[900px]
        snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden
        '>
            <motion.img
                initial={{
                    opacity: 0,
                    y: -100
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className=" rounded-full w-20 h-20 object-cover object-left"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" alt="logo"
            />
            <div>
                <h3 className="text-4xl font-light">Wipro</h3>
                <p className="text-2xl font-bold mt-1">Full Stack Developer</p>
                <div className='flex space-x-2 '>
                    {/* tech used */}
                    <img className='h-8 w-8' src='https://w1.pngwing.com/pngs/136/126/png-transparent-javascript-logo-angularjs-nodejs-computer-programming-web-development-computer-software-jquery-yellow.png' alt='js logo' />
                    <img className='h-8 w-8' src='https://w1.pngwing.com/pngs/136/126/png-transparent-javascript-logo-angularjs-nodejs-computer-programming-web-development-computer-software-jquery-yellow.png' alt='js logo' />
                    <img className='h-8 w-8' src='https://w1.pngwing.com/pngs/136/126/png-transparent-javascript-logo-angularjs-nodejs-computer-programming-web-development-computer-software-jquery-yellow.png' alt='js logo' />
                </div>
                <p className='text-gray-300 '>started work ends </p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>

                </ul>
            </div>
        </article>
    )
}