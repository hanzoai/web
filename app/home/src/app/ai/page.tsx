import React from "react";

import { Header } from "@hanzo/brand";

import siteDef from "@/site-def";
import "@/blocks/registerComponents";

type Props = {
    searchParams?: { [key: string]: string | string[] | undefined };
};

import { AI } from '@/components/component/ai'

const page = ({ }: Props) => {
    return (
        <>
            <Header siteDef={siteDef} />
            <AI />
            {/* <FooterSlide agent={agent} /> */}
        </>
    );
};
export default page;
