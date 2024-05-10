import { SectionTitle } from '@/components/shared/SectionTitle'
import { getServerSession } from 'next-auth'
import { options } from 'authentication/options'

import React from 'react'
import Text from '@/components/shared/Text'
import MsgForm from './_component/MsgForm'
import GoBack from '@/components/shared/GoBack'

async function page(context) {
  // console.log(context)
  const session = await getServerSession(options)
  if (!session) {
    return <p>Register So We can Serve you</p>
  }
  return (
    <div className='flex w-full max-w-3xl flex-col items-center justify-center gap-4'>
      <SectionTitle title={'تواصل مع ادارة المنصة'} />
      <GoBack />
      <div className='flex flex-col items-start gap-4'>
        <Text className={'flex items-center gap-2'}>
          مرجبا
          <Text> {session.user.name}</Text>
        </Text>
        <Text fontFamily={'tajwal'}>
          يسعدنا خدمتك والتواصل معك نامل تزويدنا ببعض المعلومات لسرعة الانجاز{' '}
        </Text>
        <MsgForm
          user={session.user.name}
          from={session.user.email}
          to={'admin@carFrind.com'}
        />
      </div>
    </div>
  )
}

export default page
