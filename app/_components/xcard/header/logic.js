import { Button } from '@/components/ui/button'
import { Dislike, Like } from '@/components/svg/LikeAndDislike'
import { MessageCircleMore, Star } from '@/lib/icons'
import { likeAction } from '@/db/providerDisLike'
import { DislikeAction } from '@/db/providerLike'
import { Notify } from '@/lib/notify'
import { useState } from 'react'
import { SubSpinner } from '@/components/shared/Spinner'
export {
  Button,
  Dislike,
  Like,
  MessageCircleMore,
  Star,
  likeAction,
  DislikeAction,
  Notify,
  useState,
  SubSpinner
}

export const handleLike = async (providerId, session, setLikeisLoading) => {
  if (session === null) {
    return Notify('سجل دخول لكي تستفيد من الخدمة', 'info', 'سجل دخول')
  }
  if (!session?.user?.isVerified) {
    return Notify('الحساب غير نشط لابد من تنشيط الحساب', 'info', 'نشط الحساب')
  }
  // ----------------
  setLikeisLoading(true)
  await likeAction(providerId, session?.user?.id)
  setLikeisLoading(false)
  // ----------------

  return
}
export const handleDisLike = async (
  providerId,
  session,
  setDisLikeisLoading
) => {
  if (session === null) {
    return Notify('Not Register', 'error', 'error')
  }
  if (!session?.user?.isVerified) {
    return Notify('Not Authenticatit Acount', 'info', 'info')
  }
  // ----------------
  setDisLikeisLoading(true)
  await DislikeAction(providerId, session?.user?.id)
  setDisLikeisLoading(false)
  // ----------------
}
