import React, { useState } from 'react'
import { OTPDisgits } from './OTPDisgits'
import { Lock, Mail, Smile } from '@/lib/icons'
import InputWithIcon from '../shared/InputWithIcon'
import Submit from '../shared/Submit'
import { activationsUser } from '@/db/user'
import { Notify } from '@/lib/notify'
import Text from '../shared/Text'

function ActivationForm() {
  const [value, setValue] = useState('')

  const handleActivation = async formData => {
    const data = {
      email: formData.get('email'),
      VerifiedToken: value
    }
    const result = await activationsUser(data)
    if (result.code === 200) {
      Notify(result.msg, 'success', 'مرحبا بك')
    }
    if (result.code === 401) {
      Notify(result.msg, 'error', 'الايميل')
    }
    if (result.code === 402) {
      Notify(result.msg, 'error', 'الرمز')
    }
  }

  return (
    <div className='flex w-full max-w-xs flex-col items-center justify-center gap-4'>
      <Lock size={25} />
      <Text fontSize={'large'}>تنشيط الحساب</Text>
      <form
        action={handleActivation}
        className='flex w-full flex-col items-center justify-center gap-4 '
      >
        <InputWithIcon
          placeholder='الايميل'
          name='email'
          icon={<Mail strokeWidth={1} />}
        />
        <OTPDisgits value={value} setValue={setValue} />
        <Submit
          title={'تنشيط الحساب'}
          className='flex w-full max-w-[220px] items-center gap-4 bg-secondary'
          icon={<Smile />}
          color='bg-secondary'
          w='w-full'
        />
      </form>
    </div>
  )
}

export default ActivationForm
