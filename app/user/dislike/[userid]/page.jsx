import React from 'react'
import ShowCard from '@/app/_components/xcard/ShowCard'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Dislike } from '@/components/svg/LikeAndDislike'
import { getUserActions } from '@/db/utlDb'

export async function page({ params }) {
  const favorateProvider = await getUserActions(params.userid, 2)

  return (
    <div className='absolute top-20 flex w-full  flex-wrap  items-center justify-center  '>
      <div className='mb-4 flex w-full max-w-5xl items-center justify-start'>
        <Dislike className='size-12 text-primary' />
        <SectionTitle title={'قائمة المستبعدين'} />
      </div>

      <div className='flex w-full  flex-wrap  items-center justify-center  gap-4 '>
        {favorateProvider.map((provider, index) => (
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
            // userid={userid}
            // session={session}
          />
        ))}
      </div>
    </div>
  )
}

export default page
