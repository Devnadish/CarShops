import { LocateFixed } from '@/lib/icons';
import Text from '../../../../components/shared/Text';

export const Address = ({ city, dist }) => {
  return (
    <div className='flex w-full flex-wrap items-center gap-1   justify-start' dir='rtl'>
      <LocateFixed size={12} strokeWidth={1} className='opacity-50 ' />
      <Text fontSize={'xs'} opacity='O40'>
        {city} {'/'} {dist}
      </Text>
    </div>
  );
};
