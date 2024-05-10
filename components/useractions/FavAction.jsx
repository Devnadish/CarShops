'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Notify,
  SubSpinner
} from '../../app/provider/[providerid]/[slug]/_component/sections/herosection/logic'
import { Heart, HeartHandshake } from '@/lib/icons'
import { FavOFF, FavON } from '@/components/useractions/db/providerFavIt'
import useSessionValidation from '@/components/hooks/useSessionValidation'
import Swal from 'sweetalert2'

function FavAction({ favCount = 0, session, providerId, isFav }) {
  const [isFavItLoading, setFavItisLoading] = useState(false)
  const isValidSession = useSessionValidation(session)

  const MakeItOFF = async (providerId, userId) => {
    const result = await Swal.fire({
      title: 'ازالة النجمة توثر علي نامل التراجع في قرارك !',
      showDenyButton: true,
      confirmButtonText: 'الاستمرار في ازالة النجمة',
      denyButtonText: 'تراجع عن القرار',
      icon: 'question',
      customClass: {
        popup: 'bg-secondary border border-gray-300 rounded-xl shadow-2xl',
        title: 'font-cairo bg-red-600 text-2xl h-16 text-white  ',
        confirmButton:
          'bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600',
        denyButton:
          'bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'
      }
    })

    if (result.isConfirmed) {
      await FavOFF(providerId, userId)
      Swal.fire('تمت ازالة النجمة بنجاح!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('لم يتم ازالة النجمة', '', 'info')
    }
  }
  const MakeItON = async (providerId, userId) => {
    Swal.fire({
      title: 'احسنت!',
      text: 'اشكرك لدعمك',
      icon: 'success'
    })
    await FavON(providerId, userId)
  }

  const handleFavIt = async () => {
    if (isValidSession.isNotLoggedIn) {
      return Notify('لا بد من تسجيل الدخول', 'info', 'نشط الحساب')
    } else {
      setFavItisLoading(true)
      isFav
        ? await MakeItOFF(providerId, session?.user?.id)
        : await MakeItON(providerId, session?.user?.id)
      setFavItisLoading(false)
    }
  }

  return (
    <Button
      variant='ghost'
      onClick={handleFavIt}
      // className={`  ${isFav ? 'bg-green-700 text-white' : 'bg-secondary'}     `}
      className={`size-10   border shadow-lg ${isFav ? 'bg-green-700 text-white' : 'bg-secondary'}`}
    >
      {isFavItLoading ? (
        <SubSpinner />
      ) : (
        <div className='flex   flex-col items-center justify-center'>
          {isFav ? (
            <HeartHandshake className='size-4 text-red-500' />
          ) : (
            <Heart className='size-4' />
          )}
          <span className='text-[.7rem]'>{favCount}</span>
        </div>
      )}
    </Button>
  )
}

export default FavAction
