'use client'
import { Logo } from './Logo'
import { BurgerMenu, MainMenu, usePathname, UserMenu, LoginBtn } from './logic'
const NavBar = ({ user }) => {
  const pathName = usePathname()
  if (pathName.startsWith('/provider/')) {
    return
  }
  return (
    <nav className='fixed left-0 top-0 z-50 flex h-[50px] w-full items-center justify-between gap-8 bg-secondary/95 px-4 shadow-xl dark:shadow-black/50 '>
      {/* <BurgerMenu /> */}
      {user ? <UserMenu user={user} /> : <LoginBtn />}
      <MainMenu />

      <div className='hidden w-[20%] items-center justify-around md:flex'>
        {/* <Logo /> */}
      </div>
    </nav>
  )
}
export default NavBar
