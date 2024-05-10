import Text from '@/components/shared/Text'
import { Eye, HeartHandshake, MessageCircleMore, StarIcon } from '@/lib/icons'
import React from 'react'
import { Like } from '@/components/svg/LikeAndDislike'
import { Separator } from '@/components/ui/separator'

export const CardBar = ({
  likeCount,
  viewerCount,
  starCount,
  commentCount,
  favCount
}) => {
  const style1 =
    'flex h-8 w-12  items-center justify-center rounded  p-1 text-muted-foreground '
  return (
    <div className='flex h-9 w-full items-center justify-evenly  border-t'>
      <Text fontSize={'xs'} className={style1}>
        <StarIcon className='size-4 text-yellow-300 ' />
        {starCount}
      </Text>
      <Separator orientation='vertical' />
      <Text fontSize={'xs'} className={style1}>
        <MessageCircleMore className='size-4 text-green-500' />
        {commentCount}
      </Text>
      <Separator orientation='vertical' />
      <Text fontSize={'xs'} className={style1}>
        <Like className='size-4 text-blue-800' />
        {likeCount}
      </Text>
      <Separator orientation='vertical' />
      <Text fontSize={'xs'} className={style1}>
        <Eye className='size-4 text-purple-800 ' />
        {viewerCount}
      </Text>
      <Separator orientation='vertical' />
      <Text fontSize={'xs'} className={style1}>
        <HeartHandshake className='size-4 text-red-500' />
        {favCount}
      </Text>
    </div>
  )
}
