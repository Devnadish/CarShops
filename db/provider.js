'use server'
import db from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { addViewer } from './providerVeiwer'
import {
  getCarIdRetunCarInfo,
  getServiceIdRetunServiceInfo,
  grapActionFromProviderService
} from './utlDb'
import { CollectRatine } from '@/app/provider/[providerid]/[slug]/_component/sections/rate/compunent/rateDb'

export const providerData = async (id, userid) => {
  const providerInfo = await getProviderInfo(id)
  const Imeges = await getSliderImages(id)
  const extraService = await getServiceInformation(
    providerInfo.extarService,
    id
  )
  const Department = await getServiceInformation(providerInfo.service, id)
  const carsInfo = await getCarsDetail(providerInfo.carType)
  const branchWorkingshour = await getBranchWorkingsHour(id)
  const providerRate = await CollectRatine(id)
  const provider = {
    ...providerInfo,
    Imeges,
    Department,
    extraService,
    carsInfo,
    branchWorkingshour,
    providerRate
  }

  // Increase viewr By One
  const addProviderViewer = await addViewer(id, userid)
  revalidatePath('/')
  return provider
}

const getProviderInfo = async id => {
  if (id === undefined) {
    return null
  }
  return await db.provider.findFirst({
    where: { id: id }
  })
}
const getSliderImages = async id => {
  return await db.image.findMany({
    where: { providerid: id },
    select: { image: true, type: true }
  })
}

const getServiceDetail = async id => {
  const providerService = await db.providerService.findMany({
    where: { providerid: id }
  })

  const serviceDetail = await geteDataFromServiceTable(providerService)

  return { serviceDetail }
}

const getCarsDetail = async Cars => {
  let carsArray = []
  const serviceNames = await Promise.all(
    Cars.map(async car => {
      const carInfo = await getCarIdRetunCarInfo(car)
      return carsArray.push(carInfo) // Extract only the car name
    })
  )
  return carsArray
}

const getServiceInformation = async (department, providerid) => {
  let departmetArray = []
  const serviceNames = await Promise.all(
    department.map(async dep => {
      const departmentInfo = await getServiceIdRetunServiceInfo(dep)
      const ActionData = await grapActionFromProviderService(dep, providerid)
      const newx = {
        ...departmentInfo,
        ActionData
      }
      return departmetArray.push(newx)
    })
  )
  return departmetArray
}

export const getPrviderData = async id => {
  try {
    const provider = await db.provider.findFirst({
      where: { id: id },
      select: {
        providerName: true,
        starCount: true,
        commentCount: true,
        type: true,
        likeCount: true,
        disLikeCount: true,
        viewerCount: true,
        shareCount: true,
        favCount: true
      }
    })
    return provider || ''
  } catch (error) {
    return error
  }
}

export const getBranchWorkingsHour = async id => {
  return await db.providerBranch.findMany({ where: { providerid: id } })
}
