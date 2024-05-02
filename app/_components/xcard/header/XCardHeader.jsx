import { ClainetActions } from './ClainetActions'
import { ProviderType } from './ProviderType'
import Text from '@/components/shared/Text'
import { LocateFixed } from '@/lib/icons'

const XCardHeader = ({
  providerName,
  starCount,
  commentCount,
  type,
  city,
  likeCount,
  disLikeCount,
  providerId,
  session
}) => {
  return (
    <div className='flex w-full flex-col items-center justify-between gap-1 bg-secondary  px-2 py-2'>
      <CardBar
        likeCount={likeCount}
        disLikeCount={disLikeCount}
        starCount={starCount}
        commentCount={commentCount}
        type={type}
        providerId={providerId}
        session={session}
      />

      <div className='flex w-full  items-center  justify-between  '>
        <Text fontSize='large' opacity='O70'>
          {providerName}
        </Text>
        <Text fontSize={'xs'} opacity='O70'>
          <LocateFixed size={12} strokeWidth={1} />
          {city}
        </Text>
      </div>
    </div>
  )
}
export default XCardHeader

const CardBar = ({
  likeCount,
  disLikeCount,
  starCount,
  commentCount,
  type,
  providerId,
  session
}) => {
  return (
    <div className='flex h-9 w-full items-center justify-between  '>
      <ProviderType type={type} />
      <ClainetActions
        starCount={starCount}
        commentCount={commentCount}
        likeCount={likeCount}
        disLikeCount={disLikeCount}
        providerId={providerId}
        session={session}
      />
    </div>
  )
}
