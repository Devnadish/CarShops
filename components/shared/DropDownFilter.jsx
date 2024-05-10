'use client'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import Text from './Text'
import { MessageCircleMore, Star } from '@/lib/icons'
import WorkshopSVG from '@/components/svg/WorkshopSVG'
import WorkShopCenterSvg from '@/components/svg/WorkShopCenterSvg'
import MechancalMan from '@/components/svg/MechancalMan'
import { urlQuery } from '@/lib/url'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

export function DropDownFilter({ icon, menu, title }) {
  const pathName = usePathname()
  const router = useRouter()

  const handleChange = (xtype, value) => {
    const queryString = urlQuery(xtype, value)
    const updatedUrl = `${pathName}${queryString ? `?${queryString}` : ''}`
    router.push(updatedUrl)
  }
  return (
    <DropdownMenu dir='rtl'>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm' className='    hover:bg-primary'>
          {icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>
          <Text> {title}</Text>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => handleChange('sort', 'star')}
          className='flex items-center gap-4 hover:bg-secondary'
        >
          <Star className='size-4 text-foreground' />
          <Text> حسب النجوم</Text>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleChange('sort', 'comment')}
          className='flex items-center gap-4 hover:bg-secondary'
        >
          <MessageCircleMore className='size-4 text-foreground' />
          <Text> حسب التعليقات</Text>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => handleChange('type', 'center')}
          className='flex items-center gap-4 hover:bg-secondary'
        >
          <WorkShopCenterSvg className='size-4 text-foreground' />
          <Text> مراكز الصيانه</Text>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleChange('type', 'workshop')}
          className='flex items-center gap-4 hover:bg-secondary'
        >
          <WorkshopSVG className='size-4 text-foreground' />
          <Text> ورش الصيانة</Text>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleChange('type', 'man')}
          className='flex items-center gap-4 hover:bg-secondary'
        >
          <MechancalMan className='size-4 text-foreground' />
          <Text> الافراد</Text>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleChange('type', 'all')}
          className='flex items-center gap-4 hover:bg-secondary'
        >
          <Star className='size-4 text-foreground' />
          <Text> الكل</Text>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// func: ()=>urlQuery("sort","comment")
