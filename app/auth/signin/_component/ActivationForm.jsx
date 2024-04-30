import React, { useState } from 'react'
import { OTPDisgits } from './OTPDisgits'
import { Lock, Mail, Smile } from '@/lib/icons'
import InputWithIcon from '@/components/shared/InputWithIcon'
import Submit from '@/components/shared/Submit'
import { activationsUser } from '@/db/user'
import { Notify } from '@/lib/notify'
import Text from '@/components/shared/Text'
import { Button } from '@/components/ui/button'
import DialogBox from '@/components/shared/DialogBox'
import { ThinkingIcon1 } from '@/components/svg/Thinking'
import { Verifyed } from '@/components/svg/Verifyed'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function ActivationForm() {
  const [openActivation, setOpenActivation] = useState(false)

  const fireAlert = () => {
    Swal.fire({
      title: 'اهمية تنشيط الحساب',
      icon: 'question',
      iconHtml: '؟',
      confirmButtonText: 'نعم',
      cancelButtonText: 'لا',
      showCloseButton: true
    })
  }

  return (
    <div className='mt-2 flex w-full items-center gap-4'>
      <Button
        variant='outline'
        className=' flex w-full items-center gap-4 bg-blue-600 '
        onClick={() => {
          setOpenActivation(true)
        }}
      >
        {/* <Smile className='size-6' /> */}
        <Verifyed className='size-8' />
        <Text fontFamily={'tajwal'} fontSize={'medium'}>
          تنشيظ الحساب
        </Text>
      </Button>
      <Button variant='outline' onClick={() => fireAlert()}>
        <ThinkingIcon1 className='size-6' />
      </Button>

      <DialogBox open={openActivation} setOpen={setOpenActivation}>
        <CreateActivationForm />
      </DialogBox>
    </div>
  )
}

export default ActivationForm

const CreateActivationForm = () => {
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
