import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'

function SideBox({ open, setOpen, children, title = '', description = '' }) {
  return (
    <Sheet open={open} onOpenChange={setOpen} className=' w-full'>
      <SheetContent className='flex min-w-[70%] flex-col justify-between'>
        <SheetHeader className='flex w-full items-center  '>
          {title && <SheetTitle>{title}</SheetTitle>}
          {description && <SheetDescription>{description}</SheetDescription>}

          {children}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
export default SideBox
