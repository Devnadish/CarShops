'use client'
import React, { useState } from 'react'
import Text from '../shared/Text'
import { Button } from '../ui/button'
import { KeyRound, Lock } from '@/lib/icons'
import DialogBox from '../shared/DialogBox'
import { Input } from '../ui/input'
import { LognnForm } from './LognnForm'

function LoginMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        variant='outline'
        className='flex items-center gap-1'
        onClick={() => setOpen(true)}
      >
        <Text fontFamily={'tajwal'} fontSize={'medium'}>
          دخول
        </Text>
        <KeyRound />
      </Button>
      <DialogBox
        title={' سجل في المنصة واحصل علي هدايا وخصومات'}
        Description={' العديد من الهديا والخصومات'}
        open={open}
        setOpen={setOpen}
      >
        <LognnForm />
      </DialogBox>
    </>
  )
}

export default LoginMenu
