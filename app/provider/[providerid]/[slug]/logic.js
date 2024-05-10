import ImageSlider from './_component/sections/gallary/ImageSlider'
import { providerData } from '@/db/provider'
import { Detail } from './_component/sections/aboutus/Detail'
import { CarFixing } from './_component/sections/experiance/CarFixing'
import { Service } from './_component/sections/department/Service'
import Link from 'next/link'
import { Heart, MessageCircleMore, Star } from '@/lib/icons'
import { HeroSection } from './_component/sections/herosection/HeroSection'
import { ExtraServices } from './_component/sections/extraservice/ExtraServices'
export {
  ImageSlider,
  providerData,
  Detail,
  CarFixing,
  Service,
  Link,
  Heart,
  HeroSection,
  ExtraServices,
  MessageCircleMore,
  Star
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
