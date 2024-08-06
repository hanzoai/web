"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation"
import { useAuth } from '@hanzo/auth/service'

import { useOrganization } from '@/context/organization-context'
import { getInvitation } from '@/utils/firebase-utils'

const UniversalPage = () => {
  const router = useRouter();
  const auth = useAuth()
  const searchParams = useSearchParams()

  const accetInvitation = async (token: string) => {
    try {
      const response = await getInvitation(token)
      if (response.success) {
        const org = useOrganization()
        const currentOrganizations = org.organization || []
        org.setOrganization([...currentOrganizations, {
          id: response?.data?.organizationId,
          name: response?.data?.organizationName,
          owner: response?.data?.organizationOwner,
          role: ''
        }])
        router.push("/dashboard")
      } else {
        console.log(response.error)
      }
    } catch {
      console.log('Error accepting invitation')
    }
  }

  // router.push("/dashboard")

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_LOGIN_SITE_URL}/api/auth/get-auth-token`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(response => response.json())
      .then(async (data: any) => {
        const token = data.reqToken
        if (!!token) {
          await auth.loginWithCustomToken(token)

          if (auth.loggedIn) {
            const invitationToken = searchParams.get('token')
            invitationToken && accetInvitation(invitationToken)
            router.push("/dashboard")
          }
          else {
            const invitationToken = searchParams.get('token')
            invitationToken && accetInvitation(invitationToken)
            router.push('https://auth.hanzo.ai/?redirectUrl=https://dash.hanzo.ai')
          }
        } else {
          router.push('https://auth.hanzo.ai/?redirectUrl=https://dash.hanzo.ai')
        }
      })
  }, [auth, searchParams, router])
}

export default UniversalPage
