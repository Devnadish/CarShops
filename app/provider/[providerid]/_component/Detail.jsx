import Text from '@/components/shared/Text';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';
import { SectionTitle } from './SectionTitle';
import SectionAnimation from '@/components/shared/SectionAnimation';

export const Detail = ({detail,description}) => {
  // console.log()
  return (
    // <SectionAnimation>
    <div className='flex  w-full flex-col items-center justify-center '>
      <SectionTitle title={"من نحن"}/>
    <div className='flex h-[80vh] w-full items-center bg-secondary/50 p-4 gap-4 flex-col rounded-lg rounded-tr-none '>
      <ScrollArea className="h-[30%] p-2 border border-border rounded-md" dir="rtl">
      <Text >{description}</Text>
      </ScrollArea>
      <ScrollArea className="h-[60%] p-2 border border-border rounded-md" dir="rtl">
      <Text >{detail}</Text>
      </ScrollArea>
    </div>
    </div>
    // </SectionAnimation>
  )
};


