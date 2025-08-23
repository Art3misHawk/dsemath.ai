import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
  subscription_status?: string;
  total_questions_solved?: number;
  current_streak?: number;
}

export async function getUserProfile(userId: string): Promise<UserProfile | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  if (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
  return data;
}

export async function createOrUpdateUserProfile(user: User): Promise<UserProfile | null> {
  const supabase = createClient();
  const profileData = {
    id: user.id,
    email: user.email!,
    full_name: user.user_metadata.full_name || user.user_metadata.name || null,
    avatar_url: user.user_metadata.avatar_url || user.user_metadata.picture || null,
    updated_at: new Date().toISOString(),
  };
  const { data, error } = await supabase
    .from('profiles')
    .upsert(profileData, { onConflict: 'id' })
    .select()
    .single();
  if (error) {
    console.error('Error creating/updating user profile:', error);
    return null;
  }
  return data;
}

export async function updateUserStats(userId: string, stats: Partial<UserProfile>) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('profiles')
    .update(stats)
    .eq('id', userId)
    .select()
    .single();
  if (error) {
    console.error('Error updating user stats:', error);
    return null;
  }
  return data;
}
