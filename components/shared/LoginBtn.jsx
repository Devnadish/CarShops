import { Button } from '../ui/button';
import Text from './Text';
import { LogIn } from '@/lib/icons';

export const LoginBtn = () => {
  return (
    <Button variant='outline' className='flex items-center gap-4'>
      <LogIn size={20} strokeWidth={1} className='size-4' />
      <Text>دخول</Text>
    </Button>
  );
};
