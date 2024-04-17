import Text from '../../../../components/shared/Text';
import { ProviderType } from './ProviderType';

export const ClainetName = ({ providerName, type }) => {
  return (
    <div className='flex items-center justify-between w-full'>
      <Text fontSize='md' opacity='O70'>
        <span className='font-bold'>{providerName} </span>
      </Text>
      <ProviderType type={type} />
    </div>
  );
};
