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

async function page({ params }) {
  const provider = await providerData(params.providerid)
  const {
    logo="/logo.svg",
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

      <HeroSection
        heroSlogon={heroSlogon}
        logo={logo}
        providerName={providerName}
      />
      <Detail detail={detail} description={description} />
      <Service providerService={providerService} />
      <ImageSlider images={images} options={OPTIONS} />

      <CarFixing carType={carType} />
      <Accessory  providerName={providerName}/>
      <Location />
      <Contact />
      <Comments />
      <Stars />
      <Testmoinal />
      {/* <Chat /> */}
      <Reserve />
      <SideMenu />
    </div>
  )
}

export default page
const SideMenu=()=>{return(<div className=' fixed bottom-2 left-2  gap-2  z-50 flex items-center justify-evenly shadow- xl '>
  <Link className='bg-secondary  size-12 flex items-center justify-center border rounded-lg ' href={"/"}><Star/></Link>
  <Link className='bg-secondary   size-12 flex items-center justify-center border  rounded-lg' href={"/"}><MessageCircleMore/></Link>
  <Link className=' bg-secondary  size-12 flex items-center justify-center border rounded-lg' href={"/"}><Heart/></Link>
  {/* <Link href={"/"}><Com/></Link> */}
</div>)}

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
