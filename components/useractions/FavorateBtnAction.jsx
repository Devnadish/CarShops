'use client'
import { Separator } from '@/components/ui/separator'
import { Heart } from '../../app/provider/[providerid]/[slug]/_component/sections/herosection/logic'
import Link from 'next/link'
import { Repeat2 } from '@/lib/icons'

export const FavorateBtnAction = ({ starCount = 0, commentCount = 0 }) => {
  return (
    <div className='flex   items-center justify-evenly gap-4 rounded-lg border p-1 px-2'>
      <Link
        href='#comment_section'
        className={
          'flex h-9  items-center justify-center gap-1 rounded border-none bg-transparent  px-2 text-blue-400   hover:bg-blue-600  hover:text-white '
        }
      >
        <Heart className='size-6  ' />
        <span className='text-[.8rem]'>{commentCount}</span>
      </Link>
    </div>
  )
}
