import Text from '@/components/shared/Text'
import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'
import { SectionTitle } from '../../../../../../../components/shared/SectionTitle'
import SectionAnimation from '@/components/shared/SectionAnimation'

export const Detail = ({ detail, description }) => {
  return (
    // <SectionAnimation>
    <div className='flex  w-full flex-col items-center justify-center '>
      <SectionTitle title={'من نحن'} />
      <div className='flex max-h-[80vh] w-full flex-col items-center gap-4 rounded-lg rounded-tr-none bg-secondary/50 p-4 '>
        <ScrollArea className='h-fit max-h-[30%] w-full px-4 py-2' dir='rtl'>
          <Text className={'leading-6'}>{description}</Text>
        </ScrollArea>
        <ScrollArea
          className='h-fit max-h-[60%] w-full   border-t px-4 py-2'
          dir='rtl'
        >
          <Text className={'leading-6'}>{detail}</Text>
        </ScrollArea>
      </div>
    </div>
    // </SectionAnimation>
  )
}
