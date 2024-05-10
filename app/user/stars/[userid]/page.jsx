import React from 'react'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Star } from '@/lib/icons'
import { getUserActions } from '@/db/utlDb'

export async function page({ params }) {
  const favorateProvider = await getUserActions(params.userid, 4)

  return (
    <div className='absolute top-20 flex w-full  flex-wrap  items-center justify-center  '>
      <div className='mb-4 flex w-full max-w-5xl items-center justify-start'>
        <Star className='size-12 text-primary' />
        <SectionTitle title={'قائمة النجوم'} />
      </div>

      <div className='flex w-full  flex-wrap  items-center justify-center  gap-4 '>
        {favorateProvider.map((provider, index) => (
          <NewCard key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  )
}

export default page
