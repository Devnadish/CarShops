'use client'

import {
  Button,
  Dislike,
  Like,
  MessageCircleMore,
  Star,
  handleLike,
  handleDisLike,
  useState,
  SubSpinner
} from './logic'

export const ClainetActions = ({
  starCount,
  commentCount,
  likeCount,
  disLikeCount,
  providerId,
  session
}) => {
  const [isLikeLoading, setLikeisLoading] = useState(false)
  const [isDisLikeLoading, setDisLikeisLoading] = useState(false)
  const btnStyle =
    'flex  items-center gap-1 border p-0 px-2 bg-transparent hover:bg-primary '
  return (
    <div className=' relative flex w-full   items-center  justify-end gap-1    '>
      <Button
        onClick={() => {
          handleLike(providerId, session, setLikeisLoading)
        }}
        variant='outline'
        size='sm'
        className={btnStyle}
      >
        {isLikeLoading ? (
          <SubSpinner />
        ) : (
          <>
            <Like className='size-4 p-0' />
            <span className='text-[.6rem]'>{likeCount}</span>
          </>
        )}
      </Button>

      <Button
        variant='outline'
        onClick={() => {
          handleDisLike(providerId, session, setDisLikeisLoading)
        }}
        size='sm'
        className={btnStyle}
      >
        {isDisLikeLoading ? (
          <SubSpinner />
        ) : (
          <>
            <Dislike className='size-4' />
            <span className='text-[.6rem]'>{disLikeCount}</span>
          </>
        )}
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
