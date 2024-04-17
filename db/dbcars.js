'use server'
import db from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import ShowCard from '@/app/_components/xcard/ShowCard'


export const getCars = async (pageNo, query) => {
  const limit = parseInt(process.env.PROVODER_PAGE_LIMIT)
  let providers = []
  let carCondition
  let typeCondition

  if (query.vechile) {
    carCondition = query.vechile && FilterFunc(query.vechile)
    console.log("x0")
  } else {
    console.log("x1")
    carCondition = {}
  }

  if (query.type) {
    typeCondition = query.type && FilterFuncType(query.type)
  } else {
    typeCondition = {}
  }
  // console.log(typeCondition)

  let whereCondition = { ...carCondition, ...typeCondition }

  if (!query) {
    providers = await db.provider.findMany({
      skip: (pageNo - 1) * limit,
      take: limit,
      where: whereCondition,
      orderBy: [sortBy]
    })
  } else {
    const sortBy = SortFunc(query.sort)

    providers = await db.provider.findMany({
      skip: (pageNo - 1) * limit,
      take: limit,
      where: whereCondition,
      orderBy: [sortBy]
    })
  }

  if (providers.length === 0) {
    console.log('No more records available.')
    revalidatePath('/')
    return { providers: [], hasMore: false } // Return an object with empty providers and hasMore set to false
  }

  revalidatePath('/')

  const totalProvidersCount = await db.provider.count({ where: whereCondition }) // Assuming there is a count method in your database provider
  const pageCount = Math.ceil(totalProvidersCount / limit)
  return {
    providers: providers,
    hasMore: true,
    pageCount,
    recordCount: totalProvidersCount
  }
}














const SortFunc = param => {
  let sortBy
  if (param === 'star') {
    sortBy = { starCount: 'desc' }
  }
  if (param === 'comment') {
    sortBy = { commentCount: 'desc' }
  }
  if (!param) {
    sortBy = { starCount: 'desc' }
  }
  return sortBy
}

const FilterFuncType = filter => {
  let convertType
  let whereCondition

  switch (filter) {
    case 'center':
      convertType = 'c'

      break
    case 'workshop':
      convertType = 'w'

      break
    case 'man':
      convertType = 'h'

      break

    default:
      break
  }

  return (whereCondition = {
    type: convertType
  })
}

const FilterFunc = filter => {
  let whereCondition

  if (filter === 'showall') {
    return (whereCondition = {})
  }

  return (whereCondition = {
    carType: {
      hasEvery: [filter]
    }
  })
}





// export const getCars = async (pageNo, query) => {
  //   const limit = parseInt(process.env.PROVODER_PAGE_LIMIT)
  //   let providers = []
  //   let carCondition
  //   let typeCondition
   
  //   // providers = await db.provider.findMany({
  //   // })
  
    
  //   revalidatePath('/')
  
  //   const totalProvidersCount = await db.provider.count({ where: whereCondition }) // Assuming there is a count method in your database provider
  //   const pageCount = Math.ceil(totalProvidersCount / limit)
  //   return {
  //     providers: providers,
  //     hasMore: true,
  //     pageCount:5,
  //     // recordCount: totalProvidersCount
  //   }
  // }
  