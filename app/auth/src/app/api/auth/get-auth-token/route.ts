import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'

const domains = [
  'https://lux.market', 'https://lux.shop', 'https://lux.credit',
  'https://lux.network', 'https://wallet.lux.network', 'https://safe.lux.network',
  'https://lux.finance', 'https://lux.exchange', 'https://lux.quest',
  'https://lux.id'
]

export async function GET(request: NextRequest) {
  const token = cookies().get('auth-token')
  const reqToken = request.cookies.get('auth-token')?.value
  const origin = request.headers.get('origin') ?? ''

  return new Response(JSON.stringify({ token: token, reqToken: reqToken }), {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': domains.includes(origin) ? origin : '',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true', // Allow credentials
    },
  })
}

export async function OPTIONS(request: NextRequest) {
  const token = cookies().get('auth-token')
  const reqToken = request.cookies.get('auth-token')?.value
  const origin = request.headers.get('origin') ?? ''

  return new Response(JSON.stringify({ token: token, reqToken: reqToken }), {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': domains.includes(origin) ? origin : '',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true', // Allow credentials
    },
  })
}
