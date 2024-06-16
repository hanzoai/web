import { NextRequest, NextResponse, userAgent } from 'next/server'
import { getSelectorsByUserAgent } from 'react-device-detect'

  // writed this way so they can be chained :)
const determineDeviceMW = async (request: NextRequest) => {

  const ua = userAgent(request)
  const { isMobileOnly, isTablet, isDesktop } = getSelectorsByUserAgent(ua.ua)
  const agent = isMobileOnly ? 'phone' : (isTablet ? 'tablet' : (isDesktop ?  'desktop' : 'unknown'))
  const { nextUrl: url } = request
  //console.log(`\n=== from ${url.href} on a *${agent && agent.toUpperCase()}* device. ===\n`)
  url.searchParams.set('agent', agent)
  return NextResponse.rewrite(url)
}

export default determineDeviceMW
