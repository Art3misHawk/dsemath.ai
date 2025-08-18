"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

function TopBar (){
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
        <header style={{
            width: "100%",
            height: "60px",
            backgroundColor: "#22223b",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            padding: "0 24px",
            boxSizing: "border-box",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
        }}>
            <h1 style={{ margin: 0, fontSize: "1.5rem", letterSpacing: "1px" }}>
                <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>
                    dsemath.ai
                </Link>
            </h1>
            <nav style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
                <Link href="/ai-generator" style={{ color: "#fff", textDecoration: "none", marginLeft: "24px" }}>
                    AI Generator
                </Link>
                <Link href="/question-bank" style={{ color: "#fff", textDecoration: "none", marginLeft: "24px" }}>
                    Question Bank
                </Link>
                <Link href="/leaderboard" style={{ color: "#fff", textDecoration: "none", marginLeft: "24px" }}>
                    Leaderboard
                </Link>
                <Link href="/dashboard" style={{ color: "#fff", textDecoration: "none", marginLeft: "24px" }}>
                    Dashboard
                </Link>
                Me
                <div>
                    <div>
                        Login
                    </div>
                    <div>
                        <Link href="/setting">Setting</Link>
                        <div onClick={handleLogout}>Logout</div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default TopBar;