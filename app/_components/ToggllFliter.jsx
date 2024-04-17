'use client'
import { Star, MessageCircleMore, Car } from '@/lib/icons'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { urlQuery } from '@/lib/url'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import MobileSlider from '@/components/shared/MobileSlider'

export const dynamic = 'force-dynamic'

function ToggllFliter() {
  const [sortValue, setSortValue] = useState('star')
  const [open, setOpen] = useState(false)
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleChange = value => {
    setSortValue(value)
    const queryString = urlQuery('sort', value)
    const updatedUrl = `${pathName}${queryString ? `?${queryString}` : ''}`
    router.push(updatedUrl)
  }

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
      <ToggleGroupItem value='comment' aria-label='Toggle stars' className="data-[state=on]:bg-primary opacity-45 hover:opacity-100">
        <MessageCircleMore className='h-4 w-4 ' />
      </ToggleGroupItem>
      <ToggleGroupItem value='star' aria-label='Toggle comments' className="data-[state=on]:bg-primary opacity-45 hover:opacity-100">
        <Star className='h-4 w-4' />
      </ToggleGroupItem>
      {/* <Button size="sm" variant="ghost" onClick={()=>setOpen(true)}><Car size={20}  strokeWidth={1}/></Button>
      <DaligBox open={open} setOpen={setOpen}><MobileSlider/></DaligBox> */}
    </ToggleGroup>
  )
}
export default ToggllFliter
