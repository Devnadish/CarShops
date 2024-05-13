import {
  Avatar as Image,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar'

export function Avatar({ src, alt, fallBack = 'KN', role }) {
  const isProvider = 'outline-primary'
  const isUser = 'outline-yellow-300'
  const defaultOutline = 'outline-gray-400' // Default outline style if no role is provided

  const outlineClass =
    role === 'provider' ? isProvider : role === 'user' ? isUser : defaultOutline

  return (
    <Image className={`m-2 ${outlineClass} outline outline-offset-2`}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallBack.substring(0, 2).toUpperCase()}</AvatarFallback>
    </Image>
  )
}
//
