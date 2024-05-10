'use client'
import { Separator } from '@/components/ui/separator'
import { MessageCircleMore } from '../sections/herosection/logic'
import Link from 'next/link'

export const CommentAction = ({ commentCount = 0 }) => {
  return (
    <div className='flex   items-center justify-evenly gap-4 rounded-lg border p-1 px-2'>
      <Link
        href='#comment_section'
        className={
          'flex h-9 flex-grow items-center justify-center gap-4 rounded border-none bg-transparent  px-2 text-blue-400   hover:bg-blue-600  hover:text-white '
        }
      >
        <MessageCircleMore className='size-6  ' />
        <span className='text-[.8rem]'>{commentCount}</span>
      </Link>
    </div>
  )
}
