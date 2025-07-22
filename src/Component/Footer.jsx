import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 p-20 relative flex '>
       <div className='w-1/2 font-[Founders_Grotest_X-Condensed] flex flex-col justify-between  '>
          <div className='heading  space-y-6'>
            <h1 className='text-[6vw] uppercase -mb-10'>EYE-</h1>
            <h1 className='text-[6vw] uppercase  -mb-10'>OPENING</h1>
          </div>
          <img className='w-20 absolute bottom-10 left-10' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
       </div>
       <div className='w-1/2 font-[Founders_Grotest_X-Condensed] flex flex-col justify-between  '>
          <div className='heading'>
            <h1 className='text-[6vw] uppercase leading-none -mb-10'>PRESENTATION</h1>
             <div className='dets font-[Neue-Montreal] mt-30'>
              <a className='block text-xl font-light' href="#">Facebook</a>
              <a className='block text-xl font-light' href="#">Instagram</a>
              <a className='block text-xl font-light'href="#">Twitter</a>
             </div>
          </div>
         
       </div>
     
    </div>
  )
}

export default Footer
