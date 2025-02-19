import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import HttpService from './config/services/httpsService';

export async function middleware(req: NextRequest) {
    const loginUrl = new URL('/auth/login', req.url);
    const token = req.cookies.get('auth_cookie')?.value || '';

    try {
        if (!token || !(await isValidToken(token))) {
            return NextResponse.redirect(loginUrl);
        }
        return NextResponse.next();
    } catch (error) {
        console.error('Error in middleware:', error);
        return NextResponse.redirect(loginUrl);
    }
}

async function isValidToken(token: string): Promise<boolean> {
    try {
        const response = await HttpService.post(
            'auth/verify-token',
            { token },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return response.data?.isValid || false;
    } catch (error) {
        console.error('Error verifying token:', error);
        return false;
    }
}

export const config = {
    matcher: ['/((?!^$|auth|login|_next/static|favicon.ico).*)'],
};