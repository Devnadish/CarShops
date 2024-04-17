import React from 'react';
import Text from '@/components/shared/Text';
import { MoreInfo } from './MoreInfo';

export const ExtraService = ({ icon, title, description, subPoints, providerName }) => {
  return (
    <div className='relative flex  flex-col items-center justify-center  '>
      {icon}
      <Text>{title}</Text>
      <MoreInfo
        description={description}
        subPoints={subPoints}
        title={title} />

    </div>
  );
};
