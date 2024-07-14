import type { FC } from "react";

export interface DashRecentSalesItemType {
  name: string;
  email: string;
  avatar: string;
  balance: number;
}

const DashRecentSalesItem: FC<DashRecentSalesItemType> = (props) => {
  const { name, email, avatar, balance } = props;

  const formatBalance = (_balance: number) =>
    Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(_balance);

  return (
    <div className="flex items-center">
      <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
        <img className="aspect-square h-full w-full" alt="avatar" src={avatar} />
      </span>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{name}</p>
        <p className="text-sm text-muted-1">{email}</p>
      </div>
      <div className="ml-auto font-medium">+${formatBalance(balance)}</div>
    </div>
  )
};

export default DashRecentSalesItem;