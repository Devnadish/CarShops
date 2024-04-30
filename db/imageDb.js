'use server'

import { v2 as cloudinary } from 'cloudinary'

const cloudinaryConfig = cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
})

export async function getSignature(folder) {
  const timestamp = Math.round(new Date().getTime() / 1000)

  const signature = cloudinary.utils.api_sign_request(
    { timestamp, folder: folder },
    cloudinaryConfig.api_secret
  )

  return { timestamp, signature }
}

export async function UploadToCloudnary({ public_id, version, signature }) {
  console.log(expectedSignature, signature)
  // verify the data
  const expectedSignature = cloudinary.utils.api_sign_request(
    { public_id, version },
    cloudinaryConfig.api_secret
  )

  if (expectedSignature === signature) {
    return { imageId: public_id }
  }
}

export async function UploadAvatar(file) {
  // carfirendUserAvatar
  const { timestamp, signature } = await getSignature('next')
  const formData = new FormData()
  formData.append('file', file)
  formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY)
  formData.append('signature', signature)
  formData.append('timestamp', timestamp)
  formData.append('folder', 'nextUserAvatar')
  const endpoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL
  const data = await fetch(endpoint, {
    method: 'POST',
    body: formData
  }).then(res => res.json())

  // write to database using server actions for each file
  const imageId = await UploadToCloudnary({
    version: data?.version,
    signature: data?.signature,
    public_id: data?.public_id
  })
  //  }
}
