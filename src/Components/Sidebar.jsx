import React, { useState } from "react";
import { SidebarText, icons ,payment} from "./Index";
import { useGlobalContext } from "../ContextApi";

const Sidebar = () => {
   const {setUser,user} = useGlobalContext();

   
  const [Dashboard, setDashboard] = useState(" ");
  const [Payment, setPayment] = useState(" ");
  return (
    <div className={`w-full max-w-[240px] bg-white transition-all duration-500 border-black 
  ${user ? "hidden" : ""} 
  max-md:hidden p-2`}>

      <div className="w-full max-w items-center m-auto ">
        <div className="bg-green-300 flex justify-around items-center p-2 rounded  ">
          <icons.MdOutlineDashboardCustomize />
          <span className="text-[12px]">Dashboard</span>
         {Dashboard?<icons.IoMdArrowDropdown className="cursor-pointer " onClick={() => setDashboard(!Dashboard)}/>:
   <icons.IoMdArrowDropup className="cursor-pointer " onClick={() => setDashboard(!Dashboard)}/>}
        </div>
      </div>
      {Dashboard
        ? SidebarText.map(({ id, name, iconsText }) => {
            const IconComp = icons[iconsText];
            return (
              <p
                key={id}
                className=" border flex items-center gap-2 capitalize p-2 hover:bg-gray-100 m-1 cursor-pointer"
              >
                <IconComp className="text-[11px]" />
                <span className="text-[10px] tracking-wider">{name}</span>
              </p>
            );
          })
        : ""}
      <div className="bg-green-100 flex justify-around items-center p-0.5 mt-4 rounded ">
        <icons.FaApplePay className="text-[2rem]" />
        <span className="text-[12px]">payrolls</span>
        {Payment?<icons.IoMdArrowDropdown className="cursor-pointer " onClick={() => setPayment(!Payment)}/>:
   <icons.IoMdArrowDropup className="cursor-pointer " onClick={() => setPayment(!Payment)}/>}
        
      </div>
      <div className="">
        
      {Payment
        ?
        <div className="w-full max-w-[140px] border-l m-auto mt-2">
        <ul className="cursor-pointer">
          <li className="h-5 flex items-center text-sm p-1 m-1 hover:border-l-4 border-green-500 relative right-1.5   "><icons.LuBoxes className="text-[18px] p-1"/> <span className="text-[8px]">Employee</span></li>
          <li className=" h-5 flex items-center text-sm p-1 m-1 hover:border-l-4 border-green-500 relative right-1.5 "><icons.LuBoxes className="text-[18px] p-1"/> <span className="text-[8px]">Advanced</span></li>
          <li className=" h-5 flex items-center text-sm p-1 m-1 hover:border-l-4 border-green-500 relative right-1.5 "><icons.LuBoxes className="text-[18px] p-1"/> <span className="text-[8px]">Generate</span> </li>
        </ul>
        </div>: ""}
        {
         payment.map(({ id, name, iconsText }) => {
            const IconComp = icons[iconsText];
            return (
              <p
                key={id}
                className="border flex items-center gap-2 capitalize p-2 hover:bg-gray-100 m-1 cursor-pointer"
              >
                <IconComp className="text-[10px]" />
                <span className="text-[10px] tracking-wider">{name}</span>
              </p>
            );
          })}
        </div>

        <div className="w-full max-w-[120px] m-auto mt-10 flex items-center justify-center border rounded-lg bg-green-400 p-1 cursor-pointer relative top- ">
          <p className="m-1 text-sm ">Logout</p>
          <icons.CiLogout className="m-1 "/>
        </div>
    </div>
  );
};

export default Sidebar;
