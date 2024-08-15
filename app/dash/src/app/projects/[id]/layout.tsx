'use client'

import React, { useEffect, useState, type PropsWithChildren } from 'react'
import { useParams } from 'next/navigation'

import { useOrganization } from '@/context/organization-context'
import AdminHeader from "@/layout/header";
import { getProjectById as getProjectByIdHelper, getOrganizationById as getOrganizationByIdHelper } from '@/utils/firebase-utils'
import { get } from 'jquery';

const Layout: React.FC<PropsWithChildren> = ({
    children
}) => {
    const [orgName, setOrgName] = useState<string | undefined>('')
    const org = useOrganization()
    const params = useParams()

    const id = params.id as string

    useEffect(() => {
        getProjectsById()
    }, [org, id])

    const getProjectsById = async () => {
        if (!org.organization) return
        const response = await getProjectByIdHelper(id)
        if (response.success && response.data) {
            const orgResponse = await getOrganizationByIdHelper(response.data.orgId)
            setOrgName(orgResponse.data?.name)
        } else {
            console.log('Project not found: ', response.error)
        }
    }

    return (
        orgName &&
        <div className="flex flex-col overflow-y-auto w-full">
            <AdminHeader content={orgName} />
            {children}
        </div>
    )
}

export default Layout
