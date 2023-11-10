import "slick-carousel/slick/slick.css"
import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'

export const metadata = {
  title: 'Gladys Blog',
  description: 'Tech related posts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='max-w-5xl mx-auto bg-white text-black font-satoshi px-8 py-4 ' >
        <Navbar />
        <Banner />
         {children}
        <Footer />
        </body>
    </html>
  )
}
