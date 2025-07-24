import React from 'react'
import {motion} from "framer-motion"

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 bg-[#004D43] ' >
       <div className='text border-t-2 border-b-2 border-zinc-300  flex  whitespace-nowrap gap-10  overflow-hidden'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:5}} className='text-[20vw] leading-none font-[Founders_Grotesk_X-Condensed] font-semibold uppercase  pt-5 -mb-3'>we are ochi</motion.h1>
           <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:5}} className='text-[20vw] leading-none font-[Founders_Grotesk_X-Condensed] font-semibold uppercase  pt-5 -mb-3'>we are ochi</motion.h1>
       </div>
    </div>
  )
}

export default Marquee
 