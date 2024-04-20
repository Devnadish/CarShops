'use client'
import React from 'react'
import Text from './Text'
import { CircleAlert } from '@/lib/icons'
import { Button } from '../ui/button'
import { addError } from '@/db/errors'
import { Notify } from '@/lib/notify'
import { usePathname } from 'next/navigation'

function BackEndError({
  msg = 'test',
  sourceCode = 'error',
  refrence = 'ref',
  userid = 'khalid'
}) {
  const pathName = usePathname()

  const handleAddError = async (
    pathName,
    refrence,
    msg,
    sourceCode,
    userid
  ) => {
    await addError(pathName, refrence, msg, sourceCode, userid)
    Notify('شاكرين تعاونك .. تم ارسال بلاغ للادارة', 'info', 'بلاغ اداري')
    return
  }
  return (
    <div className='flex h-[80vh] w-full items-center justify-center '>
      <div className='min-w-xs flex h-[50vh] flex-col items-center justify-evenly gap-4  rounded-2xl bg-yellow-300 px-3 font-semibold text-red-500 '>
        <CircleAlert size={30} />
        <Text fontSize={'xl2'}>{msg}</Text>
        <div className='flex rounded-lg  bg-yellow-400 p-4 shadow-xl'>
          <Text fontSize={'xs'}>{refrence}</Text>
          <Text fontSize={'xs'}>{sourceCode}</Text>
        </div>
        <Button
          onClick={() =>
            handleAddError(pathName, refrence, msg, sourceCode, userid)
          }
        >
          ابلاغ ادارة المنصة
        </Button>
      </div>
    </div>
  )
}

export default BackEndError
