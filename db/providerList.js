'use server'
import db from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import {
  FilterFuncType,
  SortFunc,
  getCarIdRetunCarInfo,
  getServiceIdRetunServiceInfo
} from './utlDb'

// export const getProviderList = async (pageNo, query, userid) => {
//   const limit = parseInt(process.env.PROVODER_PAGE_LIMIT)
//   let providers = []
//   let carCondition
//   let typeCondition

//   if (query.vechile) {
//     carCondition = query.vechile && FilterFuncType(query.vechile)
//   } else {
//     carCondition = {}
//   }

//   if (query.type) {
//     typeCondition = query.type && FilterFuncType(query.type)
//   } else {
//     typeCondition = {}
//   }

//   let whereCondition = { ...carCondition, ...typeCondition }

//   if (!query) {
//     const sortBy = SortFunc(query.sort)
//     providers = await db.provider.findMany({
//       skip: (pageNo - 1) * limit,
//       take: limit,
//       where: whereCondition,
//       orderBy: [sortBy]
//     })
//   } else {
//     const sortBy = SortFunc(query.sort)

//     providers = await db.provider.findMany({
//       skip: (pageNo - 1) * limit,
//       take: limit,
//       where: whereCondition,
//       orderBy: [sortBy]
//     })
//   }

//   if (providers.length === 0) {
//     revalidatePath('/')
//     return { providers: [], hasMore: false } // Return an object with empty providers and hasMore set to false
//   }
//   // get Car id From Provider array and return provider with Car Name
//   const providerWitnCarName = await carListWithIdReturnCarNames(providers)
//   const FinalProvider =
//     await serviceistWithIdReturnServiceNames(providerWitnCarName)

//   revalidatePath('/')

//   const totalProvidersCount = await db.provider.count({ where: whereCondition }) // Assuming there is a count method in your database provider
//   const pageCount = Math.ceil(totalProvidersCount / limit)

//   return {
//     providers: FinalProvider,
//     hasMore: true,
//     pageCount,
//     recordCount: totalProvidersCount
//   }
// }

// take a list of cars id  serch in car db and return information about them

export const getProviderList = async (pageNo, query) => {
  const limit = parseInt(process.env.PROVODER_PAGE_LIMIT)
  let providers = []
  // RECHCK FILLTERRATION
  const carCondition = query.vechile ? await FilterFuncType(query.vechile) : {}
  const typeCondition = query.type ? FilterFuncType(query.type) : {}
  const whereCondition = { ...carCondition, ...typeCondition }

  const sortBy = SortFunc(query.sort)

  providers = await db.provider.findMany({
    skip: (pageNo - 1) * limit,
    take: limit,
    where: whereCondition,
    orderBy: [sortBy]
  })

  if (providers.length === 0) {
    revalidatePath('/')
    return { providers: [], hasMore: false }
  }

  const providerWithCarName = await carListWithIdReturnCarNames(providers)
  const finalProvider =
    await serviceistWithIdReturnServiceNames(providerWithCarName)

  revalidatePath('/')

  const totalProvidersCount = await db.provider.count({ where: whereCondition })
  const pageCount = Math.ceil(totalProvidersCount / limit)

  return {
    providers: finalProvider,
    hasMore: true,
    pageCount,
    recordCount: totalProvidersCount
  }
}

export const carListWithIdReturnCarNames = async providers => {
  const updatedProviders = await Promise.all(
    providers.map(async provider => {
      const carNames = await Promise.all(
        provider.carType.map(async carId => {
          const carInfo = await getCarIdRetunCarInfo(carId)
          return carInfo.name // Extract only the car name
        })
      )

      return {
        ...provider,
        carType: carNames
      }
    })
  )
  return updatedProviders
}

export const serviceistWithIdReturnServiceNames = async providers => {
  const updatedProviders = await Promise.all(
    providers.map(async provider => {
      const serviceNames = await Promise.all(
        provider.service.map(async serviceId => {
          const serviceInfo = await getServiceIdRetunServiceInfo(serviceId)
          return serviceInfo?.service // Extract only the car name
        })
      )

      return {
        ...provider,
        service: serviceNames
      }
    })
  )
  return updatedProviders
}
