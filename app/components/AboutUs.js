'use client'
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="w-full   max-w-[2000px] px-5  md:px-10 bg-black  flex justify-around items-end sticky top-0">
      <motion.div
        initial={{ scaleY: 0.002 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className=" absolute bg-white/20 w-[1.5px] h-full origin-bottom  bottom-0 right-5 md:right-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=" w-full min-h-[365px] px-5 lg:px-10 h-full flex justify-center items-start lg:items-center gap-[60px] lg:gap-[200px]  flex-col md:flex-row  py-16 lg:py-24 "
      >
        <div>
            <p className='h-sub uppercase leading-tight tracking-[3.6px] pb-2'>About Us</p>
        <h2 className='text-2xl leading-[90%] font-extrabold max-w-[330px]' >Continuous Development</h2>
        </div>
        <div>
            <p className='text-md leading-[150%] max-w-[430px]  text-pretty'>In Totem, we are a software company 
            that collaborates closely with startups and industry leaders. Together, we develop cutting-edge solutions that fuel growth and success.</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ scaleY: 0.002 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className=" absolute bg-white/20 w-[1.5px] h-full origin-bottom  bottom-0 left-5 md:left-10"
      />
    </section>
  );
}
