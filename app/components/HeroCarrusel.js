'use client'
import { motion } from 'framer-motion';
import Image from "next/image"
import heroImage from '../../public/hero.png';

function HeroCarrusel() {
  return (
    <motion.div 
        initial={{ opacity: 0  }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="max-w-[2000px] w-full relative h-[1000px]">
        <Image 
            src={heroImage}
            alt="Hero"
            layout="fill"
            objectFit="cover"
            priority={true}
            placeholder="blur"
            className=" px-10"
        />

        
    </motion.div>
  )
}

export default HeroCarrusel
