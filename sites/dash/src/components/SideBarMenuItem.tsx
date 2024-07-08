import type { FC, ReactNode } from "react";

export interface SideBarMenuItemProps {
  label: string;
  icon: ReactNode;
  href: string;
};

const SideBarMenuItem: FC<SideBarMenuItemProps> = (props) => {
  const { label, icon, href } = props;
  return (
    <a href={href} className="flex flex-row gap-4">
      <div className="flex p-2 hover:bg-muted-4 w-full gap-2 text-muted-1 hover:text-primary rounded-sm">
        {icon}
        <span>{label}</span>
      </div>
    </a>
  )
};

export default SideBarMenuItem;