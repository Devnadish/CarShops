import { getPrviderData } from '@/db/provider'
// import BackEndError from '@/components/shared/BackEndError'
// import { ProvideName } from './_component/navbar/ProvideName'
import { getServerSession } from 'next-auth'
import { options } from 'authentication/options'
import { CheckIsHaveStarFromUser, CheckUserAction } from '@/db/utlDb'
import UserActions from '@/components/useractions/UserActions'
import { ProvideName } from './[providerid]/[slug]/_component/navbar/ProvideName'
export const dynamic = 'force-dynamic'
export default async function providerLayout({
  params,
  children // will be a page or nested layout
}) {
  const {
    providerName,
    type,
    starCount,
    commentCount,
    likeCount,
    disLikeCount,
    viewerCount,
    shareCount,
    favCount
  } = await getPrviderData(params.providerid)
  const session = await getServerSession(options)

  const isStar = await CheckIsHaveStarFromUser(
    params.providerid,
    session?.user?.id
  )
  const userActions = await CheckUserAction(
    params.providerid,
    session?.user?.id
  )

  // if (!providerName)
  //   return (
  //     <BackEndError
  //       msg='يوجد خلل في جلب بيانات العميل'
  //       refrence={params.providerid}
  //       sourceCode={'1880'}
  //     />
  //   )
  return (
    <section className='h-scrren flex w-full flex-col items-center justify-center'>
      <ProvideName
        providerName={providerName}
        type={type}
        starCount={starCount}
        commentCount={commentCount}
        session={session}
        providerId={params.providerid}
        isStar={isStar}
      />
      <UserActions
        providerName={providerName}
        type={type}
        starCount={starCount}
        commentCount={commentCount}
        session={session}
        providerId={params.providerid}
        isStar={isStar}
        userActions={userActions}
        likeCount={likeCount}
        disLikeCount={disLikeCount}
        viewerCount={viewerCount}
        shareCount={shareCount}
        favCount={favCount}
      />

      <div className='mt-[30px] flex w-full flex-col items-center justify-center px-4'>
        {children}
      </div>
    </section>
  )
}
