'use client'

import Link from 'next/link'
import { Repeat2 } from '@/lib/icons'

export const ShareBtnAction = ({ starCount = 0, commentCount = 0 }) => {
  return (
    <div className='flex   items-center justify-evenly gap-4 rounded-lg border p-1 px-2'>
      <Link
        href='#stars_section'
        className={
          'flex h-9  items-center justify-center gap-1 rounded border-none bg-transparent  px-2 text-yellow-300   hover:bg-yellow-300  hover:text-black '
        }
      >
        <Repeat2 className='size-6 ' />
        <span className='text-[.8rem]'>{starCount}</span>
      </Link>
    </div>
  )
}
