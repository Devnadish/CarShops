import React from 'react';
import Text from '@/components/shared/Text';
import { MoreInfo } from './MoreInfo';

export const ExtraService = ({ icon, title, description, subPoints, providerName }) => {
  return (
    <div className='relative flex  flex-col items-center justify-center  '>
      <div className='opacity-70'>
      {icon}
      </div>
      <Text opacity={"O70"}>{title}</Text>
      <MoreInfo
        description={description}
        subPoints={subPoints}
        title={title} />
    </div>
  );
};
