'use server'
import db from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { removeLikeAction } from './providerLike'

// code defination
// 1-like
// 2-dislike

// export const DislikeAction = async (providerid, userid) => {
//   const existingRecord = await db.userAction.findFirst({
//     where: {
//       userid: userid,
//       providerid: providerid,
//       actionid: 2
//     }
//   })

//   if (existingRecord === null) {
//     await addDisLlikeAction(providerid, userid, 2)
//     await IncreaseDislLikeProviderCounter(providerid)
//   } else {
//     await removeLikeAction(existingRecord.id)
//     await decraseDisLikeProviderCounter(providerid)
//   }

//   revalidatePath('/')
//   return { msg: 'done' }
// }

export const disLikeON = async (providerid, userid) => {
  try {
    await Promise.all([
      addDisLlikeAction(providerid, userid),
      IncreaseDisLikeProviderCounter(providerid),
      removeLikeAction(providerid, userid)
    ])
    revalidatePath('/')
  } catch (error) {
    console.error('Error in StarOn function:', error)
  }
}

export const disLikeOFF = async (providerid, userid) => {
  try {
    await Promise.all([
      removeDisLikeAction(providerid, userid),
      decraseDisLikeProviderCounter(providerid)
    ])
    revalidatePath('/')
  } catch (error) {
    console.error('Error in StarOn function:', error)
  }
}

// --------------------addDisLlikeAction--------------------------

export const addDisLlikeAction = async (providerid, userid) => {
  return await db.userAction.create({
    data: { userid: userid, providerid: providerid, actionid: 2 }
  })
}
// --------------------IncreaseDislLikeProviderCounter--------------------------
export const IncreaseDisLikeProviderCounter = async providerid => {
  return await await db.provider.update({
    where: { id: providerid },
    data: {
      likeCount: { increment: 1 }
    }
  })
}

// ----------------------removeLikeAction------------------------

export const removeDisLikeAction = async (providerid, userid) => {
  const existingRecord = await db.userAction.findFirst({
    where: { userid: userid, providerid: providerid, actionid: 2 },
    select: { id: true }
  })
  return await db.userAction.delete({
    where: { id: existingRecord.id }
  })
}

// -----------------------decraseDisLikeProviderCounter-----------------------
export const decraseDisLikeProviderCounter = async providerid => {
  return await await db.provider.update({
    where: { id: providerid },
    data: {
      likeCount: { decrement: 1 }
    }
  })
}
