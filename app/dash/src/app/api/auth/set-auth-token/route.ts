import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

// Create a 1x1 transparent GIF
const transparentGIF = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64')

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token')

  // Return the GIF as the response
  const response = new NextResponse(transparentGIF)
  response.headers.set('Content-Type', 'image/gif')
  response.headers.set('Content-Length', transparentGIF.length.toString())
  response.headers.set('Cache-Control', 'no-store, max-age=0')

  // Add the auth token to the response cookies
  if (!!token) {
    cookies().set({
      name: 'auth-token',
      value: token,
      httpOnly: false,
      path: '/',
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
    })
  }

  return response
}
