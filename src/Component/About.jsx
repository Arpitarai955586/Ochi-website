import React from 'react'

const About = () => {
  return (
    <div className='w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-[Neue_Montreal] text-[3vw] leading-[4.5vw] tracking-tighter'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Assumenda nobis inventore,
        modi fugiat dignissimos veritatis neque voluptatum beatae? Pariatur, eos!</h1>
        <div className='w-full flex gap-5 border-t-[1px] border-[#798b3f] mt-20'>
         
              <div className='w-1/2'>
                <h1 className='text-7xl'>Our approach:</h1>
                 <button className=' flex uppercase gap-10 items-center px-10 py-6 mt-5 bg-zinc-900 rounded-full text-white'>Read More
                 <div className='w-3 h-3 bg-zinc-100 rounded-full'></div></button>
                
                  </div>
                   <div className='w-1/2 h-[70vh]  rounded-2xl m-10'>
                    <img className='rounded-xl' src="	https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
                   </div>
                </div>   
    </div>
  )
}

export default About
