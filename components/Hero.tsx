import React from 'react'
import { BackgroundLines } from './BackgroundLines'
import Image from 'next/image'
import ProfilePic from '@/public/yash.png'
import { AnimatedEye } from './AnimatedEye'

function Hero() {
  return (
    <>
     
         <div className='flex flex-col w-full min-h-fit items-center justify-center relative pb-20 lg:pb-0'>
         <BackgroundLines>
          <div className='w-full flex flex-col'>
          <div className='w-5/6 place-self-center mt-12 lg:mt-28'>
          <h2 className='text-3xl font-bold text-center lg:text-6xl'>Web Developer</h2>

          <h3 className='text-lg text-center font-light my-2 lg:my-4'>specializing in frontend development</h3>
          </div>
          <div className='w-full h-full flex flex-col items-center justify-center'>{/**Image + eye */}

          <div className='relative w-28 h-28 flex items-center justify-center rounded-full  p-4 mt-2 lg:scale-150 lg:my-12'>
          
          <div className="absolute inset-1 rounded-full border-2 animate-wiggle-animation z-0 bg-background/20 backdrop-blur-sm" > </div>
              <Image
              src={ProfilePic}
              alt="Me"
              width={100}
              height={100}
              className='rounded-full object-cover object-[0px_-20px] z-10 scale-90'
            />
          </div>
          <div className='place-self-start w-fit h-fit scale-75 lg:scale-100 lg:absolute top-40 left-96 ml-2 '>
            <AnimatedEye />
            </div>
          </div>
          
            </div>
          </BackgroundLines>
          </div>
        
       
      
    </>
  )
}

export default Hero
