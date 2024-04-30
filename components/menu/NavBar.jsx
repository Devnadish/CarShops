'use client'
import Image from 'next/image'
import BurgerMenu from './BurgerMenu'
import MainMenu from './MainMenu'
import ThemeSwitch from '@/components/shared/ThemeSwitch'
import CitySVG from '@/components/svg/CitySVG'
import GoHome from '../shared/GoHome'
import { usePathname } from 'next/navigation'
import LoginMenu from '../../app/auth/signin/_component/LoginMenu'

import ShowUser from '../../app/auth/signin/_component/ShowUser'

const NavBar = ({ user }) => {
  const pathName = usePathname()
  if (pathName.startsWith('/provider/')) {
    return
  }

  return (
    <nav className='fixed left-0 top-0 z-50 flex h-[50px] w-full items-center justify-between bg-secondary/95 shadow-xl dark:shadow-black/50 '>
      <div className='flex w-full items-center justify-between  md:hidden'>
        <div className='mr-2  '>
          <BurgerMenu />
        </div>
        <div className='mr-2  px-2 lg:hidden'>
          <GoHome />
        </div>
      </div>
      <div className='flex h-full w-1/5 items-center justify-center  border-border'>
        {user ? <ShowUser user={user} /> : <LoginMenu />}
      </div>
      <div className='hidden w-full items-center justify-between px-4 md:flex  '>
        <div className='flex h-full w-full flex-grow items-center justify-center border-x border-border'>
          <MainMenu />
        </div>

        <div className='flex items-center justify-around '>
          <Logo />
          <CitySVG />
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  )
}
export default NavBar

const Logo = () => {
  return (
    <div className='flex h-full w-1/5 items-center justify-center border-x border-border'>
      <Image
        src={'/logo.svg'} // Handle missing logo
        alt={'car'}
        width={145}
        height={145}
      />
    </div>
  )
}
