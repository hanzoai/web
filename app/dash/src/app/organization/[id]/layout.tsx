'use client'

import React, { useEffect, useState, type PropsWithChildren } from 'react'
import { useParams } from 'next/navigation'

import { useOrganization } from '@/context/organization-context'
import AdminHeader from "@/layout/header";

const Layout: React.FC<PropsWithChildren> = ({
    children
}) => {
    const [foundOrg, setFoundOrg] = useState<{ id: string, name: string, owner: string, role: string } | undefined>(undefined)
    const org = useOrganization()
    const params = useParams()

    const id = params.id

    useEffect(() => {
        if (org.organization) {
            const foundOrg = org.organization.find(o => o.id === id)
            setFoundOrg(foundOrg)
        }
    }, [org, id])

    return (<>
        <div className="flex flex-col overflow-y-auto w-full">
            <AdminHeader content={foundOrg?.name ? foundOrg.name : ''} />
            {children}
        </div>
    </>)
}

export default Layout
