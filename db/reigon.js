'use server'
import db from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export const getAllCitis = async () => {
  const cities = await db.city.findMany()
  const cityNames = cities.map(city => city.city)
  return cityNames
}
