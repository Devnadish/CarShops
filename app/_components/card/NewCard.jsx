import { Avatar } from '@/components/shared/Avatar'
import { LocateFixed } from '@/lib/icons'
import Image from 'next/image'
import React from 'react'
import { ExtraSevice } from './ExtraSevice'
import { WorkType } from './WorkType'
import { CarFix } from './CarFix'
import ShowScrollText from '@/components/shared/ShowScrollText'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { providerType, providerTypeIcon } from '@/lib/provider'
import { Badge } from '@/components/ui/badge'
import { CardBar } from './CardBar'
import { StarFilled } from '@/components/svg/StarFilled'

function NewCard({ provider }) {
  return (
    <Card className='w-[300px]  hover:border-primary'>
      <CardHeader>
        <div className='flex w-full items-center justify-between '>
          <div className='flex  items-center gap-2 font-cairo'>
            <Avatar
              src={provider.logo}
              alt={provider.providerName}
              fallBack={'kn'}
            />
            <div className='flex flex-col items-start gap-1'>
              <CardTitle> {provider.providerName}</CardTitle>
              <div className='flex items-center gap-1'>
                <LocateFixed size={14} className='text-muted-foreground' />
                <CardDescription>{provider.city}</CardDescription>
              </div>
            </div>
          </div>
        </div>
        <div className='flex    items-center justify-between gap-2 font-cairo'>
          <Badge variant={'secondary'}>
            {providerTypeIcon(provider.type)}
            {providerType(provider.type)}
          </Badge>
          <ExtraSevice />
          <Badge
            variant={'secondary'}
            className={
              'flex  w-16 items-center justify-between bg-primary text-yellow-400'
            }
          >
            {provider.rate.percentage} %
            <StarFilled size={24} />
          </Badge>
        </div>
        {/* <div className='relative h-auto w-full min-w-[250px] max-w-[250px]  rounded '>
          <AspectRatio ratio={16 / 9} className='bg-muted'>
            <Image
              src={provider.coverImage}
              alt={provider.providerName}
              fill
              className='rounded-lg'
            />
          </AspectRatio>
          <div className='absolute left-0 top-0 z-20 flex h-9 w-full  items-center justify-between gap-2  px-2  '></div>
        </div> */}
      </CardHeader>
      <CardContent className='flex flex-col items-center gap-2 '>
        <WorkType service={provider.service} />
        <CarFix carType={provider.carType} />
        <ShowScrollText description={provider.description} />
      </CardContent>
      <CardFooter className='flex justify-between p-0'>
        <CardBar
          likeCount={provider.likeCount}
          disLikeCount={provider.disLikeCount}
          starCount={provider.starCount}
          commentCount={provider.commentCount}
          favCount={provider.favCount}
          viewerCount={provider.viewerCount}
        />
      </CardFooter>
    </Card>
  )
}

export default NewCard
