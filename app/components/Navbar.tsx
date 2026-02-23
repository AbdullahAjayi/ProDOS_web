"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-500"
            style={{
                background: scrolled
                    ? "rgba(2,2,2,0.85)"
                    : "transparent",
                backdropFilter: scrolled ? "blur(20px)" : "none",
                borderBottom: scrolled
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "1px solid transparent",
            }}
        >
            {/* Logo */}
            <div className="flex items-center gap-2.5">
                <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
                    style={{
                        background: "rgba(124,58,237,0.2)",
                        border: "1px solid rgba(124,58,237,0.4)",
                    }}
                >
                    🖥️
                </div>
                <span
                    className="text-white font-bold text-sm tracking-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    ProDOS
                </span>
                <span
                    className="text-xs text-white/30 hidden sm:block"
                    style={{ fontFamily: "var(--font-mono)" }}
                >
                    / ProDuctivity OS
                </span>
            </div>

            {/* Links */}
            <div className="hidden md:flex items-center gap-6">
                {["Problem", "Solution", "Interface", "Impact"].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-white/40 hover:text-white/80 transition-colors text-xs tracking-wider uppercase"
                        style={{ fontFamily: "var(--font-mono)" }}
                    >
                        {item}
                    </a>
                ))}
            </div>

            {/* CTA */}
            <a
                href="https://t.me/ProDOS_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg text-xs font-semibold text-white transition-all duration-300 hover:scale-105 inline-block"
                style={{
                    background: "rgba(124,58,237,0.2)",
                    border: "1px solid rgba(124,58,237,0.4)",
                    fontFamily: "var(--font-heading)",
                }}
            >
                Early Access
            </a>
        </motion.nav>
    );
}
