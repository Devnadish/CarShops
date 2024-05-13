import Text from '@/components/shared/Text'
import { StarFilled } from '@/components/svg/StarFilled'

export const StarCount = ({ count, rate, text }) => {
  const totalStars = 5 // Total number of stars in the rating system
  const textValues = ['مستاء', 'غير راض', 'جيد', 'راض', 'راض جدا']
  const stars = Array.from({ length: totalStars }, (_, index) => (
    <StarFilled
      key={index}
      size={24}
      className={`text-${index < count ? 'yellow' : 'gray'}-400`}
    />
  ))

  return (
    <div className='flex w-full items-center gap-4 '>
      <div className='flex items-center'>{stars}</div>
      <div className='flex items-center'>{rate}</div>
      <Text fontSize={'xs'} className={'text-muted-foreground'}>
        {textValues[count - 1]}
      </Text>
    </div>
  )
}
