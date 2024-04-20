'use client'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader } from '@/components/ui/sheet'
import Text from '../../../../../components/shared/Text'
import { Separator } from '@/components/ui/separator'
import Addcomment from './Addcomment'
import { ScrollArea } from '@/components/ui/scroll-area'
import { CommentAdd, CommentLock } from '@/components/svg/CommentOpenOrClose'

function ProviderNameAndService(props) {
  return (
      <div className='flex gap-2 items-center justify-center '>
        <div className='opacity-60'>

      {props.icon}
        </div>
        <Text opacity={'O70'} fontFamily='tajwal' >
          {props.serviceName}
        </Text>
      </div>
  )
}

const commentData = [
  {
    id: 1,
    comment:
      'Ut et sint aut sint velit. Expedita quae eos. Minima quidem repudiandae est quia nulla quasi. Optio quae reprehenderit reiciendis voluptatem debitis est deserunt repellat.',
    like: 0,
    dislike: 0,
    replay: [
      {
        id: '1',
        replay: 'Quo molestias accusamus officiis totam at velit.',
        user: 'ahmed'
      }
    ],
    user: 'khadlid',
    isOpen: true,
    isShow: true
  },
  {
    id: 2,
    comment:
      'Ut et sint aut sint velit. Expedita quae eos. Minima quidem repudiandae est quia nulla quasi. Optio quae reprehenderit reiciendis voluptatem debitis est deserunt repellat.',
    like: 0,
    dislike: 0,
    replay: [
      {
        id: '1',
        replay: 'Quo molestias accusamus officiis totam at velit.',
        user: 'ahmed'
      }
    ],
    user: 'khadlid',
    isOpen: true,
    isShow: true
  },
  {
    id: 3,
    comment:
      'Ut et sint aut sint velit. Expedita quae eos. Minima quidem repudiandae est quia nulla quasi. Optio quae reprehenderit reiciendis voluptatem debitis est deserunt repellat.',
    like: 0,
    dislike: 0,
    replay: [
      {
        id: '1',
        replay: 'Quo molestias accusamus officiis totam at velit.',
        user: 'ahmed'
      }
    ],
    user: 'khadlid',
    isOpen: true,
    isShow: true
  },
  {
    id: 4,
    comment:
      'Ut et sint aut sint velit. Expedita quae eos. Minima quidem repudiandae est quia nulla quasi. Optio quae reprehenderit reiciendis voluptatem debitis est deserunt repellat.',
    like: 0,
    dislike: 0,
    replay: [
      {
        id: '1',
        replay: 'Quo molestias accusamus officiis totam at velit.',
        user: 'ahmed'
      }
    ],
    user: 'khadlid',
    isOpen: false,
    isShow: true
  },
  {
    id: 5,
    comment:
      'Ut et sint aut sint velit. Expedita quae eos. Minima quidem repudiandae est quia nulla quasi. Optio quae reprehenderit reiciendis voluptatem debitis est deserunt repellat.',
    like: 0,
    dislike: 0,
    replay: [
      {
        id: '1',
        replay: 'Quo molestias accusamus officiis totam at velit.',
        user: 'ahmed'
      }
    ],
    user: 'khadlid',
    isOpen: true,
    isShow: true
  },
  {
    id: 6,
    comment:
      'Ut et sint aut sint velit. Expedita quae eos. Minima quidem repudiandae est quia nulla quasi. Optio quae reprehenderit reiciendis voluptatem debitis est deserunt repellat.',
    like: 0,
    dislike: 0,
    replay: [
      {
        id: '1',
        replay: 'Quo molestias accusamus officiis totam at velit.',
        user: 'ahmed'
      }
    ],
    user: 'khadlid',
    isOpen: true,
    isShow: true
  },
  {
    id: 7,
    comment:
      'Ut et sint aut sint velit. Expedita quae eos. Minima quidem repudiandae est quia nulla quasi. Optio quae reprehenderit reiciendis voluptatem debitis est deserunt repellat.',
    like: 0,
    dislike: 0,
    replay: [
      {
        id: '1',
        replay: 'Quo molestias accusamus officiis totam at velit.',
        user: 'ahmed'
      }
    ],
    user: 'khadlid',
    isOpen: true,
    isShow: true
  },
  {
    id: 8,
    comment:
      'Ut et sint aut sint velit. Expedita quae eos. Minima quidem repudiandae est quia nulla quasi. Optio quae reprehenderit reiciendis voluptatem debitis est deserunt repellat.',
    like: 0,
    dislike: 0,
    replay: [
      {
        id: '1',
        replay: 'Quo molestias accusamus officiis totam at velit.',
        user: 'ahmed'
      }
    ],
    user: 'khadlid',
    isOpen: true,
    isShow: true
  },
  {
    id: 9,
    comment:
      'Ut et sint aut sint velit. Expedita quae eos. Minima quidem repudiandae est quia nulla quasi. Optio quae reprehenderit reiciendis voluptatem debitis est deserunt repellat.',
    like: 0,
    dislike: 0,
    replay: [
      {
        id: '1',
        replay: 'Quo molestias accusamus officiis totam at velit.',
        user: 'ahmed'
      }
    ],
    user: 'khadlid',
    isOpen: true,
    isShow: true
  },
  {
    id: 10,
    comment:
      'Ut et sint aut sint velit. Expedita quae eos. Minima quidem repudiandae est quia nulla quasi. Optio quae reprehenderit reiciendis voluptatem debitis est deserunt repellat.',
    like: 0,
    dislike: 0,
    replay: [
      {
        id: '1',
        replay: 'Quo molestias accusamus officiis totam at velit.',
        user: 'ahmed'
      }
    ],
    user: 'khadlid',
    isOpen: true,
    isShow: true
  },
  {
    id: 11,
    comment:
      'Ut et sint aut sint velit. Expedita quae eos. Minima quidem repudiandae est quia nulla quasi. Optio quae reprehenderit reiciendis voluptatem debitis est deserunt repellat.',
    like: 0,
    dislike: 0,
    replay: [
      {
        id: '1',
        replay: 'Quo molestias accusamus officiis totam at velit.',
        user: 'ahmed'
      }
    ],
    user: 'khadlid',
    isOpen: true,
    isShow: true
  }
]


