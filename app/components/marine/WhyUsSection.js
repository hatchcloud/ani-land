'use client'
import { motion, useMotionValue } from 'framer-motion';

const WhyUsItem = ({ id, title, description, bgColor, topPosition }) => {
 
    return (
      <motion.div style={{ backgroundColor: bgColor, top:topPosition}} className=" flex  px-5  md:px-10 gap-4 md:gap-6 py-14 border-x-[1.5px] border-[#334577] sticky">
        <div className='w-20 lg:w-1/3' >
        <p className='text-base md:text-md tracking-[3.6px] '>{id}</p>
        </div>
        <div className='flex flex-col w-2/3  gap-2'>
            <h2 className="text-lg md:text-2xl font-bold mb-2 leading-[110%] "> {title}</h2>
            <p className='text-pretty text-base md:text-md text-white/80'>{description}</p>
        </div>
      </motion.div>
    );
  };

const WhyUsSection = () => {
    const sections = [
        {
          id: "001",
          title: "Specialized Expertise",
          description: "We know the marine industry. We've worked with leaders like Boattrader, Yachtworld, and Boats.com",
          bgColor: "#001755",
          topPosition: '0px'
        },
        {
          id: "002",
          title: "Tailored Solutions",
          description: "We design and redesign Marketplaces and websites to maximize your digital presence and boost your sales.",
          bgColor: "#001C66",  
          topPosition: '120px'
        },
        {
          id: "003",
          title: "SEO Optimization",
          description: "Our websites are SEO-optimized to ensure greater visibility and traffic.",
          bgColor: "#002380",
          topPosition: '240px', 
        },
        {
          id: "004",
          title: "Competitive Pricing",
          description: "Get global quality at accessible prices thanks to our strategic location in Costa Rica.",
          bgColor: "#002999",
          topPosition: '360px',  
        },
        {
          id: "005",
          title: "Full Support in Your Digital Transformation",
          description: "We guide companies through every stage of their digital transformation process, ensuring success from start to finish.",
          bgColor: "#001755",
          topPosition: '480px',  
        }
      ];
      
  return (
    <div className='max-w-[2000px] w-full min-h-[600px] z-10  px-5  md:px-10 '>
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
    </div>
  )
}

export default WhyUsSection
