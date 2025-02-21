"use client"
import { motion } from "framer-motion";
import { eyeVariants} from "./utils";
export function AnimatedEye() {
  const measurement = 40;
  const sizeArray = [measurement,measurement - (measurement/5),measurement - (measurement/5)*2,measurement - (measurement/5)*3,]

  return (
    <div
    style={{ width: `${sizeArray[0]}px`, height: `${sizeArray[0]}px`}}
    className="border-2 border-white rounded-full flex items-center justify-center">
      <motion.div
        className="flex items-center justify-center rounded-full border-2 border-white "
        style={{ width: `${sizeArray[1]}px`, height: `${sizeArray[1]}px`}}
        animate="visible"
        variants={eyeVariants.eye1}
        
      >
        <motion.div
          className="flex items-center justify-center rounded-full border-2 border-white"
          style={{ width: `${sizeArray[2]}px`, height: `${sizeArray[2]}px` }} 
          animate="visible"

          variants={eyeVariants.eye2}
          
        >
          <motion.div
            className="flex items-center justify-center rounded-full border-2 border-white"
            style={{ width: `${sizeArray[3]}px`, height: `${sizeArray[3]}px` }}
            animate="visible"

            variants={eyeVariants.eye3}
          >
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
