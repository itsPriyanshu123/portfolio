'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="h-screen flex flex-col relative space-y-26 md:space-y-1  justify-evenly text-center md:text-left md:flex-row max-w-7xl mx-auto items-center px-4 md:px-10 ">
      <h3 className="text-gray-500 absolute tracking-[20px] uppercase text-2xl  md:mb-0 md:top-26 md:text-4xl pt-10 top-11 mb-14 ">
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
        className="rounded-full mx-auto mt-[100px]  w-56 h-56 sm:w-36 sm:h-36  md:mt-11 md:mb-0  md:w-64 md:h-64 md:rounded-lg "
        alt="Background"
      />

      <div className="   sm:space-y-6 md:space-y-8 md:ml-8">
        <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
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
