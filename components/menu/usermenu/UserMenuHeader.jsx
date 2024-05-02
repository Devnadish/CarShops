import React from 'react'
import Text from '@/components/shared/Text'
import AvatarImage from '@/components/shared/image/AvatarImage'
import { Verifyed } from '@/components/svg/Verifyed'
import { NotActive } from '@/components/svg/NotActive'
import ThemeSwitch from '@/components/shared/ThemeSwitch'
import { Pencil } from '@/lib/icons'
import Link from 'next/link'

//  <NotActive className='size-6' />
export function UserMenuHeader({
  image,
  alt,
  isVerified,
  name,
  email,
  userid
}) {
  return (
    <div className='relative z-20  flex w-full flex-col items-center gap-1 border-b'>
      <div className='flex items-center '>
        <div className='z-50 flex  items-center justify-center rounded-full border-none bg-secondary'>
          <AvatarImage
            src={image}
            alt={alt}
            size={24}
            isVerified={isVerified}
            location={'profile'}
          />
        </div>
      </div>

      <div className='absolute -top-4 left-0 z-50 flex  w-full justify-between px-4 '>
        <ThemeSwitch />
        {isVerified ? (
          <Verifyed className='size-8 border-b ' />
        ) : (
          <NotActive className='size-6 border-b' fill='gray' />
        )}
      </div>

      <div
        className='flex w-full items-baseline justify-between gap-1 bg-transparent  '
        name='header'
      >
        <Text fontSize={'large'}>{name}</Text>
        <Text fontSize={'xs'} opacity={'O70'}>
          {email}
        </Text>
      </div>

      <div className='-z-100 absolute left-0 top-5 flex h-1/2 w-full items-end justify-end rounded-md bg-secondary px-4 opacity-80'>
        <Link
          href={`/user/profile/${userid}`}
          className='flex rounded   hover:text-blue-500'
        >
          <Pencil className='size-5 hover:size-6' />
        </Link>
      </div>
    </div>
  )
}
