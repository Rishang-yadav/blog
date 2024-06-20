'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
  
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
        return !curState;
    })
}
  return (
    <header className='flex justify-between px-4 py-4 items-center z-50 bg-gray-800'>
      <div>
        <Link href={'/'} className='text-primary text-3xl font-bold hover:bg-primary p-2 border-md text-white italic transition-all duration-300'>
        Blog Site
        </Link>
      </div>
      <div  className="lg:hidden z-50">
        {navIsVisible ? ( <AiOutlineClose
         className="w-6 h-6"
         onClick={navVisibilityHandler}
        /> 
        
        ) : ( 
        <AiOutlineMenu
        className="w-6 h-6" onClick={navVisibilityHandler}
        />
    )}
    </div>
   
      <nav className={`${navIsVisible ? "right-0" : "right-full"}
        "transition-all duration-300 mt-[56pxz lg:mt-0 [49] bg-primary lg:bg-transparent flex flex-col w-full lg:w-auto lg:flex-row justify-center lg:justify-end fixed top-0 bottom-0 -right-full lg:static gap-x-9 items-center`}>
        <ul className='z-50 gap-y-5 items-center flex  flex-col lg:flex-row font-semibold gap-x-2'>
          <li>
            <Link className='text-white text-2xl font-bold hover:text-indigo-500 p-2 border-md italic transition-all duration-300' href={'/'}>Home</Link>
          </li>
          <li>
            <Link 
            
            className='text-white text-2xl font-bold hover:text-indigo-500 p-2 border-md italic transition-all duration-300' href={'/create-post'}>Create Post</Link>
          </li>
        </ul>
       

      </nav>
    </header>
  )
}

export default Navbar