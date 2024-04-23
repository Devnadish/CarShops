'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  carsAutoInsert,
  citiyAutoInsert,
  serviceAutoInsert,
  usersAutoInsert
} from '@/db/masterFile'
import Text from '@/components/shared/Text'
import { Notify } from '@/lib/notify'
import Spinner, { SubSpinner } from '@/components/shared/Spinner'

export const AutoInsert = () => {
  return (
    <div className='flex max-w-xl flex-wrap items-center justify-center gap-4'>
      <InsertCars />
      <InserService />
      <InserProviderType />
      <Insertcountry /> <InsertCity /> <InsertDist /> <InsertUser />
    </div>
  )
}

const InsertCars = () => {
  const [isLoading, setIsLoading] = useState(false)
  const handleAtuoInsert = async () => {
    setIsLoading(true)
    await carsAutoInsert()
    Notify('Job Done', 'info', 'Insert Cars')
    setIsLoading(false)
  }
  return (
    <div className='flex size-28 flex-grow flex-col items-center justify-center gap-2 rounded-lg border '>
      <Button
        variant='outline'
        size='sm'
        className=' text-xl'
        onClick={() => handleAtuoInsert()}
      >
        {isLoading ? <SubSpinner /> : <Text>+</Text>}
      </Button>
      <Text fontSize={'small'}>رفع ملف السيارت</Text>
    </div>
  )
}
const InserService = () => {
  const [isLoading, setIsLoading] = useState(false)
  const handleAtuoInsert = async () => {
    setIsLoading(true)
    await serviceAutoInsert()
    Notify('Job Done', 'info', 'Insert Cars')
    setIsLoading(false)
  }

  return (
    <div className='flex  h-28 w-fit flex-grow flex-col items-center justify-center gap-2 rounded-lg border px-2 '>
      <Button
        variant='outline'
        size='sm'
        className=' text-xl'
        onClick={() => handleAtuoInsert()}
      >
        {isLoading ? <SubSpinner /> : <Text>+</Text>}
      </Button>
      <Text fontSize={'small'}>رفع ملف الصيانة والخدمات</Text>
    </div>
  )
}

const InserProviderType = () => {
  const handleAtuoInsert = () => {
    alert('Under construction')
  }
  return (
    <div className=' flex h-28 w-fit flex-grow flex-col items-center justify-center gap-2 rounded-lg border px-2 '>
      <Button
        variant='outline'
        size='sm'
        className=' text-xl'
        onClick={() => handleAtuoInsert()}
      >
        +
      </Button>
      <Text fontSize={'small'}>انواع مزودي الخدمة</Text>
    </div>
  )
}

const Insertcountry = () => {
  const handleAtuoInsert = () => {
    alert('Under construction')
  }
  return (
    <div className=' flex h-28 w-fit flex-grow flex-col items-center justify-center gap-2 rounded-lg border px-2 '>
      <Button
        variant='outline'
        size='sm'
        className=' text-xl'
        onClick={() => handleAtuoInsert()}
      >
        +
      </Button>
      <Text fontSize={'small'}>الدول</Text>
    </div>
  )
}

const InsertCity = () => {
  const [isLoading, setIsLoading] = useState(false)
  const handleAtuoInsert = async () => {
    setIsLoading(true)
    await citiyAutoInsert()
    Notify('Job Done', 'info', 'Insert Cars')
    setIsLoading(false)
  }
  return (
    <div className=' flex h-28 w-fit flex-grow flex-col items-center justify-center gap-2 rounded-lg border px-2'>
      <Button
        variant='outline'
        size='sm'
        className=' text-xl'
        onClick={() => handleAtuoInsert()}
      >
        {isLoading ? <SubSpinner /> : <Text>+</Text>}
      </Button>
      <Text fontSize={'small'}>المدن</Text>
    </div>
  )
}
const InsertDist = () => {
  const handleAtuoInsert = () => {
    alert('Under construction')
  }
  return (
    <div className=' flex h-28 w-fit flex-grow flex-col items-center justify-center gap-2 rounded-lg border px-2 '>
      <Button
        variant='outline'
        size='sm'
        className=' text-xl'
        onClick={() => handleAtuoInsert()}
      >
        +
      </Button>
      <Text fontSize={'small'}>الاحياء</Text>
    </div>
  )
}

const InsertUser = () => {
  const [isLoading, setIsLoading] = useState(false)
  const handleAtuoInsert = async () => {
    setIsLoading(true)
    await usersAutoInsert()
    Notify('Job Done', 'info', 'Insert Cars')
    setIsLoading(false)
  }
  return (
    <div className=' flex h-28 w-fit flex-grow flex-col items-center justify-center gap-2 rounded-lg border px-2 '>
      <Button
        variant='outline'
        size='sm'
        className=' text-xl'
        onClick={() => handleAtuoInsert()}
      >
        +
      </Button>
      <Text fontSize={'small'}>مستخدمين</Text>
    </div>
  )
}
