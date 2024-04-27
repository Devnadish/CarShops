'use client'
import React, { useState } from 'react'
import Text from '@/components/shared/Text'
import { Button } from '@/components/ui/button'
import { RegisterOutline } from '@/components/svg/Register'
import SideBox from '@/components/shared/SideBox'
import InputWithIcon from '@/components/shared/InputWithIcon'
import { Check, Image, Lock, Mail, Smile, User } from '@/lib/icons'

import Submit from '@/components/shared/Submit'
import { newUser } from '@/db/user'
import { Notify } from '@/lib/notify'
import { OTPDisgits } from './OTPDisgits'
import { Important } from '@/components/svg/Important'
import DialogBox from '@/components/shared/DialogBox'
import ActivationForm from './ActivationForm'

export function Register() {
  const [openRegister, setOpenRegister] = useState(false)
  const [openActivation, setOpenActivation] = useState(false)
  return (
    <div className='flex flex-col items-center gap-4'>
      {/* <Text fontFamily={'tajwal'} fontSize={'medium'}>
        سجل في المنصة واحصل علي هدايا وخصومات
      </Text> */}
      <div className='flex w-full items-center justify-around gap-4'>
        <Button
          variant='outline'
          className='flex items-center gap-4'
          onClick={() => {
            setOpenRegister(true)
          }}
        >
          <RegisterOutline className='size-6' />
          <Text fontFamily={'tajwal'} fontSize={'medium'}>
            تسجيل
          </Text>
        </Button>
        <Button
          variant='outline'
          className='flex items-center gap-4 bg-blue-600 '
          onClick={() => {
            setOpenActivation(true)
          }}
        >
          <Smile className='size-6' />
          <Text fontFamily={'tajwal'} fontSize={'medium'}>
            تنشيظ الحساب
          </Text>
        </Button>
      </div>
      <SideBox open={openRegister} setOpen={setOpenRegister}>
        <RegisterForm />
      </SideBox>
      <DialogBox open={openActivation} setOpen={setOpenActivation}>
        <ActivationForm />
      </DialogBox>
    </div>
  )
}

export const RegisterForm = () => {
  const [register, setOpenRegister] = useState(false)
  const handleNewUser = async formData => {
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      image: formData.get('image')
    }
    const NewUser = await newUser(data)
    console.log(NewUser.code)
    if (NewUser.code === 400) {
      return Notify(NewUser.msg, 'error', 'خلل')
    }

    if (NewUser.code === 401) {
      return Notify(NewUser.msg, 'error', 'غير مسموح')
    }

    if (NewUser.code === 200) {
      setOpenRegister(true)
      return Notify(NewUser.msg, 'info', 'مرحبا')
    }
  }

  return (
    <div className='mt-6   flex max-w-xs flex-col items-center gap-2   '>
      <form
        action={handleNewUser}
        className='flex w-full flex-col items-center justify-center gap-4 '
      >
        <InputWithIcon
          placeholder='الاسم'
          name='name'
          icon={<User strokeWidth={1} />}
        />
        <InputWithIcon
          placeholder='الايميل'
          name='email'
          icon={<Mail strokeWidth={1} />}
        />
        <InputWithIcon
          placeholder='الصورة'
          name='image'
          icon={<Image strokeWidth={1} />}
        />
        <Submit
          title='تسجيل'
          icon={<Check className='text-primary' />}
          w='w-full'
          color='bg-secondary'
        />
      </form>

      <div className='flex w-full flex-col gap-4 rounded-md border-2 border-blue-700 bg-blue-900 p-3 shadow-md'>
        <div className='flex items-start justify-start gap-2'>
          <Important className='size-6 text-yellow-400' />

          <Text fontFamily={'tajwal'} fontSize={'xs'}>
            بعد التسجيل سيتم ارسال كود علي الايميل سجله في المكان المخصص
          </Text>
        </div>
        <div className='flex items-start justify-start gap-2'>
          <Important className='size-6' />
          <Text fontFamily={'tajwal'} fontSize={'xs'}>
            بعد التسجيل اذهب للملف الشخصي واستكمال البيانات المتبقية للاسفادة
            القصوى من المنصة
          </Text>
        </div>
      </div>

      {/* <div className='relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-md border p-4'>
        <OTPDisgits />
        <div
          // data-register={register}
          className='absolute  left-0 top-0 flex h-full w-full animate-pulse items-center  justify-center bg-primary opacity-30 data-[register=true]:hidden'
        >
          <Lock size={100} />
        </div>
      </div> */}
      <DialogBox open={register} setOpen={setOpenRegister}>
        <ActivationForm />
      </DialogBox>
    </div>
  )
}
