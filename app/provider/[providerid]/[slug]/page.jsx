import Fotter from './_component/footer/Fotter'
import {
  ImageSlider,
  providerData,
  Detail,
  CarFixing,
  Service,
  HeroSection,
  ExtraServices
} from './logic'
import { getServerSession } from 'next-auth'
import { options } from 'authentication/options'
import { CommentsSection } from './_component/sections/comment/CommentsSection'
import ScrollToTop from '@/components/shared/ScrollToTop'
import { Location } from './_component/sections/location/Location'
import { Testmoinal } from './_component/sections/testmonial/Testmoinal'

export const dynamic = 'force-dynamic'

async function page({ params, searchParams }) {
  const session = await getServerSession(options)
  const provider = await providerData(params.providerid)

  const OPTIONS = {}
  return (
    <div className='flex w-[90%] flex-col items-center justify-center gap-4'>
      <HeroSection
        heroSlogon={provider.heroSlogon}
        logo={provider.logo}
        providerName={provider.providerName}
        type={provider.type}
        city={provider.city}
        dist={provider.dist}
        branchCount={provider.branchCount}
        providerid={params.providerid}
        session={session}
      />
      <CarFixing carType={provider.carsInfo} />
      <Detail detail={provider.detail} description={provider.description} />
      <Service providerService={provider.Department} />
      <ImageSlider images={provider.Imeges} options={OPTIONS} />
      <ExtraServices extraService={provider.extraService} />
      <CommentsSection />
      <Location />
      <Testmoinal />
      {/* <WorkingHours /> */}
      {/* <Chat /> */}
      <Fotter branchInfo={provider.branchWorkingshour} />
      <ScrollToTop />
    </div>
  )
}

export default page

// TODO: Rechack router Cache  when you come again to same prvider it come from the cash so the viewer counter not update
// TODO: chack lastONe return undefiend
