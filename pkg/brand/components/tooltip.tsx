'use client'
import React from 'react'
import { Tooltip as RTTooltip, type PlacesType } from 'react-tooltip'

const Tooltip: React.FC<{
  select: string
  text: string
  position?: PlacesType // https://react-tooltip.com/docs/options
  clx?: string
  offset?: number
}> = ({
  select,
  text,
  clx='',
  position='bottom',
  offset=2
}) => (
  <RTTooltip 
    anchorSelect={select} 
    noArrow 
    opacity={1} 
    content={text} 
    place={position}
    offset={offset}
    delayShow={100}
    delayHide={100}
    className={'!opacity-100 !bg-level-2 border rounded-[3px] !px-1.5 !py-1 z-floating' + clx}
  />
)

export default Tooltip
