"use client"
import { motion } from "framer-motion";
import { eyeVariants} from "./utils";
export function AnimatedEye() {
  let measurement = 8;

  return (
    <div className="w-32 h-32 flex items-center justify-center bg-w">
      <motion.div
        className="flex items-center justify-center rounded-full border-2 border-white "
        style={{ width: `${measurement}rem`, height: `${measurement}rem`}}
        animate="visible"
        variants={eyeVariants.eye1}
        
      >
        <motion.div
          className="flex items-center justify-center rounded-full border-2 border-white"
          style={{ width: `${measurement - 1.5}rem`, height: `${measurement - 1.5}rem` }} 
          animate="visible"

          variants={eyeVariants.eye2}
          
        >
          <motion.div
            className="flex items-center justify-center rounded-full border-2 border-white"
            style={{ width: `${measurement - 3}rem`, height: `${measurement - 3}rem` }}
            animate="visible"

            variants={eyeVariants.eye3}
          >
            <motion.div
              className="flex items-center justify-center rounded-full border-2 border-white"
              style={{ width: `${measurement - 4.5}rem`, height: `${measurement - 4.5}rem` }}
              animate="visible"
    
              variants={eyeVariants.eye4}
            >
              <motion.div
                className="rounded-full border-2 border-white"
                style={{ width: `${measurement - 6}rem`, height: `${measurement - 6}rem` }}
                animate="visible"
    
                variants={eyeVariants.eye5}
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
