"use client"

import { observer } from "mobx-react";
import { useSearchParams } from "next/navigation";
import ProductForm from '@/components/form/product-form'
import { useStore } from "@/stores";

const ProductPage = observer(() => {
  const { productsStore } = useStore()

  const searchParams = useSearchParams()
  const productId = searchParams.get('id')

  if (productId) {
    productsStore.getProduct(productId).catch((e: any) => {
      console.log('product page error', e)
    })
  } else {
    console.log('parameter error')
    return
  }

  return (
    <ProductForm productId={productId} create={false}/>
  )
})

export default ProductPage;