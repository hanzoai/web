import type { TextCardDataProps } from "@/components/dash-text-card";
import DashTextCard from "@/components/dash-text-card";
import type { BarChartDataProps } from "@/components/dash-bar-charts";
import DashBarCharts from "@/components/dash-bar-charts";
import type { DashRecentSalesItemType } from "@/components/dash-recent-sales-item";
import { Input, Tabs, TabsList, TabsTrigger } from "@hanzo/ui/primitives";
import { Button } from "@hanzo/ui/primitives";
import { Basket, Credit, CSV, Receipt } from "./icons"

const textCardData: TextCardDataProps[] = [
  {
    cardTitle: "Projected Revenue",
    cardIcon: <Credit />,
    cardValue: 50,
    cardPercent: 100,
    cardValueType: 'cash'
  },
  {
    cardTitle: "Active Preorders",
    cardIcon: <Basket />,
    cardValue: 50,
    cardPercent: 100,
    cardValueType: 'cash'
  },
  {
    cardTitle: "Deposites",
    cardIcon: <Basket />,
    cardValue: 50,
    cardPercent: 100,
    cardValueType: 'cash'
  },
  {
    cardTitle: "Deposites Processed",
    cardIcon: <Credit />,
    cardValue: 50,
    cardPercent: 100,
    cardValueType: 'cash'
  },
  {
    cardTitle: "Refunds",
    cardIcon: <Receipt />,
    cardValue: 50,
    cardPercent: 100,
    cardValueType: 'cash'
  },
  {
    cardTitle: "Refunds Processed",
    cardIcon: <Receipt />,
    cardValue: 50,
    cardPercent: 100,
    cardValueType: 'cash'
  }
];

const chartData: BarChartDataProps[] = [
  { key: "Jan", value: 550 },
  { key: "Feb", value: 980 },
  { key: "Mar", value: 320 },
  { key: "Apr", value: 140 },
  { key: "May", value: 60 },
  { key: "Jun", value: 150 },
  { key: "Jul", value: 840 },
  { key: "Aug", value: 640 },
  { key: "Sep", value: 330 },
  { key: "Oct", value: 20 },
  { key: "Nov", value: 500 },
  { key: "Dec", value: 780 },
];

const salesData: DashRecentSalesItemType[] = [
  { name: "Olivia Martin", email: "olivia.martin@email.com", balance: 1999, avatar: "assets/images/01.png" },
  { name: "Jackson Lee", email: "jackson.lee@email.com", balance: 39, avatar: "assets/images/02.png" },
  { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", balance: 299, avatar: "assets/images/03.png" },
  { name: "William Kim", email: "william.kim@email.com", balance: 99, avatar: "assets/images/04.png" },
  { name: "Sofia Davis", email: "sofia.davis@email.com", balance: 39, avatar: "assets/images/05.png" },
];

const UniversalPage = () => {
  return (
    <div className="p-4 w-full flex flex-col gap-4">
      <div className="flex lg:flex-row flex-col w-full gap-4">
        <div className="w-full lg:flex-[60%] flex md:flex-row flex-col gap-4">
          <div className="md:flex-[47%] flex flex-col gap-2">
            <p className="text-base text-primary font-medium">Start Date</p>
            <div className="w-full"><Input type="date" /></div>
          </div>
          <div className="md:flex-[6%] md:flex hidden justify-center items-end py-2">To</div>
          <div className="md:flex-[47%] flex flex-col gap-2">
            <p className="text-base text-primary font-medium">End Date</p>
            <div className="w-full"><Input type="date" /></div>
          </div>
        </div>
        <div className="lg:flex-[40%] flex flex-row gap-4 items-end">
          <Button variant="secondary" className="text-sm font-medium bg-[#AAAAAA33]">Search</Button>
          <Button variant="secondary" className="text-sm font-medium bg-[#AAAAAA33] flex flex-row gap-2">
            <CSV /> <div>CSV</div>
          </Button>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {
          textCardData.map((item, index) =>
            <DashTextCard
              key={index}
              cardTitle={item.cardTitle}
              cardIcon={item.cardIcon}
              cardValue={item.cardValue}
              cardPercent={item.cardPercent}
              cardValueType={item.cardValueType}
            />
          )
        }
      </div>
      <div className="rounded-xl border border-[#AAAAAA33] bg-background text-muted-1 flex flex-col gap-4">
        <div className="font-medium text-xl leading-none text-primary p-4 border-b border-[#AAAAAA33]">Projected Revenue per Day</div>
        <DashBarCharts data={chartData} />
      </div>
    </div>
  )
}

export default UniversalPage