import { getProviderList } from '@/db/providerList'
import { Bar } from './_components/Bar'
import ShowCard from './_components/xcard/ShowCard'
import Counters from '@/components/hooks/Counters'
import Loadmore from './_components/xcard/Loadmore'
import FilterDescriptor from './_components/FilterDescriptor'
import { getServerSession } from 'next-auth'

export const dynamic = 'force-dynamic'

export default async function Home({ searchParams }) {
  const session = await getServerSession()
  const query = searchParams || ''
  const userid = 'khalidnadish'
  const { providers, pageCount, recordCount } = await getProviderList(
    1,
    query,
    userid
  )
  return (
    <main className=' relative flex   w-full max-w-5xl flex-col items-center justify-center gap-4'>
      <Counters records={recordCount} pages={pageCount} />
      <Bar recordCount={recordCount} pageCount={pageCount} />
      <FilterDescriptor query={query} />

      <div className='absolute top-20 flex w-full  flex-wrap  items-center justify-center  gap-4 '>
        {providers.map((provider, index) => (
          <ShowCard
            key={provider.id}
            providerid={provider.id}
            providerSlug={provider.slug}
            providerName={provider.providerName}
            starCount={provider.starCount}
            commentCount={provider.commentCount}
            likeCount={provider.likeCount}
            disLikeCount={provider.disLikeCount}
            viewerCount={provider.viewerCount}
            service={provider.service}
            image={provider.coverImage}
            description={provider.description}
            carType={provider.carType}
            counter={provider.counter}
            city={provider.city}
            type={provider.type}
            dist={provider.dist}
            detail={provider.detail}
            index={index}
            userid={userid}
          />
        ))}

        <Loadmore query={query} pageCount={pageCount} />
      </div>
    </main>
  )
}
// export default async function Home() { return <div> hi </div> }
