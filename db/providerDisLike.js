'use server'
import db from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

// code defination
// 1-like
// 2-dislike

export const likeAction = async (providerid, userid) => {
  const existingRecord = await db.userAction.findFirst({
    where: {
      userid: userid,
      providerid: providerid,
      actionid: 1
    }
  })

  if (existingRecord === null) {
    await addLikeAction(providerid, userid, 1)
    await IncreaseLikeProviderCounter(providerid)
  } else {
    await removeLikeAction(existingRecord.id)
    await decraseLikeProviderCounter(providerid)
  }

  revalidatePath('/')
  return { msg: 'done' }
}

// -----------------------addLikeAction-----------------------
export const addLikeAction = async (providerid, userid) => {
  return await db.userAction.create({
    data: { userid: userid, providerid: providerid, actionid: 1 }
  })
}
// -----------------------removeLikeAction-----------------------
export const removeLikeAction = async id => {
  return await db.userAction.delete({
    where: { id: id }
  })
}
// -----------------------decraseLikeProviderCounter-----------------------

export const decraseLikeProviderCounter = async providerid => {
  return await await db.provider.update({
    where: { id: providerid },
    data: {
      likeCount: { decrement: 1 }
    }
  })
}
// -----------------------IncreaseLikeProviderCounter-----------------------

export const IncreaseLikeProviderCounter = async providerid => {
  return await await db.provider.update({
    where: { id: providerid },
    data: {
      likeCount: { increment: 1 }
    }
  })
}
