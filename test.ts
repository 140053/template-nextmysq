import { NextResponse } from 'next/server';
import { getSession } from 'next-auth/react';
import type { NextRequest } from 'next/server';
import type { IncomingHttpHeaders } from 'http';

// Explicitly define a compatible type for headers
interface CustomIncomingMessage extends Partial<IncomingHttpHeaders> {
  body?: any;
}

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest & CustomIncomingMessage) {
  const session = await getSession({ req: request as any }); // Cast request to IncomingMessage

  // Check if the user is not authenticated
  if (!session) {
    // Redirect to the login page if the user is not logged in    
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }else{
    
  }

  // Continue with the original request
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/thesis/:path*',
};
