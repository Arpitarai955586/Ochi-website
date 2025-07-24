
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
      <div className='w-full px-5 md:px-10 border-b border-zinc-700 pb-10 md:pb-20'>
        <h1 className='text-4xl md:text-6xl lg:text-8xl font-[Neue_Montreal] text-white'>
          Featured projects
        </h1>
      </div>

      {/* Cards + Animated Center Text */}
      <div className='px-5 md:px-10 lg:px-20'>
        <div className='relative w-full flex flex-col lg:flex-row items-center justify-between gap-10 mt-10'>

          {/* Left Card */}
          <div className='w-full lg:w-1/2 h-[40vh] md:h-[60vh] lg:h-[75vh]'>
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
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'
          >
            <h2 className='text-[15vw] sm:text-[12vw] md:text-[10vw] font-bold text-red-500 font-[Founders_Grotesk] tracking-tighter'>
              FYDA
            </h2>
          </motion.div>

          {/* Right Card */}
          <div className='w-full lg:w-1/2 h-[40vh] md:h-[60vh] lg:h-[75vh]'>
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
