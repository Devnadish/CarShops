import { MessageCircleMore } from '@/lib/icons';
import Text from '../../../../components/shared/Text';


export const Comments = ({ commentCount }) => {
  return (
    <div className='flex   items-center gap-1 rounded-2xl    py-[3px]'>
      <MessageCircleMore
        size={24}
        strokeWidth={1}
        className='size-4 text-primary' />
      <Text fontSize='xs' opacity='O40'>
        {commentCount}
      </Text>
    </div>
  );
};
