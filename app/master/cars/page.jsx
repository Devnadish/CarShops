import { getAllCars } from '@/db/masterFile'
import React from 'react'
import Text from '@/components/shared/Text'
import { CarAction } from './CarAction'
import { NewCar } from '@/components/shared/image/ShowImage'
import CloudImge from '@/components/shared/image/CloudImge'
import { AccordionComponent } from '@/components/shared/AccordionComponent'
const dynamic = 'force-dynmic'
async function page() {
  const cars = await getAllCars()
  return (
    <div className='relative flex h-[80vh] w-full flex-col  items-center gap-4 rounded-md bg-accent p-4'>
      {/* <Text>اضافة سيارة</Text> */}
      <AccordionComponent title={'اضافة سيارة'} icon='+'>
        <NewCar
          carsCounter={cars.carList.length + 1}
          systemsCar={cars.systemsCar}
        />
      </AccordionComponent>

      <DisplayCars cars={cars.carList} />
    </div>
  )
}

export default page

const DisplayCars = ({ cars }) => {
  return (
    <div className=' flex w-full flex-col gap-2 overflow-auto  px-3'>
      {/* <Text>
        <span>عدد السيارات :</span>
        {cars.length}
      </Text> */}
      <div className='p-13 flex w-full flex-col gap-2 overflow-auto rounded-lg border  '>
        {cars.map(car => (
          <div
            className='flex w-full items-center justify-between gap-4 border-b py-1'
            key={car.carid}
          >
            <CloudImge imageName={car.image} alt={car.metaTag} />

            <div className='flex w-full items-center justify-between rounded'>
              <div className='flex w-full items-start gap-4  px-8'>
                <Text
                  fontSize={'medium'}
                  className={'rounded-lg bg-green-300 px-2 text-black'}
                >
                  {car.carid}
                </Text>
                <Text
                  fontSize={'medium'}
                  className={'rounded-lg bg-primary px-2 text-black'}
                >
                  {car.name}
                </Text>
                <Text fontSize={'xs'}>{car.metaTag}</Text>
                <Text fontSize={'xs'}>{car.history}</Text>
              </div>
              <CarAction id={car.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
