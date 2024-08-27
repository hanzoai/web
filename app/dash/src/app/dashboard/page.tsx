'use client'

import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import moment from 'moment-timezone';

import type { TextCardDataProps } from "@/components/dash-text-card";
import type { DashRecentSalesItemType } from "@/components/dash-recent-sales-item";
import type { BarChartDataProps } from "@/components/dash-bar-charts";

import DashTextCard from "@/components/dash-text-card";
import { Basket, Credit, CSV, Receipt } from "@/components/icons"
import { SalesChart, TimeSelect } from '@/components/dash/charts'

import { Input, Button } from "@hanzo/ui/primitives";

import { useStore } from "@/stores";

const Dashboard = observer(() => {
  const { dashboardStore, credentialStore } = useStore();
  const [period, setPeriod] = useState()
  const [triggerRerender, setTriggerRerender] = useState(false)

  useEffect(() => {
    dashboardStore.getWeeklySalesPoints()
    dashboardStore.getWeeklyRevenuePoints()

    dashboardStore.getWeeklySales()
    dashboardStore.getWeeklyRevenue()
    dashboardStore.getWeeklyUsers()

    dashboardStore.getProducts()

    dashboardStore.getProjectedRevenue()
    dashboardStore.getDeposits()
    dashboardStore.getRefunds()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('isLoading: ', dashboardStore.isLoading)
      if (!dashboardStore.isLoading) { 
        clearInterval(interval)
        setTriggerRerender(!triggerRerender)  
      }
    }, 500)
  }, [period])

  return (
    <div className="p-2 md:p-4 w-full flex flex-col gap-4">
      <div className="flex md:hidden flex-row justify-between items-center">
        <p className="text-2xl font-medium">Karma</p>
        <Button variant="secondary" className="text-sm font-medium bg-level-1 flex flex-row gap-2">
          <CSV /> <div>CSV</div>
        </Button>
      </div>
      <div className="flex lg:flex-row flex-col w-full gap-4">
        <div className="w-full lg:flex-[60%] flex md:flex-row flex-col gap-4">
          {/* <div className="md:flex-[47%] flex flex-col gap-2">
            <p className="text-sm text-primary font-medium">Start Date</p>
            <div className="w-full"><Input type="date" /></div>
          </div>
          <div className="md:flex-[6%] md:flex hidden justify-center items-end py-2">To</div>
          <div className="md:flex-[47%] flex flex-col gap-2">
            <p className="text-sm text-primary font-medium">End Date</p>
            <div className="w-full"><Input type="date" /></div>
          </div> */}
          <TimeSelect
            inputLabel='Change Timeframe'
            value={dashboardStore.projectedRevenueSelect}
            period={period}
            setPeriod={setPeriod}
          />
        </div>
        <div className="lg:flex-[40%] flex flex-row gap-4 items-end w-full">
          <Button variant="secondary" className="text-sm font-medium bg-level-1 w-full">Search</Button>
          <Button variant="secondary" className="text-sm font-medium bg-level-1 hidden md:flex flex-row gap-2 w-full">
            <CSV /> <div>CSV</div>
          </Button>
        </div>
      </div>
      <div className="grid gap-2 md:gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        <DashTextCard
          cardTitle={'Projected Revenue'}
          cardIcon={<Credit />}
          cardValue={dashboardStore.projectedRevenue}
          cardCompareValue={dashboardStore.projectedRevenue}
          cardPreviousValue={dashboardStore.lastProjectedRevenue}
          cardValueType={'cash'}
        />
        <DashTextCard
          cardTitle={'Active Preorders'}
          cardIcon={<Basket />}
          cardValue={dashboardStore.weeklySales - dashboardStore.weeklyRefunded}
          cardCompareValue={dashboardStore.weeklySales - dashboardStore.weeklyRefunded}
          cardPreviousValue={dashboardStore.lastWeeklySales - dashboardStore.lastWeeklyRefunded}
          cardValueType={'number'}
        />
        <DashTextCard
          cardTitle={'Deposits'}
          cardIcon={<Basket />}
          cardValue={dashboardStore.deposits}
          cardCompareValue={dashboardStore.deposits}
          cardPreviousValue={dashboardStore.lastDeposits}
          cardValueType={'cash'}
        />
        <DashTextCard
          cardTitle={'Deposits Processed'}
          cardIcon={<Credit />}
          cardValue={dashboardStore.weeklySales}
          cardCompareValue={dashboardStore.weeklySales}
          cardPreviousValue={dashboardStore.lastWeeklySales}
          cardValueType={'number'}
        />
        <DashTextCard
          cardTitle={'Refunds'}
          cardIcon={<Receipt />}
          cardValue={dashboardStore.refunds}
          cardCompareValue={dashboardStore.refunds}
          cardPreviousValue={dashboardStore.lastRefunds}
          cardValueType={'cash'}
        />
        <DashTextCard
          cardTitle={'Refunds Processed'}
          cardIcon={<Receipt />}
          cardValue={dashboardStore.weeklyRefunded}
          cardCompareValue={dashboardStore.weeklyRefunded}
          cardPreviousValue={dashboardStore.lastWeeklyRefunded}
          cardValueType={'number'}
        />
      </div>
      <div className="rounded-xl bg-background text-muted-1 flex flex-col gap-4">
        {/* <div className="font-medium text-xl leading-none text-primary p-4 border-b border-level-1">Projected Revenue per Day</div> */}
        <SalesChart />
      </div>
    </div>
  )
})

export default Dashboard