"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Footer() {
    return (
        <footer className="relative py-16 px-6" style={{ zIndex: 10 }}>
            {/* Top gradient border */}
            <div
                className="w-full h-px mb-16"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), rgba(255,255,255,0.15), rgba(124,58,237,0.4), transparent)",
                }}
            />

            {/* CTA section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
                viewport={{ once: true, margin: "-80px" }}
                className="max-w-4xl mx-auto text-center mb-20"
            >
                <h2
                    className="section-heading text-4xl md:text-6xl font-bold text-white mb-6"
                    style={{ letterSpacing: "-0.03em" }}
                >
                    Ready to use
                    <br />
                    <span
                        style={{
                            background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 60%, #6366f1 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        the system?
                    </span>
                </h2>
                <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                    Join 100+ students already running ProDOS. No app required — just WhatsApp and the will to be consistent.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="https://t.me/ProDDOS_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cosmic-btn px-10 py-4 rounded-xl font-semibold text-white text-sm"
                        style={{
                            background: "linear-gradient(135deg, #7c3aed 0%, #4338ca 100%)",
                            fontFamily: "var(--font-heading)",
                            letterSpacing: "0.02em",
                            display: "inline-block",
                        }}
                    >
                        Get Early Access →
                    </a>
                    <a
                        href="https://wa.me/2348151326097"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 rounded-xl font-medium text-white/60 text-sm hover:text-white/90 transition-colors flex items-center gap-2 justify-center"
                        style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            fontFamily: "var(--font-heading)",
                        }}
                    >
                        <span>Open WhatsApp</span>
                        <span className="text-green-400">↗</span>
                    </a>
                </div>
            </motion.div>

            {/* Footer bar */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                    <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
                        style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.35)" }}
                    >
                        🖥️
                    </div>
                    <span
                        className="text-white font-semibold text-sm"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        ProDOS
                    </span>
                    <span
                        className="text-xs text-white/25"
                        style={{ fontFamily: "var(--font-mono)" }}
                    >
                        v1.0.0
                    </span>
                </div>

                <p
                    className="text-xs text-white/25"
                    style={{ fontFamily: "var(--font-mono)" }}
                >
                    © 2024 ProDOS. Built with intent. For consistent humans.
                </p>

                <div className="flex items-center gap-1">
                    <span
                        className="text-xs px-2 py-0.5 rounded"
                        style={{
                            background: "rgba(16,185,129,0.1)",
                            border: "1px solid rgba(16,185,129,0.25)",
                            color: "#10b981",
                            fontFamily: "var(--font-mono)",
                        }}
                    >
                        ● system operational
                    </span>
                </div>
            </div>
        </footer>
    );
}
