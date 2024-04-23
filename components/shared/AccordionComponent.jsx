import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import Text from './Text'

export function AccordionComponent({ children, title, icon }) {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>
          <div className='flex items-center gap-3'>
            {icon}
            <Text>{title}</Text>
          </div>
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
