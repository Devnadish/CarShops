import Text from '@/components/shared/Text'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function MasterMenu() {
  const menuSytle =
    'flex  w-full items-center justify-start rounded-none bg-black/50 h-9 px-2'
  return (
    <div className='flex h-[80vh] w-48 flex-col gap-4 rounded-md bg-secondary py-4'>
      <Link href={'/master/cars'} className={menuSytle}>
        <Text>السيارت</Text>
      </Link>
      <Link href={'/master/service'} className={menuSytle}>
        <Text>الخدمات</Text>
      </Link>
      <Link href={'/master/extraservice'} className={menuSytle}>
        <Text>الخدمات الاضافية</Text>
      </Link>
      <Link href={'/master/autoaction'} className={menuSytle}>
        <Text className={'border-r-4  border-yellow-300 px-3 text-purple-500'}>
          اوامر ذاتية
        </Text>
      </Link>
    </div>
  )
}

export default MasterMenu
