import React from 'react'
import ImageSlider from './_component/ImageSlider'
import { providerData } from '@/db/provider'
import { Detail } from './_component/Detail'

import { CarFixing } from './_component/CarFixing'
import { Service } from './_component/Service'
import Link from 'node_modules/next/link'
import { Heart, MessageCircleMore, Star } from '@/lib/icons'
import { HeroSection } from './_component/HeroSection'
import { Accessory } from './_component/Accessory'
export const dynamic = 'force-dynamic'

// TODO: Rechack router Cache  when you come again to same prvider it come from the cash so the viewer counter not update
async function page({ params, searchParams }) {
  const provider = await providerData(params.providerid, searchParams.nadish)
  const {
    logo = '/logo.svg',
    providerName,
    heroSlogon,
    detail,
    images,
    description,
    carType,
    providerService
  } = provider
  const OPTIONS = {}
  return (
    <div className='flex w-[90%] flex-col items-center justify-center gap-4'>
      {/* <Accessory providerName={providerName} /> */}
      <HeroSection
        heroSlogon={heroSlogon}
        logo={logo}
        providerName={providerName}
      />
      <Detail detail={detail} description={description} />
      <Service providerService={providerService} />
      <ImageSlider images={images} options={OPTIONS} />

      <CarFixing carType={carType} />
      <Accessory providerName={providerName} />
      <Location />
      <Contact />
      <Comments />
      <Stars />
      <Testmoinal />
      {/* <WorkingHours /> */}
      {/* <Chat /> */}
      <Reserve />
      <SideMenu />
    </div>
  )
}

export default page
const SideMenu = () => {
  return (
    <div className=' shadow- xl fixed  bottom-2  left-2 z-50 flex items-center justify-evenly gap-2 '>
      <Link
        className='flex  size-12 items-center justify-center rounded-lg border bg-secondary '
        href={'/'}
      >
        <Star />
      </Link>
      <Link
        className='flex   size-12 items-center justify-center rounded-lg border  bg-secondary'
        href={'/'}
      >
        <MessageCircleMore />
      </Link>
      <Link
        className=' flex  size-12 items-center justify-center rounded-lg border bg-secondary'
        href={'/'}
      >
        <Heart />
      </Link>
      {/* <Link href={"/"}><Com/></Link> */}
    </div>
  )
}

const Comments = () => {
  return (
    <div className='flex h-[80vh] w-full items-center bg-secondary'>
      Comments
    </div>
  )
}

const Stars = () => {
  return (
    <div className='flex h-[80vh] w-full items-center bg-secondary/50'>
      Stars
    </div>
  )
}
const Testmoinal = () => {
  return (
    <div className='flex h-[80vh] w-full items-center bg-secondary'>
      Testmoinal
    </div>
  )
}
const Location = () => {
  return (
    <div className='flex h-[80vh] w-full items-center bg-secondary'>
      Location
    </div>
  )
}
const Contact = () => {
  return (
    <div className='flex h-[80vh] w-full items-center bg-secondary/50'>
      {' '}
      Contact
    </div>
  )
}
const Chat = () => {
  return (
    <div className='flex h-[80vh] w-full items-center bg-secondary'>Chat</div>
  )
}
const Reserve = () => {
  return (
    <div className='flex h-[80vh] w-full items-center bg-secondary/50'>
      {' '}
      Reserve
    </div>
  )
}
