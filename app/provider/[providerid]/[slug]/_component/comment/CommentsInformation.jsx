import { Dislike, Like } from '@/components/svg/LikeAndDislike'
import { Car, MessageCircleMore } from '@/lib/icons'
import React from 'react'

function CommentsInformation({commentCount=0,likeCount=0,dislikeCount=0}) {
  return (
    <div className='flex items-center justify-between'>
      <DataShow
        icon={<MessageCircleMore strokeWidth={1} className='size-4' />}
        data={commentCount}
      />
      <DataShow
        icon={<Dislike strokeWidth={1} className='size-4' />}
        data={dislikeCount}
      />
      <DataShow
        icon={<Like strokeWidth={1} className='size-4' />}
        data={likeCount}
      />
    </div>
  )
}

export default CommentsInformation
const DataShow =({icon,data})=>{
  return (
    <div className='items-ceter flex justify-center gap-2 border px-3 py-1 rounded-md opacity-40'>
      <span className='text-xs'> {data}</span>
     {icon}
    </div>
  )
}