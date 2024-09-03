'use client'
import { motion } from 'framer-motion';
import Image from "next/image"
import teamPhoto from '../../public/team.png';

function TeamPhoto() {
  return (
    <div 
        className="max-w-[2000px] w-full min-h-[500px] lg:aspect-[1/0.6] sticky top-0">

        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeIn" }} 
          viewport={{ once: true, amount: .5 }}
          className='w-full h-full px-10 md:px-16'>
        <div className=' w-full h-2/4 flex items-center justify-center flex-col pb-10 '>
            <p className='h-sub uppercase leading-tight tracking-[3.6px] pb-2 w-full max-w-[1000px] pt-10 '>Culture</p>
        <h2 className='text-xl md:text-3xl leading-[90%] font-extrabold max-w-[1000px]' >Founded in 2009, our Costa Rica-based team values IT professionals with <span className='text-[#AFF3DC] '>strong soft skills</span> for seamless integration 
        and success.</h2>
        </div>

        </motion.div>
      
        <Image 
            src={teamPhoto}
            alt="Hero"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            className=" px-5  md:px-10 -z-20"
        />


    </div>
  )
}

export default TeamPhoto
