'use client'
import React, { useState } from 'react'
import Text from '@/components/shared/Text'
import { KeyRound } from '@/lib/icons'
import Link from 'next/link'

function LoginMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Link
        // variant='outline'
        href='/auth/signin'
        className='flex items-center gap-1 rounded-lg border bg-white/30 p-2'
      >
        <Text fontFamily={'tajwal'} fontSize={'medium'}>
          دخول
        </Text>

        <KeyRound strokeWidth={1} />
      </Link>

      {/* <DialogBox
        title={' سجل في المنصة واحصل علي هدايا وخصومات'}
        Description={' العديد من الهديا والخصومات'}
        open={open}
        setOpen={setOpen}
      >
        <LognnForm />
      </DialogBox> */}
    </>
  )
}

export default LoginMenu
