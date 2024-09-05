'use client'
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import useDeviceDetect from '@/hooks/useDeviceDetect';


export default function Cursor({cursor}) {

    const { active, part } = cursor;
    const { isMobile } = useDeviceDetect();
    const cursorSize = 16;
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }
    const smoothOptions = {damping: 20, stiffness: 300, mass: 0.5}
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }
    const manageMouseMove = e => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
    }
    useEffect( () => {
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
        window.removeEventListener("mousemove", manageMouseMove)
        }
    }, [])
  return (
    <>
      {!isMobile && (
        <motion.div
          className=" fixed bg-pink-500 dark:bg-pink-600 h-4 w-4 rounded-full z-50 pointer-events-none flex items-center justify-center"
          style={{
            left: smoothMouse.x,
            top: smoothMouse.y,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            scale: active ? 5 : 1,
            transition: { delay: 0.3, scale: { duration: 0.3 } },
          }}
          exit={{ opacity: 0 }}
        >
          {active && (
            <motion.span
              className="text-white uppercase pt-[1px]  font-semibold text-[4px] "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.1 } }}
              exit={{ opacity: 0 }}
            >
              View
            </motion.span>
          )}
        </motion.div>
      )}
    </>
  );
}


