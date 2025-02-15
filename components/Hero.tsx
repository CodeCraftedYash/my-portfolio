import React from 'react'
import { BackgroundLines } from './BackgroundLines'
import Image from 'next/image'
import ProfilePic from '@/public/yash.png'


interface Words {
 text: string
 className: string
}

function Hero() {
  const words: Words[] = [
    { text: "Frontend Developer", className: "text-blue-500" },
    { text: "Next.js Enthusiast", className: "text-red-500" }
  ]

  return (
    <>
      <BackgroundLines className='relative w-full flex flex-col items-center'>
        <div className='mt-[40vh] text-center'>
          <div className='flex flex-col '>
          <h2 className='text-6xl font-bold'>Web Developer</h2>

          <h3 className='text-xl'>specializing in frontend devlopment</h3>
          </div>
          <div className='relative w-32 h-32 flex items-center justify-center rounded-full ml-80 mt-12  p-4'>
          
          <div className="absolute inset-1 rounded-full border-2 animate-wiggle-animation z-0 bg-background/20 backdrop-blur-sm" >
            
          </div>
            <Image
              src={ProfilePic}
              alt="Me"
              layout="intrinsic"
              width={100}
              height={100}
              className='rounded-full object-cover object-[0px_-20px] z-10 scale-90'
            />
          </div>
        </div>
       
      </BackgroundLines>
    </>
  )
}

export default Hero
