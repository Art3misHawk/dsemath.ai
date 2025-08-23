"use client";

import { useAuth } from '@/contexts/AuthContext';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
    const { user, profile, loading, signOut } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (!user || !profile) {
        return null; // Will redirect to login
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-2xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Welcome, {profile.full_name || profile.email}!</h1>
                <div className="bg-white rounded-lg shadow p-6 space-y-4">
                    <div><strong>Email:</strong> {profile.email}</div>
                    <div><strong>Subscription:</strong> {profile.subscription_status || 'Free'}</div>
                    <div><strong>Questions Solved:</strong> {profile.total_questions_solved || 0}</div>
                    <div><strong>Current Streak:</strong> {profile.current_streak || 0} days</div>
                </div>
            </div>
        </div>
    );
}