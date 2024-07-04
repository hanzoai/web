"use client";

import * as React from "react";
import { useEffect } from "react";
import Link from "next/link";
import { cn } from '@hanzo/ui/util';
import type { ChildMenu, LinkDefExtended } from "../../site-def/main-nav";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@hanzo/ui/primitives';
import Warpcast from "../icons/warpcast";
import type { LinkDef } from "@hanzo/ui/types";

const preventDefault = (e) => e.preventDefault();
const handleMouseOver = () => {
  document.addEventListener('wheel', preventDefault, { passive: false });
  document.addEventListener('touchmove', preventDefault, { passive: false });
};

const handleMouseOut = () => {
  document.removeEventListener('wheel', preventDefault);
  document.removeEventListener('touchmove', preventDefault);
};


const DesktopNavHanzo: React.FC<{ 
  links: LinkDefExtended[], 
  className?: string 
}> = ({ links, className = '', setMenuFlag, menuFlag }) => (
  links.length > 0 ? (
    <NavigationMenu>
      <NavigationMenuList>
        {links.map((el, index) => (
          <NavigationMenuItem key={index}>
            {el.title === 'Docs' || el.title === 'Pricing' ? (
              <Link href={el.href} legacyBehavior passHref >
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(),' rounded-full')}>
                  {el.title}
                </NavigationMenuLink>
              </Link>
            ) : (
              <>
                <NavigationMenuTrigger className="rounded-full"
                  onMouseOver={ () => {
                    setMenuFlag(true)
                    handleMouseOver()
                  }}
                  onMouseOut={ () => {
                    setMenuFlag(false)
                    handleMouseOut()
                  } }
                  onClick={ () => {
                    if (menuFlag) {
                      setMenuFlag(false)
                      handleMouseOut()
                    } else {
                      setMenuFlag(true)
                      handleMouseOver()
                    }
                  }}
                >{el.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="fixed left-0 top-15 w-screen border-r-0 rounded-none h-full border-0 !backdrop-blur-3xl mt-0 bg-transparent"
                  onMouseOver={ () => {
                    setMenuFlag(true)
                    handleMouseOver()
                  }}
                  onMouseOut={ () => {
                    setMenuFlag(false)
                    handleMouseOut()
                  } }
                >
                  <div className="flex flex-row w-full justify-center border-r-0">
                    {GroupChildMenu(el.childMenu)}
                  </div>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  ) : null
);

export default DesktopNavHanzo;

const ListItem = React.forwardRef<
  React.ElementRef<"a">, 
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, key, ...props }, ref) => (
  <li key={key}>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-accent-foreground focus:bg-level-1 focus:text-accent-foreground text-muted-1 hover:text-primary hover:bg-transparent duration-500 ease-in-out",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-3 text-sm leading-snug text-muted-1">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";

const GroupChildMenu = (childs: ChildMenu[] | undefined) => {
  if (!childs) {
    return null;
  }

  const groupedChildMenus = childs.reduce((grouped: Record<string, ChildMenu[]>, childLink) => {
    if (childLink.groupName) {
      grouped[childLink.groupName] = grouped[childLink.groupName] || [];
      grouped[childLink.groupName].push(childLink);
    }
    return grouped;
  }, {});

  return Object.entries(groupedChildMenus).map(([groupName, childLinks]) => (
    <div key={groupName} className="py-4 px-4">
      <h2 className="text-muted-1">{groupName}</h2>
      <ul className="w-[200px] gap-3 md:w-[250px] lg:w-[250px]">
        {childLinks.map((link) => (
          <div className="flex justify-start items-center" key={link.title}>
            {link.icon}
            <ListItem key={link.title} title={link.title} href={link.href} className="ml-[14px]">
              {link.contents}
            </ListItem>
          </div>
        ))}
      </ul>
    </div>
  ));
};