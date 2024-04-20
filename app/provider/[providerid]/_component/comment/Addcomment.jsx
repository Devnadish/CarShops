'use client'
import Submit from '@/components/shared/Submit'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { AddComment } from '../ProviderIcons'
import CommetInput from '@/app/provider/[providerid]/_component/comment/CommetInput'
import { useMediaQuery } from '@react-hook/media-query'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter
} from '@/components/ui/drawer'
import { LegalCondition } from '../LegalCondition'
function Addcomment() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button
        variant='outline'
        onClick={() => {
          setOpen(true)
        }}
      >
        <AddComment className='size-8 text-primary' />
      </Button>
      <CommentBox open={open} setOpen={setOpen}>
        <form className='flex w-full flex-col items-center  '>
          <CommetInput rows={'6'} />
          <Submit title='' />
        </form>
        <LegalCondition />
      </CommentBox>
    </>
  )
}

export default Addcomment

function CommentBox({ open, setOpen, children   }) {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className='sm:max-w-[425px]' dir='rtl'>
          {children}
        </DialogContent>
      </Dialog>
    )
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        {children}
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
