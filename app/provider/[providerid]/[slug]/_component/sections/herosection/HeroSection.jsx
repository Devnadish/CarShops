import React from 'react'
import { HeroImage } from './HeroImage'
import { TextSide } from './TextSide'

export const ctaMessage = 'تواصل معنا'

export const HeroSection = ({
  heroSlogon,
  logo,
  providerName,
  city,
  dist,
  branchCount
}) => {
  return (
    <section className=' relative flex  w-full flex-col  items-center justify-between gap-4 rounded-md  bg-secondary p-4 md:flex-row '>
      <div className='max-w-1/2 flex w-full flex-col items-center gap-4 '>
        <TextSide
          heroSlogon={heroSlogon}
          providerName={providerName}
          city={city}
          dist={dist}
          branchCount={branchCount}
        />
      </div>
      <div className='max-w-1/2 w-full'>
        <HeroImage logo={logo} providerName={providerName} />
      </div>
    </section>
  )
}
