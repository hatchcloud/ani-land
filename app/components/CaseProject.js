'use client'
import { motion } from "framer-motion";
import Image from "next/image"

export default function CaseProject({ src, velocity = 1 }) {
  const durationY = 1.4 / velocity;
  const durationX = 0.8 / velocity;

  return (
    <div className="flex-col min-h-[400px] lg:min-h-[760px] w-full flex justify-center items-center">
      <div className="w-full h-full min-h-[400px] relative">

      <motion.div
        initial={{ scaleY: 1 }} 
        whileInView={{ scaleY: 0 }} 
        transition={{ duration: durationY, ease: "easeInOut" }} 
        style={{ transformOrigin: "top" }} 
        viewport={{ once: true, amount: 0.5}}
        className="w-full h-full bg-neutral-900 z-20 absolute hidden lg:flex"
      />
      {/* Left-to-right mobile */}
      <motion.div
        initial={{ scaleX: 1 }} 
        whileInView={{ scaleX: 0 }} 
        transition={{ duration: durationX, ease: "easeInOut" }} 
        style={{ transformOrigin: "left" }} 
        viewport={{ once: true, amount: 0.5}}
        className="w-full h-full bg-neutral-900 z-20 absolute flex lg:hidden"
      />
      <div className="w-full h-full min-h-[400px] relative pr-[1.5px] overflow-hidden ">

      <Image 
      src={src}
      alt="Hero"
      layout="fill"
      quality={100}
      sizes="(max-width: 600px) 100vw"
      objectFit="cover"
      placeholder="blur"
      className=" transition-transform ease-linear duration-300 hover:scale-110"
      />
      </div>
      </div>
      <div className="flex flex-col w-full pt-4">
        <h3 className="text-md font-medium">
          Project Name
        </h3>
        <h3 className="text-base text-white/50 ">
          Details
        </h3>
      </div>
    </div>
  );
}
