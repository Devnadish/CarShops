import React from 'react'
import { MotionDiv } from '@/components/shared/MotionDiv'
import { XCardHeader } from './header/XCardHeader'
import { XCardBody } from './body/XCardBody'
import { XCardfooter } from './footer/XCardfooter'
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
  dist
}) {
  return (
    <MotionDiv
      variants={variants}
      initial='hidden'
      animate='visible'
      transition={{
        delay: index * stagger,
        ease: 'easeInOut',
        duration: 0.5
      }}
      viewport={{ amount: 0 }}
      className='relative flex h-full  min-h-[360px] w-full max-w-xs flex-col items-center justify-between overflow-hidden rounded-md border bg-card shadow-md hover:border-2 '
    >
      <XCardHeader
        providerName={providerName}
        starCount={starCount}
        commentCount={commentCount}
        service={service}
        index={index}
        type={type}
        counter={counter}
        city={city}
        dist={dist}
      />
      <XCardBody
        image={image}
        description={description}
        carType={carType}
        service={service}
      />
      <XCardfooter id={id} />
    </MotionDiv>
  )
}

export default ShowCard
