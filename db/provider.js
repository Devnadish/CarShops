'use server'
import db from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export const providerData = async id => {
  const images = await db.image.findMany({
    where: { providerid: id },
    select: { image: true, type: true }
  })
  const providerInfo = await db.provider.findFirst({
    where: { id: id },
    select: {
      detail: true,
      logo: true,
      description: true,
      heroSlogon: true,
      providerName: true,
      carType: true
    }
  })


  const providerService = await db.service.findMany({
    where: { providerid: id },
    select: { service: true, detail: true, image: true }
  })
  const { logo , ...rest } = providerInfo;

const { heroSlogon, description, detail, providerName, carType } = rest;
  // const { logo="./logo.svg", heroSlogon, description,detail,providerName ,carType} = providerInfo;
  console.log(providerService)
console.log(logo)

  return { images,  logo, heroSlogon, description,detail,providerName,carType,providerService };
}
 