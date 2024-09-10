"use client"

import { useState, type FC } from "react";
import { Settings, KeyRound, View, Recycle, Receipt, FileText, Braces, Handshake } from "lucide-react";
import SideBarMenuItem from "@/components/side-bar-menu-item";

const sidebarData = [
  { label: "General", icon: <Settings />, href: "/settings" },
  { label: "Authentication", icon: <KeyRound />, href: "/settings/authentication" },
  { label: "Sign in with Hanzo", icon: <View />, href: "/settings/signin" },
  { label: "Teams", icon: <Handshake />, href: "/settings/teams" },
  { label: "Billing", icon: <Receipt />, href: "/settings/billing" },
  { label: "Invoices", icon: <FileText />, href: "/settings/invoices" },
  { label: "Tokens", icon: <Braces />, href: "/settings/tokens" },
  { label: "Activity", icon: <Recycle />, href: "/settings/activity" },
];

export default function SettingsSideBar(props: {layout?: string}) {
  const layout = props.layout
  return (
    <div className={(layout == 'hidden' ? "w-[0px]" : "w-[250px] ") + layout + " md:w-[250px] md:flex flex-col gap-2 flex-none transition-all duration-200"}>
      <div className={layout + " h-[80px] text-2xl truncate font-bold md:flex items-center border-b border-dashed border-level-1 justify-start p-2"}>
        Account Settings
      </div>
      {sidebarData.map((item, index) => {
        return (
          <SideBarMenuItem
            key={index}
            label={item.label}
            href={item.href}
            icon={item.icon}
            layout={layout}
          />
        )
      })
      }
    </div>
  )
}