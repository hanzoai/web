'use client'

import type { FC, ReactNode } from "react"
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'

export interface TextCardDataProps {
  cardTitle: string
  cardIcon: ReactNode
  cardPercent?: number
  cardValue: number
  cardCompareValue: number
  cardPreviousValue: number
  cardValueType: 'cash' | 'number'
}

const DashTextCard: FC<TextCardDataProps> = observer((props) => {
  const { cardTitle, cardIcon, cardPercent, cardValue, cardCompareValue, cardPreviousValue, cardValueType } = props;
  const value = cardValueType == 'cash' ? '$' + cardValue : cardValue
  // const percent = '+' + cardPercent + '%'

  const percent = cardPreviousValue
    ? cardCompareValue >= cardPreviousValue
      ? '+' + ((cardCompareValue / cardPreviousValue) * 100).toFixed(2)
      : '-' + (-100 + (cardCompareValue / cardPreviousValue) * 100).toFixed(2)
    : '+' + 100 + '%'

  useEffect(() => {

  }, [])
  return (
    <div className="flex flex-row rounded-lg border border-level-1 shadow bg-background text-primary p-4 justify-between">
      <div className="flex flex-col gap-2">
        <h3 className="text-xs md:text-sm font-medium text-muted-2 whitespace-nowrap">{cardTitle}</h3>
        <div className="flex flex-row items-center gap-4">
          <div className="text-xl md:text-2xl font-bold">{value}</div>
          <div className="text-xxs md:text-xs border rounded-full bg-[#34D3991A] text-[#34D399] border-[#34D39933] px-[6px] py-[2px]">{percent}</div>
        </div>
      </div>
      <div className="flex border border-level-1 rounded-md p-1 h-9 w-9 items-center justify-center">
        {cardIcon}
      </div>
    </div>
  )
})

export default DashTextCard;