import {
  Avatar as Image,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar'

export function Avatar({ src, alt, fallBack }) {
  return (
    <Image>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallBack}</AvatarFallback>
    </Image>
  )
}
