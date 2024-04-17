'use client'
import DialogBox from '@/components/shared/DialogBox'
import INPUT from '@/components/shared/INPUT'
import Text from '@/components/shared/Text'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Car, Search } from '@/lib/icons'
import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import Submit from '@/components/shared/Submit'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { urlQuery } from '@/lib/url'

function SearchProvider() {
  const [open, setOpen] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [option, setOption] = useState('nadish0')
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()


  const handleSearch = () => {
    const queryString = urlQuery('search', searchText+option);
    const updatedUrl = `${pathName}${queryString ? `?${queryString}` : ''}`
    router.push(updatedUrl)
  }
  return (
    <>
      <Button
        variant='ghost'
        onClick={() => {
          setOpen(true)
        }}
        className='flex w-fit h-8 items-center justify-between rounded-full  '
      >
        {/* <Text fontSize='xs' opacity={'opacity-35'}>
          بحث
        </Text> */}
        {/* <div className='flex h-8 items-center gap-3'> */}
          <Search size={24} className='opacity-80' strokeWidth={1} />
        {/* </div> */}
      </Button>
      <DialogBox open={open} setOpen={setOpen}>
        <form action={handleSearch} className='mx-auto flex w-[90%] flex-col items-center justify-center gap-4 '>
          <FormSearch searchText={searchText} setSearchText={setSearchText} />
          <RadioGroupDemo option={option} setOption={setOption} />

          <Submit title='بحث' icon={<Search />} color={'bg-secondary'} isDisabled={!searchText} />
        </form>
      </DialogBox>
    </>
  )
}

export default SearchProvider

const FormSearch = ({ searchText, setSearchText }) => {
  const handlechange = (e) => {setSearchText(e.target.value)}
  return (
    <INPUT
      value={searchText}
      icon={<Search strokeWidth={1} />}
      placeholder='ابحث عن.. '
      onChange={handlechange}

    />
  )
}

export function RadioGroupDemo({option, setOption}) {
  return (
    <RadioGroup
      defaultValue='nadish0'
      className='mt-4 flex w-full items-center justify-evenly'
      dir='RTL'
      onValueChange={(value) => setOption(value)}
    >
      <div className='flex items-center gap-2 space-x-2'>
        <RadioGroupItem value='nadish0' id='r1' />
        <Label htmlFor='r1' className='font-cairo'>
          التعلقات
        </Label>
      </div>
      <div className='flex items-center gap-2 space-x-2'>
        <RadioGroupItem value='nadish1' id='r2' />
        <Label htmlFor='r2' className='font-cairo'>
          الوصف
        </Label>
      </div>
      <div className='flex items-center gap-2 space-x-2'>
        <RadioGroupItem value='nadish2' id='r3' />
        <Label htmlFor='r3' className='font-cairo'>
          الشرح
        </Label>
      </div>
    </RadioGroup>
  )
}
