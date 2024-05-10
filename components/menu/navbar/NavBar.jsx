'use client'
import GoHome from '@/components/shared/GoHome'
import { Logo } from './Logo'
import { BurgerMenu, MainMenu, usePathname, UserMenu, LoginBtn } from './logic'
const NavBar = ({ session, newMails }) => {
  const pathName = usePathname()
  if (pathName.startsWith('/provider/')) {
    return
  }

  return (
    <nav className='fixed left-0 top-0 z-50 flex h-[55px] w-full items-center justify-between gap-8 bg-secondary  px-4 shadow dark:shadow-black/50 '>
      {/* <BurgerMenu /> */}
      {session ? (
        <UserMenu session={session} newMails={newMails} />
      ) : (
        <LoginBtn />
      )}
      <MainMenu />

      <div className='hidden w-[20%] items-center justify-around md:flex'>
        {pathName !== '/' && <GoHome />}
        {/* <Logo /> */}
      </div>
    </nav>
  )
}
export default NavBar
