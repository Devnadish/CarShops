'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import {
  createBlock,
  deleteBlock,
  getAllCitis,
  getExtraservice,
  getcars,
  getservice,
  getusers
} from '@/db/FakeInsertion'
import { Notify } from '@/lib/notify'
import Text from './shared/Text'
import { SubSpinner } from './shared/Spinner'

function FakeData() {
  const [isLoading, setIsLoading] = useState(false)
  const handleFake = async () => {
    setIsLoading(true)

    const city = await getAllCitis()
    const service = await getservice()
    const extraService = await getExtraservice()
    const cars = await getcars()
    const users = await getusers()

    const deleteblock = await deleteBlock()
    const providers1 = await createBlock(
      10,
      city,
      service,
      cars,
      users,
      extraService
    )
    Notify('Job Done', 'info', 'Insert Cars')
    setIsLoading(false)
  }

  return (
    <Button onClick={() => handleFake()} className='h-16 w-1/3'>
      {isLoading ? <SubSpinner /> : <Text> بيانات تجريبية</Text>}
    </Button>
  )
}

export default FakeData
