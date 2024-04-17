import { Separator } from '@/components/ui/separator'
import ShowScrollText from '@/components/shared/ShowScrollText'
import { Detail } from './Detail'
import { WorkType } from './WorkType'
export const XCardBody = ({ image, description, carType, service, id }) => {
  return (
    <div className='flex h-full w-full flex-grow flex-col  items-center justify-between gap-1 py-1'>
      <WorkType service={service} />
      <Detail image={image} carType={carType}/>
      <Separator className='mt-1' />
      <ShowScrollText description={description} />
    </div>
  )
}


