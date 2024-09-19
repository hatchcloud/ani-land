"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full h-[65vh] min-h-[250px] md:min-h-[500px] max-w-[2000px] px-5  md:px-10   relative flex justify-center items-end">
      <motion.div
        initial={{ scaleY: 0.002 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className=" absolute bg-white/20 w-[1.5px] h-full origin-bottom  bottom-0 right-5 md:right-10"
      />
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: -40 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="pl-2 md:pl-0 text-left md:text-center text-gray-50 "
      >
        <p className=" heading-sub uppercase leading-tight tracking-[3.6px] pb-2 lg:pb-4">
          Totem Software
        </p>
        <h1 className="font-extrabold uppercase max-w-[1300px]">
          <span className="hero-main leading-none tracking-[0px] lg:tracking-wide pb-10">
            Boost your{" "}
          </span>
          <br></br>
          <motion.span
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -40 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
            className=" max-w-[400px] w-full md:tracking-[-0.5px] 2xl:tracking-[2px] transition-colors relative duration-200 ease-in text-marine-accent hero-sub leading-none"
          >
            online presence
          </motion.span>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1.1 }}
              className="heading-sub text-pretty tracking-wider text-left lg:text-center normal-case font-normal pt-2 pl-[2px] md:pl-[10px] text-white  leading-relaxed "
            > 
              with specialists in custom Boat Platforms and Marine Websites
            </motion.p>
        </h1>
      </motion.div>
      <motion.div
        initial={{ scaleY: 0.002 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className=" absolute bg-white/20 w-[1.5px] h-full origin-bottom  bottom-0 left-5 md:left-10"
      />
    </section>
  );
};

export default Hero;
