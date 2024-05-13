'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import SideBox from '@/components/shared/SideBox'
import { UserMenuHeader } from './UserMenuHeader'
import { UserMenuBody } from './UserMenuBody'
import { UseMenuFooter } from './UseMenuFooter'
import ActivationForm from '@/app/auth/register/_component/ActivationForm'
import { Avatar } from '@/components/shared/Avatar'
import Inbox from '@/components/mailsystem/Inbox'

function UserMenu({ session, newMails }) {
  const [open, setOpen] = useState(false)
  const userId = session?.user?.id
  const userName = session?.user?.name
  const userAvatar = session?.user?.image
  const useremail = session?.user?.email
  const isVerified = session?.user?.isVerified
  const role = session?.user?.role

  return (
    <div className='flex  items-center gap-1  px-1'>
      <Button
        variant='ghost'
        className='relative flex items-center justify-center rounded-full   bg-transparent'
        onClick={() => setOpen(true)}
      >
        <Avatar
          src={userAvatar}
          alt={useremail}
          fallBack={'CR'}
          className='p-1'
          role={role}
        />

        <div className='absolute right-3 top-0 flex size-4 items-center justify-center rounded-full  bg-destructive  text-primary-foreground'>
          <span className='text-[.6rem] text-foreground'>
            {newMails?.length || 0}
          </span>
        </div>
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
            session={session}
            newMails={newMails}
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
