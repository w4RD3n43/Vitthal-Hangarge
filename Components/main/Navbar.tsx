"use client";
import Link from 'next/link'
import React,{useState} from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";


function NavBar() {

    const[navbarOpen,setNavbarOpen] = useState(false);
    return (
    <nav className='fixed top-0 left-0 right-0  md:bg-[#03001417] bg-opacity-100 z-[50]'>
        
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
            <Link href={"/"} className=' text-2xl md:text-5xl text-white font-semibold'>
                <img src='/Navlogo.svg' width={40} height={40}/>
            </Link>
            <div className='mobile-menu block md:hidden bg-[#030014c0] rounded-full'>
                {
                    navbarOpen ? (<button onClick={() => {setNavbarOpen(!navbarOpen)}} className='flex items-center px-3  py-2 rounded  text-slate-200 hover:text-white '>
                                    <MdOutlineCancel className="h-5 w-5 " />
                                </button>) 
                    : (<button onClick={() => {setNavbarOpen(!navbarOpen)}} className='flex items-center px-3 py-2  rounded text-slate-200 hover:text-white '>
                    <IoIosMenu className="h-5 w-5 "/>
                </button>)
                }
            </div>

            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    <li><Link href={"#home"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white hover:scale-125 transition-all'>Home</Link></li>
                    <li><Link href={"#skills"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white hover:scale-125 transition-all'>Skills</Link></li>
                    <li><Link href={"#projects"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white hover:scale-125 transition-all'>Projects</Link></li>
                    <li><Link href={"#contact-me"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white hover:scale-125 transition-all'>Contact</Link></li>
                </ul>
            </div>
        </div>
        {
            navbarOpen ? (
            <ul className='flex flex-col py-4 items-center'>
                <li className='flex justify-center w-full text-white bg-[#140835] ' onClick={() => {setNavbarOpen(!navbarOpen)}} ><Link href={"#home"}       className='block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0  '>Home</Link></li>
                <li className='flex justify-center w-full text-white bg-[#140835] ' onClick={() => {setNavbarOpen(!navbarOpen)}} ><Link href={"#skills"}     className='block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0  '>Skills</Link></li>
                <li className='flex justify-center w-full text-white bg-[#140835] ' onClick={() => {setNavbarOpen(!navbarOpen)}} ><Link href={"#projects"}   className='block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0  '>Projects</Link></li>
                <li className='flex justify-center w-full text-white bg-[#140835] ' onClick={() => {setNavbarOpen(!navbarOpen)}} ><Link href={"#contact-me"} className='block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0  '>Contact</Link></li>
            </ul>
            ) : (
                null
            )
        }
    </nav>
  )
}

export default NavBar