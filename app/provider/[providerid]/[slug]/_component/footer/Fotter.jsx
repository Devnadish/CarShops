import React from 'react'
import { Button } from '@/components/ui/button'
import {
  CallIcon,
  EmailIcon,
  ShareIcon
} from '../../../../../../components/shared/ProviderIcons'
import { WhatsappIcon } from '@/components/svg/Whatsapp'
import {
  Facebook,
  Instagram,
  Tiktok,
  XTwitter,
  Youtube
} from '@/components/svg/Socail'
import { Avatar } from '@/components/shared/Avatar'
import Text from '@/components/shared/Text'

function Fotter({ branchInfo }) {
  return (
    <footer
      className='flex  w-full flex-col flex-wrap items-center justify-center gap-1 rounded border p-4'
      id='footer'
    >
      <BrInfo branchInfo={branchInfo} />
      <SocalContact />
    </footer>
  )
}

export default Fotter

const BrInfo = ({ branchInfo }) => {
  return (
    <div className='flex w-full flex-grow-0 flex-col flex-wrap items-center justify-center gap-3 md:flex-row'>
      {branchInfo.map(br => {
        return (
          <div
            key={br.id}
            className='flex max-w-xs flex-grow flex-col items-center gap-3 rounded-md border p-4 md:w-1/3'
          >
            <Avatar src={br.image} alt={br.branchName} />
            <Text
              className={
                'j-9 flex w-full items-center justify-center bg-gray-500 '
              }
            >
              {br.branchName}
            </Text>
            <Text
              fontSize={'xs'}
              className={'flex w-full items-center justify-between'}
            >
              <span>السبت</span>
              {br.sat}
            </Text>
            <Text
              fontSize={'xs'}
              className={'flex w-full items-center justify-between'}
            >
              <span>الاحد</span>
              {br.sun}
            </Text>
            <Text
              fontSize={'xs'}
              className={'flex w-full items-center justify-between'}
            >
              <span>الاثنين</span>
              {br.mon}
            </Text>
            <Text
              fontSize={'xs'}
              className={'flex w-full items-center justify-between'}
            >
              <span>الثلاثاء</span>
              {br.tue}
            </Text>
            <Text
              fontSize={'xs'}
              className={'flex w-full items-center justify-between'}
            >
              <span>الاربعاء</span>
              {br.wed}
            </Text>
            <Text
              fontSize={'xs'}
              className={'flex w-full items-center justify-between'}
            >
              <span>الخميس</span>
              {br.thu}
            </Text>
            <Text
              fontSize={'xs'}
              className={'flex w-full items-center justify-between'}
            >
              <span>الجمعه</span>
              {br.fri}
            </Text>
          </div>
        )
      })}
    </div>
  )
}

export const SocalContact = () => {
  return (
    <div className='flex flex-wrap items-center justify-evenly   gap-2 '>
      {/* <Button size='icon' variant='ghost'>
          <ShareIcon className='size-6' />
        </Button> */}
      <Button size='icon' variant='ghost'>
        <CallIcon className='size-6' />
      </Button>
      <Button size='icon' variant='ghost'>
        <EmailIcon className='size-6' />
      </Button>
      <Button size='icon' variant='ghost'>
        <WhatsappIcon className='size-6' />
      </Button>
      <Button size='icon' variant='ghost'>
        <Tiktok className='size-6' />
      </Button>
      <Button size='icon' variant='ghost'>
        <Instagram className='size-6' />
      </Button>
      <Button size='icon' variant='ghost'>
        <Facebook className='size-6' />
      </Button>
      <Button size='icon' variant='ghost'>
        <XTwitter className='size-6' />
      </Button>
      <Button size='icon' variant='ghost'>
        <Youtube className='size-6' />
      </Button>
    </div>
  )
}
