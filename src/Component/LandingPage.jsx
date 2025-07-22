import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";
const LandingPage = () => {
 
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-2'>
     
      {/* <div className="textstructure mt-52 px-20 space-y-6">
  <div className="master">
    <h1 className="uppercase text-9xl font-[founders_Grotesk] font-semibold text-white">
      we create
    </h1>
  </div>

  <div className="master relative flex items-center">
    <div className="absolute left-0 w-[9vw] h-[5vw] bg-red-500 z-10"></div>
    <h1 className="uppercase text-9xl font-[founders_Grotesk] font-semibold text-white pl-[10vw] z-20">
      eye opening
    </h1>
  </div>

  <div className="master">
    <h1 className="uppercase text-9xl font-[founders_Grotesk] font-semibold text-white">
      presentations
    </h1>
  </div>
</div> */}
<div className="textstructure mt-40 px-6 md:px-20 space-y-6">
  <div className="master">
    <h1 className="uppercase text-5xl md:text-7xl lg:text-9xl font-[founders_Grotesk] font-semibold text-white">
      we create
    </h1>
  </div>

  <div className="master relative flex items-center">
    <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0 ,0.24 ,1],duration:"1"} }  className="absolute left-0 w-[15vw] h-[8vw] md:w-[9vw] md:h-[5vw] bg-red-500 z-10 rounded-md"></motion.div>
    {/* <h1 className="uppercase text-5xl md:text-7xl lg:text-9xl font-[founders_Grotesk] font-semibold text-white pl-[16vw] md:pl-[10vw] z-20">
      eye opening
    </h1> */}
    <motion.h1
    initial={{ x: 0 }}
    animate={{ x: "2vw" }} // moves slightly right
    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
    className="uppercase text-5xl md:text-7xl lg:text-9xl font-[founders_Grotesk] font-semibold text-white pl-[16vw] md:pl-[10vw] z-20 relative"
  >
    eye opening
  </motion.h1>
  </div>

  <div className="master">
    <h1 className="uppercase text-5xl md:text-7xl lg:text-9xl font-[founders_Grotesk] font-semibold text-white">
      presentations
    </h1>
  </div>
</div>

      <div className='border-t-2 border-zinc-800 mt-20   flex justify-between items-center py-5 px-20'>
        {["For public and private companies", "from the first pitch to IPO"].map((item,index)=> <p className="text-md font-light tracking-light leading-none">{item}</p>)}

     <div className='start flex items-center gap-2'>
        <div className='px-4 py-2 border-[2px] border-zinc-500 rounded-full font-light text-lg uppercase'>
            start the project
        </div>
        <div className='w-10 h-10 rounded-full border-[2px ] border-zinc-500 flex items-center'>
            <span className='rotate-[45deg]'>
                <FaLongArrowAltUp />
            </span>
        </div>
        
      </div>
     
      </div>
      
    </div>
  )
}



export default LandingPage
