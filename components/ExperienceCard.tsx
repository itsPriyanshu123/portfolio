//  @use-client
'use client'
import { motion } from 'framer-motion'
type props={
    logo: string,
    companyName: string,
    designation: string,
    techlogo: string,
    
}
export default function ExperienceCard({logo, companyName, designation, techlogo}:props) {
    return (
        <article className='flex space-y-7 flex-col text-center md:pt-[40px] rounded-lg flex-shrink-0 items-center w-[300px] h-[400px] md:h-[500px] md:w-[500px]
        snap-center bg-[#292929] opacity-40 hover:opacity-100 transition-opacity duration-200 
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
                src={logo} alt="logo"
            />
            <div>
                <h3 className="text-4xl font-light">{companyName}</h3>
                <p className="text-2xl font-bold mt-1">{designation}</p>
                <div className='flex space-x-2 items-center mx-auto '>
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