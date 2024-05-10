import Text from '@/components/shared/Text'
import React from 'react'

export const SectionTitle = ({ title }) => {
  return (
    <div className='w-fit self-start border-b-8 border-border px-4 font-bold'>
      <Text className={'text-3xl '}>{title}</Text>
    </div>
  )
}
