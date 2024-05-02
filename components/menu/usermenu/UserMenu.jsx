import React, { useState } from 'react'
import AvatarImage from '@/components/shared/image/AvatarImage'
import { NotActive } from '@/components/svg/NotActive'
import { Button } from '@/components/ui/button'
import SideBox from '@/components/shared/SideBox'
import { UserMenuHeader } from './UserMenuHeader'
import { UserMenuBody } from './UserMenuBody'
import { UseMenuFooter } from './UseMenuFooter'
import ActivationForm from '@/app/auth/register/_component/ActivationForm'

function UserMenu({ user, location }) {
  const [open, setOpen] = useState(false)
  const userId = user?.user?.id
  const userName = user?.user?.name
  const userAvatar = user?.user?.image
  const useremail = user?.user?.email
  const isVerified = user?.user?.isVerified

  return (
    <div className='flex  items-center gap-2 border-border px-3'>
      <Button
        className='flex w-fit items-center justify-center gap-2 rounded-md border bg-white/10 px-2 py-1 shadow-lg hover:bg-blue-500'
        onClick={() => setOpen(true)}
      >
        <AvatarImage
          src={userAvatar}
          alt={useremail}
          size={8}
          isVerified={isVerified}
          location={'nav'}
        />
      </Button>

      {!isVerified && <ActivationForm />}

      <SideBox
        open={open}
        setOpen={setOpen}
        footer={
          <UseMenuFooter
            userid={userId}
            isVerified={isVerified}
            setOpen={setOpen}
          />
        }
        header={
          <UserMenuHeader
            image={userAvatar}
            name={userName}
            email={useremail}
            alt={userName}
            isVerified={isVerified}
            userid={userId}
          />
        }
      >
        <UserMenuBody
          isVerified={isVerified}
          userid={userId}
          setOpen={setOpen}
        />
      </SideBox>
    </div>
  )
}

export default UserMenu
