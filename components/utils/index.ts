import { easeInOut } from "motion";

const createEyeVariant = (size: number,duration:number) => ({
  visible: {
    x: [size, 0, -size, 0,0,0,size],
    y: [0, size, 0, -size,0,0,0],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: easeInOut,
    },
  },
});
const duration = 5;
// Generate variants dynamically
export const eyeVariants = {
  eye1: createEyeVariant(15,duration),
  eye2: createEyeVariant(12,duration),
  eye3: createEyeVariant(9,duration),
  eye4: createEyeVariant(6,duration),
  eye5: createEyeVariant(10,duration),
};
