'use client'
import React, { useContext, useEffect, useState } from 'react';

import UrlContext from '@/context/providerServiceContext'
import { Separator } from '../ui/separator';

function PageCounter() {
  const { recordCounter,pageCount } = useContext(UrlContext);
  const [Count, setCount] = useState({records:0,pages:0});

 
  useEffect(() => {
    setCount({records:recordCounter,pages:pageCount});
  }, [recordCounter]);

  return (
    <div className="text-[.6rem] opacity-35 flex items-center h-6 gap-1 w-12 justify-evenly px-1 border border-white/30 rounded-full  ">
       <span>{Count.records}</span>
       <Separator orientation='vertical' className='bg-white/30 h-full' />
       <span>{Count.pages}</span>  
    </div>
  );
}

export default PageCounter;



 
