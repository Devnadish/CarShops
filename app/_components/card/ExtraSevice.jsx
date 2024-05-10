import { Coffee, Wifi } from '@/lib/icons'

export const ExtraSevice = () => {
  return (
    <div className='flex w-fit  items-center gap-1'>
      <Wifi size={14} className='text-primary' />
      <Coffee size={14} className='text-primary' />
      <Coffee size={14} className='text-primary' />
    </div>
  )
}