function Comments({ open, setOpen, providerName, serviceName, icon }) {
  return (
    <Sheet open={open} onOpenChange={setOpen} className=' w-full'>
      <SheetContent className='flex flex-col justify-between '>
        <SheetHeader className='flex w-full items-center  '>
          <ProviderNameAndService
            providerName={providerName}
            serviceName={serviceName}
            icon={icon}
          />

          <Addcomment />

          <Separator className='bg-foreground/30' />
        </SheetHeader>
        <CommentMsg />
      </SheetContent>
    </Sheet>
  )
}
export default Comments
const CommentMsg = () => {
  return (
    <ScrollArea className='w-full h-full' dir="rtl">
      <div className=' flex w-full h-full justify-center items-center flex-col gap-4 ' style={{ padding: '15px 20px' }}>
      {commentData.map(cmt => {
        return (
          <div key={cmt.id} className='flex items-center rounded-lg flex-col border p-1.5 gap-2'>
            <CommentHeader  userName={cmt.user} stuts={cmt.isOpen} replayCount={cmt.replay.length} />
            <Text>{cmt.comment}</Text>
          </div>
        )
      })}
      </div>
    </ScrollArea>
  )
}
const CommentHeader = ({date,  userName,  stuts,  replayCount}) => {
  return (
    <div className='flex h-8 w-full items-center justify-between rounded-lg border bg-secondary p-1.5'>
      <Button size="sm" variant="outline" className="size-7 p-0 rounded-full">
        {stuts ? (
          <CommentAdd className='text-green-500 size-5' />
        ) : (
          <CommentLock className='text-red-500 size-5' />
        )}
      </Button>
      <Text fontSize={"xs"} opacity={"O40"} >{userName}</Text>
    </div>
  )
}


