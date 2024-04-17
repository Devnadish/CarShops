import Text from '@/components/shared/Text';
import React from 'react';

export const SectionTitle = ({ title }) => {
  return (
    <div className='w-fit self-start border-b-8 px-4 border-accent font-bold' >
      <Text className={'text-3xl '}>{title}</Text>
    </div>
  );
};
