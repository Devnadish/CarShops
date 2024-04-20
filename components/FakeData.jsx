"use client"
import React from 'react'
import { Button } from './ui/button'
import { createBlock, deleteBlock } from '@/db/utl'

function FakeData() {

    const handleFake=()=>{
      const deleteblock=deleteBlock()
         const providers1=createBlock(50)
         console.log("Done successful >>>>");

    }

  return (
    <Button onClick={()=>handleFake()} className="fixed top-0 right-0 z-50 ">FK</Button>
  )
}

export default FakeData