'use client'
import { useTransform, motion } from "framer-motion";

export default function CaseProject({progress}) {
  const scaleY = useTransform(progress, [0, 1], [0, 1]);
  return (
    <div className=' flex-col bg-slate-400 min-h-[400px]  lg:min-h-[700px]  w-full flex justify-center items-center ' >
      <motion.div style={{ scaleY }}  className=' w-full h-full bg-gray-900 origin-bottom' >

      </motion.div>
      Proyecto
    </div>
  )
}
