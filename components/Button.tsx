"use client";
import { motion } from "framer-motion";
export default function Button() {
  return (
    <>
    <div className="relative w-fit">
    <motion.div className="w-4 h-4 bg-yellow-500/40 absolute top-0 left-0 scale-150 rounded-full z-10"
    animate={{
        x:[-2,70,70,-2,-2],
        y:[-2,-2,35,35,-2],
    }}
    transition={{
        duration:5,
        repeat:Infinity,
    }}
    ></motion.div>
    <button className="p-2 whitespace-nowrap border-2 rounded-md z-20">Hire Me</button>
    
    </div>
    </>
   );
}
