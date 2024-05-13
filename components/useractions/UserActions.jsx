import { CommentAction } from '@/app/provider/[providerid]/[slug]/_component/navbar/CommentAction'
import React from 'react'
import { Separator } from '../ui/separator'
import StarAction from './StarAction'
import { LikeBtnAction } from './LikeBtnAction'
import { DisLikeBtnAction } from './DisLikeBtnAction'
import { ShareBtnAction } from './ShareBtnAction'
import FavAction from './FavAction'

function UserActions({
  starCount,
  commentCount,
  session,
  providerId,
  isStar = 0,
  likeCount = 0,
  disLikeCount = 0,
  viewerCount = 0,
  shareCount,
  favCount,
  userActions
}) {
  return (
    <div className='fixed bottom-0 left-0 z-50 flex h-12 w-full  items-center justify-end gap-8   bg-secondary px-1 shadow-xl '>
      <div className='flex  items-center gap-2 '>
        <StarAction
          starCount={starCount}
          session={session}
          providerId={providerId}
          isStar={isStar}
        />
        <FavAction
          favCount={favCount}
          providerId={providerId}
          session={session}
          isFav={userActions.isFav}
        />
      </div>
      <div className='flex  items-center gap-2'>
        <LikeBtnAction
          likeCount={likeCount}
          providerId={providerId}
          session={session}
          isLike={userActions.isLike}
        />
        <DisLikeBtnAction
          disLikeCount={disLikeCount}
          providerId={providerId}
          session={session}
          isDisLike={userActions.isDisLike}
        />
      </div>
    </div>
  )
}

export default UserActions

//   <ShareBtnAction shareCount={shareCount} />
//  <ViewerBtnAction viewerCount={viewerCount} />

// <CommentAction          commentCount={commentCount}          session={session}          providerId={providerId}        />
