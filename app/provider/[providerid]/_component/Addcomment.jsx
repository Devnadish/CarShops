"use client"
import INPUT from '@/components/shared/INPUT'
import Submit from '@/components/shared/Submit'
import { Button } from '@/components/ui/button'
import React from 'react'

function Addcomment() {
  return (
    <form className='flex items-center gap-1 w-full'>
        <INPUT />
      <Submit title=''/>
    </form>
  )
}

export default Addcomment