'use client'

import { useEffect } from 'react'
import { useAuth } from '@hanzo/auth/service'
import { getCookie } from 'cookies-next'

const AuthListener = () => {
  const auth = useAuth()

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_LOGIN_SITE_URL}/api/auth/get-auth-token`, {
      method: 'GET',
      credentials: 'include',
    })
    .then(response => response.json())
    .then((data: any) => {
      const token = data.reqToken
      if (!!token) {
        auth.loginWithCustomToken(token)
      }
    })
  }, [auth])

  return ( <></> )
}

export default AuthListener
