"use client"
import { motion } from "motion/react"
import { variants } from "./utils/arrow"
function Name() {
  return (
    <div className="w-auto h-auto flex flex-col relative items-center overflow-hidden scale-75 bg-transparent">
       <h1 className=" text-4xl font-black -tracking-tighter">YASH</h1>
       <h1 className="text-4xl font-black -tracking-tighter">MISHRA</h1>
       
       <motion.div className="w-full h-full absolute -left-28"
       variants={variants}
       animate="visible"
       initial="hidden">
       <div className="flex flex-row"
       
       >
         <div className="w-32 h-8 bg-red-500 "></div>
         <div className="w-8 h-8 bg-red-500  rotate-45 -translate-x-2"></div>
       </div>              
       </motion.div>
       <motion.div className="w-full h-full absolute -right-20  -bottom-0"
       variants={variants}
       animate="visible2"
       initial="hidden2">
       <div className="flex flex-row"
       
       >
         <div className="w-32 h-8 bg-red-500 "></div>
         <div className="w-8 h-8 bg-red-500  rotate-45 -translate-x-2"></div>
       </div>              
       </motion.div>
      
    </div>
  )
}

export default Name