'use client'
import { motion } from 'framer-motion';

function Hero() {
    const phrase = 'From ideas to digital impact'
  return (
    <section className='w-full h-[65vh] min-h-[250px] md:min-h-[500px] max-w-[2000px] px-5  md:px-10   relative flex justify-center items-end'>
        <motion.div
        initial={{ scaleY: 0.002 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className=" absolute bg-black/20 w-[1.5px] h-full origin-bottom  bottom-0 right-5 md:right-10"
        />
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -40 }}
            transition={{ duration: 1 , ease: "easeInOut" }}
            className='pl-2 md:pl-0 text-left md:text-center text-gray-950'
            >
            <p className=' heading-sub uppercase leading-tight tracking-[3.6px]'>Totem Software</p>    
            <h1 className= 'heading-hero max-w-[1300px] leading-[90%] font-extrabold uppercase tracking-[-1.35px]'>
                From ideas to{" "}
                <motion.span
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -40 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                className='tracking-[-2.3px]'
                >
                digital impact
                </motion.span>
            </h1>
        </motion.div>
        <motion.div
        initial={{ scaleY: 0.002 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className=" absolute bg-black/20 w-[1.5px] h-full origin-bottom  bottom-0 left-5 md:left-10"
        />
    </section>
  )
}

export default Hero
