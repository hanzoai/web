'use client'

import React, { useEffect, useRef } from 'react'
import { type MiniChartProps } from './mini-chart-props'

const MiniChart: React.FC<MiniChartProps> = ({ 
  widgetProps,
  containerStyles = {} 
}) => {

  const {
    symbol,
    exchange,
    lineColor, 
    topGradientColor, 
    bottomGradientColor, 
    width, 
    height, 
    autosize,
    locale, 
    ...rest
  } = widgetProps

  const symbolString = (exchange) ? `${exchange}:${symbol}` : symbol

  const containerRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (!containerRef.current) {
      return
    }
		const script = document.createElement('script')
		script.type = 'text/javascript'
		script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
		script.async = true
		script.onload = async () => {
			const iframe = containerRef.current?.querySelector('iframe')
			if (iframe && iframe instanceof Element) {
        iframe.style.colorScheme = 'normal'
        setTimeout(() => {
          const value = document.querySelector('#mini-symbol-overview-ticker')
          console.log("TICKER: " + value)
        }, 1200) // from experimentation 
      

      }

      const copyDiv = document.querySelector('.tradingview-widget-copyright')
      if (copyDiv) {
        console.log("COPY: " + copyDiv)
        setTimeout(() => {
          copyDiv.classList.remove('invisible')
        }, 1200) // from experimentation 
      }
		}
		const config = JSON.stringify({
      symbol: symbolString,
			width: autosize ? '100%' : (width || 350),
			height: autosize ? '100%' : (height || 220),
      locale: locale ?? 'en',
      isTransparent: 'true',
			trendLineColor: lineColor || 'rgba(41, 98, 255, 1)',
			underLineColor: topGradientColor || 'rgba(41, 98, 255, 0.3)',
			underLineBottomColor: bottomGradientColor || 'rgba(41, 98, 255, 0)',
			...rest,
		})
		script.innerHTML = config
		containerRef.current.appendChild(script)
		return () => {
			while (containerRef.current?.firstChild) {
				containerRef.current.removeChild(containerRef.current.firstChild)
			}
		}
	}, [ JSON.stringify(widgetProps) ])

	return (<>
		<div style={containerStyles} className='tradingview-widget-container h-[150px]' ref={containerRef} />
    <div className='tradingview-widget-copyright border-t w-full invisible'>
      <a href={`https://www.tradingview.com/symbols/${symbol}${exchange ? `/?exchange=${exchange}` : '' }`} rel="noopener" target="_blank">
        <span className="text-[--hz-ui-primary]">{symbol} quotes</span></a>&nbsp;by TradingView
    </div>
  </>)
}

export default MiniChart
