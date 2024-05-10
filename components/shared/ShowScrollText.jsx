import Text from './Text'
import { ScrollArea } from '@/components/ui/scroll-area'

const ShowScrollText = ({ description }) => {
  return (
    <ScrollArea className='h-[70px] ' dir='rtl'>
      <Text fontSize='xs' opacity='O70' className='leading-relaxed'>
        {description}
      </Text>
    </ScrollArea>
  )
}
export default ShowScrollText
