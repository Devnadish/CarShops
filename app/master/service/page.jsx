import { addMasterService, getAllMasterService } from '@/db/masterFile'
import React from 'react'
import Text from '@/components/shared/Text'
import Image from 'next/image'
import { ServiceAction } from './ServiceAction'
import Submit from '@/components/shared/Submit'
import { Input } from '@/components/ui/input'
import { AccordionComponent } from '@/components/shared/AccordionComponent'
const dynamic = 'force-dynmic'
async function page() {
  // true mean service not master
  const serivces = await getAllMasterService('service')
  return (
    <div className='flex h-[80vh] w-full flex-col  items-center gap-4 rounded-md bg-accent p-4'>
      <AccordionComponent title={'اضافة صيانة'} icon='+'>
        <NewSerivces serivcesCounter={serivces.length + 1} />
      </AccordionComponent>
      <DisplaySerivces serivces={serivces} />
    </div>
  )
}

export default page

const DisplaySerivces = ({ serivces }) => {
  return (
    <div className='flex w-full flex-col gap-2 overflow-auto  px-3'>
      <Text>
        <span>عدد الخدمات :</span>
        {serivces.length}
      </Text>
      <div className='flex w-full flex-col gap-2 overflow-auto rounded-lg border p-3  '>
        {serivces.map(el => (
          <div
            className='flex w-full items-center justify-between gap-4 border-b py-1'
            key={el.id}
          >
            <div className='flex size-10 items-center justify-center rounded-full border bg-foreground'>
              <Image
                src={'/logo.svg'}
                // src={car.logo}
                alt={el.service}
                className='w-full object-contain'
                width={45}
                height={45}
              />
            </div>

            <div className='flex w-full items-center justify-between rounded'>
              <div className='flex w-full items-center gap-4  px-8'>
                <Text fontSize={'medium'}>{el.carid}</Text>
                <Text fontSize={'medium'}>{el.service_id}</Text>
                <Text fontSize={'medium'}>{el.service}</Text>
                <Text fontSize={'medium'}>{el.detail}</Text>
              </div>
              <ServiceAction id={el.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const NewSerivces = ({ serivcesCounter }) => {
  const handleNewCar = async formData => {
    'use server'
    const data = {
      service_id: serivcesCounter,
      service: formData.get('service'),
      detail: formData.get('detail'),
      image: formData.get('image'),
      isMaster: true
    }
    const result = await addMasterService(data)
  }

  return (
    <form
      action={handleNewCar}
      className='flex max-w-lg flex-col gap-2 border p-4'
    >
      <div className='flex items-center gap-4'>
        <Input placeholder='اسم الخدمة' name='service' />
        <Input placeholder='رابط صورة الخدمة' name='image' />
      </div>
      <div className='flex items-center gap-4'>
        <Input placeholder='وصف للخدمة' name='detail' />
      </div>
      <Submit notifyMsg={'تم حفظ الخدمة بنجاح'} />
    </form>
  )
}
