'use client'
import React from 'react'
import { motion, useInView } from 'framer-motion'
import { slideUp } from './anim'


export default function Index({phrase, className, duration}) {
    /* const container = useRef(null);
    const isInView = useInView(container); */
  return (
    <p className={`phrase`} /* ref={container} */>
                    {
                      phrase.split(' ').map((word, index) =>{
                        let velocity = index * duration
                        return <span key={index} className='mask'>
                          <motion.span
                            className={className}
                            custom={ velocity}
                            variants={slideUp}
                            initial='initial'
                            /* animate={isInView ? 'open': 'close'} */
                            animate={'open'}
                            whileInView="animate"
                            viewport={{ once: true }}
                          >{word}
                          </motion.span>
                        </span>
                      })
                    }
    </p>
  )
}
