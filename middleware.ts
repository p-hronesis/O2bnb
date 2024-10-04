import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const protectedRoutes = ["/trips", "/reservations", "/properties", "/favorites"];

  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!process.env.NEXTAUTH_COOKIE_AUTH_NAME) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    const token = request.cookies.get(process.env.NEXTAUTH_COOKIE_AUTH_NAME);

    if (!token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

// Apply middleware to all routes

export const config = {
  matcher: ["/:path*"],
};
