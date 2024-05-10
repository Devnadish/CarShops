'use client'
import DialogBox from '@/components/shared/DialogBox'
import Text from '@/components/shared/Text'
import { Button } from '@/components/ui/button'
import { Check, CircleAlert } from '@/lib/icons'
import React, { useState } from 'react'

export function MoreInfo({ subPoints, title }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        variant='ghost'
        className='absolute -left-[16px] -top-[16px] flex items-start justify-start rounded-bl-none rounded-br-none rounded-tr-none p-2'
        onClick={() => {
          setOpen(true)
        }}
      >
        <CircleAlert className='text-primary/50' size={18} />
      </Button>
      <DialogBox open={open} setOpen={setOpen} title={title}>
        <ul className='mt-8 flex w-full flex-col gap-4'>
          {subPoints.map((service, idx) => (
            <li key={idx} className='flex w-full items-center gap-4'>
              <Check size={18} /> <Text className={'leading-5'}>{service}</Text>
            </li>
          ))}
        </ul>
      </DialogBox>
    </>
  )
}
