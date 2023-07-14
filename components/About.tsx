
'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen px-4 mx-auto text-center md:text-left md:flex-row max-w-7xl md:px-10">
      <h3 className="text-gray-500 absolute   top-24 md:top-12 tracking-[20px] uppercase text-lg sm:text-2xl md:text-3xl lg:text-4xl">
        About
      </h3>
      <motion.img
        initial={{
          opacity: 0,
          x: -200
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        src="https://wallpaperaccess.com/full/226242.jpg"
        className="flex-shrink-0 object-cover mx-auto mb-12 rounded-full md:mt-12 w-36 sm:w-44 md:w-56 lg:w-64 xl:w-80 md:rounded-lg"
        alt="Background"
      />
      <div className="space-y-5 sm:space-y-6 md:space-y-8 md:ml-8">
        <h4 className="text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">
          Here is a <span className="underline text-xl sm:text-2xl decoration-[#F7AB0A]/50">little</span>{' '}
          background
        </h4>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, aperiam? Veritatis tempore
          odio quisquam saepe exercitationem. Sapiente earum natus, fugiat deserunt odio illum?
          Quod magni nesciunt molestiae id sapiente quibusdam placeat, numquam expedita quia Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Consequatur veritatis quia voluptatem
          eius in maiores id provident, dolorum velit obcaecati iste reprehenderit beatae!
        </p>
      </div>
      
    </div>
  );
}
