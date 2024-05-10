import React from 'react'
import Image from 'next/image'
import { SectionTitle } from '../../../../../../../components/shared/SectionTitle'

export const CarFixing = ({ carType }) => {
  return (
    <div className='flex  w-full flex-col items-center justify-center  '>
      <SectionTitle title={'خبراتنا'} />
      <div className='flex  w-full flex-wrap items-center justify-center gap-4 overflow-y-auto rounded-lg rounded-tr-none bg-secondary/50 p-2 py-4'>
        {carType.map((image, index) => (
          <div
            className='flex size-16  max-w-sm flex-col items-center justify-center rounded-lg bg-white/50 p-2 text-lg hover:bg-white/60'
            key={index}
          >
            <Image
              src={image.image} // Handle missing logo
              alt={image.name}
              width={50}
              height={50}
              className='rounded-lg object-cover'
            />
            <p className='text-xs capitalize text-black'>{image.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
