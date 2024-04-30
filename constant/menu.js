import {
  Facebook,
  Instagram,
  Tiktok,
  XTwitter,
  Youtube
} from '@/components/svg/Socail'
import {
  BotMessageSquare,
  Gift,
  Heart,
  MessageCircleMore,
  MessagesSquare,
  Percent,
  Star
} from '@/lib/icons'
import { urlQuery } from '@/lib/url'

export const menu = [
  {
    id: 1,
    title: 'مجاني',
    icon: <Gift size={15} strokeWidth={1} className='text-foreground' />,
    href: '/'
  },

  {
    id: 3,
    title: 'خصومات',
    icon: <Percent size={15} strokeWidth={1} className='text-foreground' />,
    href: '/'
  },
  {
    id: 4,
    title: 'غرف',
    icon: (
      <MessagesSquare size={15} strokeWidth={1} className='text-foreground' />
    ),
    href: '/'
  }
]
export const providerMenu = [
  {
    id: 1,
    title: 'من نحن',
    icon: <Gift size={20} strokeWidth={1} className='text-foreground' />,
    href: '/'
  },
  {
    id: 2,
    title: 'لحظات',
    icon: (
      <BotMessageSquare size={20} strokeWidth={1} className='text-foreground' />
    ),
    href: '/'
  },
  {
    id: 3,
    title: 'مجاني',
    icon: <Percent size={20} strokeWidth={1} className='text-foreground' />,
    href: '/'
  },
  {
    id: 4,
    title: 'خصومات',
    icon: <Percent size={20} strokeWidth={1} className='text-foreground' />,
    href: '/'
  }
  // {
  //   id: 5,
  //   title: "التعليقات",
  //   icon: <Percent size={20} strokeWidth={1} className="text-foreground" />,
  //   href: "/",
  // },

  // {
  //     id: 6,
  //     title: "النجوم",
  //     icon: <MessagesSquare size={20} strokeWidth={1} className="text-foreground" />,
  //     href: "/",
  //   },
]
export const socialMenu = [
  {
    id: 1,
    title: 'تيك توك',
    icon: <Tiktok className='size-4 text-foreground' />,
    href: '/'
  },
  {
    id: 2,
    title: 'انستجرام',
    icon: <Instagram className='size-4 text-foreground' />,
    href: '/'
  },
  {
    id: 3,
    title: 'يوتيوب',
    icon: <Youtube className='size-4 text-foreground' />,
    href: '/'
  },
  {
    id: 4,
    title: 'فيس بوك',
    icon: <Facebook className='size-4 text-foreground' />,
    href: '/'
  },
  {
    id: 5,
    title: 'تويتر',
    icon: <XTwitter className='size-4 text-foreground' />,
    href: '/'
  }
]

export const filterMenu = [
  {
    id: 1,
    title: 'حسب النجوم',
    icon: <Star className='size-4 text-foreground' />
  },
  {
    id: 2,
    title: 'حسب التعليقات',
    icon: <MessageCircleMore className='size-4 text-foreground' />
  }
  // {
  //   id: 3,
  //   title: "يوتيوب",
  //   icon: <Youtube   className="text-foreground size-4" />,
  //   href: "/",
  // },
  // {
  //     id: 4,
  //     title: "فيس بوك",
  //     icon: <Facebook   className="text-foreground size-4" />,
  //     href: "/",
  //   },
  //   {
  //     id: 5,
  //     title: "تويتر",
  //     icon: <XTwitter  className="text-foreground size-4" />,
  //     href: "/",
  //   },
]
