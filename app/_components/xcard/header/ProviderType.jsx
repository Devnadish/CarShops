import Text from '../../../../components/shared/Text';
import { Badge } from '@/components/ui/badge';
import WorkshopSVG from '@/components/svg/WorkshopSVG';
import WorkShopCenterSvg from '@/components/svg/WorkShopCenterSvg';
import MechancalMan from '@/components/svg/MechancalMan';


export const ProviderType = ({ type }) => {
  const stylx = 'w-[95px] h-[30px] bg-secondary border-secondary/50 flex items-center justify-center gap-2 font-tajwal shadow-md rounded-md';
  if (type === 'c') {
    return (
      <Badge className={stylx}>
        <WorkShopCenterSvg width={'20px'} height={'20px'} className="text-primary" />
        <Text fontSize='xs' opacity='O70'>مركز</Text>
      </Badge>
    );
  }
  if (type === 'w') {
    return (
      <Badge className={stylx}>
        <WorkshopSVG width={'30px'} height={'30px'} className="text-primary" />
        <Text fontSize='xs' opacity='O70'>ورشة</Text>

      </Badge>
    );
  }
  if (type === 'h') {
    return (
      <Badge className={stylx}>
        <MechancalMan width={'20px'} height={'20px'} className="text-primary" />
        <Text fontSize='xs' opacity='O70'>افراد</Text>

      </Badge>
    );
  }
};
