"use client";

import { useRouter } from "next/navigation"
import { useAuth } from '@hanzo/auth/service'
import { useEffect } from "react";

const UniversalPage = () => {
  const router = useRouter();
  const auth = useAuth()

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
        console.log(auth.loggedIn)

        if (auth.loggedIn) router.push("/dashboard")
        else router.push('https://auth.hanzo.ai/?redirectUrl=https://dash.hanzo.ai')
      } else {
        router.push('https://auth.hanzo.ai/?redirectUrl=https://dash.hanzo.ai')
      }
    })
  }, [auth])
}

export default UniversalPage
