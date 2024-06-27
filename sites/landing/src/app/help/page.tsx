import React from "react";

import { ScreenfulBlockComponent as Screenful,BlocksComponent} from "@hanzo/ui/blocks";
import { DrawerMargin, Footer, Header } from "@hanzo/brand";

import { desktopTiles, mobileTiles } from "@/content";
import FooterSlide from "@/components/footer-slide";
import siteDef from "@/site-def";
import "@/blocks/registerComponents";

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

import {HelpCenter} from "../../../components/component/help-center"

const page = ({ searchParams }: Props) => {
  const agent = searchParams?.agent as string;
  const tiles = agent === "desktop" ? desktopTiles : mobileTiles;
  const swipeOuter = "snap-start snap-always h-[100vh] ";
  const swipeInner = "pt-[68px] md:pt-[104px] pb-[24px] ";
  const swipeInnerTouch = swipeInner + "h-[100svh] ";
  return (
    <>
    <div className="flex justify-center w-[100%] md:w-[60%] m-auto mt-[70px] md:mt-[120px]">
      <Header siteDef={siteDef} />
      <HelpCenter />
      {/* <FooterSlide agent={agent} /> */}

    </div>
    </>
  );
};
export default page;
