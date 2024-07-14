import React from 'react'

import BaseChart from './mini-chart'

const Wrapper: React.FC<{
  symbol: string,
  exchange?: string
}> = ({
  symbol,
  exchange
}) => (
  <BaseChart widgetProps ={{
    symbol,
    exchange,
    autosize: true,
    colorTheme: 'dark',
    lineColor: "rgb(114, 27, 228)",
    bottomGradientColor: "rgba(255, 255, 255, 0.1)",
    dateRange: '60M',
  }}/>   
)

export default Wrapper
