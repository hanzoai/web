import type { LinkDef } from '@hanzo/ui/types'
import {
  AI, 
  APIs, 
  Advertising, 
  Analytics,
  Blockchain, 
  Blog, 
  Changelog, 
  Chat, 
  Commerce, 
  Crowdfunding, 
  CustomerSupport, 
  Customers, 
  DeveloperDocs, 
  Engine, 
  FAQs, 
  Guides, 
  HanzoJS, 
  Integrations, 
  Marketing, 
  Payments, 
  Platform, 
  ResourceCenter, 
  ShopJS, 
  Templates, 
  WebApps } from '../components/icons'

import SocialIcon from '../components/icons/social-icon'
import Warpcast from '../components/icons/warpcast'

export interface LinkDefExtended extends LinkDef {
  icon?: any,
  childMenu?: ChildMenu[]
}
export interface ChildMenu extends LinkDef {
  groupName?: string
}

export default [
    {
      title: "Products",
      icon: "",
      href: "#",
      newTab: false,
      childMenu: [
        {
          groupName:"DX Platform",
          title: "AI",
          icon: <AI  size={25}/>,
          href: "http://docs.hanzo.ai",
          newTab: false,
          contents:"Powering breakthroughs" //insert string to here
        }, {
          groupName:"DX Platform",
          title: "Blockchain",
          icon: <Blockchain  size={25}/>,
          href: "http://docs.hanzo.ai",
          newTab: false,
          contents:"Decentralized application" //insert string to here
        }, {
          groupName:"DX Platform",
          title: "Commerce",
          icon: <Commerce  size={25}/>,
          href: "http://docs.hanzo.ai",
          newTab: false,
          contents: "Enhancing online profitability",
        }, {
          groupName:"Managed Infrastructure",
          title: "Analytics",
          icon: <Analytics  size={25}/>,
          href: "http://docs.hanzo.ai",
          newTab: false,
          contents:"Powering breakthroughs" //insert string to here
        }, {
          groupName:"Managed Infrastructure",
          title: "Advertising",
          icon: <Advertising  size={25}/>,
          href: "http://docs.hanzo.ai",
          newTab: false,
          contents:"Creating conversation events" //insert string to here
        }, {
          groupName:"Managed Infrastructure",
          title: "Marketing",
          icon: <Marketing  size={25}/>,
          href: "http://docs.hanzo.ai",
          newTab: false,
          contents:"Branding & market penetration" //insert string to here
        },{
          groupName:"Managed Infrastructure",
          title: "Payments",
          icon: <Payments  size={25}/>,
          href: "http://docs.hanzo.ai",
          newTab: false,
          contents:"Seamless transactions" //insert string to here
        },{
          groupName:"OpenSource",
          title: "Hanzo.js",
          icon: <HanzoJS  size={25}/>,
          href: "http://github.com/hanzoai/hanzo.js",
          newTab: false,
          contents:"Powering breakthroughs" //insert string to here
        },{
          groupName:"OpenSource",
          title: "Engine",
          icon: <Engine  size={25}/>,
          href: "http://docs.hanzo.ai",
          newTab: false,
          contents:"Decentralized application" //insert string to here
        },{
          groupName:"OpenSource",
          title: "APIs",
          icon: <APIs  size={25}/>,
          href: "https://hanzo.readme.io/docs/introduction-to-our-restful-api",
          newTab: false,
          contents:"Enhancing online profitability" //insert string to here
        },
        {
          groupName:"OpenSource",
          title: "Shop.js",
          icon: <ShopJS  size={25}/>,
          href: "http://github.com/shopjs/shop.js",
          newTab: false,
          contents:"Powerful UI components" //insert string to here
        },
        {
          groupName:"  ",
          title: "Chat",
          icon: <Chat  size={25}/>,
          href: "http://docs.hanzo.ai",
          newTab: false,
          contents:"Powering breakthroughs" //insert string to here
        },
        {
          groupName:"  ",
          title: "Crowdfunding",
          icon: <Crowdfunding  size={25}/>,
          href: "http://docs.hanzo.ai",
          newTab: false,
          contents:"Decentralized application" //insert string to here
        },
      ]
    },
    {
      title: "Solutions",
      icon: "",
      href: "http://docs.hanzo.ai",
      newTab: false,
      childMenu: [
        {
          groupName:"Apps",
          title: "AI Chat",
          icon: <AI  size={25}/>,
          href: "http://docs.hanzo.ai",
          newTab: false,
          contents:"Virtual assistance" //insert string to here
        },{
          groupName:"Apps",
          title: "Blockchain Apps",
          icon: <Blockchain  size={25}/>,
          href: "http://docs.hanzo.ai",
          newTab: false,
          contents:"Decentralized application" //insert string to here
        },{
          groupName:"Apps",
          title: "ECommerce Apps",
          icon: <Commerce  size={25}/>,
          href: "http://docs.hanzo.ai",
          newTab: false,
          contents:"Seamless online shopping" //insert string to here
        },{
          groupName:"Apps",
          title: "Web Apps",
          icon: <WebApps  size={25}/>,
          href: "https://docs.google.com/document/d/1thrUM7-GPNYeP8b9JAz_MR0cLyEwRSOx52uRPmy0mdY/edit?usp=sharing",
          newTab: false,
          contents:"Customized interfaces" //insert string to here
        },{
          groupName:"Industries",
          title: "Crowdfunding",
          icon: <Crowdfunding  size={25}/>,
          href: "http://docs.hanzo.ai",
          newTab: false,
          contents:"Public sale bootstrap" //insert string to here
        },{
          groupName:"Industries",
          title: "Platform",
          icon: <Platform  size={25}/>,
          href: "http://docs.hanzo.ai",
          newTab: false,
          contents:"Backend management" //insert string to here
        }
      ]
    },
    {
      title: "Resources",
      icon: "",    
      href: "https://docs.hanzo.ai",
      newTab: false,
      childMenu: [
        {
          groupName:"Tools",
          title: "Resource Center",
          icon: <ResourceCenter  size={25}/>,
          href: "https://docs.google.com/document/d/1Kk4VmVf6RyVF8Bi3lCawFV9zAr7zV8O96pRU_YfHrf4/edit?usp=sharing",
          newTab: false,
          contents:"Dynamic solutions" //insert string to here
        },{
          groupName:"Tools",
          title: "Integrations",
          icon: <Integrations  size={25}/>,
          href: "http://docs.hanzo.ai",
          newTab: false,
          contents:"Simplified onboarding" //insert string to here
        },{
          groupName:"Tools",
          title: "Templates",
          icon: <Templates  size={25}/>,
          href: "http://github.com/hanzoai",
          newTab: false,
          contents:"Speedy app development" //insert string to here
        },{
          groupName:"Tools",
          title: "Guides",
          icon: <Guides  size={25}/>,
          href: "http://github.com/hanzoai",
          newTab: false,
          contents:"Find help quickly" //insert string to here
        },{
          groupName:"Company",
          title: "Customers",
          icon: <Customers  size={25}/>,
          href: "http://docs.hanzo.ai/",
          newTab: false,
          contents:"Trusted by the best teams" //insert string to here
        },{
          groupName:"Company",
          title: "Blog",
          icon: <Blog  size={25}/>,
          href: "https://docs.google.com/document/d/1HQlLuWAmnT42oNjWKsmhlsRarUbSIZ2ZgVzJspS7aLE/edit?usp=sharing",
          newTab: false,
          contents:"Latest posts and changes" //insert string to here
        },{
          groupName:"Company",
          title: "Changelog",
          icon: <Changelog  size={25}/>,
          href: "http://docs.hanzo.ai/",
          newTab: false,
          contents:"Manage deployments" //insert string to here
        },{
          groupName:"More",
          title: "Developer docs",
          icon: <DeveloperDocs  size={25}/>,
          href: "http://docs.hanzo.ai/",
          newTab: false,
          contents:"Software explained" //insert string to here
        },{
          groupName:"More",
          title: "Customer Support",
          icon: <CustomerSupport  size={25}/>,
          href: "https://docs.google.com/document/d/1Kk4VmVf6RyVF8Bi3lCawFV9zAr7zV8O96pRU_YfHrf4/edit?usp=sharing",
          newTab: false,
          contents:"Dedicated help 24/7" //insert string to here
        },
        {
          groupName:"More",
          title: "FAQs",
          icon: <FAQs size={25}/>,
          href: "http://docs.hanzo.ai/",
          newTab: false,
          contents:"Common queries" //insert string to here
        },
      ]
    },
    {
      title: "Docs",
      icon: "",
      href: "http://docs.hanzo.ai/",
      newTab: false
    },
    {
      title: "Pricing",
      icon: "",
      href: "https://hanzo.ai",
      newTab: false
    }
  ] satisfies LinkDefExtended[]

