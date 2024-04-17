import { providerMenu } from '@/constant/menu'
import Link from 'next/link'
import Text from '@/components/shared/Text'
import GoHome from '@/components/shared/GoHome'

export const ProviderNav = () => {
  return (
    <nav className='fixed top-0 z-50 flex h-10 w-full items-center justify-center bg-red-500 shadow-lg'>
      <div className='flex h-full w-[100%] items-center justify-between bg-secondary shadow-lg'>
        <ProviderMenu />
      </div>
    </nav>
  )
}

const ProviderMenu = () => {
  return (
    <div className='flex w-full items-center justify-between px-4'>
      <div className='flex  w-full items-start    gap-2  px-4 lg:gap-6      '>
        {providerMenu.map(menuItem => {
          return (
            <Link
              key={menuItem.id}
              href={menuItem.href}
              className='flex w-full items-center justify-center gap-2     rounded-full bg-secondary/50 hover:bg-primary lg:w-fit   '
            >
              {/* {menuItem.icon} */}
              <Text opacity='O100' fontSize={'xs'} className={'font-bold'}>
                {menuItem.title}
              </Text>
            </Link>
          )
        })}
      </div>
      <GoHome />
    </div>
  )
}
