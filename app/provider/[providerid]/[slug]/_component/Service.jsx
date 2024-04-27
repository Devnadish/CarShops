import React from 'react';
import { SectionTitle } from './SectionTitle';
import Text from '@/components/shared/Text';
import Image from 'next/image'

export const Service = ({providerService}) => {
  return (
    <div className='flex  w-full flex-col items-center justify-center'>
      <SectionTitle title={'خدماتنا'} />
      <div className='flex  w-full items-center justify-center flex-wrap bg-secondary gap-4 p-2 rounded-lg rounded-tr-none'>
        {providerService.map(service => {
          return (
            <div
              key={service.id}
              className='flex flex-col items-center justify-center md:justify-between  md:flex-row  gap-4 rounded-lg border p-4 shadow-sm hover:shadow-2xl w-full'
            >
              <div className='flex flex-col items-center justify-center gap-3'>
                <div className='w-fit self-start border-b-4 px-3'>
                  <Text>{service.service}</Text>
                </div>
                <Text>{service.detail}</Text>
              </div>
              <div className='max-w-[200px]  w-full flex items-center justify-center shadow-lg bg-transparent p-2 rounded-lg '>

              <Image
                src={service.image} // Handle missing logo
                alt={service.image}
                width={1300}
                height={100}
                className='embla__slide__img rounded-lg  '
              />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
