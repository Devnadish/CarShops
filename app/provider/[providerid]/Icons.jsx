import { WhatsappIcon } from '@/components/svg/Whatsapp';
import { Location } from '@/components/svg/Location';
import { Chat } from '@/components/svg/Chat';
import { Button } from '@/components/ui/button';
import GoHome from '@/components/shared/GoHome';

const Icons = () => {
  return (
    <div className='flex   items-center justify-start gap-4 px-2 '>
      <Button className='p-1' variant='ghost' size='sm'>
        <WhatsappIcon className='size-5' />
      </Button>
      {/* <Button className='p-1' size='sm' variant='ghost'>
        <Chat className='size-5' />
      </Button> */}
      <Button className='p-1' size='sm' variant='ghost'>
        <Location className='size-5' />
      </Button>

     
    </div>
  );
};
export default Icons;