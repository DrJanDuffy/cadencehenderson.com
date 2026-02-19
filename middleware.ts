import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const CANONICAL_HOST = 'www.cadencehenderson.com'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? ''
  const proto = request.headers.get('x-forwarded-proto') ?? 'https'

  // Only apply redirects for production domain (avoid breaking localhost / previews)
  const isProductionDomain =
    host === 'cadencehenderson.com' || host === CANONICAL_HOST

  if (!isProductionDomain) {
    return NextResponse.next()
  }

  // 1. Force HTTPS (http -> https)
  if (proto !== 'https') {
    const target = new URL(
      request.nextUrl.pathname + request.nextUrl.search,
      `https://${host}`,
    )
    return NextResponse.redirect(target, 301)
  }

  // 2. Force www (apex -> www)
  if (host === 'cadencehenderson.com') {
    const target = new URL(
      request.nextUrl.pathname + request.nextUrl.search,
      `https://${CANONICAL_HOST}`,
    )
    return NextResponse.redirect(target, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static files and API routes.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}
