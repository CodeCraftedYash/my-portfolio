'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button  from '@/components/Button';
import { useRouter } from 'next/navigation';
export default function Hero() {
  const router = useRouter();

  const handleViewMyWork = () => {
    router.push("/projects");
  };

  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-lg mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Hi, I'm <span className="text-blue-400">Yash Mishra</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Frontend Developer | React, Next, Typescript , tailwind
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <Button variant="primary" onClick={handleViewMyWork}>View My Work</Button>
          <Button variant="outline">Contact Me</Button>
        </div>
      </motion.div>
      
      <motion.div className="mt-10 aspect-square p-4" 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}>
        <Image
          src="https://avatars.githubusercontent.com/u/169592751?v=4"
          alt="Profile Image"
          width={200}
          height={200}
          className="rounded-full border-4 border-blue-400 shadow-lg"
        />
      </motion.div>
    </section>
  );
}
