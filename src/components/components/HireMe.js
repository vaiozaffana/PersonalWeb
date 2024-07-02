import React from 'react'
import { CircularText } from './Icons'
import { Link } from '@nextui-org/react'

export const HireMe = () => {
  return (
    <div className='fixed left-[-20px] bottom-10 flex items-center justify-center overflow-hidden md:right-0 md:left-auto md:-top-2 md:bottom-auto md:absolute'>
      <div className='w-48 md:w-[150px] h-auto flex items-center justify-center relative'>
        <CircularText className='animate-spin-slow'/>
        <Link href='mailto:vaiozaffana@gmail.com' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-50 text-darkGray shadow-md border border-solid border-slate-50
         w-[70px] h-[70px] md:w-[60px] md:h-[60px] rounded-full text-[15px] md:text-[12px] font-semibold hover:bg-darkGray hover:text-slate-50'>Hire Me</Link>
      </div>
    </div>
  )
}
