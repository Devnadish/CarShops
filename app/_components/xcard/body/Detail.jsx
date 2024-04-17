import { Accesory } from './Accesory';
import { ImageX } from './ImageX';
import { CarFix } from './CarFix';

export function Detail({ image, carType }) {
  return (
    <div className='item-center flex w-full px-2'>
      <div className='w-1/2'>
        <ImageX image={image} />
      </div>
      <div className='item-center flex items-center justify-between  w-1/2 flex-col gap-2'>
        <CarFix carType={carType} />
        <Accesory />
      </div>
    </div>
  );
}
