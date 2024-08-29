"use client"

import { observer } from "mobx-react";
import OrderForm from '@/components/form/order-form'

const UserPage = observer(() => {
  
  return (
    <OrderForm create={true}/>
  )
})

export default UserPage;