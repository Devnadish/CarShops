import React from 'react'
import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export function HeroImage(props) {
  return (
    <div className='relative flex  w-full items-center justify-center rounded-lg'>
      <AspectRatio ratio={16 / 9} className='bg-muted'>
        <Image
          src={props.logo} // Handle missing logo
          alt={props.providerName}
          fill
          className='rounded-lg object-cover' // Add 'block mx-auto' classes
        />
      </AspectRatio>
    </div>
  )
}
