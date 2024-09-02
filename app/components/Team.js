'use client'
import { motion } from 'framer-motion';
import Image from "next/image"
import teamPhoto from '../../public/team.png';

function TeamPhoto() {
  return (
    <motion.div 
        initial={{ opacity: 0  }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.7, ease: "easeInOut", delay: 1 }}
        className="max-w-[2000px] w-full min-h-[500px] lg:aspect-[1/0.6] sticky top-0">

        <div className='w-full h-full px-16'>
        <div className=' w-full h-2/4 flex items-center justify-center flex-col '>
            <p className='h-sub uppercase leading-tight tracking-[3.6px] pb-2 w-full max-w-[1000px] pt-10 '>Culture</p>
        <h2 className='text-2xl md:text-3xl leading-[90%] font-extrabold max-w-[1000px]' >Founded in 2009, our Costa Rica-based team values IT professionals with strong soft skills for <span className='text-[#AFF3DC] '>seamless integration 
        and success. </span></h2>
        </div>

        </div>
      
        <Image 
            src={teamPhoto}
            alt="Hero"
            layout="fill"
            objectFit="cover"
            priority={true}
            placeholder="blur"
            className=" px-5  md:px-10 -z-20"
        />


    </motion.div>
  )
}

export default TeamPhoto
