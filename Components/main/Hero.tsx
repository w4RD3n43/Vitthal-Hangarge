import React from 'react'
import Herocontent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative flex flex-col h-auto w-full md:h-full' id="about-me">
      <video 
      autoPlay
      muted
      loop
      className=' rotate-180 absolute top-[-7000px] left-0 z-[1] w-full h-full object-cover md:top-[0px] '
      >
        <source src='/blackhole.webm' type='video/webm' />
      </video>
      <Herocontent/>
    </div>
  )
}

export default Hero
