'use server'
import db from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
// 5-Fav

export const FavON = async (providerid, userid) => {
  try {
    await Promise.all([
      addFavAction(providerid, userid),
      IncreaseFavProviderCounter(providerid)
    ])
    revalidatePath('/')
  } catch (error) {
    console.error('Error in FavOn function:', error)
  }
}

export const FavOFF = async (providerid, userid) => {
  try {
    await Promise.all([
      removeFavAction(providerid, userid),
      decraseFavProviderCounter(providerid)
    ])
    revalidatePath('/')
  } catch (error) {
    console.error('Error in FavOn function:', error)
  }
}

// --------------------addFavAction--------------------------

export const addFavAction = async (providerid, userid) => {
  return await db.userAction.create({
    data: { userid: userid, providerid: providerid, actionid: 5 }
  })
}
// --------------------IncreaseFavProviderCounter--------------------------
export const IncreaseFavProviderCounter = async providerid => {
  return await await db.provider.update({
    where: { id: providerid },
    data: {
      favCount: { increment: 1 }
    }
  })
}

// ----------------------removeLikeAction------------------------

export const removeFavAction = async (providerid, userid) => {
  const existingRecord = await db.userAction.findFirst({
    where: { userid: userid, providerid: providerid, actionid: 5 },
    select: { id: true }
  })
  return await db.userAction.delete({
    where: { id: existingRecord.id }
  })
}
// -----------------------decraseFavProviderCounter-----------------------
export const decraseFavProviderCounter = async providerid => {
  return await await db.provider.update({
    where: { id: providerid },
    data: {
      favCount: { decrement: 1 }
    }
  })
}
