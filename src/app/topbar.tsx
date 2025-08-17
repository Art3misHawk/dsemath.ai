import React from "react";
import Link from "next/link";

const TopBar: React.FC = () => (
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
                DSEmath.ai
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
                    Logout
                </div>
            </div>
        </nav>
    </header>
);

export default TopBar;