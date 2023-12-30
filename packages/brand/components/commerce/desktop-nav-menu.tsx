"use client"

import * as React from "react"

import Link from "next/link"
import { cn } from '@hanzo/ui/util'
import type { ChildMenu, LinkDefExtended } from "../../site-def/main-nav"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@hanzo/ui/primitives'
import Warpcast from "../icons/warpcast"
import type { LinkDef } from "@hanzo/ui/types"

const DesktopNav: React.FC<{
  links: LinkDefExtended[],
}> = ({
  links
}) => (
    links.length > 0 ? (
      <NavigationMenu className={cn("ml-[37px]")}>
        <NavigationMenuList>
          {links.map((el, index) => {

            if (el.title == 'Docs' || el.title == 'Pricing') {
              return (
                <NavigationMenuItem key={index}>
                  <Link href={el.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {el.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            } else {
              return (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger>{el.title}</NavigationMenuTrigger>
                  <NavigationMenuContent className="!left-0">
                    {/* <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] " key={index}>
                      {el.childMenu?.map((component, index) => (
                        <ListItem
                          key={index}
                          title={component.title}
                          href={component.href}
                        >
                          {component.contents}
                        </ListItem>
                      ))}
                    </ul> */}
                    <div className="flex flex-row">
                      {GroupChildMenu(el.childMenu)}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )
            }

          })}
        </NavigationMenuList>
      </NavigationMenu>
    ) : null
  )
export default DesktopNav

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, key, ...props }, ref) => {
  return (
    <li key={key}>
      <NavigationMenuLink asChild>

        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-level-1 hover:text-accent-foreground focus:bg-level-1 focus:text-accent-foreground",
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
  )
})
ListItem.displayName = "ListItem"

const GroupChildMenu = (childs: ChildMenu[] | undefined) => {
  // Initialize groupedChildMenus with the type specification
  if (!childs) {
    return null;
  }
  let groupedChildMenus = childs.reduce((grouped: Record<string, ChildMenu[]>, childLink) => {
    if (childLink.groupName) {
      if (!grouped[childLink.groupName]) {
        grouped[childLink.groupName] = [];
      }
      grouped[childLink.groupName].push(childLink);
    }
    return grouped;
  }, {} as Record<string, ChildMenu[]>); // added explicit type here

  // Convert groups object to array
  return Object.entries(groupedChildMenus).map(([groupName, childLinks]: [string, ChildMenu[]]) => { // added type specification here
    return (
      <div key={groupName} className=" py-4 px-4">
        <h2 className="text-muted-1">{groupName}</h2>
        <ul className=" w-[200px] gap-3 md:w-[250px] lg:w-[250px]">
          {childLinks.map((link) => (
            <div className="flex items-center" key={link.title}>
              {link.icon}
              <ListItem key={link.title} title={link.title} href={link.href} className="ml-[14px]">
                {link.contents}
              </ListItem>
            </div>
          ))}
        </ul>
      </div>
    );
  });
};