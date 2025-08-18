import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: NextRequest): Promise<NextResponse> {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  // Log logout result
  console.log('Logout Result:', { error });

  const origin = new URL(request.url).origin;
  const redirectUrl = `${origin}/login`;

  if (error) {
    console.error('Logout Error:', error.message);
    return NextResponse.json({ error: 'Logout failed' }, { status: 500 });
  }

  console.log('Redirecting to:', redirectUrl);
  return NextResponse.redirect(redirectUrl);
}