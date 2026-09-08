import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const CANONICAL_ORIGIN = 'https://www.cadencehenderson.com'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? ''
  const proto = request.headers.get('x-forwarded-proto') ?? 'https'

  // Only apply redirects for production domain (avoid breaking localhost / previews)
  const isProductionDomain =
    host === 'cadencehenderson.com' || host === 'www.cadencehenderson.com'

  if (!isProductionDomain) {
    return NextResponse.next()
  }

  // One hop to https://www — avoid http→https-apex→www chains that GSC reports.
  if (proto !== 'https' || host === 'cadencehenderson.com') {
    const target = new URL(
      request.nextUrl.pathname + request.nextUrl.search,
      CANONICAL_ORIGIN,
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
