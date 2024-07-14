import { NextRequest, NextResponse } from 'next/server'

import { generateCustomToken } from '@hanzo/auth/server'

export async function POST(request: NextRequest) {
  const token = await generateCustomToken()
  return NextResponse.json({ success: true, token })
}
