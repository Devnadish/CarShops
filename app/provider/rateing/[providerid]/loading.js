import React from 'react'
import RateSkelton from './_component/RateSkelton'

function loading() {
  return (
    <div className='absolute top-20 flex w-full    flex-wrap items-center  justify-center  gap-4'>
      <RateSkelton />
    </div>
  )
}

export default loading
