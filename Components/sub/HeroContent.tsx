"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
const Herocontent = () => {
  return (
    <motion.div
    initial='hidden'
    animate='visible'
    className='flex flex-col items-center justify-center px-12 mt-40 w-full z-[20] md:flex-row'
    >
      <div className=' h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
        variants={slideInFromTop}
        className='welcome-box py-[8px] px-[8px] opacity-[0.9] border border-[#7042f88b] md:mt-0 '
        >
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5 ' />
          <h1 className='welcome-text text-[px] '>
            Web Developer portfolio
          </h1>
        </motion.div>

        <motion.div 
        variants={slideInFromLeft(0.5)}
        className='flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto'
        >
          
            hello,
          I&apos;m Vitthal
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Web Developer </span>
          and MERN stack specialist
          
        </motion.div>

        <motion.p
        variants={slideInFromLeft(0.8)}
        className='text-lg text-gray-400 my-5 max-w-[600px]'
        >
          I am a fresh, enthusiastic full stack developer eager to contribute my skills and learn from experienced teams.
        </motion.p>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center'
        >
          <img
          loading='lazy'
          src = "/mainIconsdark.svg"
          alt='work icons'
          height={650}
          width={650}
          />
        </motion.div>
    </motion.div> 
  )
}

export default Herocontent
