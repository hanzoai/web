'use client'
import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'

// @ts-ignore
import { ApplePay, GooglePay, CreditCard, PaymentForm } from 'react-square-web-payments-sdk'

import {
  ApplyTypography,
  Button,
  Separator,
  Skeleton,
} from '@hanzo/ui/primitives'

import { cn } from '@hanzo/ui/util'

import { createCard, createCustomer, createSubscriptionWithStaticPrice, cancelSubscription } from '@/utils/square-payment'
import { sendFBEvent, sendGAEvent } from '@/utils/analytics'
import type { PaymentMethodComponentProps } from '@/type'
import { usePaymentPlan } from '@/context/payment-plan-context'

import ContactInfo from '../contact-form'
import PaymentMethods from '../card-icon-row'

const PayWithCard: React.FC<PaymentMethodComponentProps> = observer(({
  onDone,
  transactionStatus,
  setTransactionStatus,
  storePaymentInfo,
  contactForm,
}) => {
  const plan = usePaymentPlan()

  if (!plan.paymentPlan || plan.paymentPlan == null) {
    return (<></>)
  }

  const cardTokenizeResponseReceived = async (
    token: any,
    verifiedBuyer: any
  ) => {
    contactForm.handleSubmit(async () => {
      setTransactionStatus('paid')
      let customerId: string | any
      let subscription: any
      const customerInfo = await plan.getCustomer(contactForm.getValues().email)
      if (!customerInfo) {
        customerId = await createCustomer(contactForm.getValues().email)
        if (customerId) await plan.createCustomer(customerId, contactForm.getValues().email, contactForm.getValues().name)
      } else customerId = customerInfo.customerId

      const cardId = await createCard(token.token, contactForm.getValues().email, customerId)
      if (!cardId) return console.error("Card not created")

      if (!plan.paymentPlan) {
        setTransactionStatus('error')
        return console.error("Payment plan is null")
      }

      if (customerInfo) { 
        await cancelSubscription(customerInfo.subscriptionId) 
        await plan.deleteSubscription(customerInfo.subscriptionId)
      }

      subscription = await createSubscriptionWithStaticPrice(plan.paymentPlan.planVariationId, customerId, cardId)
      // const res = await processSquareCardPayment(token.token, paymentPlan.price, verifiedBuyer.token)
      if (subscription?.subscription?.id) {
        await plan.createSubscription(subscription.subscription.id, subscription.subscription)
        await plan.updateCustomer(customerId, contactForm.getValues().email, contactForm.getValues().name, subscription.subscription.id, plan.paymentPlan.planId)

        await storePaymentInfo({ paymentMethod: token.details.method ?? null, processed: subscription.subscription })

        setTransactionStatus('confirmed')
        sendGAEvent('purchase', {
          transaction_id: subscription?.subscription?.id,
          value: plan.paymentPlan.price,
          currency: 'USD',
          plan: plan.paymentPlan.plan,
          duration: plan.paymentPlan.duration,
        })
        sendFBEvent('Purchase', {
          plan: plan.paymentPlan.plan,
          duration: plan.paymentPlan.duration,
          value: plan.paymentPlan.price,
          currency: 'USD',
        })
      } else {
        setTransactionStatus('error')
      }
    })()
  }

  const createVerificationDetails = () => {
    const { name, email } = contactForm.getValues()

    if (!plan.paymentPlan) {
      setTransactionStatus('error')
      return console.error("Payment plan is null")
    }

    return {
      amount: plan.paymentPlan.price.toFixed(2),
      billingContact: {
        givenName: name,
        email,
      },
      currencyCode: 'USD',
      intent: 'CHARGE',
    }
  }

  const createPaymentRequest = () => {
    if (!plan.paymentPlan) {
      console.error("Payment plan is null")
      return null
    }

    return {
      countryCode: "US",
      currencyCode: "USD",
      plan: plan.paymentPlan.plan,
      duration: plan.paymentPlan.duration,
      requestBillingContact: false,
      requestShippingContact: false,
      total: {
        amount: plan.paymentPlan.price.toFixed(2),
        label: "Total",
      },
    }
  }
  /**
   * Reload payment form after checkout value changes (promo code applied, etc.)
   * Reloading is required so that Apple Pay and Google Pay buttons are updated for new cart total.
   */
  const [loadingPaymentForm, setLoadingPaymentForm] = useState<boolean>(false)
  useEffect(() => {
    setLoadingPaymentForm(true)
    const timeout = setTimeout(() => setLoadingPaymentForm(false), 1000)
    return () => clearTimeout(timeout)
  }, [plan.paymentPlan.price])

  if (loadingPaymentForm) {
    return (
      <div className='flex flex-col gap-2'>
        <Skeleton className='w-full h-10' />
        <Skeleton className='w-full h-10' />
      </div>
    )
  }

  return (
    <PaymentForm
      /**
       * Identifies the calling form with a verified application ID generated from
       * the Square Application Dashboard.
       */
      applicationId={process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID}
      /**
       * Invoked when payment form receives the result of a tokenize generation
       * request. The result will be a valid credit card or wallet token, or an error.
       */
      cardTokenizeResponseReceived={cardTokenizeResponseReceived}
      /**
        * This function enable the Strong Customer Authentication (SCA) flow
        *
        * We strongly recommend use this function to verify the buyer and reduce
        * the chance of fraudulent transactions.
        */
      createVerificationDetails={createVerificationDetails}
      /**
        * This function is required for digital wallets (Apple Pay, Google Pay)
        */
      createPaymentRequest={createPaymentRequest}
      /**
       * Identifies the location of the merchant that is taking the payment.
       * Obtained from the Square Application Dashboard - Locations tab.
       */
      locationId={process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID}
    >
      <ApplyTypography className='flex flex-col mt-6 gap-1'>
        {transactionStatus === 'paid' ? (
          <h6 className='mx-auto'>Processing your payment...</h6>
        ) : transactionStatus === 'confirmed' ? (
          <div className='flex flex-col gap-4'>
            <h5 className='mx-auto'>Payment confirmed!</h5>
            <p className='mx-auto'>Thank you for your purchase.</p>
            <Button onClick={onDone}>Continue</Button>
          </div>
        ) : (
          <div className='flex flex-col gap-1'>
            <GooglePay />
            <ApplePay />

            <div className='flex gap-2 whitespace-nowrap items-center my-1 sm:my-3 text-xs text-muted'>
              <Separator className='grow w-auto' /><div className='shrink-0 mx-1'>or</div><Separator className='grow w-auto' />
            </div>

            <PaymentMethods />

            <ContactInfo form={contactForm} />
            {/* Imitates hanzo/ui Button and Input styles, I was unable to render the
              hanzo/ui button outright and keeping the submit form functionality*/}
            <CreditCard
              style={{
                '.input-container': {
                  borderColor: '#666666',
                  borderRadius: '8px',
                },
                '.input-container.is-focus': {
                  borderColor: '#ffffff',
                },
                '.input-container.is-error': {
                  borderColor: '#ff1600',
                },
                '.message-text': {
                  color: '#999999',
                },
                '.message-icon': {
                  color: '#999999',
                },
                '.message-text.is-error': {
                  color: '#ff1600',
                },
                '.message-icon.is-error': {
                  color: '#ff1600',
                },
                input: {
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  fontSize: '15px',
                  fontFamily: 'helvetica neue, sans-serif',
                },
                'input::placeholder': {
                  color: '#999999',
                },
                'input.is-error': {
                  color: '#ff1600',
                },
              }}
              render={(Button: any) => (
                <Button className={cn(
                  'items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2',
                  'focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
                  '!bg-primary !text-primary-fg hover:!bg-primary-hover font-nav whitespace-nowrap not-typography h-10 py-2 px-4',
                  '!text-sm rounded-md lg:min-w-[220px] sm:min-w-[220px] flex'
                )}>
                  Pay
                </Button>
              )}
            />
            {transactionStatus === 'error' && (
              <p className='mx-auto text-destructive'>There was an error processing your payment.</p>
            )}
          </div>
        )}
      </ApplyTypography>
    </PaymentForm>
  )
})

export default PayWithCard
