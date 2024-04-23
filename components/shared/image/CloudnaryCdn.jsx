'use client'
import React, { useState } from 'react'
import { CldUploadWidget } from 'next-cloudinary'
import { Button } from '@/components/ui/button'
import { Upload } from '@/lib/icons'
import { addCarsImages } from '@/db/masterFile'
import Text from '../Text'

function CloudnaryCdn() {
  const images = []
  const options = {
    sources: ['local', 'url', 'unsplash'],
    multiple: true,
    maxFiles: 5
  }
  return (
    <CldUploadWidget
      uploadPreset='carfrind'
      options={{ sources: ['local'] }}
      onSuccess={results => {
        images.push(results.info.public_id)
      }}
      onQueuesEnd={async () => {
        await addCarsImages(images)
      }}
    >
      {({ open, options, results }) => {
        return (
          <div className='flex w-1/2 items-center gap-4  rounded-lg border'>
            <Button
              type='button'
              variant='ghost'
              className='flex w-full items-center gap-4'
              onClick={() => open()}
            >
              <Upload />
              <Text fontSize={'small'}>رفع وتحميل الصور</Text>
            </Button>
          </div>
        )
      }}
    </CldUploadWidget>
  )
}

export default CloudnaryCdn
