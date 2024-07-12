import type { TextCardDataProps } from "@/components/DashTextCard";
import Dollar from "./icons/Dollar";
import DashTextCard from "@/components/DashTextCard";
import type { BarChartDataProps } from "@/components/DashBarCharts";
import DashBarCharts from "@/components/DashBarCharts";
import type { DashRecentSalesItemType } from "@/components/DashRecentSalesItem";
import DashRecentSalesItem from "@/components/DashRecentSalesItem";
import { Tabs, TabsList, TabsTrigger } from "@hanzo/ui/primitives";

const textCardData: TextCardDataProps[] = [
  {
    cardTitle: "Total Revenue",
    cardIcon: <Dollar />,
    cardMainText: "$45,231.89",
    cardSubText: "+20.1% from last month"
  },
  {
    cardTitle: "Total Revenue",
    cardIcon: <Dollar />,
    cardMainText: "$45,231.89",
    cardSubText: "+20.1% from last month"
  },
  {
    cardTitle: "Total Revenue",
    cardIcon: <Dollar />,
    cardMainText: "$45,231.89",
    cardSubText: "+20.1% from last month"
  },
  {
    cardTitle: "Total Revenue",
    cardIcon: <Dollar />,
    cardMainText: "$45,231.89",
    cardSubText: "+20.1% from last month"
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
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter">Dashboard</h2>
      </div>
      <div className="space-y-4">
        <Tabs defaultValue="Overview">
          <TabsList className="inline-flex h-9 items-center justify-center rounded-sm p-1 text-muted-1 bg-muted-4">
            <TabsTrigger value="Overview">Overview</TabsTrigger>
            <TabsTrigger value="Analytics">Analytics</TabsTrigger>
            <TabsTrigger value="Reports">Reports</TabsTrigger>
            <TabsTrigger value="Notifications">Notifications</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {
              textCardData.map((item, index) =>
                <DashTextCard
                  key={index}
                  cardTitle={item.cardTitle}
                  cardIcon={item.cardIcon}
                  cardMainText={item.cardMainText}
                  cardSubText={item.cardSubText}
                />
              )
            }
          </div>
          <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-7">
            <div className="rounded-xl border bg-background text-muted-1 shadow col-span-4">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="font-semibold leading-none text-primary">Overview</h3>
              </div>
              <div className="p-6 pt-0 pl-2 text-muted-1">
                <DashBarCharts data={chartData} />
              </div>
            </div>
            <div className="rounded-xl border bg-background text-primary shadow col-span-3">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="font-semibold leading-none tracking-tighter">Recent Sales</h3>
                <p className="text-sm text-muted-1">You made 265 sales this month.</p>
              </div>
              <div className="p-6 pt-0">
                <div className="space-y-8">
                  {
                    salesData.map((item, index) =>
                      <DashRecentSalesItem
                        key={index}
                        name={item.name}
                        email={item.email}
                        balance={item.balance}
                        avatar={item.avatar}
                      />
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UniversalPage