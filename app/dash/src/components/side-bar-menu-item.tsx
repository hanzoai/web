"use client"

import { useRouter } from "next/navigation";
import type { FC, ReactNode } from "react";

export interface SideBarMenuItemProps {
  label: string;
  icon: ReactNode;
  href: string;
  layout?: string;
};

const SideBarMenuItem: FC<SideBarMenuItemProps> = (props) => {
  const { label, icon, href, layout } = props;
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  }

  return (
    <div onClick={handleClick} className={layout + " md:flex flex-row gap-4 hover:cursor-pointer"}>
      <div className='flex p-2 hover:bg-muted-4 w-full gap-2 text-muted-1 hover:text-primary rounded-sm justify-start'>
        {icon}
        <span className="truncate">{label}</span>
      </div>
    </div>
  )
};

export default SideBarMenuItem;