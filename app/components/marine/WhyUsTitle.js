import React from 'react'
import { motion } from 'framer-motion';

const WhyUsTitle = () => {
  return (
    <section className="w-full  relative  max-w-[2000px] px-5  md:px-10 bg-marine-dark  flex justify-between items-start z-10">
      <div
        className=" absolute bg-white/20 w-[1.5px] h-full origin-bottom  bottom-0 right-5 md:right-10"
      />
      <motion.div
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8, ease: "easeIn" }} 
        viewport={{ once: true, amount: 0.3 }}
        className=" w-full px-5 lg:px-10 h-full flex justify-between items-start relative gap-[40px] lg:gap-[80px]  flex-col lg:flex-row  pt-16 lg:py-24 "
      >
        <div className=' w-full lg:w-auto flex items-start flex-col top-20'>
        <p className='h-sub uppercase leading-tight tracking-[3.6px] pb-2 text-white/70'>Our Value</p>
        <h2 className='text-xl md:text-2xl lg:text-3xl leading-[90%] font-extrabold lg:min-w-[500px]' > Why Choose Us?
        </h2>
        </div>
        <div className='w-full lg:w-3/4 flex flex-col'>
        </div>
      </motion.div>
      <div
        className=" absolute bg-white/20 w-[1.5px] h-full origin-bottom  bottom-0 left-5 md:left-10"
      />
    </section>
  )
}

export default WhyUsTitle
