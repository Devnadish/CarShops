import React from 'react'
import Text from '@/components/shared/Text'
import { Button } from '@/components/ui/button'
import { ctaMessage } from './HeroSection'
import CitySVG from '@/components/svg/CitySVG'
import Link from 'next/link'
import { Clock } from '@/lib/icons'

export function TextSide(props) {
  return (
    <div className='flex w-full flex-col items-start justify-start gap-8'>
      <div className='flex w-full flex-col items-start gap-2 self-start px-4 text-xl font-bold md:text-2xl'>
        <Text className={'border-b-8 px-4'}>{props.providerName}</Text>
        <div className='flex w-full items-center gap-4 opacity-55'>
          <div className='flex items-center gap-2'>
            <CitySVG className='size-4' />
            <Text fontSize={'xs'} fontFamily={'tajwal'}>
              {props.city}
            </Text>
          </div>
          <div className='flex items-center gap-2 border-b'>
            <Text fontSize={'xs'} fontFamily={'tajwal'}>
              <span> عدد الفروع:</span>
              {props.branchCount}
            </Text>
          </div>
        </div>
      </div>

      <Text
        className={'self-center px-1 text-center text-xl'}
        opacity={'O70'}
        fontFamily={'tajwal'}
      >
        {props.heroSlogon}
      </Text>
      <div className='flex w-full flex-grow flex-col items-center justify-around gap-4  md:flex-row'>
        <Button variant='outline' className='h-12 w-full flex-grow md:w-1/2'>
          <Text>{ctaMessage}</Text>
        </Button>
        <Link
          href='#footer'
          className='flex h-12 w-full flex-grow items-center justify-center gap-4 rounded-md border bg-secondary p-3 hover:bg-primary/40 hover:shadow-lg md:w-1/2'
        >
          <Clock />
          <Text fontSize={'small'}>ساعات العمل</Text>
        </Link>
      </div>
    </div>
  )
}
