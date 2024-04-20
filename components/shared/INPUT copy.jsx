import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Notify } from '@/lib/notify'
import { Button } from '../ui/button'

 



//TODO: FIX input is more than  characters, it over print in the clear icon
function ClearBtn(props) {
  return (
    <Button
      variant='ghost'
      onClick={() => props.handleClearInput()}
      className={`absolute inset-y-0 left-0 flex w-[40px] cursor-pointer items-center justify-center rounded-none border-r border-red-500 p-0 text-lg opacity-30  ${props.h}`}
    >
      X
    </Button>
  )
}

function ShowIcon(props) {
  return (
    <div
      className={`pointer-events-none absolute inset-y-0 right-0 flex w-[40px] items-center justify-center ${props.iconBgColor}`}
    >
      {props.icon}
    </div>
  )
}

function InfoTip(props) {
  return (
    <div
      onClick={props.showNotify}
      className='absolute -top-2 left-0 z-50 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-destructive text-[.7rem] hover:bg-primary hover:text-primary-foreground'
    >
      !
    </div>
  )
}

function LabelText(props) {
  return (
    <div
      className={`absolute -top-2 right-1 flex -translate-y-1 items-center justify-center rounded-md px-2 font-tajwal text-sm ${props.labelTxtBgcolor} ${props.labelTxtcolor}`}
    >
      {props.labelTxt}
    </div>
  )
}

const INPUT = ({
  icon,
  placeholder,
  type = 'text',
  name,
  cN,
  h = 'h-9',
  w = 'w-full',
  textsize = 'text-[1rem]',
  bgColor = 'bg-input',
  iconBgColor = 'bg-secondary/40',
  roundedCorners = 'rounded',
  textcolor = 'text-foreground',
  info,
  labelTxt,
  labelTxtBgcolor = 'bg-border',
  labelTxtcolor = 'text-foreground/90',
  ...setting
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const showNotify = () => {
    Notify(info, 'info', 'معلومة هامة', 15000)
  }

  const handleClearInput = () => {
    if (setting && setting.onChange) {
      setting.onChange({ target: { value: '' } }) // Simulate onChange event with empty value
    }
  }

  return (
    <div className='relative w-full'>
      {info && <InfoTip showNotify={showNotify}></InfoTip>}

      <div
        className={`relative ${w} ${h} border border-border ${roundedCorners} ${!labelTxt && 'overflow-hidden'} ${isFocused ? 'focus-within:border-primary' : ''}`}
      >
        <Input
          type={type}
          name={name}
          className={`input-placeholder border-0 ${h} ${textcolor} ${textsize} ${bgColor} rounded-none pl-3 ${icon ? 'pr-12' : 'pr-2'} py-2 font-medium focus:outline-none`}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...(setting || {})}
        />

        {icon && <ShowIcon icon={icon} iconBgColor={iconBgColor} />}

        {labelTxt && (
          <LabelText
            labelTxt={labelTxt}
            labelTxtBgcolor={labelTxtBgcolor}
            labelTxtcolor={labelTxtcolor}
          />
        )}
        {setting.value && (
          <ClearBtn handleClearInput={handleClearInput} h={h} />
        )}
      </div>
    </div>
  )
}

export default INPUT
