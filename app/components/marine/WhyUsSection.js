'use client'
import { motion } from 'framer-motion';
import CardServices from './CardServices';

const WhyUsItem = ({ id, title, description, bgColor, topPosition }) => {
 
    return (
      <div style={{ top:topPosition}} className='px-5  md:px-10 w-full max-w-[2000px] sticky'>
      <div style={{ backgroundColor: bgColor}} className=" flex  gap-2 md:gap-6 pt-8 pb-16 border-x-[1.5px] border-[#334577]  max-w-[2000px] w-full h-auto z-10  px-5  md:px-10 ">
        <div className='w-14 lg:w-1/3' >
        <p className='text-base md:text-md tracking-[3.6px] '>{id}</p>
        </div>
        <motion.div
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeIn" }} 
          viewport={{ once: true, amount: 0.3 }} 
          className='flex flex-col w-full lg:w-2/3  gap-2'>
            <h2 className="text-lg md:text-2xl font-bold mb-2 leading-[110%] "> {title}</h2>
            <p className='text-pretty pt-6 mb:pt-0 text-base md:text-md text-white/80'>{description}</p>
        </motion.div>
      </div>
      </div>
    );
  };

const WhyUsSection = () => {
    const sections = [
        {
          id: "001",
          title: "Specialized Expertise",
          description: "We know the marine industry. We've worked with industry leaders",
          bgColor: "#001755",
          topPosition: '0px'
        },
        {
          id: "002",
          title: "Tailored Solutions",
          description: "We design and redesign Marketplaces and websites to maximize your digital presence and boost your sales.",
          bgColor: "#001C66",  
          topPosition: '100px'
        },
        {
          id: "003",
          title: "SEO Optimization",
          description: "Our websites are SEO-optimized to ensure greater visibility and traffic.",
          bgColor: "#002380",
          topPosition: '200px', 
        },
        {
          id: "004",
          title: "Competitive Pricing",
          description: "Get global quality at accessible prices thanks to our strategic location in Costa Rica.",
          bgColor: "#002999",
          topPosition: '300px',  
        },
        {
          id: "005",
          title: "Digital Transformation",
          description: "We guide companies through every stage of their digital transformation process, ensuring success from start to finish.",
          bgColor: "#001755",
          topPosition: '400px',   
        },

      ];
      
  return (
    <div className='w-full relative'>
    <div className=' w-full flex flex-col justify-center items-center'>
      {sections.map((section) => (
        <WhyUsItem
        key={section.id}
        id={section.id}
        title={section.title}
        description={section.description}
        bgColor={section.bgColor}
        topPosition={section.topPosition}
        />
      ))}
   
    <CardServices />
    </div>
    </div>
  )
}

export default WhyUsSection
