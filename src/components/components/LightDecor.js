import React from 'react'
import Image from 'next/image'

export const LightDecor = () => {
  return (
    <div className="absolute right-5 bottom-0 inline-block w-24 lg:-bottom-20 xl:-bottom-20">
        <Image 
        src="/Lamp.svg"
        width="500"
        height="500"
        alt='Lamp'
        className='w-full h-auto '/>
    </div>
  )
}
