'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Notify,
  SubSpinner
} from '../../app/provider/[providerid]/[slug]/_component/sections/herosection/logic'
import { StarIcon } from '@/lib/icons'
import {
  StarActionDb,
  StarOFF,
  StarON
} from '@/components/useractions/db/providerStarIt'
import useSessionValidation from '@/components/hooks/useSessionValidation'
import Swal from 'sweetalert2'
function StarAction({ starCount = 0, session, providerId, isStar }) {
  const [isStarItLoading, setStarItisLoading] = useState(false)
  const [currentIsStar, setCurrentIsStar] = useState(isStar)
  const isValidSession = useSessionValidation(session)

  // if (!isValidSession) {
  //   return null
  // }
  // const handleStarIt = async () => {
  //   if (!session) {
  //     return Notify('Not Registered', 'error', 'error')
  //   }
  //   if (!session.user?.isVerified) {
  //     return Notify('Not Authenticatit Account', 'info', 'info')
  //   }

  //   setStarItisLoading(true)

  //   try {
  //     await StarActionDb(providerId, session.user.id)
  //     setStarItisLoading(false)
  //   } catch (error) {
  //     console.error('Error:', error)
  //     setStarItisLoading(false)
  //   }
  // }

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
      await StarOFF(providerId, userId)
      setCurrentIsStar(pre => false)
      Swal.fire('تمت ازالة النجمة بنجاح!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('لم يتم ازالة النجمة', '', 'info')
    }
  }

  const MakeItON = async (providerId, useeid) => {
    Swal.fire({
      title: 'احسنت!',
      text: 'اشكرك لدعمك',
      icon: 'success'
    })
    await StarON(providerId, session.user.id)
    setCurrentIsStar(pre => true)
  }

  const handleStarIt = async () => {
    if (isValidSession.isNotLoggedIn) {
      return Notify('لا بد من تسجيل الدخول', 'info', 'نشط الحساب')
    } else {
      setStarItisLoading(true)
      currentIsStar
        ? await MakeItOFF(providerId, session.user.id)
        : await MakeItON(providerId, session.user.id)
      setStarItisLoading(false)
    }
  }

  return (
    <Button
      variant='ghost'
      onClick={handleStarIt}
      className={`size-10   border shadow-lg ${currentIsStar ? 'bg-green-700 text-white' : 'bg-secondary'}`}
    >
      {isStarItLoading ? (
        <SubSpinner />
      ) : (
        <div className='flex   flex-col items-center justify-center  '>
          <StarIcon className='size-4' />
          <span className='text-[.8rem]'>{starCount}</span>
        </div>
      )}
    </Button>
  )
}

export default StarAction
