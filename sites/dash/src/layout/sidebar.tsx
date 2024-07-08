import type { FC } from "react";
import { BarChart, User2, ShoppingBasket, Notebook, Settings } from "lucide-react";
import SideBarMenuItem from "@/components/SideBarMenuItem";

const sidebarData = [
  { label: "Overview", icon: <BarChart />, href: "" },
  { label: "Users", icon: <User2 />, href: "" },
  { label: "Products", icon: <ShoppingBasket />, href: "" },
  { label: "Orders", icon: <Notebook />, href: "" },
  { label: "Integrations", icon: <Settings />, href: "" },
];

const SideBar: FC = () => {
  return (
    <div className="flex w-[300px] flex-col p-3 pt-6 gap-2">
      {sidebarData.map((item, index) => <SideBarMenuItem label={item.label} href={item.href} icon={item.icon} />)}
    </div>
  )
}

export default SideBar;