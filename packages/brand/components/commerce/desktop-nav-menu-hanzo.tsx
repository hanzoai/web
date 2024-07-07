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


const DesktopNavHanzo: React.FC<{
  links: LinkDefExtended[],
  className?: string,
  isMenuOpened: boolean,
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ links, className = '', isMenuOpened, setIsMenuOpen }) => {
  React.useEffect(() => {
    const preventScroll = (e: WheelEvent | TouchEvent) => {
      e.preventDefault();
    };

    if (isMenuOpened) {
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
      window.addEventListener('keydown', preventScrollKeys, { passive: false });
    } else {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventScrollKeys);
    }

    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventScrollKeys);
    };
  }, [isMenuOpened]);

  const preventScrollKeys = (e: KeyboardEvent) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
      e.preventDefault();
    }
  };

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  const menuHiddenClass = !isMenuOpened ? "invisible" : "";

  return (
    links.length > 0 ? (
      <NavigationMenu>
        <NavigationMenuList>
          {links.map((el, index) => (
            <NavigationMenuItem key={index} className="!m-0">
              {el.title === 'Docs' || el.title === 'Pricing' ? (
                <Link href={el.href} legacyBehavior passHref >
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), ' text-muted-1 bg-transparent')}>
                    {el.title}
                  </NavigationMenuLink>
                </Link>
              ) : (
                <>
                  <NavigationMenuTrigger
                    className="text-muted-1 bg-transparent"
                    onMouseEnter={handleMouseEnter}
                    onFocus={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onBlur={handleMouseLeave}
                  >
                    {
                      el.href && el.href !== "" ?
                        <Link href={el.href} legacyBehavior passHref>
                          {el.title}
                        </Link> : <>{el.title}</>
                    }
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                    className={cn("fixed left-0 top-15 w-screen border-r-0 rounded-none h-full border-0 !backdrop-blur-3xl mt-0 bg-transparent", menuHiddenClass)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
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
  )
};

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
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-accent-foreground focus:bg-level-1 focus:text-accent-foreground text-muted-1 hover:text-primary hover:bg-transparent duration-1000 ease-in-out",
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
      <ul className="w-[200px] gap-3 md:w-[200px] lg:w-[250px]">
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