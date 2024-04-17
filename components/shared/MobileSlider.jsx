'use client'
import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { carLogos } from '@/constant/carLogo'
import Image from 'next/image'
import Text from './Text'
import { Notify } from '@/lib/notify'
import { useRouter, usePathname } from 'next/navigation'
import { urlQuery } from '@/lib/url'
import { ListRestart } from '@/lib/icons'

function MobileSlider() {
  const pathName = usePathname()
  const router = useRouter()

  const handleChange = value => {
    const queryString = urlQuery('vechile', value)
    const updatedUrl = `${pathName}${queryString ? `?${queryString}` : ''}`
    router.replace(updatedUrl)
  }
  const clearAll = () => {
    const params = new URLSearchParams(window.location.search)
    params.delete('vechile')
    const updatedUrl = `${pathName}${params.toString() ? `?${params.toString()}` : ''}`
    router.replace(updatedUrl)
  }

  return (
    <div className='flex h-full flex-col items-center justify-evenly'>
      {/* <ListRestart onClick={clearAll} /> */}
      <Carousel
        opts={{
          align: 'start'
        }}
        // orientation='vertical'
        className="max-w-sm"
      >
        <div className='w-full' dir='LTR'>
          <CarouselContent className='-mt-1 min-h-[50px] w-[300px]'>
            {carLogos.map((car, index) => (
              <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/4">
                <div className='p-1'>
                  <Card
                    className='cursor-pointer'
                    onClick={() => handleChange(car.name)}
                  >
                    <CardContent className='flex flex-col items-center justify-center p-1'>
                      <Image
                        src={car.logo} // Handle missing logo
                        alt={car.alt}
                        width={36}
                        height={36}
                        className="min-h-[40px]"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
export default MobileSlider
