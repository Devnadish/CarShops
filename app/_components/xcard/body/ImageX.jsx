import Image from 'next/image'

export const ImageX = ({ image, alt = 'khalidnadish' }) => {
  return (
    <div className='relative size-28 h-full '>
      <Image
        src={image}
        alt={alt}
        className='rounded-lg'
        fill
        quality={5} // {number 1-100}
        // width={1000} // Optional width for layout
        // height={1000}
      />
    </div>
  )
}
