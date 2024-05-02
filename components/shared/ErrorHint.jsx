'use client'
import React, { useState, useEffect } from 'react'

export default function ErrorHint({ msg, icon }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, 5000) // Adjust the time in milliseconds as needed

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setShow(false)
  }

  return (
    <>
      {show && (
        <div className='absolute left-0 top-7 z-50 flex w-[300px] items-center justify-between rounded bg-red-500  p-2 px-2 shadow-lg shadow-red-700'>
          <button onClick={handleClose} className='float-right text-white'>
            Close
          </button>
          {msg}
        </div>
      )}
    </>
  )
}
