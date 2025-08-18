"use client";

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export function LogoutButton() {
    const router = useRouter();

    const handleLogout = useCallback(async () => {
        try {
        const response = await fetch('/api/auth/logout', {
            method: 'POST',
        });

        if (response.ok) {
            console.log('Logout successful, redirecting to /login');
            router.push('/login');
        } else {
            console.error('Logout failed:', await response.text());
        }
        } catch (error) {
            console.error('Logout error:', error);
        }
    }, [router]);

    return (
        <div onClick={handleLogout} style={{ cursor: 'pointer' }}>
            Logout
        </div>
    );
}