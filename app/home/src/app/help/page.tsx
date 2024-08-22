import React from "react";

import { Header } from "@hanzo/brand";

import siteDef from "@/site-def";
import "@/blocks/registerComponents";

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

import {HelpCenter} from "../../../components/component/helpCenter"

const page = ({}: Props) => {
   return (
    <>
      <Header siteDef={siteDef} />
      <HelpCenter />
      {/* <FooterSlide agent={agent} /> */}
    </>
  );
};
export default page;
