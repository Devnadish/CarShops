import { Badge } from '@/components/ui/badge';
import Text from '../../../../components/shared/Text';

export const WorkType = ({ service }) => {
  return (
    <div className='flex h-6 w-full items-center gap-4 px-4 justify-evenly my-1'>
      {service.map((serv, idx) => {
        return (
          <Badge key={idx} variant='outline' className='w-fit flex items-center justify-center rounded border-border text-center text-xs capitalize opacity-65 flex-grow'>
            <Text>{serv}</Text>
          </Badge>
        );
      })}
    </div>
  );
};
