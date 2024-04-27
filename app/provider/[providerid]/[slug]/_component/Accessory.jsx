import React from 'react'
import { SectionTitle } from './SectionTitle'
import { extraService } from '@/constant/extraService'
import ServiceActionButton from './ServiceActionButton'
import { ExtraService } from './ExtraService'
import CommentsInformation from './comment/CommentsInformation'


export const Accessory = ({providerName}) => {
  return (
    <div className='flex  w-full flex-col items-center justify-center'>
      <SectionTitle title={'خدمات اضافية'} />
      <div className='flex w-full flex-wrap items-center justify-center gap-4 bg-secondary/50  p-4'>
        {extraService.map(service => {
          return (
            <div className='flex-grow max-w-xs flex flex-col  gap-4 border border-black  dark:border-border rounded-lg p-4 hover:shadow-xl ' key={service.id}>
              <ExtraService
                icon={service.icon}
                title={service.title}
                description={service.description}
                subPoints={service.subPoints}
              />
              <ServiceActionButton
                description={service.description}
                subPoints={service.subPoints}
                providerName={providerName}
                serviceName={service.title}
                icon={service.icon}
              />
               <CommentsInformation
                description={service.description}
                subPoints={service.subPoints}
                providerName={providerName}
                serviceName={service.title}
                icon={service.icon}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}



