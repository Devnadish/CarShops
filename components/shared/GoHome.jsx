import { Home } from '@/lib/icons'
import React from 'react'
import Link from 'next/link'

function GoHome() {
  return (
    <div className='mr-2  px-2 lg:hidden'>
      <Link href='/'>
        <Home className='size-5 opacity-55' />
      </Link>
    </div>
  )
}

export default GoHome
