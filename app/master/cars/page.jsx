import { getAllCars } from '@/db/masterFile'
import React from 'react'
import Text from '@/components/shared/Text'
import Image from 'next/image'
import { CarAction } from './CarAction'
import Submit from '@/components/shared/Submit'
import { Input } from '@/components/ui/input'
import { addCar } from '@/db/masterFile'
const dynamic = 'force-dynmic'
async function page() {
  const cars = await getAllCars()
  return (
    <div className='flex h-[80vh] w-full flex-col  items-center gap-4 rounded-md bg-accent p-4'>
      <Text>اضافة سيارة</Text>
      <NewCar carsCounter={cars.length + 1} />
      <DisplayCars cars={cars} />
    </div>
  )
}

export default page

const DisplayCars = ({ cars }) => {
  return (
    <div className='flex w-full flex-col gap-2 overflow-auto  px-3'>
      <Text>
        <span>عدد السيارات :</span>
        {cars.length}
      </Text>
      <div className='flex w-full flex-col gap-2 overflow-auto rounded-lg border p-3  '>
        {cars.map(car => (
          <div
            className='flex w-full items-center justify-between gap-4 border-b py-1'
            key={car.carid}
          >
            <div className='flex size-10 items-center justify-center rounded-full border bg-foreground'>
              <Image
                src={'/logo.svg'}
                // src={car.logo}
                alt={car.name}
                className='w-full object-contain'
                width={45}
                height={45}
              />
            </div>

            <div className='flex w-full items-center justify-between rounded'>
              <div className='flex w-full items-center gap-4  px-8'>
                <Text fontSize={'medium'}>{car.carid}</Text>
                <Text fontSize={'medium'}>{car.name}</Text>
                <Text fontSize={'medium'}>{car.metaTag}</Text>
                <Text fontSize={'medium'}>{car.history}</Text>
              </div>
              <CarAction id={car.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const NewCar = ({ carsCounter }) => {
  const handleNewCar = async formData => {
    'use server'
    const data = {
      carid: carsCounter,
      name: formData.get('name'),
      logo: formData.get('logo'),
      history: formData.get('metaTag')
    }
    const result = await addCar(data)
    // Notify(result.msg, 'success', 'تم')
  }

  return (
    <form
      action={handleNewCar}
      className='flex max-w-lg flex-col gap-2 border p-4'
    >
      <div className='flex items-center gap-4'>
        <Input placeholder='اسم السيارة' name='name' />
        <Input placeholder='رابط الشعار' name='logo' />
      </div>
      <div className='flex items-center gap-4'>
        <Input placeholder='نص لتحسين البحث' name='metaTag' />
        <Input placeholder='معلومات عن السيارة' name='history' />
      </div>
      <Submit notifyMsg={'تم حفظ السيارة بنجاح'} />
    </form>
  )
}
