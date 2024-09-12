'use client'
import TestimonialsCard from './TestimonialsCard'
import useMeasure from 'react-use-measure';
import { useRef,useEffect } from 'react';
import { useMotionValue, motion, animate } from 'framer-motion';


const carouselData = [
  {
    id: 1,
    title: 'Beverly Johnson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    avatar: '/avatar/image-1.png',
  },
  {
    id: 2,
    title: 'John Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaorem ipsum dolor sit aididunt ut labore et dolore magna aliquaorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    avatar: '/avatar/image-2.png',
  },
  {
    id: 3,
    title: 'Beverly Johnson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    avatar: '/avatar/image-3.png',
  },
  {
    id: 4,
    title: 'John Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    avatar: '/avatar/image-4.png',
  },
  
]

const Testimonials = () => {
  let [ref, {width}] =useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);







  return (
    <div className="w-full bg-[#1A1C1F] overflow-hidden relative flex flex-col items-center justify-center">
      <div className=" w-full absolute h-full flex  justify-between items-start inset-auto z-20 flex-col lg:flex-row">
        
        <div className=' bg-[#1A1C1F] h-full w-7 2xl:w-[60%] '></div>
        <div className='w-full max-w-[2000px] min-w-[80vw] h-full'>

        <div className=" relative gradient h-full w-2/3 lg:w-auto flex items-start flex-col pb-4 px-10 lg:px-20 pt-16 lg:pt-24">
          <p className="h-sub uppercase leading-tight tracking-[3.6px] pb-2">
            Testimonials
          </p>
          <h2 className="text-2xl leading-[100%] font-extrabold lg:max-w-[400px] lg:min-w-[400px]">
            What they say
            <span className="text-[#41a3ff] "> about us</span>
          </h2>
        </div>

        </div>
        <div className='  h-full w-7 2xl:w-[60%]'></div>
      </div>

      <motion.section
        className="w-full left-0  py-20 z-10 flex gap-3"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...carouselData, ...carouselData, ...carouselData].map((card) => (
          <TestimonialsCard key={card.id} card={card} />
        ))}
      </motion.section>
    </div>
  );
}

export default Testimonials
