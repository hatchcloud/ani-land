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
    <div className='w-full bg-[#1A1C1F] relative flex flex-col items-center justify-center'>

<div
        className=" w-2/5 absolute px-5 lg:px-10 h-full flex max-w-[2000px] justify-between items-start top-0 left-0 z-20 gap-[40px] lg:gap-[80px] gradient  flex-col lg:flex-row  pt-16 lg:pt-24 "
      >
        <div className=' w-full lg:w-auto flex items-start flex-col lg:sticky top-20 pb-4'>
            <p className='h-sub uppercase leading-tight tracking-[3.6px] pb-2'>Testimonials</p>
        <h2 className='text-2xl leading-[90%] font-extrabold lg:max-w-[400px] lg:min-w-[400px]' >What they say 
         <span className='text-[#41a3ff] '> about us</span></h2>
        </div>
        <div className='w-full lg:w-3/4 flex flex-col '>
      
        </div>
      </div>

    <motion.section className='w-full left-0  py-20 z-10 flex gap-3' ref={ref}  style={{ x: xTranslation}} >
      
      {[...carouselData,...carouselData, ...carouselData].map((card) => (
          <TestimonialsCard key={card.id} card={card} />
        ))}
    </motion.section>
    </div>
  )
}

export default Testimonials
