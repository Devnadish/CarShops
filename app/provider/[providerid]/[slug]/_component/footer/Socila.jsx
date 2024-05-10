import React from 'react'
import { Dropdown } from '@/components/shared/DropDown'
import { socialMenu } from '@/constant/menu'
import { Megaphone } from '@/lib/icons'

export const Socila = () => {
  return (
    <div className='flex items-center  gap-1   px-1 md:hidden'>
      <Dropdown
        icon={<Megaphone className='size-6' />}
        title='قنوات التواصل '
        menu={socialMenu}
      />
    </div>
  )
}
