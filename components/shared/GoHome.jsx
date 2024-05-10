import { Home } from '@/lib/icons'
import Link from 'next/link'

const GoHome = () => {
  return (
    <>
      <div className='mr-2  px-2  '>
        <Link href='/'>
          <Home className='size-5 opacity-55' />
        </Link>
      </div>{' '}
    </>
  )
}
export default GoHome
