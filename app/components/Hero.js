'use client'
import { motion } from 'framer-motion';

function Hero() {
    const phrase = 'From ideas to digital impact'
  return (
    <section className='w-full h-[80%] min-h-[550px] max-w-[2000px] px-10   relative flex justify-center items-end'>
        <motion.div
        initial={{ scaleY: 0.002 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className=" absolute bg-black/10 w-[1.5px] h-full origin-bottom  bottom-0 right-10"
        />
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -40 }}
            transition={{ duration: 1 , ease: "easeInOut" }}
            >
            <h1 className='text-center text-[90px] lg:text-[108px] xl:text-6xl  max-w-[1070px] leading-[90%] font-extrabold uppercase tracking-[-1.35px]'>
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
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className=" absolute bg-black/10 w-[1.5px] h-full origin-bottom  bottom-0 left-10"
        />
    </section>
  )
}

export default Hero
