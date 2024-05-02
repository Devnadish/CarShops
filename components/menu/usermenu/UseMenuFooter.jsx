import React from 'react'
import Text from '@/components/shared/Text'
import UserLogout from '../../../app/auth/singout/_component/UserLogout'
import Link from 'next/link'
import ActivationForm from '@/app/auth/register/_component/ActivationForm'

export function UseMenuFooter({ userid, isVerified, setOpen }) {
  return (
    <div
      className='flex w-full items-center justify-end gap-8'
      onClick={() => setOpen(false)}
    >
      <UserLogout />
      {!isVerified && <ActivationForm />}
    </div>
  )
}
