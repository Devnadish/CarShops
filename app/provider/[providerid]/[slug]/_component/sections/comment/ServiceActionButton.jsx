'use client'
import Comments from '@/app/provider/[providerid]/[slug]/_component/comment/Comments'
import Text from '@/components/shared/Text'
import { Rate } from '@/components/svg/Rate'
import { Button } from '@/components/ui/button'
import { MessageCircleMore } from '@/lib/icons'
import React, { useState } from 'react'

function ServiceActionButton({ providerName, serviceName, icon }) {
  const [open, setOpen] = useState(false)
  return (
    <div className='flex flex-col items-center justify-between '>
      <Button
        variant='outline'
        className='flex w-full items-center gap-4 '
        onClick={() => {
          setOpen(true)
        }}
      >
        <Text>قبم خدمتنا</Text>
        <Rate className='size-6' />
      </Button>
      <Text fontSize={'xs'} opacity={'O40'} className={'self-end'}>
        {' '}
        شارك آراءك مع الآخرين
      </Text>
      <Comments
        open={open}
        setOpen={setOpen}
        providerName={providerName}
        serviceName={serviceName}
        icon={icon}
      />
    </div>
  )
}

export default ServiceActionButton
