'use client'
import { motion } from 'framer-motion';
import Image from "next/image"
import heroImage from '../../public/mock_up.png';

function HeroCarrusel() {
  return (
    <motion.div 
        initial={{ opacity: 0  }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.7, ease: "easeInOut", delay: 1 }}
        className="max-w-[2000px] w-full min-h-[500px] lg:aspect-[1/0.6] sticky top-0">
        <Image 
            src={heroImage}
            alt="Hero"
            layout="fill"
            objectFit="cover"
            priority={true}
            placeholder="blur"
            className=" px-5  md:px-10"
        />


    </motion.div>
  )
}

export default HeroCarrusel
