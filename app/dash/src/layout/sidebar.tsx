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
    <div className="w-[0px] md:w-[250px] md:flex flex-col gap-2 flex-none transition-all duration-500">
      <div className="h-[80px] hidden md:flex items-center border-b border-dashed border-level-1 justify-center md:justify-start p-2">
        <Logo size='md' href='https://hanzo.ai/' className='flex' key='two' layout='logo-only' />
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