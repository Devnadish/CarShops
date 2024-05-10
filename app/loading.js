import React from 'react'
import CardSkelton from './_components/card/CardSkelton'

function loading() {
  return (
    <div className='absolute top-20 flex w-full    flex-wrap items-center  justify-center  gap-4'>
      <CardSkelton />
      <CardSkelton />
      <CardSkelton />
      <CardSkelton />
      <CardSkelton />
      <CardSkelton />
    </div>
  )
}

export default loading
