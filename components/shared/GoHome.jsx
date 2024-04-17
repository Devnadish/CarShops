import { Home } from '@/lib/icons'
import React from 'react'
import Link from 'next/link'

function GoHome() {
  return (
    <Link href="/">  <Home  className="size-5 opacity-55" /></Link>
  )
}

export default GoHome