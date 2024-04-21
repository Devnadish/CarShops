'use server'
import db from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export const getAllCars = async () => {
  return await db.car.findMany()
}
export const addCar = async data => {
  await db.car.create({ data })
  revalidatePath('master/cars')
  return { msg: 'تمت اضافة السيارة' }
}

export const getAllMasterService = async isMaster => {
  return await db.service.findMany({ where: { isMaster } })
}
export const addMasterService = async data => {
  await db.service.create({ data })
  revalidatePath('master/service')
  return { msg: 'تمت اضافة السيارة' }
}
