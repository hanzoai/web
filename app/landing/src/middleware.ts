import { NextRequest } from 'next/server'

import { determineDeviceMW } from '@hanzo/brand/next'


export const middleware = 
  async (request: NextRequest) => (determineDeviceMW(request))