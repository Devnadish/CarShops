import { Accesory } from './Accesory'
import { ImageX } from './ImageX'
import { CarFix } from './CarFix'

export function Detail({ image, carType, alt }) {
  return (
    <div className='item-start flex w-full justify-between gap-4 px-3'>
      <div className='flex-grow'>
        <ImageX image={image} alt={alt} />
      </div>
      <div className='flex w-full flex-grow flex-col  items-start justify-start gap-2'>
        <CarFix carType={carType} />
        <Accesory />
      </div>
    </div>
  )
}
