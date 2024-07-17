"use client";

import { useRouter } from "next/navigation"
import { useAuth } from '@hanzo/auth/service'
import { useEffect } from "react";

const UniversalPage = () => {
  const router = useRouter();
  const auth = useAuth()

  useEffect(() => {
    if (!auth.loggedIn) router.push("https://auth.hanzo.ai")
    else router.push("/dashboard")
  }, [auth])
}

export default UniversalPage
