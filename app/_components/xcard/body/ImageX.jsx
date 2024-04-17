import Image from 'next/image';


export const ImageX = ({ image }) => {
  return (
    <div className='relative h-full '>
      <Image
        src={image}
        alt='sdsd'
        className='rounded-lg'
        width={200} // Optional width for layout
        height={200} />
    </div>
  );
};
