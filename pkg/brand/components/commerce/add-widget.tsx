'use client'
import React from 'react'

import type { LineItem } from '@hanzo/commerce/types'
import  { AddToCartWidget } from '@hanzo/commerce'

import { useRecentActivity } from '../../commerce/ui/context'

const AddWidget: React.FC<{
  item: LineItem
  disabled?: boolean
  className?: string
  buttonClx?: string
  variant?: 'minimal' | 'primary' | 'outline'
}> = (props) => {
  const l = useRecentActivity()
  return <AddToCartWidget {...props} onQuantityChanged={l.quantityChanged.bind(l)}/>
}

export default AddWidget
