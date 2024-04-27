'use client'
import React from 'react'
import Text from '../shared/Text'
import { Button } from '../ui/button'
import { LogIn, Mail, RectangleEllipsis } from '@/lib/icons'
import InputWithIcon from '../shared/InputWithIcon'
import { Register } from './Register'
import { Visitor } from '../svg/Visitor'

export const LognnForm = () => {
  return (
    <div className='relative flex w-full flex-col items-center justify-center gap-4 '>
      <Register />
      <form className='flex w-full flex-col gap-2 '>
        <InputWithIcon icon={<Mail strokeWidth={1} />} />
        <div className='flex flex-col'>
          <InputWithIcon icon={<RectangleEllipsis strokeWidth={1} />} />
          <Button variant='link' className='self-end'>
            <Text fontSize={'xs'}>نسيت كلمة المرور ؟</Text>
          </Button>
        </div>
      </form>
      <Actions />
    </div>
  )
}

export const Actions = () => {
  return (
    <div className='flex w-full items-center justify-between'>
      <div>
        <Button variant='outline' className='flex items-center gap-4'>
          <LogIn size={20} strokeWidth={1} className='size-4' />
          <Text>دخول</Text>
        </Button>
      </div>

      <div>
        <Button variant='outline' className='flex items-center gap-4'>
          <Visitor className='size-6' />
          <Text> زائر</Text>
        </Button>
      </div>
    </div>
  )
}
