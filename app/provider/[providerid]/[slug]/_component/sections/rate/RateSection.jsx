'use client'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { useState } from 'react'
import { Rate } from './compunent/Rate'
import { DiaplyRate } from './compunent/DiaplyRate'

export const RateSection = ({ session, providerId, rateing }) => {
  const [rate, setRate] = useState(5)
  const [rateColor, setRateColor] = useState(null)

  return (
    <div className='flex w-full flex-col items-start'>
      <SectionTitle title={' تقييمات ومراجعات يعتمدالتقييم بعد انهاء عملية '} />
      <div
        className='flex  w-full flex-col items-center gap-4 rounded-md bg-primary/40 md:flex-row'
        id='rate_section'
      >
        <DiaplyRate rateing={rateing} providerId={providerId} />
        <Rate
          rate={rate}
          setRate={setRate}
          rateColor={rateColor}
          userId={session?.user?.id}
          providerId={providerId}
        />
      </div>
    </div>
  )
}
