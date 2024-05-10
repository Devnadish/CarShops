'use client'

import { Dislike } from '@/components/svg/LikeAndDislike'
import { SubSpinner } from '@/components/shared/Spinner'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import useSessionValidation from '@/components/hooks/useSessionValidation'
import Swal from 'sweetalert2'
import {
  disLikeOFF,
  disLikeON
} from '@/components/useractions/db/provideDisLike'

export const DisLikeBtnAction = ({
  disLikeCount,
  providerId,
  session,
  isDisLike
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [currentIsDisLike, setCurrentIsDisLike] = useState(isDisLike)
  const isValidSession = useSessionValidation(session)
  const btnStyle =
    'flex  items-center  gap-4 border-none p-0 px-2 bg-transparent hover:bg-primary '

  const disLikeItOFF = async (providerId, userId) => {
    const result = await Swal.fire({
      title: 'ازالة الاعجاب يساعدني  نامل الاستمرار في قرارك !',
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: 'الاستمرار في ازالة عدم الاعجاب',
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
      await disLikeOFF(providerId, userId)
      setCurrentIsDisLike(pre => false)
      Swal.fire('تمت ازالة  عدم الاعجاب بنجاح!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('لم يتم ازالة عدم الاعجاب', '', 'info')
    }
  }

  const disLikeItON = async (providerId, useeid) => {
    Swal.fire({
      title: 'احسنت!',
      text: 'اشكرك لدعمك',
      icon: 'success'
    })
    await disLikeON(providerId, session.user.id)
    setCurrentIsDisLike(pre => true)
  }

  const handleDisLikeIt = async () => {
    if (isValidSession.isNotLoggedIn) {
      return Notify('لا بد من تسجيل الدخول', 'info', 'نشط الحساب')
    } else {
      setIsLoading(true)
      currentIsDisLike
        ? await disLikeItOFF(providerId, session.user.id)
        : await disLikeItON(providerId, session.user.id)
      setIsLoading(false)
    }
  }

  return (
    <div className='  flex w-full   flex-wrap  items-center justify-center gap-3 '>
      <Button
        onClick={handleDisLikeIt}
        // className={`flex h-9 flex-grow items-center justify-center gap-4   ${currentIsDisLike ? 'bg-green-700 text-white' : 'bg-secondary'}   text-yellow-300  `}
        className={`size-10  border shadow-lg ${currentIsDisLike ? 'bg-green-700 text-white' : 'bg-secondary'}`}
      >
        {isLoading ? (
          <SubSpinner />
        ) : (
          <div className='flex flex-col  items-center justify-center  text-foreground'>
            <Dislike className='size-4 text-blue-800 ' />
            <span className='text-[.7rem]'>{disLikeCount}</span>
          </div>
        )}
      </Button>
    </div>
  )
}
