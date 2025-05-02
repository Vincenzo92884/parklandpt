import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Check if the request is using HTTP
  if (process.env.NODE_ENV === "production" && request.headers.get("x-forwarded-proto") !== "https") {
    // Create the HTTPS URL from the request URL
    const httpsUrl = `https://${request.headers.get("host")}${request.nextUrl.pathname}${request.nextUrl.search}`

    // Return a redirect response
    return NextResponse.redirect(httpsUrl, 301)
  }

  return NextResponse.next()
}

// Only run the middleware on the main domain requests
export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|gif|png|svg|ico)|public).*)",
  ],
}
