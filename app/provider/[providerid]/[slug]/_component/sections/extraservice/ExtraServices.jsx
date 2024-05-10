import React from 'react'
import { SectionTitle } from '../../../../../../../components/shared/SectionTitle'
// import { extraService } from '@/constant/extraService'
import ServiceActionButton from '../comment/ServiceActionButton'
import { ExtraServiceDescription } from './ExtraServiceDescription'
import CommentsInformation from '../../comment/CommentsInformation'

export const ExtraServices = ({ extraService }) => {
  return (
    <div className='flex  w-full flex-col items-center justify-center'>
      <SectionTitle title={'خدمات اضافية'} />
      <div className='flex w-full flex-wrap items-center justify-center gap-4 bg-secondary/50  p-4'>
        {extraService.map(service => {
          return (
            <div
              className='flex max-w-xs flex-grow flex-col  gap-4 rounded-lg border  border-black p-4 hover:shadow-xl dark:border-border '
              key={service.id}
            >
              <ExtraServiceDescription
                icon={service.logo}
                title={service.service}
                subPoints={service.subPoints}
              />
              <ServiceActionButton
                description={service.description}
                subPoints={service.subPoints}
                serviceName={service.title}
                icon={service.icon}
              />
              <CommentsInformation
                commentCount={extraService[0]?.ActionData?.commentCounter}
                likeCount={extraService[0]?.ActionData?.likeCounter}
                dislikeCount={extraService[0]?.ActionData?.likeCounter}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
