"use client"
import ThemeSwitch from "@/components/shared/ThemeSwitch";
import Slider from "@/components/shared/Slider";
import { Search } from "@/lib/icons";
import { usePathname } from 'next/navigation'


export const SideBar = () => {
  const pathName=usePathname()
  if(pathName.startsWith('/provider/')) {
   return;
}
  return (
    <aside className=" hidden lg:flex flex-col items-center justify-center fixed top-[50px] left-0 shadow-xl h-screen bg-accent/70 w-[56px]  ">
      <div className="border-y border-border  h-full w-full flex items-center justify-center">
      <Slider />
      </div>
      <div className="border-y border-border h-1/4 w-full flex items-center justify-start flex-col py-2">
       {/* <Search/> */}
       {/* <DropList/> */}
      
      </div>
    </aside>
  );
};
