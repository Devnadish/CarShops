'use client'
import Text from '@/components/shared/Text'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { StarCount } from './StarCount'

export function DiaplyRate({ rateing, providerId }) {
  return (
    <div className='flex h-72 w-full flex-col items-start justify-center gap-3 rounded border p-4  '>
      <div className='flex w-full items-center justify-between'>
        <Text>
          التقييم العام
          <spanb
            className={
              'rounded border border-green-300 bg-green-400   px-2 font-bold text-green-900 shadow-lg '
            }
          >
            {rateing.percentage} %
          </spanb>
        </Text>
        <Text> بناءً على {rateing.totalRate} تقييمات</Text>
      </div>
      <div className='flex h-full w-full flex-col items-center justify-between'>
        <StarCount count={1} rate={rateing.star1} />
        <StarCount count={2} rate={rateing.star2} />
        <StarCount count={3} rate={rateing.star3} />
        <StarCount count={4} rate={rateing.star4} />
        <StarCount count={5} rate={rateing.star5} />
      </div>

      <Link
        href={`/provider/rateing/${providerId}?rate=0`}
        className='flex h-12 w-full items-center justify-center rounded border bg-secondary shadow-lg'
      >
        <Text fontSize={'xs'} className={'font-bold'}>
          مشاهدة التقييم
        </Text>
      </Link>
    </div>
  )
}
