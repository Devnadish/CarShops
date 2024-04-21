import React from 'react'
import { Button } from '@/components/ui/button'
import { Edit } from '@/lib/icons'

export const ServiceAction = () => {
  return (
    <div>
      <Button className='size-8 rounded bg-red-500 p-0  font-bold text-white hover:bg-red-700 '>
        <Edit />
      </Button>
    </div>
  )
}
