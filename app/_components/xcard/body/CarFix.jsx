import { Badge } from '@/components/ui/badge'
import Text from '../../../../components/shared/Text'
import { ScrollArea } from '@/components/ui/scroll-area'

export const CarFix = ({ carType }) => {
  return (
    <ScrollArea className='h-28 w-full px-2' dir='rtl'>
      <div className='flex flex-wrap items-start justify-start gap-1 '>
        {carType.map((carType, idx) => {
          return (
            <Badge
              key={idx}
              variant='outline'
              className='flex w-fit flex-grow items-center justify-center rounded border-border text-center text-xs capitalize opacity-65'
            >
              <Text fontSize={'xs'}>{carType}</Text>
            </Badge>
          )
        })}
      </div>
    </ScrollArea>
  )
}
