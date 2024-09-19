import Image from 'next/image';
import { motion } from 'framer-motion';
import laptopImage from '@/public/TotemMarine02.png';
import phoneImage from '@/public/TotemMarine03.png'; 

const CardServices = () => {
  return (
    <section className=' bg-marine-gray w-full z-50 py-20 flex items-center justify-center relative'>
        <div className='max-w-[2000px] px-5  md:px-10 w-full'>

    
      <div className="flex flex-col lg:flex-row justify-between items-center w-full ">
        <div className="w-full lg:w-1/2 min-h-[400px] md:min-h-[600px] relative overflow-hidden ">
        <motion.div
            initial={{ scaleX: 1 }} 
            whileInView={{ scaleX: 0 }}
            transition={{ duration: 0.8, ease: "easeIn" }} 
            style={{ transformOrigin: "left" }} 
            viewport={{ once: true, amount: 0.3 }}  
            className=' z-30 h-full min-h-[400px] md:min-h-[600px] w-full bg-marine-gray relative'></motion.div>
          <Image 
            src={laptopImage}
            layout="fill"
            objectFit="cover"
            placeholder="blur" 
           alt="Laptop boat marketplace" 
          />
        </div>
        <div className="w-full lg:w-1/2 px-5 md:px-10 py-10 ">
            <p className='h-sub uppercase leading-tight tracking-[3.6px] pb-2 text-white/70'>Services</p>
            <h2 className='text-pretty text-lg md:text-2xl leading-[105%] pb-2 font-extrabold  max-w-[600px] ' > Creation and Redesign of  <span className="text-blue-500">Boat Marketplaces</span>
            </h2>
            <p className=' text-pretty text-md text-white/80 max-w-[600px] '>We develop custom web and mobile marketplaces to make your boat inventory stand out.</p>
        </div>
      </div>

      {/* Second row */}
      <div className="flex  justify-between items-stretch flex-col-reverse lg:flex-row">

      <div className="w-full lg:w-1/2 px-5 md:px-10 flex flex-col gap-10 py-10 justify-center ">
            <div className='flex flex-col '>
            <h2 className='text-pretty text-lg md:text-2xl leading-[105%] pb-2 font-extrabold  max-w-[600px] ' > <span className="text-blue-500">Search Engine Optimized</span> Website Development
            </h2>
            <p className=' text-pretty text-md text-white/80 max-w-[600px] '>We know the marine industry. We have worked with leaders like Boattrader, Yachtworld, and Boats.com.</p>
            </div>
            <div className='flex flex-col '>
            <h2 className='text-pretty text-lg md:text-2xl leading-[105%] pb-2 font-extrabold  max-w-[500px] ' > Digital Marketing for <span className="text-blue-500">Marine Businesses</span>
            </h2>
            <p className=' text-pretty text-md text-white/80 max-w-[600px] '>Attract more customers with digital marketing strategies tailored to the marine industry.</p>
            </div>
        </div>

        <div className="w-full lg:w-1/2 min-h-[400px] md:min-h-[600px] relative">
        <motion.div
            initial={{ scaleX: 1 }} 
            whileInView={{ scaleX: 0 }}
            transition={{ duration: 0.8, ease: "easeIn" }} 
            style={{ transformOrigin: "right" }} 
            viewport={{ once: true, amount: 0.3 }}  
            className=' z-30 h-full min-h-[400px] md:min-h-[600px] w-full bg-marine-gray relative'></motion.div>
          <Image src={phoneImage}
          layout="fill"
          objectFit="cover"
          placeholder="blur" 
         alt="Laptop boat marketplace"  />
        </div>
      </div>

        </div>
    </section>
  )
}

export default CardServices
