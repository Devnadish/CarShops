'use client'
import SearchProvider from '../SearchProvider'
import DropMenu from '@/components/shared/DropMenu'
import { carLogos } from '@/constant/carLogo'
import { Car, SlidersVertical } from '@/lib/icons'
import ClearFilter from '@/components/shared/ClearFilter'
import { usePathname } from 'next/navigation'
import FilterDescriptor from '../FilterDescriptor'
import { filterMenu } from '@/constant/menu'
import { DropDownFilter } from '@/components/shared/DropDownFilter'

export const Bar = ({ recordCount, pageCount, query }) => {
  const pathName = usePathname()
  if (pathName.startsWith('/provider/')) {
    return
  }
  return (
    <>
      <div className='fixed left-0 top-12 z-40 flex w-full    items-center justify-between    bg-border px-2'>
        <div className='flex h-12  items-end justify-end gap-2 '>
          <DropDownFilter
            icon={<SlidersVertical strokeWidth={1} />}
            title='تصفية البيانات '
            menu={filterMenu}
          />
          <SearchProvider />
          <ClearFilter />
        </div>
        <div>
          <FilterDescriptor query={query} />
        </div>
      </div>
      <DropMenu
        frameworks={carLogos}
        label='اختار  سيارتك'
        icon={
          <Car className='size-8 text-primary-foreground' strokeWidth={1} />
        }
        placeholder='ابحث عن سيارتك'
        noDataMessage='لا توجد سيارتك'
      />
    </>
  )
}
