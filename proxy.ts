import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// 1. Initialize NextAuth and extract the raw auth execution function
const { auth } = NextAuth(authConfig);

// 2. Instead of standard NextRequest mapping, export auth directly as your default handler
export default auth;

// 3. Keep your matcher block exactly as it is
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};