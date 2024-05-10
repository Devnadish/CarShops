'use server'
import db from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export const checkMails = async mail => {
  const inboxMail = await db.inbox.findMany({
    where: { to: mail, isOpen: false }
  })
  return inboxMail
}

export const getSingleMail = async mail => {
  const Mail = await db.inbox.findFirst({
    where: { id: mail }
  })

  const flagReadIt = await db.inbox.update({
    where: { id: mail },
    data: { isOpen: true }
  })
  revalidatePath('/')

  return Mail
}

export const sendMail = async data => {
  console.log(data)
  const newMail = await db.inbox.create({ data: data })
  if (newMail.id) {
    return {
      stuts: true,
      msg: 'تم ارسال الايميل شاكرين تعاونكم وستم الرد عليكم في اقرب وقت ممكن'
    }
  } else {
    return {
      stuts: false,
      msg: 'لم يتم ارسال الايمبل اعد المحاوله في وقت لاحق'
    }
  }
}
