import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const env = process.env.NODE_ENV
export default async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const pathname = req.nextUrl.pathname
  // Skip this middleware in development or if the path is international
  if (env !== 'development' && pathname !== '/international') {
    const country = req.geo?.country || req.headers.get('x-vercel-ip-country')
    // Here you can add the list of countries you want to allow, I have added IN and US for now
    if (!['IN', 'US'].includes(country ?? '')) {
      // Redirect to the international page if the country is not IN or US
      return NextResponse.redirect(new URL('/restricted', req.url))
    }
  }
  return res
}