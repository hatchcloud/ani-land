import React from 'react'
import { motion } from 'framer-motion';
import Image from "next/image"

const TestimonialsCard = ({card}) => {
  return (
    <motion.div
            key={card.id}
            className="min-w-[400px] bg-[#33373d] text-white rounded-lg p-6 text-md  w-full"
          >
            <p className="mb-4">{card.description}</p>
            <div className="flex items-center">
              <Image
                src={card.avatar}
                alt={card.title}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="font-semibold">{card.title}</h4>
                <span className="text-sm text-gray-400">Lorem ipsum</span>
              </div>
            </div>
          </motion.div>
  )
}

export default TestimonialsCard
