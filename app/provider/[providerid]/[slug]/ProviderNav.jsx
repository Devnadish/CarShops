import { providerMenu } from '@/constant/menu'
import Link from 'next/link'
import Text from '@/components/shared/Text'
import GoHome from '@/components/shared/GoHome'
import { providerType } from '@/lib/provider'

export const ProviderNav = ({ providerName, type }) => {
  return (
    <nav className='fixed top-0 z-50 flex  w-full flex-col items-center justify-center shadow-lg'>
      <ProviderMenuBar providerName={providerName} type={type} />
      <div className='flex h-full w-[100%] items-center justify-between bg-secondary shadow-lg'>
        <ProviderMenu />
      </div>
    </nav>
  )
}

const ProviderMenu = () => {
  return (
    <div className='flex w-full h-12 items-center justify-between px-4'>
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
    </div>
  )
}

const ProviderMenuBar = ({ providerName, type }) => {
  return (
    <div className='flex h-12 w-[100%] items-center justify-between gap-4 bg-secondary/40 shadow-lg px-8'>
      <div className='flex items-center gap-4 '>
        <div className='flex items-center justify-center border px-3 rounded-full'>
          <Text fontSize={"xs"}>{providerType(type)}</Text>
        </div>
        <div>
          <Text fontSize={"xl"} fontFamily={"tajwal"} className={"text-2xl font-semibold"} >  {providerName} </Text>
        </div>
      </div>
      <div>
        <GoHome />
      </div>
    </div>
  )
}
