import React from 'react'
import Icons from './Icons' 
import { Car } from '@/lib/icons'
import { Socila } from './_component/Socila'

function ProviderFooter() {
  return (
    <footer className='fixed bottom-0 z-30 flex h-10 w-full items-center justify-center'>
      <div className='flex h-full w-full items-center  justify-start  bg-secondary shadow-lg px-3'>
        <Icons />
        <Socila/>
      </div>
    </footer>
  )
}

export default ProviderFooter

