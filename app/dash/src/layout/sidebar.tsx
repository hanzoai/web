"use client"

import { useState, type FC } from "react";
import { BarChart, User2, ShoppingBasket, Notebook, Settings } from "lucide-react";
import SideBarMenuItem from "@/components/side-bar-menu-item";
import { Logo } from "@hanzo/brand"

const sidebarData = [
  { label: "Overview", icon: <BarChart />, href: "/dashboard" },
  { label: "Users", icon: <User2 />, href: "/users" },
  { label: "Products", icon: <ShoppingBasket />, href: "/products" },
  { label: "Orders", icon: <Notebook />, href: "/orders" },
  { label: "Integrations", icon: <Settings />, href: "/integrations" },
];

const SideBar: FC = () => {
  return (
    <div className="flex w-[300px] flex-col p-4 gap-2 flex-none">
      <div className="h-[80px] flex items-center p-2 border-b-[1px] border-dashed border-[#AAAAAA33]">
        <Logo size='md' href='https://hanzo.ai/' className=' flex' key='two' layout='logo-only' />
      </div>
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