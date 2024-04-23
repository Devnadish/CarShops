import React from 'react'
import { MotionDiv } from '@/components/shared/MotionDiv'
import XCardHeader from './header/XCardHeader'
import XCardBody from './body/XCardBody'
import XCardfooter from './footer/XCardfooter'
const stagger = 0.15

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}
function ShowCard({
  id,
  providerName,
  starCount,
  commentCount,
  image,
  description,
  carType,
  service,
  index,
  counter,
  city,
  type,
  dist,
  likeCount,
  disLikeCount
}) {
  return (
    <div className='relative flex h-full  min-h-[360px] w-full max-w-xs flex-col items-center justify-between overflow-hidden rounded-md border bg-card shadow-md hover:border-2 '>
      <XCardHeader
        providerName={providerName}
        starCount={starCount}
        commentCount={commentCount}
        service={service}
        index={index}
        type={type}
        likeCount={likeCount}
        disLikeCount={disLikeCount}
        counter={counter}
        city={city}
        dist={dist}
      />
      <XCardBody
        image={image}
        alt={providerName}
        description={description}
        carType={carType}
        service={service}
      />
      <XCardfooter id={id} />
    </div>
  )
}

export default ShowCard
