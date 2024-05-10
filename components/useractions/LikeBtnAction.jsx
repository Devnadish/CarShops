'use client'

import { LikeOFF, LikeON } from '@/components/useractions/db/providerLike'
import { Like } from '@/components/svg/LikeAndDislike'
import { SubSpinner } from '@/components/shared/Spinner'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import useSessionValidation from '@/components/hooks/useSessionValidation'
import Swal from 'sweetalert2'

//TODO: check the stuts not correctly after loading or changeing counters

export const LikeBtnAction = ({ likeCount, providerId, session, isLike }) => {
  const [isLikeLoading, setLikeisLoading] = useState(false)
  const isValidSession = useSessionValidation(session)
  const [currentIsLike, setCurrentIsLike] = useState(isLike)

  const LikeItOFF = async (providerId, userId) => {
    const result = await Swal.fire({
      title: 'ازالة الاعجاب توثر علي نامل التراجع في قرارك !',
      showDenyButton: true,
      confirmButtonText: 'الاستمرار في ازالة الاعجاب',
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
      await LikeOFF(providerId, userId)
      setCurrentIsLike(pre => false)
      Swal.fire('تمت ازالة الاعجاب بنجاح!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('لم يتم ازالة الاعجاب', '', 'info')
    }
  }

  const LikeItON = async (providerId, userId) => {
    Swal.fire({
      title: 'احسنت!',
      text: 'اشكرك لدعمك',
      icon: 'success'
    })
    await LikeON(providerId, userId)
    setCurrentIsLike(pre => true)
  }

  const handleLikeIt = async () => {
    if (isValidSession.isNotLoggedIn) {
      return Notify('لا بد من تسجيل الدخول', 'info', 'نشط الحساب')
    } else {
      setLikeisLoading(true)
      currentIsLike
        ? await LikeItOFF(providerId, session.user.id)
        : await LikeItON(providerId, session.user.id)
      setLikeisLoading(false)
    }
  }

  return (
    <div className='flex w-full flex-wrap items-center justify-center gap-3'>
      <Button
        variant='ghost'
        onClick={() => handleLikeIt()}
        className={`size-10  border shadow-lg ${currentIsLike ? 'bg-green-700 text-white' : 'bg-secondary'}`}
      >
        {isLikeLoading ? (
          <SubSpinner />
        ) : (
          <div className='flex  flex-col  items-center justify-center '>
            <Like className='size-4' />
            <span className='text-[.8rem]'>{likeCount}</span>
          </div>
        )}
      </Button>
    </div>
  )
}
