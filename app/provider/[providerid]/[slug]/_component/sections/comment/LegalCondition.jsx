'use client'
import React from 'react'
import Text from '@/components/shared/Text'
import { legalComment, header, footer } from '@/constant/legalComments'
export const LegalCondition = () => {
  return (
    <div className='p-3'>
      <Text fontSize={'xs'}>{header} </Text>
      <ul className=''>
        {legalComment.map(legal => {
          return (
            <li key={legal.id} className='flex items-center gap-2'>
              <div className='size-4 flex items-center justify-center'>
              {legal.icon}
              </div>
             
              <Text fontFamily={'tajwal'} fontSize={'xs'}>
                {legal.rule}
              </Text>
            </li>
          )
        })}
      </ul>
      <div className="w-full flex items-center justify-end">

      <Text fontSize={'xs'}>{footer} </Text>
      </div>
    </div>
  )
}
