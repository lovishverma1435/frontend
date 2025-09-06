import {
  IoMdEye,
  IoIosSearch,
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoIosNotificationsOutline,
} from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineDashboardCustomize, MdSort } from "react-icons/md";
import { HiReceiptTax, HiDotsVertical } from "react-icons/hi";
import { GrTasks, GrDocumentPerformance } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { TbArrowBadgeDown,TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { RiSidebarFoldFill } from "react-icons/ri";
import {
  CiBellOn,
  CiCalendarDate,
  CiLogout,
  CiFilter,
  CiExport,
} from "react-icons/ci";
import {
  IoPersonCircleSharp,
  IoSettingsOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";
import { LuBoxes } from "react-icons/lu";
import { FaApplePay, FaFileInvoiceDollar } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { ImGrin2 } from "react-icons/im";
import { nanoid } from "nanoid";
import { PiExportBold } from "react-icons/pi";


let icons = {
  IoMdEye,
  MdCheckBoxOutlineBlank,
  MdOutlineDashboardCustomize,
  IoIosSearch,
  CiBellOn,
  GrTasks,
  IoPersonCircleSharp,
  CiCalendarDate,
  IoSettingsOutline,
  IoHelpCircleOutline,
  GrDocumentPerformance,
  FaApplePay,
  IoMdArrowDropdown,
  IoMdArrowDropup,
  CiLogout,
  FaFileInvoiceDollar,
  HiReceiptTax,
  CiFilter,
  MdSort,
  CiExport,
  HiDotsVertical,
  AiOutlineBars ,
  TbArrowBadgeDown,
  RiSidebarFoldFill,
   IoIosNotificationsOutline,
   LuMail ,
   ImGrin2 ,
  TbLayoutSidebarLeftCollapseFilled ,
  LuBoxes,
  PiExportBold
};
let EmployeeListStatus = [
  {
    id: nanoid(),
    payid: "Payroll-Id",
    name: "Name",
    role: "Role",
    date: "Date",
    salary: "Salary",
    status: "Status",
    action: "Action",
  },
];

let EmployeeList = [
  {
    id: "01",
    name: "rlyad",
    role: "App Designer",
    date: "01-03-2025",
    salary: "$2000.0",
    status: "completed",
    action: "IoMdEye",
    dots: "HiDotsVertical",
  },
  {
    id: "02",
    name: "parvez",
    role: "UX Designer",
    date: "10-03-2025",
    salary: "$1000.0",
    status: "completed",
    action: "IoMdEye",
    dots: "HiDotsVertical",
  },
  {
    id: "03",
    name: "peter",
    role: "Web Designer",
    date: "23-03-2025",
    salary: "$800.01",
    status: "completed",
    action: "IoMdEye",
    dots: "HiDotsVertical",
  },
  {
    id: "04",
    name: "john",
    role: "UI Designer",
    date: "02-03-2025",
    salary: "$3000.0",
    status: "pending",
    action: "IoMdEye",
    dots: "HiDotsVertical",
    color:'text-green-300'
  },
  {
    id: "05",
    name: "peues",
    role: "UX Designer",
    date: "12-03-2025",
    salary: "$1200.0",
    status: "completed",
    action: "IoMdEye",
    dots: "HiDotsVertical",
  },
  {
    id: "06",
    name: "sham",
    role: "UI Designer",
    date: "13-04-2025",
    salary: "$900.0",
    status: "pending",
    action: "IoMdEye",
    dots: "HiDotsVertical",
    color:'text-green-300'
  },
  {
    id: "07",
    name: "joe",
    role: "UX Designer",
    date: "05-05-2025",
    salary: "$1100.0",
    status: "pending",
    action: "IoMdEye",
    dots: "HiDotsVertical",
    color:'text-green-300'
  },
  {
    id: "08",
    name: "yull",
    role: "UX Designer",
    date: "08-08-2025",
    salary: "$1200.0",
    status: "completed",
    action: "IoMdEye",
    dots: "HiDotsVertical",
  },
  {
    id: "09",
    name: "roya",
    role: "UX Designer",
    date: "12-03-2025",
    salary: "$2000.0",
    status: "completed",
    action: "IoMdEye",
    dots: "HiDotsVertical",
  },
  {
    id: "10",
    name: "ram",
    role: "UX Designer",
    date: "12-03-2025",
    salary: "$4000.0",
    status: "pending",
    action: "IoMdEye",
    dots: "HiDotsVertical",
    color:'text-green-300'
  },
  {
    id: "11",
    name: "ram",
    role: "UX Designer",
    date: "12-03-2025",
    salary: "$4000.0",
    status: "pending",
    action: "IoMdEye",
    dots: "HiDotsVertical",
    color:'text-green-300'
  },
  {
    id: "12",
    name: "ram",
    role: "UX Designer",
    date: "12-03-2025",
    salary: "$4000.0",
    status: "pending",
    action: "IoMdEye",
    dots: "HiDotsVertical",
    color:'text-green-300'
  },
  {
    id: "13",
    name: "ram",
    role: "UX Designer",
    date: "12-03-2025",
    salary: "$4000.0",
    status: "pending",
    action: "IoMdEye",
    dots: "HiDotsVertical",
    color:'text-green-300'
  },
  {
    id: "13",
    name: "ram",
    role: "UX Designer",
    date: "12-03-2025",
    salary: "$4000.0",
    status: "pending",
    action: "IoMdEye",
    dots: "HiDotsVertical",
    color:'text-green-300'
  },
  {
    id: "14",
    name: "ram",
    role: "UX Designer",
    date: "12-03-2025",
    salary: "$4000.0",
    status: "pending",
    action: "IoMdEye",
    dots: "HiDotsVertical",
    color:'text-green-300'
  },
  {
    id: "14",
    name: "ram",
    role: "UX Designer",
    date: "12-03-2025",
    salary: "$4000.0",
    status: "pending",
    action: "IoMdEye",
    dots: "HiDotsVertical",
    color:'text-green-300'
  },
  {
    id: "15",
    name: "ram",
    role: "UX Designer",
    date: "12-03-2025",
    salary: "$4000.0",
    status: "pending",
    action: "IoMdEye",
    dots: "HiDotsVertical",
    color:'text-green-300'
  },
  
];

let SidebarText=[
  {id:1,name:'tasks' ,iconsText:'GrDocumentPerformance'},
  {id:2,name:'recruitment' ,iconsText:'GrTasks'},
  {id:3,name:'calender' ,iconsText:'CiCalendarDate'},
  {id:4,name:'setting' ,iconsText:'IoSettingsOutline'},
  {id:5,name:'help & center' ,iconsText:'IoHelpCircleOutline'},
  {id:6,name:'performance' ,iconsText:'GrDocumentPerformance'},
]
let payment=[
  {id:1,name:'Employee' ,iconsText:'MdCheckBoxOutlineBlank'},
  {id:2,name:'invoice' ,iconsText:'HiReceiptTax'},
  {id:3,name:'hiring' ,iconsText:'GrDocumentPerformance'},
]
let payrollcost=[
  {payrollcost:'payrolls cost',amount:'$222.500',percent:'+6%',month:'lastmonth'},
  {payrollcost:'total expense',amount:'$422.500',percent:'+6%',month:'lastmonth'},
  {payrollcost:'pending payments ',amount:'$3.980',percent:'+6%',month:'lastmonth'},
  {payrollcost:'total payrolls',amount:'$100 ',percent:'-2%',month:'lastmonth'},
  {payrollcost:'total payrolls loss',amount:'$200 ',percent:'-3%',month:'lastmonth'},
  
]

export  { icons, EmployeeList, EmployeeListStatus ,SidebarText ,payment,payrollcost};
