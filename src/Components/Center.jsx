import React, { useState } from 'react'
import  {icons,payrollcost,EmployeeList,EmployeeListStatus} from './Index'
import img from '../assets/GuyAvatar.svg'

const Center = () => {
  const [Cal,setCal]=useState(' ')
  const [clicked, setClicked] = useState(null);
  const [Slice_1,setSlice_1]=useState(0)

  
 const handleClick = (index) => {
    setClicked(clicked === index ? null : index);
  };

  return (

    <div className='w-full h-auto  p-2 bg-pink-50 transition-all duration-500 '>
      <div className='bg-white p-2'>
{/* first */}
<div className="w-full flex items-center justify-between  relative">
  {/* Date Dropdown */}
  <div className="relative">
    <span
      className="border p-1 flex items-center cursor-pointer rounded-lg bg-slate-200 text-[12px] max-md:text-[9px]"
      onClick={() => setCal(!Cal)}
    >
      02-jan-2025
      <icons.IoMdArrowDropdown className="ml-1" />
    </span>

    {!Cal && (
      <div className="absolute left-0 top-full mt-1 w-max text-[12px] max-md:text-[9px]">
        <li className="list-none border p-1 hover:bg-pink-50 cursor-pointer rounded-lg bg-slate-200">30-jun-2025</li>
        <li className="list-none border p-1 mt-0.5 hover:bg-pink-50 cursor-pointer rounded-lg bg-slate-200">03-mar-2025</li>
        <li className="list-none border p-1 mt-0.5 hover:bg-pink-50 cursor-pointer rounded-lg bg-slate-200">09-may-2025</li>
        <li className="list-none border p-1 mt-0.5 hover:bg-pink-50 cursor-pointer rounded-lg bg-slate-200">26-jan-2025</li>
      </div>
    )}
  </div>

  {/* Right Side Actions */}
  <div className="w-full max-w-[250px] flex items-center justify-around  px-2 py-1 max-md:text-[12px]">
    <h1 className="text-[13px] flex items-center mr-2 cursor-pointer border p-1 pl-2 pr-2 rounded-lg capitalize tracking-wider border-pink-100 max-md:text-[10px] text-pink-300">
      <icons.PiExportBold className="mr-1" />
      export
    </h1>
    <h1 className="text-[13px] cursor-pointer border p-1 pl-2 pr-2 rounded-lg capitalize tracking-wider border-pink-100 max-md:text-[10px] text-pink-300">+ new payroll</h1>
  </div>
</div>

{/* second */}
<hr className='w-full max-w-[100%] mt-4 m-auto '/>
<div className=' w-full max-w-[1020px] m-auto flex justify-between max-lg:grid grid-cols-2 gap-1 mt-7 mb-10'>
  {payrollcost.map(({payrollcost,amount,percent,month},id)=>{
return <div key={id} className="border p-1 m-0.5 rounded-md">
    <p className='text-pink-300 text-[13px] tracking-wide text-center capitalize'>{payrollcost}</p>
    <h1 className=' flex items-center justify-around'>
      <p className='p-1 m-2 text-[10px]  '>{amount}</p>
      <p className='p-1 m-2 text-[9px] rounded  bg-green-300'>{percent}<span className='pl-2  '>{month}</span></p>
    </h1>
  </div>
  })}

</div>


{/* third */}

<div className=' flex items-center justify-evenly  p-2 '>
  <h1 className=' text-start relative right-3 text-nowrap '>Employee list</h1>
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
        <div className='w-full max-w-[150px] flex items-center justify-center '>
  <h1 className='w-full p-0.5 m-1 flex items-center border rounded-lg text-center justify-center text-[12px] tracking-wider border-green-400 text-green-400'><icons.CiFilter className='m-1 cursor-pointer'/>Filter</h1>
  <h1 className='w-full p-0.5 m-1 flex items-center border rounded-lg text-center justify-center text-[12px] tracking-wider border-green-400 text-green-400'><icons.MdSort className='m-1 cursor-pointer'/>Sort</h1>
        </div>
</div>
<hr className='w-full max-w-[100%] mt-4 m-auto '/>
{/* fourth */}
{EmployeeListStatus.map(({id,name,payid,role,date,salary,status,action})=>{
return <div key={id} className='border'>
<div className='grid grid-cols-7  bg-green-300 gap-2 place-items-center '>
  <p className='text-[10px] p-0.5 capitalize '>{payid}</p>
  <p className='text-[10px] p-0.5 capitalize '>{name}</p>
  <p className='text-[10px] p-0.5 capitalize '>{role}</p>
  <p className='text-[10px] p-0.5 capitalize '>{date}</p>
  <p className='text-[10px] p-0.5 capitalize '>{salary}</p>
  <p className='text-[10px] p-0.5 capitalize '>{status}</p>
  <p className='text-[10px] p-0.5 capitalize '>{action}</p>
</div>

{EmployeeList.slice(Slice_1,Slice_1+6).map(({id,name,salary,status,role,date,dots,color},index)=>{
  let Icon=icons[dots]
return <div key={id} className='w-full mt-2 grid grid-cols-7 p-1 place-items-center max-[510px]:p-0 border-b'>
  <p className='text-[10px] p-0.5 capitalize '>{id}</p>
  <div className='w-full grid grid-cols-2 place-items-center max-w-[56px] max-[510px]:mr-7'>
  <img src={img} alt="user" className='w-5 h-5 rounded-full  max-[510px]:w-4 ' />
  <p className='text-[10px] p-0.5 capitalize font-bold'>{name}
  </p>
  </div>
  <p className='text-[10px] p-0.5 capitalize '>{role}</p>
  <p className='text-[10px] p-0.5 capitalize '>{date}</p>
  <p className='text-[10px] p-0.5 capitalize '>{salary}</p>
  <p className={`text-[8px] p-[2px] pl-[4px] pr-[4px] rounded  capitalize border ${color?'text-green-500':''} `}>{status}</p>
  <div className='w-full max-w-[40px] flex justify-around border items-center relative cursor-pointer p-0.5'>
  <icons.IoMdEye className='text-[10px] ' onClick={()=>handleClick(index)}/>
  
  {clicked===index ? (<div className='w-full text-center absolute border top-4 '>
    <li className='list-none text-[7px] border bg-pink-100 '>text</li>
  </div>):''}
  <Icon className='text-[8px]'/>
  </div>
</div>
})}
</div>

})}
{/* pagination */}
<div className='w-full flex justify-center mt-6 '>
  {Array.from({ length:EmployeeList.length / 2}, (_, i) => (
  <div key={i} className=" flex items-center m-1 leading-5"><span className={` w-5 h-5   border rounded text-[10px] text-center bg-green-200  cursor-pointer ${Slice_1===i ?"bg-pink-100":"bg-green-300"}`} onClick={(e)=>setSlice_1(i) }>{i+1}</span></div>
  
))}
</div>
      </div>
    </div>
  )
}

export default Center