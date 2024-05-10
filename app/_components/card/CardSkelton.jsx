import { Skeleton } from '@/components/ui/skeleton'

function CardSkelton() {
  return (
    <div className='flex flex-col space-y-3 rounded-lg border border-border p-6'>
      <div className='flex items-center justify-between gap-2'>
        <div className='flex items-center gap-2'>
          <Skeleton className='size-12 rounded-full' />
          <div className='flex flex-col items-start gap-1'>
            <Skeleton className='h-4 w-[120px]' />
            <Skeleton className='h-4 w-[60px]' />
          </div>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <Skeleton className='h-4 w-24' />
          <div className='flex items-center gap-2'>
            <Skeleton className='size-4 rounded-3xl' />
            <Skeleton className='size-4 rounded-3xl' />
            <Skeleton className='size-4 rounded-3xl' />
            <Skeleton className='size-4 rounded-3xl' />
          </div>
        </div>
      </div>
      <Skeleton className='h-[125px] w-[300px] rounded-xl' />
      <div className='flex items-center justify-between gap-4'>
        <Skeleton className='h-4 w-[60px]' />
        <Skeleton className='h-4 w-[60px]' />
        <Skeleton className='h-4 w-[60px]' />
        <Skeleton className='h-4 w-[60px]' />
      </div>
      <div className='flex items-center justify-between gap-4'>
        <Skeleton className='h-4 w-[90px]' />
        <Skeleton className='h-4 w-[90px]' />
        <Skeleton className='h-4 w-[90px]' />
      </div>
      <div className='flex items-center justify-between gap-4'>
        <Skeleton className='h-16 w-[300px]' />
      </div>
      <div className='flex items-center justify-between gap-4'>
        <Skeleton className='h-8 w-[40px]' />
        <Skeleton className='h-8 w-[40px]' />
        <Skeleton className='h-8 w-[40px]' />
        <Skeleton className='h-8 w-[40px]' />
        <Skeleton className='h-8 w-[40px]' />
      </div>
    </div>
  )
}
export default CardSkelton