// export const LinkDefExtendedMobile = [
//     {
//       title: "Products",
//       icon: "",
//       href: "#",
//       newTab: false,
//       childMenu: [
//         {
//           groupName:"DX Platform",
//           title: "AI",
//           icon: <AI  size={25}/>,
//           href: "http://docs.hanzo.ai",
//           newTab: false,
//           contents:"Powering breakthroughs" //insert string to here
//         }, {
//           groupName:"DX Platform",
//           title: "Blockchain",
//           icon: <Blockchain  size={25}/>,
//           href: "http://docs.hanzo.ai",
//           newTab: false,
//           contents:"Decentralized application" //insert string to here
//         }, {
//           groupName:"DX Platform",
//           title: "Commerce",
//           icon: <Commerce  size={25}/>,
//           href: "http://docs.hanzo.ai",
//           newTab: false,
//           contents: "Enhancing online profitability",
//         }, {
//           groupName:"Managed Infrastructure",
//           title: "Analytics",
//           icon: <Analytics  size={25}/>,
//           href: "http://docs.hanzo.ai",
//           newTab: false,
//           contents:"Powering breakthroughs" //insert string to here
//         }, {
//           groupName:"Managed Infrastructure",
//           title: "Advertising",
//           icon: <Advertising  size={25}/>,
//           href: "http://docs.hanzo.ai",
//           newTab: false,
//           contents:"Creating conversation events" //insert string to here
//         }, {
//           groupName:"Managed Infrastructure",
//           title: "Marketing",
//           icon: <Marketing  size={25}/>,
//           href: "http://docs.hanzo.ai",
//           newTab: false,
//           contents:"Branding & market penetration" //insert string to here
//         },{
//           groupName:"Managed Infrastructure",
//           title: "Payments",
//           icon: <Payments  size={25}/>,
//           href: "http://docs.hanzo.ai",
//           newTab: false,
//           contents:"Seamless transactions" //insert string to here
//         },{
//           groupName:"OpenSource",
//           title: "Hanzo.js",
//           icon: <HanzoJS  size={25}/>,
//           href: "http://github.com/hanzoai/hanzo.js",
//           newTab: false,
//           contents:"Powering breakthroughs" //insert string to here
//         },{
//           groupName:"OpenSource",
//           title: "Engine",
//           icon: <Engine  size={25}/>,
//           href: "http://docs.hanzo.ai",
//           newTab: false,
//           contents:"Decentralized application" //insert string to here
//         },{
//           groupName:"OpenSource",
//           title: "APIs",
//           icon: <APIs  size={25}/>,
//           href: "https://hanzo.readme.io/docs/introduction-to-our-restful-api",
//           newTab: false,
//           contents:"Enhancing online profitability" //insert string to here
//         },
//         {
//           groupName:"OpenSource",
//           title: "Shop.js",
//           icon: <ShopJS  size={25}/>,
//           href: "http://github.com/shopjs/shop.js",
//           newTab: false,
//           contents:"Powerful UI components" //insert string to here
//         },
//         {
//           groupName:"  ",
//           title: "Chat",
//           icon: <Chat  size={25}/>,
//           href: "http://docs.hanzo.ai",
//           newTab: false,
//           contents:"Powering breakthroughs" //insert string to here
//         },
//         {
//           groupName:"  ",
//           title: "Crowdfunding",
//           icon: <Crowdfunding  size={25}/>,
//           href: "http://docs.hanzo.ai",
//           newTab: false,
//           contents:"Decentralized application" //insert string to here
//         },
//       ]
//     },
//     {
//       title: "Solutions",
//       icon: "",
//       href: "http://docs.hanzo.ai",
//       newTab: false,
//       childMenu: [
//         {
//           groupName:"Apps",
//           title: "AI Chat",
//           icon: <AI  size={25}/>,
//           href: "http://docs.hanzo.ai",
//           newTab: false,
//           contents:"Virtual assistance" //insert string to here
//         },{
//           groupName:"Apps",
//           title: "Blockchain Apps",
//           icon: <Blockchain  size={25}/>,
//           href: "http://docs.hanzo.ai",
//           newTab: false,
//           contents:"Decentralized application" //insert string to here
//         },{
//           groupName:"Apps",
//           title: "ECommerce Apps",
//           icon: <Commerce  size={25}/>,
//           href: "http://docs.hanzo.ai",
//           newTab: false,
//           contents:"Seamless online shopping" //insert string to here
//         },{
//           groupName:"Apps",
//           title: "Web Apps",
//           icon: <WebApps  size={25}/>,
//           href: "https://docs.google.com/document/d/1thrUM7-GPNYeP8b9JAz_MR0cLyEwRSOx52uRPmy0mdY/edit?usp=sharing",
//           newTab: false,
//           contents:"Customized interfaces" //insert string to here
//         },{
//           groupName:"Industries",
//           title: "Crowdfunding",
//           icon: <Crowdfunding  size={25}/>,
//           href: "http://docs.hanzo.ai",
//           newTab: false,
//           contents:"Public sale bootstrap" //insert string to here
//         },{
//           groupName:"Industries",
//           title: "Platform",
//           icon: <Platform  size={25}/>,
//           href: "http://docs.hanzo.ai",
//           newTab: false,
//           contents:"Backend management" //insert string to here
//         }
//       ]
//     },
//     {
//       title: "Resources",
//       icon: "",    
//       href: "https://lux.credit",
//       newTab: false,
//       childMenu: [
//         {
//           groupName:"Tools",
//           title: "Resource Center",
//           icon: <ResourceCenter  size={25}/>,
//           href: "https://docs.google.com/document/d/1Kk4VmVf6RyVF8Bi3lCawFV9zAr7zV8O96pRU_YfHrf4/edit?usp=sharing",
//           newTab: false,
//           contents:"Dynamic solutions" //insert string to here
//         },{
//           groupName:"Tools",
//           title: "Integrations",
//           icon: <Integrations  size={25}/>,
//           href: "http://docs.hanzo.ai",
//           newTab: false,
//           contents:"Simplified onboarding" //insert string to here
//         },{
//           groupName:"Tools",
//           title: "Templates",
//           icon: <Templates  size={25}/>,
//           href: "http://github.com/hanzoai",
//           newTab: false,
//           contents:"Speedy app development" //insert string to here
//         },{
//           groupName:"Tools",
//           title: "Guides",
//           icon: <Guides  size={25}/>,
//           href: "http://github.com/hanzoai",
//           newTab: false,
//           contents:"Find help quickly" //insert string to here
//         },{
//           groupName:"Company",
//           title: "Customers",
//           icon: <Customers  size={25}/>,
//           href: "http://docs.hanzo.ai/",
//           newTab: false,
//           contents:"Trusted by the best teams" //insert string to here
//         },{
//           groupName:"Company",
//           title: "Blog",
//           icon: <Blog  size={25}/>,
//           href: "https://docs.google.com/document/d/1HQlLuWAmnT42oNjWKsmhlsRarUbSIZ2ZgVzJspS7aLE/edit?usp=sharing",
//           newTab: false,
//           contents:"Latest posts and changes" //insert string to here
//         },{
//           groupName:"Company",
//           title: "Changelog",
//           icon: <Changelog  size={25}/>,
//           href: "http://docs.hanzo.ai/",
//           newTab: false,
//           contents:"Manage deployments" //insert string to here
//         },{
//           groupName:"More",
//           title: "Developer docs",
//           icon: <DeveloperDocs  size={25}/>,
//           href: "http://docs.hanzo.ai/",
//           newTab: false,
//           contents:"Software explained" //insert string to here
//         },{
//           groupName:"More",
//           title: "Customer Support",
//           icon: <CustomerSupport  size={25}/>,
//           href: "https://docs.google.com/document/d/1Kk4VmVf6RyVF8Bi3lCawFV9zAr7zV8O96pRU_YfHrf4/edit?usp=sharing",
//           newTab: false,
//           contents:"Dedicated help 24/7" //insert string to here
//         },
//         {
//           groupName:"More",
//           title: "FAQs",
//           icon: <FAQs size={25}/>,
//           href: "http://docs.hanzo.ai/",
//           newTab: false,
//           contents:"Common queries" //insert string to here
//         },
//       ]
//     },
//     {
//       title: "Docs",
//       icon: "",
//       href: "http://docs.hanzo.ai/",
//       newTab: false
//     },
//     {
//       title: "Pricing",
//       icon: "",
//       href: "https://hanzo.ai",
//       newTab: false
//     }
//   ]