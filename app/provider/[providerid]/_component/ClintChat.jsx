'use client'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger
} from '@/components/ui/sheet'
import Text from '../../../../components/shared/Text'
import { Separator } from '@/components/ui/separator'
import Addcomment from './Addcomment'

function ClintChat({
  open,
  setOpen,
  children,
  providerName,
  serviceName,
  icon
}) {
  return (
    <Sheet open={open} onOpenChange={setOpen} className=' w-full'>
      <SheetContent className='flex flex-col justify-between '>
        <SheetHeader className='flex w-full items-center  '>
          <div className='flex items-end w-full justify-between'>
          <div className='mt-5 flex flex-col items-start justify-start '>
            <Text fontSize='sm'>{providerName}</Text>
            <Text opacity={'O70'} fontFamily='tajwal' fontSize='xs'>
              {serviceName}
            </Text>
          </div>
          <div>{icon}</div>
          </div>

          <Separator className='bg-foreground/30' />
          <div className='flex w-full'>
          <Addcomment />
          </div>
        </SheetHeader>

        {children}
      </SheetContent>
    </Sheet>
  )
}
export default ClintChat
