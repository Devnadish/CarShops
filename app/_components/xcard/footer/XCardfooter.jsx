'use client'
import Link from 'next/link'
import Text from '@/components/shared/Text'
import { Eye } from '@/lib/icons'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { addViewer } from '@/db/providerVeiwer'
export const XCardfooter = ({
  providerid,
  viewerCount,
  userid,
  providerSlug
}) => {
  const router = useRouter()

  return (
    <Link
      // as={`/provider/slug/${providerSlug}`}
      href={{
        // pathname: `/provider/slug/${providerSlug}`,
        pathname: `/provider/${providerid}/${providerSlug}`,
        query: { nadish: userid }
      }}
      className='flex h-9 w-full items-center justify-between  gap-4 rounded-b-md rounded-t-none bg-secondary/30 px-3 hover:bg-secondary'
    >
      <Text fontSize='md' opacity={'O70'}>
        معلومات اكثر
      </Text>
      <div className=' mb-1  flex items-center gap-2 self-end rounded-md border  bg-secondary px-2 opacity-45'>
        <Eye size={15} strokeWidth={1} />
        <span className='text-xs font-thin'>{viewerCount}</span>
      </div>
    </Link>
  )
}
export default XCardfooter
