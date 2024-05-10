'use server'
import db from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { removeDisLikeAction } from './provideDisLike'

export const LikeON = async (providerid, userid) => {
  try {
    await Promise.all([
      addLlikeAction(providerid, userid),
      IncreaseLikeProviderCounter(providerid),
      removeDisLikeAction(providerid, userid)
    ])
    revalidatePath('/')
  } catch (error) {
    console.error('Error in StarOn function:', error)
  }
}

export const LikeOFF = async (providerid, userid) => {
  try {
    await Promise.all([
      removeLikeAction(providerid, userid),
      decraseLikeProviderCounter(providerid)
    ])
    revalidatePath('/')
  } catch (error) {
    console.error('Error in StarOn function:', error)
  }
}

// --------------------addDisLlikeAction--------------------------

export const addLlikeAction = async (providerid, userid) => {
  return await db.userAction.create({
    data: { userid: userid, providerid: providerid, actionid: 1 }
  })
}
// --------------------IncreaseDislLikeProviderCounter--------------------------
export const IncreaseLikeProviderCounter = async providerid => {
  return await await db.provider.update({
    where: { id: providerid },
    data: {
      likeCount: { increment: 1 }
    }
  })
}

// ----------------------removeLikeAction------------------------

export const removeLikeAction = async (providerid, userid) => {
  const existingRecord = await db.userAction.findFirst({
    where: { userid: userid, providerid: providerid, actionid: 1 },
    select: { id: true }
  })
  return await db.userAction.delete({
    where: { id: existingRecord.id }
  })
}

// -----------------------decraseDisLikeProviderCounter-----------------------
export const decraseLikeProviderCounter = async providerid => {
  return await await db.provider.update({
    where: { id: providerid },
    data: {
      likeCount: { decrement: 1 }
    }
  })
}
