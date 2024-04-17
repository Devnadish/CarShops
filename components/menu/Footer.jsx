"use client"
import React from 'react'
import DropMenu from '../shared/DropMenu'
import SearchProvider from '@/app/_components/SearchProvider'
import { carLogos } from '@/constant/carLogo'
import { Car } from '@/lib/icons'
import { Button } from '../ui/button'
import DropMenuMobile from '../shared/DropMenuMobile'
import PageCounter from '../shared/PageCounter'
import { usePathname } from 'next/navigation'


function  Footer() {
  const pathName=usePathname()
  if(pathName.startsWith('/provider/')) {
   return;
}
  return (
    <div className='fixed bottom-0 flex h-[60px] w-full items-center px-2  gap-4 bg-accent md:hidden  '>
      <DropMenuMobile
        frameworks={carLogos}
        label='اختار  سيارتك'
        icon={<Car className='ml-2 h-4 w-4 shrink-0 opacity-50' />}
        placeholder='ابحث عن سيارتك'
        noDataMessage='لا توجد سيارتك'
      />
      <div className='flex items-center gap-4'>
      <SearchProvider />
      <PageCounter/>
      </div>
      {/* <span className='text-xs opacity-25'>
          {recordCount ? recordCount + '/' + pageCount : 0}
        </span> */}
      
    </div>
  )
}

export default  Footer