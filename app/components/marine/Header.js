
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
                className="h-6 w-24 md:h-9 md:w-[150px] "
            />
        </div>
        <nav className="gap-5 text-base hidden lg:flex text-gray-50 hover:text-gray-200">
          <a href="#" >Our Value</a>
          <a href="#" >Services</a>
          <a href="#" >Contact Us</a>
        </nav>  
        <div className="w-[150px] flex  justify-end">
            <div className="border text-base md:text-md border-gray-600 rounded-full px-4 py-1 text-gray-50 hover:text-gray-200 hover:border-gray-200">
            EN
            </div>
        </div>    
      </motion.div>
      <motion.div
        initial={{ scaleX: 0.002 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className=" absolute bg-white/20 h-[1.5px] w-full  bottom-0"
      />
    </div>
  )
}

export default Header
