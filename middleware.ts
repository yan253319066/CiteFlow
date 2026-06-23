import { NextResponse, type NextRequest } from 'next/server';
import { locales, defaultLocale } from './i18n/config';

function getLocale(request: NextRequest): string {
  const cookie = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookie && locales.includes(cookie as any)) return cookie;

  const acceptLang = request.headers.get('Accept-Language') ?? '';
  if (/^zh\b/.test(acceptLang)) return 'zh';

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const lastSegment = pathname.split('/').pop() || '';
  if ((lastSegment.includes('.') && !lastSegment.endsWith('.html')) || pathname.startsWith('/_next/') || pathname.startsWith('/api/')) {
    return;
  }

  const pathnameHasLocale = locales.some(
    (loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`
  );
  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  if (locale === defaultLocale) return;

  request.nextUrl.pathname = `/${locale}${pathname}`;
  const response = NextResponse.redirect(request.nextUrl);
  response.cookies.set('NEXT_LOCALE', locale, { maxAge: 60 * 60 * 24 * 365 });
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|api).*)'],
};
