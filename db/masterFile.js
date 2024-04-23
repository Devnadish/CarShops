'use server'
import db from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { carLogos } from '@/constant/carLogo'
import { extraService } from '@/constant/extraService'
import { citiesInKSA } from '@/constant/regions'
import { fakeUsers } from './FakeInsertion'

export const getAllCars = async () => {
  const carList = await db.car.findMany()
  const systemsCar = await db.systemImage.findMany({
    where: { description: 'carlogo' }
  })
  return { carList, systemsCar }
}
export const addCar = async data => {
  await db.car.create({ data })
  revalidatePath('master/cars')
  return { msg: 'تمت اضافة السيارة' }
}

export const getAllMasterService = async type => {
  return await db.service.findMany({ where: { type: type } })
}
export const addMasterService = async data => {
  await db.service.create({ data })
  revalidatePath('master/service')
  return { msg: 'تمت اضافة السيارة' }
}

export const addCarsImages = async data => {
  // Use Promise.all to await all async operations in the loop
  await Promise.all(
    data.map(async image => {
      await db.systemImage.create({
        data: { image: image, description: 'carlogo', userid: 'khalid' }
      })
    })
  )

  // Perform revalidation and return a message
  revalidatePath('master/cars')
  return { msg: 'تمت اضافة السيارات' }
}

export const carsAutoInsert = async data => {
  // Use Promise.all to await all async operations in the loop
  await db.car.deleteMany()
  await Promise.all(
    carLogos.map(async (image, idx) => {
      await db.car.create({
        data: {
          name: image.label,
          image: image.logo,
          metaTag: image.alt,
          carid: idx + 1,
          history: 'المعلومات غير متوفر حاليا',
          userid: 'khalid'
        }
      })
    })
  )

  // Perform revalidation and return a message
  revalidatePath('master/cars')
  return { msg: 'تمت اضافة السيارات' }
}

export const serviceAutoInsert = async data => {
  await db.service.deleteMany()
  await Promise.all(
    extraService.map(async (image, idx) => {
      await db.service.create({
        data: {
          service: image.title,
          description: image.description,
          // logo: image.icon,
          type: image.type,
          subPoints: image.subPoints,
          userid: 'khalid'
        }
      })
    })
  )

  // Perform revalidation and return a message
  revalidatePath('master/cars')
  return { msg: 'تمت اضافة السيارات' }
}

export const citiyAutoInsert = async data => {
  // Use Promise.all to await all async operations in the loop
  await db.city.deleteMany()
  await Promise.all(
    citiesInKSA.map(async (city, idx) => {
      await db.city.create({
        data: {
          countryId: 'KSA',
          city: city,
          userid: 'khalid'
        }
      })
    })
  )
}
export const usersAutoInsert = async data => {
  // Use Promise.all to await all async operations in the loop
  await db.user.deleteMany()
  await fakeUsers(10)
}
