'use client'
import Image from 'next/image'
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import {FaBars} from 'react-icons/fa'
import close from '../public/images/close.png'
import Link from 'next/link'
import { useState } from 'react'
import AuthLogin from './AuthLogin'


const Navbar = () => {
  

    const [open, setOpen] = useState(false)

    const Links = [
        {name:'Home', path: '/'},
        {name:'Contact', path: '/contact'},
        {name:'About', path: '/about '},
    ]

    const ToggleNav = () => {
        setOpen(!open)
    }

    

  return (
    <div className='mt-4'>
     <div className='flex justify-between items-center '>
       <div className='flex justify-between items-center w-full '>
        
          {/* Social Links */}
          <div className='hidden md:flex justify-between items-center gap-5'>
            <FaFacebook />
            <FaInstagram />
            <FaLinkedinIn/>
            <FaTwitter />
           </div>
       
       
           <div className=''>
            <Link href='/'>
            <h1 className='text-2xl font-semibold'>Gladys <span className='text-red-600'>Blog</span></h1>
            </Link>

          </div>

           {/* Desktops Links */}
           <div className='hidden md:flex justify-between items-center gap-6'>
          
             {
                Links.map((link) => (
                    <div key={link.name}>
                        <Link className='text-sm font-semibold  hover:text-red-500 hover:border-b-[2px] hover:border-red-500 underline-offset-4  duration-300' href={link.path} >{link.name}</Link>
                    </div>
                ))
             }
             <AuthLogin />
         </div>

     </div>

        {/* Mobile Toggle */}
        <div className='block md:hidden'>
           <button onClick={ToggleNav}>
            {
              open ? (<Image src={close} alt='close'/>)
              :
                 (<FaBars />)
            }
           </button>
        </div>
    </div>
    {/* Mobile Links */}
        <div className={`bg-white text-center md:hidden absolute h-full w-full flex flex-col z-50 py-24 pl-10 gap-10 duration-500 ${open? 'left-0' : 'left-[-100%]'}  `}>

            {
                Links.map((link) => (
                    <div key={link.name}>
                        <Link className='text-sm hover:text-red-500 hover:border-b-[2px] hover:border-red-500 underline-offset-4  duration-300' href={link.path} >{link.name}</Link>
                    </div>
                ))
             }

             <AuthLogin />
            <div className='mx-auto'>
                <h1 className='mb-8'>Follow us on our socials</h1>
            <div className='flex gap-3'>
            <FaFacebook />
            <FaInstagram />
            <FaLinkedinIn/>
            <FaTwitter />
           </div>
            </div>
          
        </div>
    </div>
   
  )
}

export default Navbar