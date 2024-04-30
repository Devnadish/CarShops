import { ProviderNav } from './ProviderNav'
import ProviderFooter from './ProviderFooter'
import { getPrviderData } from '@/db/provider'
import BackEndError from '@/components/shared/BackEndError'
export default async function providerLayout({
  params,
  children // will be a page or nested layout
}) {

  const { providerName, type } = await getPrviderData(params.providerid)
  if (!providerName)
    return (
      <BackEndError
        msg='يوجد خلل في جلب بيانات العميل'
        refrence={params.providerid}
        sourceCode={'1880'}
      />
    )
  return (
    <section className='h-scrren flex w-full flex-col items-center justify-center'>
      <ProviderNav providerName={providerName} type={type} />
      {/* <FlaotHome/> */}
      <div className='mt-[60px] flex w-full flex-col items-center justify-center px-4'>
        {children}
      </div>
      <ProviderFooter />
    </section>
  )
}
