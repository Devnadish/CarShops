import React from 'react'
import Text from '@/components/shared/Text'
import { MoreInfo } from './MoreInfo'
import Image from 'next/image'

export const ExtraServiceDescription = ({
  icon,
  title,
  description,
  subPoints
}) => {
  return (
    <div className='relative flex  flex-col items-center justify-center gap-4  '>
      <Text opacity={'O70'}>{title}</Text>
      <div className='relative flex size-12  max-w-sm flex-col items-center justify-center rounded-lg  border   '>
        <Image
          src={icon || '/logo.svg'} // Handle missing logo
          alt={title}
          fill
          className='rounded-lg object-cover p-1'
        />
      </div>
      <MoreInfo description={description} subPoints={subPoints} title={title} />
    </div>
  )
}
