"use client"
import {motion} from "framer-motion"
const notFound = () =>{
    return(
        <div className="w-full min-h-[90vh] flex flex-col items-center justify-center">
        <h1 className="text-6xl ">
            Bna rha hoon bhai wait kro...
        </h1>
        <div className="w-40 h-auto aspect-square bg-red-700 rounded-full mt-6 flex items-center justify-center gap-4">
            <div className="w-4/12 h-auto aspect-video bg-white rounded-b-full"></div>
            <div className="w-4/12 h-auto aspect-video bg-white rounded-b-full "></div>
        </div>
        <motion.div className="bg-black w-10 h-auto aspect-video border-2 rounded-full -translate-y-10" 
        animate={{
            skewX:[30,0,-30,0,40],
            scaleY:[1,0,-1,0,1],
            y:-50,
        }}
        initial={{
            y:-50,
        }}
        transition={{
            duration:2,
            repeat:Infinity,
        }}
        ></motion.div>
        </div>
    );
}
export default notFound;