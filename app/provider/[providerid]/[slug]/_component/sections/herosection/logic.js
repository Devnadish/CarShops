import { useState } from 'react'
import Link from 'next/link'
import { Heart, MessageCircleMore, Star } from '@/lib/icons'
import { Notify } from '@/lib/notify'
import { SubSpinner } from '@/components/shared/Spinner'
import { Dislike, Like } from '@/components/svg/LikeAndDislike'
import { Button } from '@/components/ui/button'
import { likeAction } from '@/db/_providerDisLike'
import { DislikeAction } from '@/components/useractions/db/providerLike'
import { StarAction } from '@/components/useractions/db/providerStarIt'

export {
  Link,
  Heart,
  MessageCircleMore,
  Star,
  Notify,
  SubSpinner,
  Dislike,
  Like,
  Button,
  useState
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
