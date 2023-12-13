import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({ publicRoutes: ['/', '/api/webhook/clerk'], ignoredRoutes: ['/api/webhook/clerk'], });

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
 
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  url.pathname = '/dest'
  return NextResponse.rewrite(url)
}
