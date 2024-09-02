'use client'
import { motion } from 'framer-motion';
import ServiceCard from "./ServiceCard"


export default function Services() {
    const services = [
        {
          title: 'Bring your idea to life',
          description: 'We help you efficiently test & transform your idea into a tangible product, laying a solid foundation for future growth.',
          badges: ['MVP Development', 'Design'],
          time: '2 to 4 weeks'
        },
        {
          title: 'Reflect Your Brand',
          description: 'From concept to launch, we create custom websites that embody your brand’s identity and vision.',
          badges: ['Website', 'Development'],
          time: '2 to 4 weeks'
        },
        {
          title: 'Crafting Smooth Mobile Experiences',
          description: 'We turn your app vision into high-performance reality, creating standout mobile experiences from start to finish.',
          badges: ['Mobile App', 'Devops'],
          time: '2 to 4 weeks'
        },
        {
          title: 'Web Apps built to optimize your workflow',
          description: 'Boost efficiency with custom web apps tailored to your business needs. We create flexible, scalable solutions for logistics and management.',
          badges: ['Web Apps', 'UX/UI Design'],
          time: '2 to 4 weeks'
        },
      ];



  return (
    <section className="w-full  relative  max-w-[2000px] px-5  md:px-10 bg-black  flex justify-between items-start z-10">
      <motion.div
        initial={{ scaleY: 0.002 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className=" absolute bg-white/20 w-[1.5px] h-full origin-bottom  bottom-0 right-5 md:right-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=" w-full px-5 lg:px-10 h-full flex justify-between items-start relative gap-[40px] lg:gap-[80px]  flex-col lg:flex-row  py-16 lg:py-24 "
      >
        <div className=' w-full lg:w-auto flex items-start flex-col lg:sticky top-20 bottom-40'>
            <p className='h-sub uppercase leading-tight tracking-[3.6px] pb-2'>Services</p>
        <h2 className='text-2xl leading-[90%] font-extrabold max-w-[400px] min-w-[400px]' >Many ways to <span className='text-[#AFF3DC] '>support
        your ideas</span></h2>
        </div>
        <div className='w-full lg:w-3/4 flex flex-col '>
        {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          badges={service.badges}
          time={service.time}
        />
      ))}

        </div>
      </motion.div>
      <motion.div
        initial={{ scaleY: 0.002 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className=" absolute bg-white/20 w-[1.5px] h-full origin-bottom  bottom-0 left-5 md:left-10"
      />
    </section>
  )
}
