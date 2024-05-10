import { Badge } from '@/components/ui/badge'
import Text from '../../../components/shared/Text'

export const WorkType = ({ service }) => {
  return (
    <div className='flex h-6 w-full items-center  justify-evenly gap-2'>
      {service.map((serv, idx) => {
        return (
          <Badge
            key={idx}
            variant='outline'
            className='flex w-fit flex-grow items-center justify-center rounded border-primary text-center text-xs capitalize opacity-65'
          >
            <Text className={'text-primary'}>{serv}</Text>
          </Badge>
        )
      })}
    </div>
  )
}
