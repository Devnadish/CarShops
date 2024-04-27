import React from 'react'
import Text from '@/components/shared/Text'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import SectionAnimation from '@/components/shared/SectionAnimation'
import { CallIcon, EmailIcon, ShareIcon } from './ProviderIcons'
import { WhatsappIcon } from '@/components/svg/Whatsapp'
import {
  Facebook,
  Instagram,
  Tiktok,
  XTwitter,
  Youtube
} from '@/components/svg/Socail'
const ctaMessage = 'تواصل معنا'

function TextSide(props) {
  return (
    <div className='flex    flex-col items-center justify-center   gap-8   '>
      <ProviderName providerName={props.providerName} />
      <HeroSlogon heroSlogon={props.heroSlogon} />
      <CTA />
    </div>
  )
}

function BackgroundImag() {
  return (
    <div className='absolute left-0 top-0 -z-10   h-full w-full'>
      <div className='relative left-0 top-0 -z-10   h-full w-full'>
        <Image
          src='/background.svg'
          alt='background'
          // fill
          priority
          width={300}
          height={100}
          size='(max-width:768px) 250px,400px '
          className='w-full rounded-lg object-cover p-2'
        />
      </div>
    </div>
  )
}

export const HeroSection = ({ heroSlogon, logo, providerName }) => {
  return (
    // <SectionAnimation>
    <section className='relative flex max-h-[80vh]   w-full flex-col items-center justify-evenly rounded-md bg-secondary/50 py-4 md:flex-row '>
      <TextSide heroSlogon={heroSlogon} providerName={providerName} />
      <HeroImage logo={logo} providerName={providerName} />
      <BackgroundImag />
    </section>
    // </SectionAnimation>
  )
}

export function ProviderName(props) {
  return (
    <div className='flex w-fit self-start border-b-8  px-4 text-center text-xl font-bold shadow-lg md:self-center md:text-4xl'>
      <Text>{props.providerName}</Text>
    </div>
  )
}

export function HeroSlogon(props) {
  return (
    <Text
      className={'px-1 text-center text-xl'}
      opacity={'O70'}
      fontFamily={'tajwal'}
    >
      {props.heroSlogon}
    </Text>
  )
}

export function HeroImage(props) {
  return (
    <div className='h-auto  w-full max-w-sm p-6 md:max-w-md '>
      <Image
        src={props.logo} // Handle missing logo
        alt={props.providerName}
        width={1300}
        height={100}
        className=' rounded-lg object-fill    '
      />
    </div>
  )
}

export const CTA = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <Button
        // className='  w-[90%]  '
        variant='outline'
      >
        <Text>{ctaMessage}</Text>
      </Button>
      <div className='hidden items-center gap-4 md:flex'>
        <Button size='icon' variant='ghost'>
          <ShareIcon className='size-6' />
        </Button>
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
    </div>
  )
}
