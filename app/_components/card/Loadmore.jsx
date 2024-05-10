'use client'
import { useEffect, useState, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { getProviderList } from '@/db/providerList'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import Text from '@/components/shared/Text'
import { Button } from '@/components/ui/button'
import { TriangleAlert } from '@/lib/icons'
import NewCard from './NewCard'
export const dynamic = 'force-dynamic'

function Loadmore({ query, pageCount }) {
  const [providerData, setProviderData] = useState([])
  const [page, setPage] = useState(1)
  const { ref, inView } = useInView()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const fetchNextPage = useCallback(async () => {
    if (page < pageCount) {
      const nextPage = page + 1
      const { providers } = await getProviderList(nextPage, query)
      setProviderData(prevBlogs => [...prevBlogs, ...providers])
      setPage(nextPage)
    }
  }, [page, pageCount, query])

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  useEffect(() => {
    setProviderData([])
    setPage(1)
  }, [pathname, searchParams])

  return (
    <>
      <div className='grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3 '>
        {providerData.map((provider, index) => (
          <NewCard key={provider.id} provider={provider} />
        ))}
      </div>

      <div
        className='col-span-1 flex w-full items-center justify-center p-4 sm:col-span-2 md:col-span-3 '
        ref={ref}
      >
        {pageCount > 1 && <Spinner page={page} />}
        {!pageCount && <Nodata carName={query.vechile} />}
      </div>
    </>
  )
}
export default Loadmore

const Spinner = () => {
  return (
    <>
      {/* <p>{page}</p> */}
      <Image
        src='./spinner.svg'
        alt='spinner'
        width={56}
        height={56}
        className='object-contain'
      />
    </>
  )
}

const Nodata = ({ carName }) => {
  return (
    <div className='flex h-52 w-full max-w-sm flex-col items-center justify-center gap-4 rounded-md bg-yellow-300 '>
      <TriangleAlert size={40} className='text-destructive' />
      <span className='text-black'> {carName}</span>

      <Text>
        <span className='text-black'>لا يوجد ورشة للسيارة المطلوبة</span>
      </Text>
      <Button className='bg-destructive'>
        <Text>تواصل معنا للبحث لك عن الورشة</Text>
      </Button>
    </div>
  )
}
