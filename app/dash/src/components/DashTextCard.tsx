import type { FC, ReactNode } from "react";

export interface TextCardDataProps {
  cardTitle: string;
  cardIcon: ReactNode;
  cardMainText: string;
  cardSubText: string;
}

const DashTextCard: FC<TextCardDataProps> = (props) => {
  const { cardTitle, cardIcon, cardMainText, cardSubText } = props;
  return (
    <div className="rounded-lg border shadow bg-background text-primary">
      <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="text-sm font-medium">{cardTitle}</h3>
        {cardIcon}
      </div>
      <div className="p-6 pt-0">
        <div className="text-2xl font-bold">{cardMainText}</div>
        <p className="text-xs text-muted-1">{cardSubText}</p>
      </div>
    </div>
  )
}

export default DashTextCard;