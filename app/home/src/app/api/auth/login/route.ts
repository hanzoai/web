import { NextRequest } from 'next/server'

import { handleLoginApiRequest } from '@hanzo/auth/server'

export async function POST(request: NextRequest) {
  return handleLoginApiRequest(request)
}
