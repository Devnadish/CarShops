"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from  '@react-hook/media-query'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
} from "@/components/ui/drawer"
import { Separator } from "../ui/separator"


 function DialogBox({open, setOpen,children,Title="",
    Description=""}) {
  
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]"  dir="rtl">
          <DialogHeader className="flex items-start mt-5">
            <DialogTitle className="font-tajwal">{Title}</DialogTitle>
            <DialogDescription className="font-tajwal">
              {Description}
            </DialogDescription>
          </DialogHeader>
          <Separator className="bg-accent/50"/>
          {children}
          {/* <ProfileForm /> */}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen} >
      {/* <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger> */}
      <DrawerContent>
        {/* <DrawerHeader className="flex items-start w-full flex-col" >
          <DrawerTitle>{Title}</DrawerTitle>
          <DrawerDescription>
          {Description}
          </DrawerDescription>
        </DrawerHeader> */}
        {/* <Separator className="bg-accent/50"/> */}
        {children}
        {/* <ProfileForm className="px-4" /> */}
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

 

export default DialogBox