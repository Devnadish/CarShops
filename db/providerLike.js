'use server'
import db from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

// code defination
// 1-like
// 2-dislike

export const DislikeAction = async (providerid, userid) => {
  const existingRecord = await db.userAction.findFirst({
    where: {
      userid: userid,
      providerid: providerid,
      actionid: 2
    }
  })

  if (existingRecord === null) {
    await addDisLlikeAction(providerid, userid, 2)
    await IncreaseDislLikeProviderCounter(providerid)
  } else {
    await removeLikeAction(existingRecord.id)
    await decraseDisLikeProviderCounter(providerid)
  }

  revalidatePath('/')
  return { msg: 'done' }
}

// --------------------addDisLlikeAction--------------------------

export const addDisLlikeAction = async (providerid, userid) => {
  return await db.userAction.create({
    data: { userid: userid, providerid: providerid, actionid: 2 }
  })
}
// --------------------IncreaseDislLikeProviderCounter--------------------------
export const IncreaseDislLikeProviderCounter = async providerid => {
  return await await db.provider.update({
    where: { id: providerid },
    data: {
      disLikeCount: { increment: 1 }
    }
  })
}

// ----------------------removeLikeAction------------------------

export const removeLikeAction = async id => {
  return await db.userAction.delete({
    where: { id: id }
  })
}
// -----------------------decraseDisLikeProviderCounter-----------------------
export const decraseDisLikeProviderCounter = async providerid => {
  return await await db.provider.update({
    where: { id: providerid },
    data: {
      disLikeCount: { decrement: 1 }
    }
  })
}
