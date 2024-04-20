import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Text from '@/components/shared/Text';

const CommetInput = ({ ...props }) => {
  const [inputValue, setInputValue] = useState('');
  const [overChar, setOverChar] = useState(false);

  const MAXCHAR=400

  const handleInputChange = e => {
    const value = e.target.value;
    if (value.length <= MAXCHAR) {
      setInputValue(value);
      setOverChar(false)
      
    } else {
      setOverChar(true)
      // Notify();
    }
  };

  const handleClear = () => {
    setInputValue('');
    setOverChar(false)
  };

  return (
    <div className='relative w-full p-4'>
      <textarea
        type='text'
        className='w-full resize-none overflow-y-auto rounded bg-input font-cairo text-foreground'
        value={inputValue}
        onChange={handleInputChange}
        placeholder={`التعليق لا يتجاوز ${MAXCHAR} حرف...`}
        {...props}
      />
      <div className='flex w-full items-center justify-between text-sm text-gray-500'>
        <Text fontSize={'xs'} fontFamily={'tajwal'} opacity={"O40"} >
          {inputValue.length}/{MAXCHAR} عدد الأحرف
        </Text>
        {inputValue && (
          <Button
            variant='ghost'
            onClick={handleClear}
            className='flex size-6 items-center justify-center rounded-lg border bg-red-500 shadow-xl'
          >
            X
          </Button>
        )}
      </div>
      {overChar && (
        <div className='w-full bg-orange-700 rounded-md px-2 mt-1 animate-pulse'>
          <Text fontFamily={"tajwal"}>يجب ألا يتجاوز التعليق {MAXCHAR} حرف </Text>
        </div>
      )}
    </div>
  )
};

export default CommetInput;
