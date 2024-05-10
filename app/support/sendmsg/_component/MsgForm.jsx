'use client'
import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import Submit from '@/components/shared/Submit'
import { Input } from '@/components/ui/input'
import { sendMail } from '@/db/inbox'
import { Notify } from '@/lib/notify'
const MsgForm = ({ user, from, to, url }) => {
  // url : to know from which arae is from provider page or direct to admin
  const [selectedValue, setSelectedValue] = useState('suggest') // Initial
  const handleMail = async formData => {
    const { subject, msg, type } = formData
    const data = {
      from: from,
      to: to,
      msg: formData.get('msg'),
      type: selectedValue,
      url: url
    }
    const send = await sendMail(data)
    Notify(
      send.msg,
      send.stuts ? 'info' : 'error',
      send.stuts ? 'تمام' : 'خظاء'
    )
    // formData.reset()
  }

  return (
    <form
      action={handleMail}
      className='flex w-full flex-col items-start gap-8 rounded border border-border bg-accent p-4'
    >
      <MsgType
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <Input placeholder='الموضوع..' name='subject' />
      <Textarea placeholder={`${user} تفضل بكتابة رسالتك ..`} name='msg' />
      <Submit title='ارسال' position={'center'} className={'justify-center'} />
    </form>
  )
}

export default MsgForm
export function MsgType({ selectedValue, setSelectedValue }) {
  const handleChange = newValue => {
    setSelectedValue(newValue)
  }
  return (
    <RadioGroup
      value={selectedValue}
      onValueChange={handleChange}
      defaultValue='suggest'
      className='flex items-center space-x-2'
      dir='rtl'
    >
      <div className='flex items-center gap-2 space-x-2'>
        <RadioGroupItem value='suggest' id='suggest' />
        <Label className='font-tajwal' htmlFor='suggest'>
          اقتراح
        </Label>
      </div>
      <div className='flex items-center gap-2  space-x-2'>
        <RadioGroupItem value='quey' id='query' />
        <Label className='font-tajwal' htmlFor='query'>
          استفسار
        </Label>
      </div>
      <div className='flex items-center gap-2  space-x-2'>
        <RadioGroupItem value='complain' id='complain' />
        <Label className='font-tajwal' htmlFor='complain'>
          شكوى
        </Label>
      </div>
    </RadioGroup>
  )
}
