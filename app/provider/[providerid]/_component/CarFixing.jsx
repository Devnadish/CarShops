import React from 'react';
import { carLogos } from '@/constant/carLogo'
import Image from 'next/image'
import { SectionTitle } from './SectionTitle';
import { MotionDiv } from '@/components/shared/MotionDiv';
import SectionAnimation from '@/components/shared/SectionAnimation';

export const CarFixing = ({ carType }) => {
  const filteredCars = carLogos.filter(car => carType.includes(car.label));
  return (
    <div className='flex  w-full flex-col items-center justify-center  '>
      <SectionTitle title={'خبراتنا'} />
      <div className='flex  w-full flex-wrap items-center rounded-lg rounded-tr-none justify-center gap-4 overflow-y-auto bg-secondary/50 p-2 py-4'>
        {filteredCars.map((image, index) => (
          <div
            className='flex size-16  max-w-sm flex-col items-center justify-center rounded-lg bg-white/50 p-2 text-lg hover:bg-white/60'
            key={index}
          >
            <Image
              src={image.logo} // Handle missing logo
              alt={image.alt}
              width={50}
              height={50}
              className='rounded-lg object-cover'
            />
            <p className='capitalize text-black text-xs'>{image.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
};
