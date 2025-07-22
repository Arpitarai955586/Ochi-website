import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 flex justify-between items-center'>
        <div className='logo'>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        </div>
         <div className='links flex gap-10 font-[Neue_Montreal] '>
          {["Service","Our Work","About Us ","Insights", "work"].map((item,index)=>
        <a key={index} className={`text-lg capitalize font-light ${index === 4 && "ml-32"}`}>{item}</a>
        )}




         </div>
    </div>
  )
}

export default Navbar
