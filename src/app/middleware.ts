import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  const country = req.geo?.country || req.headers.get('x-vercel-ip-country');
//   const allowedCountries = ['IN', 'UK', 'CA']; // Replace with your allowed countries

  const unallowedCountries = ['RU', 'CN', 'US', 'TR']; // Add unallowed countries here

  if (unallowedCountries.includes(country ?? '')) {
    return NextResponse.redirect(new URL('/geo-restricted', req.url));
  }

  return NextResponse.next();
}

