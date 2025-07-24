// import React from 'react'

// const Footer = () => {
//   return (
//     <div className='w-full h-screen bg-zinc-900 p-20 relative flex '>
//        <div className='w-1/2 font-[Founders_Grotest_X-Condensed] flex flex-col justify-between  '>
//           <div className='heading  space-y-6'>
//             <h1 className='text-[6vw] uppercase -mb-10'>EYE-</h1>
//             <h1 className='text-[6vw] uppercase  -mb-10'>OPENING</h1>
//           </div>
//           <img className='w-20 absolute bottom-10 left-10' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
//        </div>
//        <div className='w-1/2 font-[Founders_Grotest_X-Condensed] flex flex-col justify-between  '>
//           <div className='heading'>
//             <h1 className='text-[6vw] uppercase leading-none -mb-10'>PRESENTATION</h1>
//              <div className='dets font-[Neue-Montreal] mt-30'>
//               <a className='block text-xl font-light' href="#">Facebook</a>
//               <a className='block text-xl font-light' href="#">Instagram</a>
//               <a className='block text-xl font-light'href="#">Twitter</a>
//              </div>
//           </div>
         
//        </div>
     
//     </div>
//   )
// }

// export default Footer



import React from 'react';

const Footer = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 px-6 py-16 md:p-20 relative flex flex-col md:flex-row gap-10'>

      {/* Left Section */}
      <div className='w-full md:w-1/2 font-[Founders_Grotest_X-Condensed] flex flex-col gap-6'>
        <div className='heading space-y-4 md:space-y-6'>
          <h1 className='text-[10vw] md:text-[6vw] uppercase -mb-4 md:-mb-10'>EYE-</h1>
          <h1 className='text-[10vw] md:text-[6vw] uppercase -mb-4 md:-mb-10'>OPENING</h1>
        </div>
      </div>

      {/* Right Section */}
      <div className='w-full md:w-1/2 font-[Founders_Grotest_X-Condensed] flex flex-col gap-6'>
        <div className='heading'>
          <h1 className='text-[10vw] md:text-[6vw] uppercase leading-none -mb-4 md:-mb-10'>PRESENTATION</h1>

          <div className='dets font-[Neue-Montreal] mt-18 md:mt-28 space-y-2'>
            <a className='block text-lg md:text-xl font-light text-white' href="#">Facebook</a>
            <a className='block text-lg md:text-xl font-light text-white' href="#">Instagram</a>
            <a className='block text-lg md:text-xl font-light text-white' href="#">Twitter</a>
          </div>
        </div>
      </div>

      {/* Fixed Logo at Bottom of Footer */}
      <img
        className='w-14 md:w-20 absolute bottom-6 left-6 md:bottom-10 md:left-10'
        src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
        alt="Logo"
      />
    </div>
  );
};

export default Footer;
