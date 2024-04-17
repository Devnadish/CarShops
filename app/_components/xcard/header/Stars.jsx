import { Star } from '@/lib/icons';
import Text from '../../../../components/shared/Text';


export const Stars = ({ starCount }) => {
  return (
    <div className='flex   items-center gap-1 rounded-2xl    py-[3px]'>
      <Star
        size={20}
        fill='#fff'
        strokeWidth={1}
        className='size-4 text-yellow-300' />
      <Text fontSize='xs' opacity='O40'>
        {starCount}
      </Text>
    </div>
  );
};
