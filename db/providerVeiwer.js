'use server'
import db from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

// code defination
// 1-like
// 2-dislike
// 3-view provider

export const addViewer = async (providerid, userid) => {
  const addView = await addDViewAction(providerid, userid)
  const addProviderView = await IncreaseViewerProviderCounter(providerid)
  revalidatePath('/')
  return { msg: 'done' }
}

// --------------------addDViewAction--------------------------

export const addDViewAction = async (providerid, userid) => {
  return await db.userAction.create({
    data: { userid: userid, providerid: providerid, actionid: 3 }
  })
}
// --------------------IncreaseViewerProviderCounter--------------------------
export const IncreaseViewerProviderCounter = async providerid => {
  return await await db.provider.update({
    where: { id: providerid },
    data: {
      viewerCount: { increment: 1 }
    }
  })
}
