import { handleLogoutApiRequest } from '@hanzo/auth/server'

export async function GET() {
  return handleLogoutApiRequest()
}
