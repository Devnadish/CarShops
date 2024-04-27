'use server'
import db from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export const getProviderList = async (pageNo, query, userid) => {
  const limit = parseInt(process.env.PROVODER_PAGE_LIMIT)
  let providers = []
  let carCondition
  let typeCondition

  if (query.vechile) {
    carCondition = query.vechile && FilterFunc(query.vechile)
  } else {
    carCondition = {}
  }

  if (query.type) {
    typeCondition = query.type && FilterFuncType(query.type)
  } else {
    typeCondition = {}
  }

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
    revalidatePath('/')
    return { providers: [], hasMore: false } // Return an object with empty providers and hasMore set to false
  }
  const newProfiderWithLikeAndDislike = await updateProvidersWithUserActions(
    providers,
    userid
  )

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

const updateProvidersWithUserActions = async (providers, userid) => {
  try {
    const updatedProviders = []
    for (const provider of providers) {
      try {
        const userAction = await db.userAction.findFirst({
          where: {
            providerid: provider.id,
            userid,
            actionid: { in: [1, 2] }
          }
        })
        // ... rest of the logic using userAction
        updatedProviders.push(
          userAction?.actionid === 1
            ? { ...provider, like: true }
            : userAction?.actionid === 2
              ? { ...provider, dislike: true }
              : provider
        )
      } catch (error) {
        console.error('Error fetching user action:', error)
        // Handle the error appropriately (e.g., return a default value)
      }

      // ... rest of the logic using userAction
    }
    return updatedProviders
  } catch (error) {
    console.error('Error in updateProvidersWithUserActions:', error)
    throw error
  }
}
