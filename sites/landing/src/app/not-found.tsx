import React from "react";

import { NotFound as NotFoundCommon } from "@hanzo/brand";
import siteDef from "@/site-def";
import { DrawerMargin, Footer, Header } from '@hanzo/brand'

import { ErrorPage } from "@/components/component/errorPage";

import { Main } from '@hanzo/brand'
const NotFound: React.FC = () => <NotFoundCommon siteDef={siteDef} header />;

type Props = {
  searchParams?: { [key: string]: string };
};

// export default NotFound;

const page = ({searchParams}: Props) => {
    return (<>
        <ErrorPage/>
    </>)
}

export default page