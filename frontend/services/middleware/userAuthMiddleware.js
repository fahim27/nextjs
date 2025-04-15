import { NextResponse } from 'next/server';

export function redirectIfNotToken(request) {
    const token = request.cookies.get('auth_token');
    if (!token) {
        // return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
}
export function redirectIfToken(request) {
    const token = request.cookies.get('auth_token');
    if (token) {
        // return NextResponse.redirect(new URL('/user/dashboard', request.url));
    }
    return NextResponse.next();
}
