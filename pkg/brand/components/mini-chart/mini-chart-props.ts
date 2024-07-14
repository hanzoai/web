import type { CSSProperties } from 'react'

  // https://www.typescriptlang.org/docs/handbook/enums.html#enums-at-runtime
const enum MiniChartDateRangesValues {
    '1D',
    '1M',
    '3M',
    '12M',
    '60M',
    'ALL',
}

type MiniChartDateRanges = keyof typeof MiniChartDateRangesValues

interface MiniChartBaseProps {
  symbol: string  
  exchange?: string
	dateRange: MiniChartDateRanges
  noTimeScale?: boolean
	width?: number | string
	height?: number | string
	locale?: string
	colorTheme?: "light" | "dark"
  // @ts-ignore // TODO
	lineColor?: CSSProperties["color"]
  // @ts-ignore // TODO
	topGradientColor?: CSSProperties["color"]
  // @ts-ignore // TODO
	bottomGradientColor?: CSSProperties["color"]
	isTransparent?: boolean
	autosize?: boolean
	chartOnly?: boolean
	largeChartUrl?: string
}

type MiniChartProps = {
  widgetProps: MiniChartBaseProps
  containerStyles?: CSSProperties
}

export {
  type MiniChartProps,
  type MiniChartDateRanges
}