"use client"

import { observer } from "mobx-react";
import ProductForm from '@/components/form/product-form'

const UserPage = observer(() => {
  
  return (
    <ProductForm create={true}/>
  )
})

export default UserPage;