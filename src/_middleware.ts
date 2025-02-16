import axios from 'axios'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { URL_BASE } from './config/services/endpoints'

export async function middleware(request: NextRequest) {
    try {
        const token = request.cookies.get('auth_cookie')
        const role = request.cookies.get('role')
        const url = request.nextUrl.clone()

        if (!token && url.pathname !== '/login') {
            return NextResponse.redirect(new URL('/login', request.url))
        }

        const response = NextResponse.next();

        if (token) {
            const resp = await axios.get(`${URL_BASE}auth/verify`, {
                headers: {
                    Authorization: `Bearer ${token.value}`
                }
            })

            const data = await resp.data

            if (!data.token) {
                return NextResponse.redirect(new URL('/login', request.url))
            } else {

                response.cookies.set('auth_cookie', data.token, {
                    httpOnly: false,
                    secure: false,
                    // path: '/',
                    maxAge: 60 * 60 * 2
                })
            }

            if (role && role.value === 'seller') {
                if (url.pathname === '/' || url.pathname === '/login') {
                    return NextResponse.redirect(new URL('/home', request.url))
                } else if (!url.pathname.startsWith('/home')) {
                    return NextResponse.redirect(new URL('/home', request.url))
                }
            } else if (role && role.value === 'buyer') {
                if (url.pathname === '/' || url.pathname === '/login') {
                    return NextResponse.redirect(new URL('/duenos-mascotas', request.url))
                } else if (!url.pathname.startsWith('/duenos-mascotas')) {
                    return NextResponse.redirect(new URL('/duenos-mascotas', request.url))
                }
            }
        }

        return response;
    } catch (error) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: ['/home', '/duenos-mascotas']
}