import { NextRequest, NextResponse, userAgent } from 'next/server';
import jwt_decode from 'jwt-decode';

export default function middleware(req) {
  let res = NextResponse.next();
  let verify = req.cookies.get('accessToken');
  let url = req.nextUrl.pathname;
  let decoded;

  if (!verify && url.includes('/customer')) {
    return NextResponse.redirect('http://localhost:3000/login');
  }

  if (verify && url.includes('/login')) {
    decoded = jwt_decode(verify.value);
    if (decoded.exp < Date.now() / 1000) {
      res.cookies.delete('accessToken');
    }

    return NextResponse.redirect('http://localhost:3000/customer/active');
  }

  return res;
}
