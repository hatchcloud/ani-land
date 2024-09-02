'use client'
import { motion } from "framer-motion";

export default function ServiceCard({ title, description, badges, time }) {
  return (
    <div className="pb-5 lg:pb-10 text-white relative mb-8">
      <div className="flex items-center space-x-4 mb-4 justify-between">
        <div className="flex gap-4">

        {badges.map((badge, index) => (
          <span key={index} className="bg-white/10 text-white/70 text-sm font-light px-3 py-1 rounded-full">
            {badge}
          </span>
        ))}
        </div>

        <p className=" text-base font-semibold lg:text-md text-white/80">{time}</p>
      </div>
      <h2 className="text-lg lg:text-xl font-bold mb-2">{title}</h2>
      <p className="text-base lg:text-md text-gray-300 max-w-[800px] ">{description}</p>

      <motion.div
        initial={{ scaleX: 0 }} 
        whileInView={{ scaleX: 1 }} 
        transition={{ duration: 1.5, ease: "easeInOut" }} 
        style={{ transformOrigin: "left" }} 
        viewport={{ once: true, amount: 1 }}
        className="absolute right-0 bottom-0 h-[2px] w-full  bg-white/20"
      />
    </div>
  );
}
