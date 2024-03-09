import { Socials } from '@/constants'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-[#2a0e61]/30  bg-[#03001417] backdrop-blur-md z-50 '>
      <div className='w-full h-full flex items-center justify-between m-auto pz-[10px]'>
        <a href='#about-me' className='h-auto w-auto flex items-center' >
          <img 
          src='/Navlogo.svg'
          alt='logo'
          width={40}
          height={40}
          className='ml-5 cursor-pointer hover:animate-slowspin'
          />
        </a>
        <div className=' md:w-[500px] h-full flex justify-between items-center mx-2'>
          <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e]  px-[20px] py-[10px] rounded-full text-gray-200'>
            <a href='#about-me' className=' cursor-pointer ml-1' >
              Me
            </a>
            <div className='bg-black w-[0.2px] h-5 mx-2 md:hidden'>
            </div>
            <a href='#skills' className=' cursor-pointer ml-1' >
              skills
            </a>
            <div className='bg-black w-[0.2px] h-5 mx-2 md:hidden'>
            </div>
            <a href='#projects' className=' cursor-pointer ml-1' >
              projects
            </a>
          </div>
        </div>
        <div className='flex gap-2 md:gap-5 mr-5'>
          {
            Socials.map((social)=> {
              return (
                <a href={social.link} className=' cursor-pointer'>
                  <img 
                    src={social.src}
                    alt={social.name}
                    key={social.name}
                    width={24}
                    height={24}
                  />
                </a>
                
              )
            } )
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
