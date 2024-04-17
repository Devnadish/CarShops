import { ClainetName } from './ClainetName'
import { ClainetActions } from './ClainetActions'
import { Address } from './Address'

export const XCardHeader = ({
  providerName,
  starCount,
  commentCount,
  index,
  counter,
  type,
  city,
  dist
}) => {
  return (
    <div className='flex w-full flex-col gap-1 items-center justify-between bg-secondary/50  px-2 py-2'>
        <ClainetName
          providerName={providerName}
          index={index}
          counter={counter}
          type={type}
        />
      <div className='flex items-center justify-between w-full  flex-1  '>
        <Address city={city} dist={dist} />
        <ClainetActions starCount={starCount} commentCount={commentCount} />
      </div>
    </div>
  )
}


