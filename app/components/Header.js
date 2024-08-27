
'use client'
import Image from "next/image"
import { motion } from 'framer-motion';

function Header() {
  return (
    <div className="h-24 flex  justify-center items-center relative w-full">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="px-5 md:px-10 w-full flex justify-between items-center max-w-[2000px]">
        <div className="text-2xl font-semibold ">
            <Image 
                src="/logo.svg" 
                alt="Totem Logo"
                width={150} 
                height={36} 
            />
        </div>
        <nav className="gap-5 text-base hidden lg:flex text-gray-700 hover:text-gray-900">
          <a href="#" >What we do?</a>
          <a href="#" >Case Studies</a>
          <a href="#" >Contact Us</a>
          <a href="#" >Blog</a>
        </nav>  
        <div className="w-[150px] flex  justify-end">
            <div className="border text-md border-gray-400 rounded-full px-4 py-1 text-gray-700 hover:text-gray-900 hover:border-gray-900">
            EN
            </div>
        </div>    
      </motion.div>
      <motion.div
        initial={{ scaleX: 0.002 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className=" absolute bg-black/10 h-[1.5px] w-full  bottom-0"
      />
    </div>
  )
}

export default Header
