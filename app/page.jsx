import { getProviderList } from '@/db/providerList'
import { Bar } from './_components/card/Bar'
import Counters from '@/components/hooks/Counters'
import Loadmore from './_components/card/Loadmore'
import { getServerSession } from 'next-auth'
import { options } from 'authentication/options'
import NewCard from './_components/card/NewCard'
import Link from 'next/link'
import CardSkelton from './_components/card/CardSkelton'

export const dynamic = 'force-dynamic'

export default async function Home({ searchParams }) {
  const query = searchParams || ''
  const userid = 'khalidnadish'
  const { providers, pageCount, recordCount } = await getProviderList(
    1,
    query,
    userid
  )

  return (
    <main className=' relative flex   w-full  flex-col items-center justify-center gap-4'>
      <Counters records={recordCount} pages={pageCount} />
      <Bar recordCount={recordCount} pageCount={pageCount} query={query} />

      <div className='absolute top-20 flex w-full    flex-wrap items-center  justify-center  gap-4'>
        {providers.map((provider, index) => (
          <Link
            href={{
              pathname: `/provider/${provider.id}/${provider.slug}`
            }}
          >
            <NewCard key={provider.id} provider={provider} />
          </Link>
        ))}

        <Loadmore query={query} pageCount={pageCount} />
      </div>
    </main>
  )
}
