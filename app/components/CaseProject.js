
'use client'
import { motion } from "framer-motion";
import Image from "next/image"

export default function CaseProject({ src }) {
  return (
    <div className="flex-col min-h-[400px] lg:min-h-[760px] w-full flex justify-center items-center">
      <div className="w-full h-full relative">

      <motion.div
        initial={{ scaleY: 1 }} // Initial state
        whileInView={{ scaleY: 0 }} // Animate when in view
        transition={{ duration: 1.4, ease: "easeInOut" }} // Customize the transition
        style={{ transformOrigin: "top" }} // Scale from bottom to top
        className="w-full h-full bg-gray-900 origin-bottom z-20 absolute"
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