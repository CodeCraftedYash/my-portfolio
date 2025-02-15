"use client"; // Only for Next.js (app directory)
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MeteorAnimation() {
  const [pathLength, setPathLength] = useState(0);
  const [pathRef, setPathRef] = useState<SVGPathElement | null>(null);

  // Get total path length for animation
  useEffect(() => {
    if (pathRef) {
      setPathLength(pathRef.getTotalLength());
    }
  }, [pathRef]);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <svg width="500" height="200" viewBox="0 0 500 200">
        {/* Invisible Path for Motion */}
        <path
          ref={setPathRef}
          d="M 50 150 Q 250 50, 450 150"
          fill="none"
          stroke="gray"
          strokeWidth="2"
          strokeDasharray="4 4"
        />

        {/* Moving Meteor */}
        {pathLength > 0 && (
          <motion.circle
            r="10"
            fill="orange"
            stroke="yellow"
            strokeWidth="2"
            animate={{
              offsetDistance: ["0%", "100%"],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            style={{
              offsetPath: `path('M 50 150 Q 250 50, 450 150')`,
            }}
          />
        )}
      </svg>
    </div>
  );
}
