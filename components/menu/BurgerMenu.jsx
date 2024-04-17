'use client'
import { LogOut, Menu } from '@/lib/icons'
import { Notify } from '@/lib/notify'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger
} from '@/components/ui/sheet'
import MainMenu from './MainMenu'
import ThemeSwitch from '../shared/ThemeSwitch'
import Text from '../shared/Text'

function BurgerMenu() {
  return (
    <Sheet className="w-full">
      <SheetTrigger asChild>
        <Menu className="opacity-55"/>
      </SheetTrigger>
      <SheetContent className='flex flex-col justify-between'>
        <SheetHeader className='flex w-full flex-row items-center justify-center'>
          <Text font='tajwal' fontSize='sm'>
            مرحبا خالد
          </Text>
        </SheetHeader>
        <div className='h-full  items-start'>
          <MainMenu />
        </div>
        <SheetFooter className='flex w-full justify-between flex-row items-center'>
          <Button variant='outline' className='flex h-9 items-center gap-2'>
            <LogOut strokeWidth={1} size={18} />
            <Text>تسجيل خروج</Text>
          </Button>
          <ThemeSwitch />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
export default BurgerMenu
