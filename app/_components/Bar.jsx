import ToggllFliter from './ToggllFliter'
import SearchProvider from './SearchProvider'
import { Separator } from '@/components/ui/separator'
import ToggllType from './ToggllType'
import DropMenu from '@/components/shared/DropMenu'
import { carLogos } from '@/constant/carLogo'
import { Car } from '@/lib/icons'
import PageCounter from "@/components/shared/PageCounter"
import ClearFilter from '@/components/shared/ClearFilter'
import FlterMenu from './FlterMenu'


 
export const Bar = ({ recordCount, pageCount }) => {
  return (
    <div className=' fixed top-14 z-50 flex w-full max-w-5xl items-center    justify-between rounded bg-secondary/90 px-2 shadow-xl'>
      <div className='flex h-9 items-center justify-center gap-2 w-full md:w-fit   '>
        <FlterMenu/>
        <SearchProvider />
        <ClearFilter/>
        {/* <ToggllFliter /> */}
        {/* <Separator orientation='vertical' className='bg-black/30 ' /> */}
        {/* <ToggllType /> */}
      </div>
      
      {/* <div className=" md:flex items-center gap-4"> */}
      <DropMenu
        frameworks={carLogos}
        label='اختار  سيارتك'
        icon={<Car className='size-8 text-primary' strokeWidth={1} />}
        placeholder='ابحث عن سيارتك'
        noDataMessage='لا توجد سيارتك'
      />
      
        <PageCounter />
        
      {/* </div> */}
      
    </div>
  )
}
