'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import SideBox from '@/components/shared/SideBox'
import { UserMenuHeader } from './UserMenuHeader'
import { UserMenuBody } from './UserMenuBody'
import { UseMenuFooter } from './UseMenuFooter'
import ActivationForm from '@/app/auth/register/_component/ActivationForm'
import { Avatar } from '@/components/shared/Avatar'
import { Bell } from '@/lib/icons'
import Inbox from '@/components/mailsystem/Inbox'

function UserMenu({ session, location, newMails }) {
  const [open, setOpen] = useState(false)
  const userId = session?.user?.id
  const userName = session?.user?.name
  const userAvatar = session?.user?.image
  const useremail = session?.user?.email
  const isVerified = session?.user?.isVerified

  return (
    <div className='flex  items-center gap-2 border-border px-3'>
      <Inbox session={session} newMails={newMails} />
      <Button
        className='flex w-fit items-center justify-center gap-2 rounded-md border bg-white/10 px-2 py-1 shadow-lg hover:bg-blue-500'
        onClick={() => setOpen(true)}
      >
        <Avatar src={userAvatar} alt={useremail} fallBack={'CR'} />
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
