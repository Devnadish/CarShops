import { Coffee, Wifi } from '@/lib/icons';

export const Accesory = () => {
  return (
    <div className='flex w-full items-center justify-evenly'>
      <Wifi size={14} className='text-primary' />
      <Coffee size={14} className='text-primary' />
      <Coffee size={14} className='text-primary' />
    </div>
  );
};
