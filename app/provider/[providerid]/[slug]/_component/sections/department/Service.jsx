import React from 'react'
import { SectionTitle } from '../../../../../../../components/shared/SectionTitle'
import Text from '@/components/shared/Text'
import Image from 'next/image'

export const Service = ({ providerService }) => {
  return (
    <div className='flex  w-full flex-col items-center justify-center'>
      <SectionTitle title={'الاقسام الرئسية'} />
      <div className='flex  w-full flex-wrap items-center justify-center gap-4 rounded-lg rounded-tr-none bg-secondary p-2'>
        {providerService.map(service => {
          return (
            <div
              key={service.id}
              className='flex w-full max-w-xs flex-col items-center justify-center gap-4  rounded-lg  border  p-4 shadow-sm hover:shadow-2xl '
            >
              <Text>{service.service}</Text>

              <div className='relative flex size-24 items-center justify-center rounded-lg  border '>
                <Image
                  src={service.logo || '/logo.svg'} // Handle missing logo
                  alt={service.service}
                  fill
                  className='rounded-lg object-contain '
                />
              </div>
              <ShowSubpoints subPoints={service.subPoints} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

const ShowSubpoints = ({ subPoints }) => {
  return (
    <ul>
      {subPoints.map(subPoint => {
        return <li>{subPoint}</li>
      })}
    </ul>
  )
}
