import React from 'react'
import Link from 'next/link'
import Text from '@/components/shared/Text'
import { Eye } from '@/lib/icons'

function CardActionButton({providerId}) {
  return (
    <Link
      href={`/provider/${providerId}`}
      className='flex h-9 w-full items-center justify-center bg-secondary gap-4 hover:bg-primary'
    >
      <Text fontSize='md' opacity={'O70'}>
         معلومات اكثر
      </Text>
      <Eye/>
    </Link>
  )
}

export default CardActionButton