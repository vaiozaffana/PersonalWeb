import { Link } from '@nextui-org/react'
import React from 'react'

export const Button = () => {
  return (
    <div className='flex items-center self-start lg:self-center md:self-center sm:self-center xs:self-center mb-[41px] mt-5'>
        <Link href='/CV_Vaio Prasa Zaffana.pdf' 
        target={"_blank"} 
        className='flex items-center bg-slate-100 text-darkGray border-2 border-darkGray hover:border-slate-100 hover:bg-slate-800 hover:text-slate-100 p-2.5 px-6 rounded-lg text-lg font-bold'
        showAnchorIcon
        download={true}
        >Resume</Link>
        <Link href='mailto:vaiozaffana@gmail.com' 
        target={"_blank"}
        className='ml-4 text-lg font-semibold text-slate-100 underline'>Contact</Link>
    </div>
  )
}
