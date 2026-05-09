"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: Fades in at 0, fades out by 0.15
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

  // Section 2: Fades in at 0.25, fades out by 0.45
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.25, 0.4, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.45], [50, -50]);

  // Section 3: Fades in at 0.55, stays until 0.8, fades out at 0.9
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.55, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.9], [50, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center items-center h-screen">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute w-full px-6 md:px-20 text-center flex flex-col items-center justify-center"
      >
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
          Raghav Kumar.
        </h1>
        <p className="text-xl md:text-3xl text-zinc-300 mt-4 tracking-tight drop-shadow-md">
          Creative Full Stack Developer.
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute w-full px-6 md:px-20 flex flex-col items-start justify-center max-w-[1400px]"
      >
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl max-w-2xl leading-tight">
          I build digital <br />
          <span className="text-zinc-400">experiences.</span>
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute w-full px-6 md:px-20 flex flex-col items-end justify-center text-right max-w-[1400px]"
      >
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl max-w-2xl leading-tight">
          Bridging design <br />
          <span className="text-zinc-400">and engineering.</span>
        </h2>
      </motion.div>
    </div>
  );
}
