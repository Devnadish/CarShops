'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'

function GoBack() {
  const router = useRouter()
  return (
    <div className='flex justify-end'>
      <Button
        onClick={() => router.back()}
        className='h-9 w-12 '
        variant='outline'
      >
        <EpBack />
      </Button>
    </div>
  )
}

export default GoBack

export function EpBack(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 1024 1024'
      {...props}
    >
      <path
        fill='currentColor'
        d='M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64'
      ></path>
      <path
        fill='currentColor'
        d='m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z'
      ></path>
    </svg>
  )
}
