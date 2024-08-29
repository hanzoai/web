"use client"

import { observer } from "mobx-react";
import { useSearchParams } from "next/navigation";
import OrderForm from '@/components/form/order-form'
import { useStore } from "@/stores";

const OrderPage = observer(() => {
  const { ordersStore } = useStore()

  const searchParams = useSearchParams()
  const orderId = searchParams.get('id')

  if (orderId) {
    ordersStore.getOrder(orderId).catch((e: any) => {
      console.log('order page error', e)
    })
  } else {
    console.log('parameter error')
    return
  }

  return (
    <OrderForm orderId={orderId} create={false}/>
  )
})

export default OrderPage;