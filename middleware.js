import { NextRequest, NextResponse, userAgent } from 'next/server';
import jwt_decode from 'jwt-decode';

export default function middleware(req) {
  let res = NextResponse.next();
  let verify = req.cookies.get('refreshToken');
  let url = req.nextUrl.pathname;
  let decoded;

  if (!verify && url.includes('/customer')) {
    return NextResponse.redirect('http://https://linnric.com/login');
  }

  if (verify && url.includes('/login')) {
    decoded = jwt_decode(verify.value);
    if (decoded.exp < Date.now() / 1000) {
      res.cookies.delete('refreshToken');
    }

    return NextResponse.redirect('http://https://linnric.com/customer/active');
  }

  return res;
}
