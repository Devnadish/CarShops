'use client'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { urlQuery } from '@/lib/url'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import WorkshopSVG from '@/components/svg/WorkshopSVG'
import WorkShopCenterSvg from '@/components/svg/WorkShopCenterSvg'
import MechancalMan from '@/components/svg/MechancalMan'
import ResetFillter from '@/components/svg/ResetFillter'

export const dynamic = 'force-dynamic'

function ToggllType() {
  const [sortValue, setSortValue] = useState('star')
  const [open, setOpen] = useState(false)
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleChange = value => {
    setSortValue(value)
    
    const queryString = urlQuery('type', value)
    const updatedUrl = `${pathName}${queryString ? `?${queryString}` : ''}`
    router.push(updatedUrl)
  }

  const restFilter = () => {
    const params = new URLSearchParams(window.location.search);
    params.delete("type");
    const newParamsString = params.toString();
    const newUrl = `${window.location.pathname}${newParamsString ? `?${newParamsString}` : ''}`;
    router.push(newUrl)
    // window.history.replaceState({}, '', newUrl);
  };

  return (
    <ToggleGroup
      size={'sm'}
      type='single'
      value={sortValue}
      defaultValue='star'
      onValueChange={value => {
        handleChange(value)
      }}
    >
       {/* <Button size="sm" variant="ghost" onClick={restFilter} className="opacity-45"> <ResetFillter /></Button> */}
      {/* <ToggleGroupItem value='rest' aria-label='Toggle rest' className=''>
        <ResetFillter />
      </ToggleGroupItem> */}
      <ToggleGroupItem value='man' aria-label='Toggle man' className="data-[state=on]:bg-blue-800 opacity-45 hover:opacity-100 ">
        <MechancalMan />
      </ToggleGroupItem>
      <ToggleGroupItem value='workshop' aria-label='Toggle workshop' className="data-[state=on]:bg-blue-800 opacity-45 hover:opacity-100">
        <WorkshopSVG />
      </ToggleGroupItem>
     
      <ToggleGroupItem value='center' aria-label='Toggle center' className="data-[state=on]:bg-blue-800 opacity-45 hover:opacity-100">
        <WorkShopCenterSvg />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
export default ToggllType
