'use client';
import { createClient } from '@/lib/supabase/client';

export default function LoginPage() {
  const supabase = createClient();

  async function handleSignInWithGoogle(response: unknown) {
    const { credential } = response as { credential: string };
    await supabase.auth.signInWithIdToken({
      provider: 'google',
      token: credential,
    });
  }

  return (
    <div>
      <div
        id="g_id_onload"
        data-client_id="your-google-client-id"
        data-callback="handleSignInWithGoogle"
        data-use_fedcm_for_prompt="true"
      ></div>
      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="pill"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
      ></div>
    </div>
  );
}