"use client"

import { useState, type FC } from "react";
import { BarChart, User2, ShoppingBasket, Notebook, Settings } from "lucide-react";
import SideBarMenuItem from "@/components/SideBarMenuItem";

const sidebarData = [
  { label: "Overview", icon: <BarChart />, href: "/dashboard" },
  { label: "Users", icon: <User2 />, href: "/users" },
  { label: "Products", icon: <ShoppingBasket />, href: "/products" },
  { label: "Orders", icon: <Notebook />, href: "/orders" },
  { label: "Integrations", icon: <Settings />, href: "/integrations" },
];

const SideBar: FC = () => {
  return (
    <div className="flex w-[300px] flex-col p-3 pt-6 gap-2 flex-none">
      {sidebarData.map((item, index) => {
        return (
          <SideBarMenuItem
            key={index}
            label={item.label}
            href={item.href}
            icon={item.icon}
          />
        )
      })
      }
    </div>
  )
}

export default SideBar;