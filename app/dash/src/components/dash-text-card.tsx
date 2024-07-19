import type { FC, ReactNode } from "react";

export interface TextCardDataProps {
  cardTitle: string
  cardIcon: ReactNode
  cardPercent: number
  cardValue: number
  cardValueType: 'cash' | 'number'
}

const DashTextCard: FC<TextCardDataProps> = (props) => {
  const { cardTitle, cardIcon, cardPercent, cardValue, cardValueType} = props;
  const value = cardValueType == 'cash' ? '$' + cardValue : cardValue
  const percent = '+' + cardPercent + '%'
  return (
    <div className="flex flex-row rounded-lg border border-[#AAAAAA33] shadow bg-background text-primary p-5 justify-between">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-muted-2 whitespace-nowrap">{cardTitle}</h3>
        <div className="flex flex-row items-center gap-4">
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-xs border rounded-full bg-[#34D3991A] text-[#34D399] border-[#34D39933] px-[6px] py-[2px]">{percent}</div>
        </div>
      </div>
      <div className="flex border border-[#AAAAAA33] rounded-md p-[6px] h-9 w-9 items-center justify-center">
        {cardIcon} 
      </div>
    </div>
  )
}

export default DashTextCard;