import { Dropdown } from '@/components/shared/DropDown'
import React from 'react'
import {filterMenu} from '@/constant/menu';
import { Filter, SlidersVertical  } from '@/lib/icons';
import { DropDownFilter } from '@/components/shared/DropDownFilter';

function FlterMenu() {
  return (
    <div> <div className='flex w-full items-center justify-end gap-1 px-1'>
    <DropDownFilter icon={<SlidersVertical className='size-5' strokeWidth={1}/>} title="تصفية البيانات " menu={filterMenu}/>
  </div></div>
  )
}

export default FlterMenu