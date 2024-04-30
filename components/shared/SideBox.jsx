import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter
} from '@/components/ui/sheet'

function SideBox({ open, setOpen, children, footer, header }) {
  return (
    <Sheet open={open} onOpenChange={setOpen} className=' w-full'>
      <SheetContent className='flex  flex-col justify-between'>
        <SheetHeader className='flex w-full items-center  '>
          {header}
        </SheetHeader>
        {children}
        <SheetFooter>{footer}</SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
export default SideBox
