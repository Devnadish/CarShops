'use client'
import ClintChat from '@/app/provider/[providerid]/_component/ClintChat'
import Text from '@/components/shared/Text'
import { Button } from '@/components/ui/button'
import { MessageCircleMore } from '@/lib/icons'
import React, { useState } from 'react'

function ServiceActionButton({ description, subPoints,title,providerName ,serviceName,icon}) {
    const [open, setOpen] = useState(false);
  return (
    <div className='flex items-center justify-between '>
      <Button
        variant='outline'
        className='flex w-full items-center gap-4 '
        onClick={() => {
          setOpen(true)
        }}
      >
        <Text>التعليقات</Text>
        <MessageCircleMore />
      </Button>
      <ClintChat open={open} setOpen={setOpen} providerName={providerName} serviceName={serviceName} icon={icon}/>
    </div>
  )
}

export default ServiceActionButton


