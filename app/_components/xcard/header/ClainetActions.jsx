import { Button } from '@/components/ui/button'
import { Dislike, Like } from '@/components/svg/LikeAndDislike'
import { MessageCircleMore, Star } from '@/lib/icons'

export const ClainetActions = ({
  starCount,
  commentCount,
  likeCount,
  disLikeCount
}) => {
  const btnStyle =
    'flex  items-center gap-1 border p-0 px-2 bg-transparent hover:bg-primary '
  return (
    <div className='flex w-fit   items-center  justify-end gap-1  opacity-65  '>
      <Button variant='outline' size='sm' className={btnStyle}>
        <Like className='size-4 p-0' />
        <span className='text-[.6rem]'>{likeCount}</span>
      </Button>
      <Button variant='outline' size='sm' className={btnStyle}>
        <Dislike className='size-4' />
        <span className='text-[.6rem]'>{disLikeCount}</span>
      </Button>

      <Button variant='outline' size='sm' className={btnStyle}>
        <Star
          size={20}
          fill='#fff'
          strokeWidth={1}
          className='size-4 text-yellow-300'
        />
        <span className='text-[.6rem]'>{starCount}</span>
      </Button>
      <Button variant='outline' size='sm' className={btnStyle}>
        <MessageCircleMore
          size={20}
          fill='#fff'
          strokeWidth={1}
          className='size-4 text-yellow-300'
        />
        <span className='text-[.6rem]'>{commentCount}</span>
      </Button>
    </div>
  )
}
