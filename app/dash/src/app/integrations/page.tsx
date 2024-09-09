"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { observer } from "mobx-react";
import Link from "next/link"
import { Check } from "lucide-react";

import { Button, Card, CardContent } from "@hanzo/ui/primitives";
import { STRIPE_CLIENT_ID, STRIPE_REDIRECT_URI } from '@/utils/settings'
import { useStore } from "@/stores";

const IntegrationsPage = observer(() => {
  const router = useRouter();
  const { credentialStore } = useStore()

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const [stripeConnect, setStripeConnect] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (credentialStore.isLoggedIn) {
        clearInterval(interval)
        console.log(credentialStore)
        setStripeConnect(`https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${STRIPE_CLIENT_ID}&scope=read_write&redirect_uri=${STRIPE_REDIRECT_URI}&state=${credentialStore.org.id}`)
        setDisabled(credentialStore.org.id.length === 0 && credentialStore.isLoading)
        setIsLoading(false)
      }
    }, 500)
  })

  return (
    isLoading ? <div className="w-full flex justify-center p-4">Loading...</div> :
      <div className="flex-1 space-y-4 overflow-y-auto">
        <div className="overflow-hidden bg-background shadow">
          <div className="h-full flex-1 flex-col md:flex gap-4">
            <p className="p-2 md:p-4 block md:hidden text-2xl font-medium">{credentialStore.user.firstName}</p>
            <Card className="max-w-[360px] self-center mt-4">
              <CardContent className="flex flex-col gap-4">
                <div className="text-xl sm:text-2xl font-bold">Stripe</div>
                <div className="text-sm sm:text-base ">Connect to Stripe to enable the payment system</div>
                <Button
                  onClick={() => router.push(stripeConnect)}
                  size='lg'
                  variant='primary'
                  color={credentialStore.hasIntegration('stripe') ? 'secondary' : 'primary'}
                  type='submit'
                  disabled={disabled}
                >
                  <Link href={stripeConnect} className="flex flex-row">
                    {credentialStore.hasIntegration('stripe') ? <Check /> : <></>}{credentialStore.hasIntegration('stripe') ? 'Connected' : 'Connect'}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  )
})

export default IntegrationsPage;