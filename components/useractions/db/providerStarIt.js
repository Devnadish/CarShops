'use server'
import db from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
// 4-star

export const StarON = async (providerid, userid) => {
  try {
    await Promise.all([
      addStarAction(providerid, userid),
      IncreaseStarProviderCounter(providerid)
    ])
    revalidatePath('/')
  } catch (error) {
    console.error('Error in StarOn function:', error)
  }
}

export const StarOFF = async (providerid, userid) => {
  try {
    await Promise.all([
      removeStarAction(providerid, userid),
      decraseStarProviderCounter(providerid)
    ])
    revalidatePath('/')
  } catch (error) {
    console.error('Error in StarOn function:', error)
  }
}

export const StarActionDb = async (providerid, userid) => {
  const existingRecord = await db.userAction.findFirst({
    where: {
      userid: userid,
      providerid: providerid,
      actionid: 4
    }
  })

  if (existingRecord === null) {
    await addStarAction(providerid, userid)
    await IncreaseStarProviderCounter(providerid)
  } else {
    await removeStarAction(providerid, userid)
    await decraseStarProviderCounter(providerid)
  }

  revalidatePath('/')
  return { msg: 'done' }
}

// --------------------addStarAction--------------------------

export const addStarAction = async (providerid, userid) => {
  return await db.userAction.create({
    data: { userid: userid, providerid: providerid, actionid: 4 }
  })
}
// --------------------IncreaseStarProviderCounter--------------------------
export const IncreaseStarProviderCounter = async providerid => {
  return await await db.provider.update({
    where: { id: providerid },
    data: {
      starCount: { increment: 1 }
    }
  })
}

// ----------------------removeLikeAction------------------------

export const removeStarAction = async (providerid, userid) => {
  const existingRecord = await db.userAction.findFirst({
    where: { userid: userid, providerid: providerid, actionid: 4 },
    select: { id: true }
  })
  return await db.userAction.delete({
    where: { id: existingRecord.id }
  })
}
// -----------------------decraseStarProviderCounter-----------------------
export const decraseStarProviderCounter = async providerid => {
  return await await db.provider.update({
    where: { id: providerid },
    data: {
      starCount: { decrement: 1 }
    }
  })
}
