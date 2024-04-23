'use client'
import { CldImage } from 'next-cloudinary'

function CloudImge({ imageName }) {
  return (
    <div className='flex size-12 flex-grow '>
      <CldImage
        width={1500}
        height={1600}
        src={imageName}
        sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        alt='Description1'
        loading='lazy'
        className='rounded-md   border  p-2'
      />
    </div>
  )
}
export default CloudImge
