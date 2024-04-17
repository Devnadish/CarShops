import React from 'react'
import Text from '@/components/shared/Text'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import SectionAnimation from '@/components/shared/SectionAnimation'
const ctaMessage = 'تواصل معنا'

function TextSide(props) {
  return (
    <div className='flex    flex-col items-center gap-8   justify-center   '>
      <ProviderName providerName={props.providerName} />
      <HeroSlogon heroSlogon={props.heroSlogon} />
      <CTA />
    </div>
  )
}

function BackgroundImag() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url("/background.svg")`,
        backgroundSize: 'cover',
        opacity: 1,
        zIndex: -1 // backgroundColor:"green"
      }}
    />
  )
}

export const HeroSection = ({ heroSlogon, logo, providerName }) => {
  return (
    // <SectionAnimation>
    <section className='relative flex max-h-[80vh]   w-full flex-col md:flex-row items-center justify-evenly rounded-md bg-secondary/50 py-4 '>
      <TextSide heroSlogon={heroSlogon} providerName={providerName} />
      <HeroImage logo={logo} providerName={providerName} />
      <BackgroundImag/>
    </section>
    // </SectionAnimation>
  )
}

export function ProviderName(props) {
  return (
    <div className='flex w-fit self-start md:self-center  border-b-8 px-4 text-center text-xl font-bold shadow-lg md:text-4xl'>
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
    <div className='h-auto  w-full max-w-sm md:max-w-md p-6 '>
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
    <Button
      // className='  w-[90%]  '
      variant='outline'
    >
      <Text>{ctaMessage}</Text>
    </Button>
  )
}
