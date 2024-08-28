
'use client'
import { motion } from "framer-motion";
import Image from "next/image"

export default function CaseProject({ src }) {
  return (
    <div className="flex-col min-h-[400px] lg:min-h-[760px] w-full flex justify-center items-center">
      <div className="w-full h-full min-h-[400px] relative">

      <motion.div
        initial={{ scaleY: 1 }} 
        whileInView={{ scaleY: 0 }} 
        transition={{ duration: 1.4, ease: "easeInOut" }} 
        style={{ transformOrigin: "top" }} 
        viewport={{ once: true}}
        className="w-full h-full bg-gray-900 z-20 absolute hidden lg:flex"
      />
      
      <motion.div
        initial={{ scaleX: 1 }} 
        whileInView={{ scaleX: 0 }} 
        transition={{ duration: 0.8, ease: "easeInOut" }} 
        style={{ transformOrigin: "left" }} 
        viewport={{ once: true}}
        className="w-full h-full bg-gray-900 z-20 absolute flex lg:hidden"
      />
      <Image 
      src={src}
      alt="Hero"
      layout="fill"
      objectFit="cover"
      className=""
      />
      </div>
      <div className="flex flex-col w-full pt-4">
        <h3 className="text-md uppercase">
          Proyecto
        </h3>
        <h3 className="text-base text-white/50 ">
          Details
        </h3>
      </div>
    </div>
  );
}