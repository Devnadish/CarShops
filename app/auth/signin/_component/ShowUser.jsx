import React, { useState } from 'react'
import Text from '../../../../components/shared/Text'
import AvatarImage from '../../../../components/shared/image/AvatarImage'
import UserLogout from './UserLogout'
import { Verifyed } from '@/components/svg/Verifyed'
import { NotActive } from '@/components/svg/NotActive'
import { Button } from '@/components/ui/button'
import SideBox from '@/components/shared/SideBox'
import ActivationForm from './ActivationForm'

import Link from 'next/link'
import {
  BotMessageSquare,
  Dot,
  Heart,
  Lock,
  MessageCircleMore
} from '@/lib/icons'
import { Like } from '@/components/svg/LikeAndDislike'
import { SendService } from '@/components/svg/SendService'

function ShowUser({ user, location }) {
  const [open, setOpen] = useState(false)
  const userName = user.user.name
  const userAvatar = user.user.image
  const useremail = user.user.email
  const isVerified = user.user.isVerified

  return (
    <div div className='flex items-center gap-2 px-3'>
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
        {!isVerified && <NotActive className='size-6' />}
      </Button>
      <SideBox
        open={open}
        setOpen={setOpen}
        footer={
          <UseMenuFooter
            userid={user.user.id}
            isVerified={user.user.isVerified}
            setOpen={setOpen}
          />
        }
        header={
          <UserMenuHeader
            image={user.user.image}
            name={user.user.name}
            email={user.user.email}
            alt={user.user.name}
            isVerified={user.user.isVerified}
          />
        }
      >
        <UserMenuBody
          isVerified={user.user.isVerified}
          userid={user.user.id}
          setOpen={setOpen}
        />
      </SideBox>
    </div>
  )
}

export default ShowUser

//  <NotActive className='size-6' />
function UserMenuHeader({ image, alt, isVerified, name, email }) {
  return (
    <div className='relative z-20  flex w-full flex-col items-center gap-1 border-b'>
      <div className='z-50 flex  items-center justify-center rounded-full border-none bg-secondary'>
        <AvatarImage
          src={image}
          alt={alt}
          size={24}
          isVerified={isVerified}
          location={'profile'}
        />
      </div>

      <div className='z-50 flex w-full justify-end '>
        {isVerified ? (
          <Text
            fontFamily={'tajwal'}
            fontSize={'xs'}
            className={'absolute -top-4 left-0 border-b text-green-300'}
          >
            الحساب نشظ
            <Verifyed className='size-8' />
          </Text>
        ) : (
          <ActivationForm />
        )}
      </div>

      <div
        className='flex w-full items-baseline justify-between gap-1 bg-transparent  '
        name='header'
      >
        <Text fontSize={'large'}>{name}</Text>
        <Text fontSize={'xs'} opacity={'O70'}>
          {email}
        </Text>
      </div>

      <div className='-z-100  absolute left-0 top-5 h-1/2 w-full rounded-md bg-blue-400 opacity-80' />
    </div>
  )
}

function UserMenuBody({ isVerified, userid, setOpen }) {
  return (
    <div
      className='relative flex flex-grow flex-col items-start   gap-4'
      name='header'
    >
      <ItemLink
        href={`/user/favorite/${userid}`}
        text='المفضلة'
        icon={<Heart size={20} strokeWidth={1} className='text-foreground' />}
        setOpen={setOpen}
      />
      <ItemLink
        href={`/user/conslntent/${userid}`}
        text='استشارة'
        setOpen={setOpen}
        icon={
          <BotMessageSquare
            size={20}
            strokeWidth={1}
            className='text-foreground'
          />
        }
      />
      <ItemLink
        href={`/user/reaction/${userid}`}
        text='إعجاب / عدم إعجاب'
        icon={<Like />}
        setOpen={setOpen}
      />
      <ItemLink
        href={`/user/comments/${userid}`}
        text='التعليقات'
        setOpen={setOpen}
        icon={
          <MessageCircleMore
            size={20}
            strokeWidth={1}
            className='text-foreground'
          />
        }
      />
      <ItemLink
        href={`/user/sendmaintinance/${userid}`}
        text='ارسال كرت صيانة'
        icon={<SendService className='size-5' />}
        setOpen={setOpen}
      />
      {!isVerified && (
        <div className='absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-blue-500 opacity-60'>
          <Lock size={80} />
          <Text fontFamily={'tajwal'} fontSize={'large'}>
            الحساب غير مفعل
          </Text>
        </div>
      )}
    </div>
  )
}

const ItemLink = ({ href, text, icon, setOpen }) => {
  return (
    <div
      className='flex w-full items-center justify-end gap-8'
      onClick={() => setOpen(false)}
    >
      <Link
        href={href}
        className='flex h-9 w-full items-center gap-2 rounded  px-3 py-1 hover:bg-secondary'
      >
        {icon ? icon : <Dot />}
        <Text opacity={'O70'}>{text}</Text>
      </Link>
    </div>
  )
}
function UseMenuFooter({ userid, isVerified, setOpen }) {
  return (
    <div
      className='flex w-full items-center justify-end gap-8'
      onClick={() => setOpen(false)}
    >
      {isVerified && (
        <Link
          href={`/user/profile/${userid}`}
          className='flex h-9 flex-grow items-center justify-center rounded border'
        >
          <Text fontFamily={'tajwal'}>تعديل الملف الشخصي</Text>
        </Link>
      )}

      <UserLogout />
    </div>
  )
}
