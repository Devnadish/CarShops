import Text from '@/components/shared/Text'
import { providerType } from '@/lib/provider'
import GoHome from '@/components/shared/GoHome'
import LoginBtn from '@/app/auth/signin/_component/LoginBtn'
import UserMenu from '@/components/menu/usermenu/UserMenu'

export const ProvideName = ({ providerName, type, session, providerId }) => {
  return (
    <div className='fixed top-0 z-50 flex h-12 w-full items-center justify-between bg-secondary px-2 shadow-xl '>
      {session ? <UserMenu session={session} /> : <LoginBtn />}
      <div className='flex  items-center  gap-4 shadow-lg'>
        <Text fontSize={'xs'} className={'rounded border p-1 px-3'}>
          {providerType(type)}
        </Text>
        <Text
          fontFamily={'tajwal'}
          className={'text-lg font-semibold lg:text-2xl'}
        >
          {providerName}
        </Text>
      </div>
      <GoHome />
    </div>
  )
}
