import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Footer = () => {

    const Links = [
        {name:'Home', path: '/'},
        {name:'Contact', path: '/contact'},
        {name:'About', path: '/about '},
        {name:'Login', path: '/login'}

    ]
  return (
    <div className='flex flex-col md:flex-row md:justify-between items-center mt-10 bg-red-500 px-6 py-5'>
        <div >
            <Link href='/'>
            <h1 className='text-center md:text-start text-2xl  font-semibold'>Gladys <span className='text-red-600'>Blog</span></h1>
            <p className='text-white max-w-xs text-xs mt-2 p-3'>Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files.
             Good to know: Although you can use both routers in the same project, routes in app will be prioritized over pages. We recommend using only one router in your new project to avoid confusion.</p>
            </Link>
        </div>
       
        <div className='mt-5 md:mt-0'>
            <h2 className='text-white font-semibold text-sm mb-3'>Follow us on our socials</h2>
        <div className='flex justify-between items-center gap-1'>
            <FaFacebook />
            <FaInstagram />
            <FaLinkedinIn/>
            <FaTwitter />
           </div>
        </div>


    </div>
  )
}

export default Footer