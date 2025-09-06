import React, { useState } from 'react'
import {icons} from './Index'
import img from '../assets/GuyAvatar.svg'
import { useGlobalContext } from '../ContextApi'

export const Navbar = () => {
  const {setUser,user} = useGlobalContext()
  
  
  
const [profile,setPorfile]=useState(' ')

  return (
    <div className='bg-white p-4 flex items-center justify-around transition-all duration-400'>
     <div className='w-full max-w-40   flex justify-between items-center max-md:max-w-10 border-none'>
   <h1 className=' flex items-center  font-[900] max-md:hidden'><icons.IoMdEye className=' text-[2rem] shadow rounded-lg cursor-pointer p-1'onClick={()=>setUser(!user)} /></h1>
   <icons.AiOutlineBars className='w-6 h-6 p-1 cursor-pointer   rounded-md bg-gray-300  min-[768px]:hidden'/>

  {/* <icons.TbLayoutSidebarLeftCollapseFilled className='cursor-pointer text-[25px] text-pink-600 max-md:hidden' /> */}

     </div>
 <div className="relative  ">
          <input
            type="text"
            className="w-[300px] text-[10px] bg-pink-50 p-2  pl-6 leading-3 rounded-lg max-[600px]:w-28"
            placeholder="search..."
          />
          <div className="absolute top-2 left-1 right-0">
            <icons.IoIosSearch className="text-purple-400  text-[14px]  max-[600px]:text-[12px] tracking-wider" />
          </div>
        </div>
{/*  */}
<div className=' w-full max-w-[200px] flex justify-between items-center'>

<div className="w-7 h-6  p-1 rounded-lg relative bg-white shadow-sm text-center cursor-pointer border ">
            <p className="w-2.5 h-2.5 absolute top-[1.3px] text-center  left-[11px] text-[7px] rounded-full bg-green-100 text-gray-700  font-bold  border border-gray-400  "><span className=' absolute left-[2px] top-[-1px]'>2</span></p>
            <icons.CiBellOn className="cursor-pointer " />
          </div>
          <div className="w-[1.6rem] h-6 p-1 text-center  rounded-lg relative bg-white shadow-sm cursor-pointer border">
           <p className="w-2.5 h-2.5 absolute top-[2px] text-center left-[11px] text-[7px] rounded-full bg-green-100 text-gray-700 font-bold  border border-gray-400 "><span className=' absolute left-[2px] top-[-1px] '>5</span></p>
            <icons.LuMail className="cursor-pointer text-[12px] mt-0.5" />
          </div>
           <p className='h-6 border-l-[1px] border-pink-200'></p>
            <img src={img} alt="user" className='w-8 h-8 rounded-full ml-2 ' />
          <div className="">
            <h1 className="text-[15px] capitalize ">john</h1>
            <p className="text-[10px]">admin</p>
          </div>
          {profile ?<icons.IoMdArrowDropdown className="cursor-pointer" onClick={()=>setPorfile(!profile)}/>:<icons.IoMdArrowDropup className="cursor-pointer" onClick={()=>setPorfile(!profile)}/>}  
             

    </div>
</div>
  )
}
