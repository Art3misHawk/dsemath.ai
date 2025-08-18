import { createBrowserClient } from '@supabase/ssr';
import 'client-only';

export function createClient(): ReturnType<typeof createBrowserClient> {
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL as string,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
    );
}