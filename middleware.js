import { NextRequest, NextResponse, userAgent } from 'next/server';
import jwt_decode from 'jwt-decode';

export default function middleware(req) {
  let res = NextResponse.next();
  let userVerify = req.cookies.get('userrefreshToken');
  let writerVerify = req.cookies.get('writerrefreshToken');
  let url = req.nextUrl.pathname;
  let decoded;
  // const writer = jwt_decode(verify?.value?.isWriter);

  if (!userVerify && url.includes('/customer')) {
    return NextResponse.redirect('http://localhost:3000/login');
  }

  if (userVerify && url.includes('/login')) {
    decoded = jwt_decode(userVerify.value);
    if (decoded.exp < Date.now() / 1000) {
      res.cookies.delete('userrefreshToken');
      res.cookies.delete('useraccessToken');
    }

    return NextResponse.redirect('http://localhost:3000/customer/active');
  }

  if (writerVerify && url.includes('/writerlogin')) {
    decoded = jwt_decode(writerVerify.value);
    if (decoded.exp < Date.now() / 1000) {
      res.cookies.delete('writerrefreshToken');
    }

    return NextResponse.redirect('http://localhost:3000/writer/availableorders');
  }

  if (url.includes('/writer') && !writerVerify) {
    return NextResponse.redirect('http://localhost:3000/login');
  }
}
