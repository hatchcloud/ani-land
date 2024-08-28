import CaseProject from "./CaseProject"
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

export default function Cases() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  }) 
  return (
    <section ref={container} className="bg-gray-900  w-full min-h-48 z-10" >
        <div className=" bg-black/5 h-full w-full flex items-center justify-center py-28">
        <div className="max-w-[2000px] w-full px-5 md:px-10 gap-[40px] lg:gap-[60px] flex flex-col lg:flex-row ">
            <CaseProject progress={scrollYProgress} />
            <CaseProject progress={scrollYProgress} />
            <CaseProject progress={scrollYProgress} />
        </div>
        </div>
    </section>
  )
}
