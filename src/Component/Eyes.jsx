

import React, { useState, useEffect } from 'react';

const Eyes = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;

      const angle = Math.atan2(deltaY, deltaX);

      // Move on edge (radius of iris = 5vw = 2.5vw since pupil is inside)
      const irisRadius = 5 * (window.innerWidth / 100); // 5vw
      const pupilRadius = 20; // Half of pupil size in px (w-10 = 40px)

      const x = Math.cos(angle) * (irisRadius - pupilRadius);
      const y = Math.sin(angle) * (irisRadius - pupilRadius);

      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className='eyes w-full h-screen overflow-hidden relative'>
      <div data-scroll data-scroll-speed="-.7" className='w-full h-full mt-20 bg-[url("https://images.pexels.com/photos/255464/pexels-photo-255464.jpeg")] bg-contain bg-no-repeat bg-center'>
        <div className='absolute flex items-center justify-center gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          
          {/* Left Eye */}
          <div className='w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center'>
            <div className='w-[10vw] h-[10vw] rounded-full bg-zinc-900 relative'>
              <div
                className='w-10 h-10 rounded-full bg-zinc-100 absolute'
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
                }}
              ></div>
            </div>
          </div>

          {/* Right Eye */}
          <div className='w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center'>
            <div className='w-[10vw] h-[10vw] rounded-full bg-zinc-900 relative'>
              <div
                className='w-10 h-10 rounded-full bg-zinc-100 absolute'
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
                }}
              ></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Eyes;
