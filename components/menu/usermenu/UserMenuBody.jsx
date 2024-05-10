import React from 'react'
import Text from '@/components/shared/Text'
import {
  BotMessageSquare,
  Heart,
  HeartHandshake,
  Lock,
  MessageCircleMore,
  Star
} from '@/lib/icons'
import { Like, Dislike } from '@/components/svg/LikeAndDislike'
import { SendService } from '@/components/svg/SendService'
import { ItemLink } from '@/components/menu/usermenu/ItemLink'
import { SelectCity } from './SelectCity'

export function UserMenuBody({ isVerified, userid, setOpen }) {
  return (
    <>
      <div
        className='relative flex flex-grow flex-col items-start   gap-1'
        name='header'
      >
        <ItemLink
          href={`/user/stars/${userid}`}
          text='النجوم'
          icon={<Star size={20} strokeWidth={1} className='text-foreground' />}
          setOpen={setOpen}
        />
        <ItemLink
          href={`/user/favorite/${userid}`}
          text='المفضلة'
          icon={
            <HeartHandshake
              size={20}
              strokeWidth={1}
              className='text-foreground'
            />
          }
          setOpen={setOpen}
        />
        <ItemLink
          href={`/user/like/${userid}`}
          text='إعجاب '
          icon={<Like />}
          setOpen={setOpen}
        />
        <ItemLink
          href={`/user/dislike/${userid}`}
          text=' عدم إعجاب'
          icon={<Dislike />}
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
          <div className='absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-secondary opacity-60'>
            <Lock size={80} className='text-red-500' />
            <Text
              fontFamily={'tajwal'}
              fontSize={'large'}
              className={'text-red-500'}
            >
              الحساب غير نشط
            </Text>
          </div>
        )}
      </div>
      <SelectCity />
    </>
  )
}
