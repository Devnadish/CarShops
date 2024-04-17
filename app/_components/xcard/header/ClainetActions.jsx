import { Comments } from './Comments';
import { Stars } from './Stars';

export const ClainetActions = ({ starCount, commentCount }) => {
  return (
    <div className='flex w-fit   items-center  gap-5 justify-end    '>

      <Stars starCount={starCount} />
      <Comments commentCount={commentCount} />
    </div>
  );
};
