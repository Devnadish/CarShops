import Text from '../shared/Text';
import { menu } from '@/constant/menu';
import Link from 'next/link';

 const MainMenu = () => {
  return (
    <div className='flex items-center  flex-col gap-2 justify-evenly w-full md:flex-row mt-8 md:mt-0    '>
      {menu.map(menuItem => {
        return (
          <Link
            key={menuItem.id}
            href={menuItem.href}
            className='flex items-center text-sm gap-2 bg-secondary/50 py-1 px-3 rounded hover:bg-secondary/80 w-full lg:w-fit   '
          >
            {menuItem.icon}
            <Text opacity={"O70"} >{menuItem.title}</Text>
          </Link>
        );
      })}
    </div>
  );
};
export default  MainMenu
