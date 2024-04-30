import { LogOut } from '@/lib/icons'
import React from 'react'
import { Button } from '../../../../components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import { LogoutIcon } from '@/components/svg/LogoutIcon'

function UserLogout() {
  return (
    <Button
      variant='outline'
      // className='y h-7 rounded-md px-2'
      onClick={() => signOut()}
    >
      {/* <LogOut size={20} /> */}
      <LogoutIcon className='size-8' />
    </Button>
  )
}

export default UserLogout
