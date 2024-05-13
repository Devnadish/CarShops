import { Coffee, Wifi } from '@/lib/icons'

export const ExtraSevice = () => {
  return (
    <div className='flex   items-center justify-end gap-1'>
      <Wifi size={14} className='text-primary' />
      <Coffee size={14} className='text-primary' />
      <Coffee size={14} className='text-primary' />
    </div>
  )
}
