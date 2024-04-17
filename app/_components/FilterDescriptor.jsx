// "use client"
import Text from '@/components/shared/Text'
import { ArrowDown10, Car, Store } from '@/lib/icons'
// import React, { useEffect, useState } from 'react'

function FilterDescriptor({ query }) {
  const { vechile, sort, type } = query
  let sortVar
  let typeVar
  let vechileVar
  !vechile ? (vechileVar = 'اختار سيارتك') : (vechileVar = vechile)

  switch (sort) {
    case 'star':
      sortVar = 'حسب النجوم'
      break
    case 'comment':
      sortVar = 'حسب التعليقات'
      break

    default:
      sortVar = 'حسب النجوم'
      break
  }

  switch (type) {
    case 'center':
      typeVar = 'مراكز صيانة'
      break
    case 'workshop':
      typeVar = 'ورش صيانة'
      break
    case 'man':
      typeVar = 'افراد'
      break
    default:
      typeVar = 'الكل'
      break
  }
  return (
    <div className='mt-10 flex w-full flex-wrap items-center gap-2 justify-center'>
      <Description
        icon={<Car className='opacity-45 size-5 md:size-6' strokeWidth={1}  />}
        data={vechileVar}
        opacity={"O100"}
      />
      <Description
        icon={<ArrowDown10 className='opacity-45 size-5 ' strokeWidth={1} />}
        data={sortVar}
      />
      <Description
        icon={<Store className='opacity-45 size-5' strokeWidth={1} />}
        data={typeVar}
      />
    </div>
  )
}

export default FilterDescriptor

const Description = ({ icon, data,opacity="O40"}) => {
  return (
    <div className='flex items-center gap-1  border-b px-1 text-sm'>
      {icon}
      <Text opacity={opacity} className="text-[.6rem] md:text-sm capitalize" fontFamily={"tajwal"}>{data}</Text>
    </div>
  )
}
