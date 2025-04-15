
import { redirectIfToken, redirectIfNotToken } from "./services/middleware/userAuthMiddleware";

export function middleware(request) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith('/user')) {
        return redirectIfNotToken(request);
    }
    if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
        return redirectIfToken(request);
    }

    return NextResponse.next();
}

// only run on these paths
export const config = {
    matcher: ['/user/:path*', '/login', '/register'],
};
