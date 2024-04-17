'use client'
import { FilterX } from '@/lib/icons'
import React from 'react'
import { Button } from '../ui/button'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

function ClearFilter() {
  const pathName = usePathname()
  const router = useRouter()

  const handleClearSearch = () => {
    const updatedUrl = `${pathName}`

    router.push(updatedUrl)
  }

  return (
    <Button onClick={handleClearSearch} variant="ghost" className="h-9">
      <FilterX  className="text-primary" strokeWidth={1}/>
    </Button>
  )
}

export default ClearFilter
