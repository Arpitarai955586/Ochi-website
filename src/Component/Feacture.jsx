// import React from 'react'

// const Feacture = () => {
//   return (
//     <div className='w-full py-10 bg-zinc-900 mt-20'>
//        <div className='w-full px-10 border-b-[1px] border-zinc-700 pb-20'>
//              <h1 className='text-8xl font-[Neue_Montreal]'>Featured projects</h1>
//        </div>
//        <div className='px-20'>
//             <div className='cards w-full flex gap-10 mt-10'>
//                   <div className='cards w-full flex gap-10 mt-10'>
//                     <div className='cardcontainer read-only:  w-1/2 h-[75vh] '>
//                       <div className=''>

//                       </div>
//                          <div className='w-full h-full bg-green-600 rounded-xl overflow-hidden'>
//                             <img src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" alt="" />
//                          </div>
//                     </div>
//                      <div className='cardcontainer  w-1/2 h-[75vh] '>
//                          <div className='w-full h-full  overflow-hidden'>
//                             <img src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" alt="" />
//                          </div>
//                     </div>
//                   </div>
//             </div>
//        </div>
//     </div>
//   )
// }

// export default Feacture
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Feacture = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll) {
        setShowText(false); // Scroll down
      } else {
        setShowText(true); // Scroll up
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='w-full py-10 bg-zinc-900 mt-20'>
      {/* Heading */}
      <div className='w-full px-10 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-8xl font-[Neue_Montreal] text-white'>Featured projects</h1>
      </div>

      {/* Cards + Animated Center Text */}
      <div className='px-20'>
        <div className='relative w-full flex items-center justify-between gap-10 mt-10'>

          {/* Left Card */}
          <div className='w-1/2 h-[75vh]'>
            <div className='w-full h-full bg-green-600 rounded-xl overflow-hidden'>
              <img
                className='w-full h-full object-cover'
                src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png"
                alt=""
              />
            </div>
          </div>

          {/* Animated Text */}
         <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: showText ? 1 : 0, y: showText ? 0 : -100 }}
      
      transition={{ duration: 0.6, ease: "easeInOut" }}
        className='absolute left-1/2 -translate-x-1/2 z-10'
    >
         <h2 className='text-[10vw] font-bold text-red-500 font-[Founders_Grotesk] tracking-tighter'>
        FYDA
         </h2>
       </motion.div>

          {/* Right Card */}
          <div className='w-1/2 h-[75vh]'>
            <div className='w-full h-full overflow-hidden rounded-xl'>
              <img
                className='w-full h-full object-cover'
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"
                alt=""
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Feacture;
