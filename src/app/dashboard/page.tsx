import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect('/login');
  }

    return (
        <main>
            <h1>Dashboard</h1>
            <p>Welcome to {data.user.email} dashboard!</p>
            {/* Add your dashboard components here */}
        </main>
    );
};