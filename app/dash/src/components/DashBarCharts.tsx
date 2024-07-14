"use client"

import type { FC } from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

export interface BarChartDataProps {
  key: string;
  value: number;
}

interface BarChartProps {
  data: BarChartDataProps[]
};

const DashBarCharts: FC<BarChartProps> = (props) => {
  const { data } = props;

  const formatYAxis = (tickItem: number) => `$${tickItem}`;

  return (
    <>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} width={500} height={350}>
          <XAxis dataKey="key" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} tickFormatter={formatYAxis} />
          {/* <Tooltip /> */}
          {/* <Legend /> */}
          <Bar dataKey="value" fill="#FFFFFF" radius={[8, 8, 0, 0]} isAnimationActive={false} />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default DashBarCharts;