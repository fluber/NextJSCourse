import { NextResponse } from 'next/server';

export function middleware(request) {
  // This is a placeholder for middleware logic
  console.log(request);
  
  // You can modify the request or response here if needed
  return NextResponse.next();
}

export const config = {
  matcher: '/news', // Apply this middleware to all routes
};