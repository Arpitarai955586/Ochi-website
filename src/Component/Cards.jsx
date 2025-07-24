// import React from 'react'

// const Cards = () => {
//   return (
//     <div className='w-full h-screen bg-zinc-100 flex gap-5 items-center px-32'>
//         <div className='cardcontainer h-[50vh] w-1/2'>
//             <div className='card w-full h-full bg-[#004D43] flex  items-center justify-center relative'>
//                 <img  className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
//                 <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019-2020</button>
//             </div>
//         </div>
//          <div className='cardcontainer h-[50vh] w-1/2 flex gap-5 '>
//             <div className='card w-1/2 h-full bg-[#060b0ad7] rounded-xl flex items-center justify-center relative ' >
//             <img  className= "w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
//               <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019-2020</button>
//             </div>
//             <div className='card w-1/2 h-full bg-[#060b0ad7] rounded-xl flex items-center justify-center relative'>
//             <img  className= "w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
//               <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019-2020</button>
//             </div>
//         </div>
      
     
//     </div>
//   )
// }

// export default Cards
import React from 'react'

const Cards = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-100 flex flex-col md:flex-row gap-5 items-center px-5 md:px-32 py-10'>
      
      {/* Left Card */}
      <div className='cardcontainer h-[50vh] w-full md:w-1/2'>
        <div className='card w-full h-full bg-[#004D43] flex items-center justify-center relative rounded-xl'>
          <img className='w-24 md:w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className='absolute px-4 py-1 text-sm rounded-full border-2 left-5 bottom-5 md:left-10 md:bottom-10'>&copy;2019-2020</button>
        </div>
      </div>

      {/* Right Two Cards */}
      <div className='cardcontainer h-[50vh] w-full md:w-1/2 flex flex-col md:flex-row gap-5'>
        
        <div className='card w-full md:w-1/2 h-full bg-[#060b0ad7] rounded-xl flex items-center justify-center relative'>
          <img className='w-24 md:w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className='absolute px-4 py-1 text-sm rounded-full border-2 left-5 bottom-5 md:left-10 md:bottom-10'>&copy;2019-2020</button>
        </div>

        <div className='card w-full md:w-1/2 h-full bg-[#060b0ad7] rounded-xl flex items-center justify-center relative'>
          <img className='w-24 md:w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className='absolute px-4 py-1 text-sm rounded-full border-2 left-5 bottom-5 md:left-10 md:bottom-10'>&copy;2019-2020</button>
        </div>

      </div>
    </div>
  )
}

export default Cards

