import React from 'react'
import CloudnaryCdn from '@/components/shared/image/CloudnaryCdn'
import { AutoInsert } from '../cars/AutoInsert'
import Text from '@/components/shared/Text'
import FakeData from '@/components/FakeData'
const dynamic = 'force-dynmic'
async function page() {
  return (
    <div className='flex h-[80vh] w-full flex-col flex-wrap items-center justify-center gap-4 rounded-md bg-accent p-4 '>
      <CloudnaryCdn />
      <AutoInsert />
      <FakeData />
    </div>
  )
}

export default page
