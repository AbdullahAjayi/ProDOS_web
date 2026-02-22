"use client";

import { motion, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.12,
            duration: 0.7,
            ease: EASE,
        },
    }),
};

export default function HeroSection() {
    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20"
            style={{ zIndex: 10 }}
        >
            {/* ProDOS Logomark */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
                className="mb-6 flex flex-col items-center gap-3"
            >
                {/* Geometric hex logo */}
                <div className="relative">
                    {/* Glow halo */}
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(99,102,241,0.55) 0%, rgba(124,58,237,0.25) 50%, transparent 75%)",
                            filter: "blur(14px)",
                            transform: "scale(1.6)",
                        }}
                    />
                    {/* Hex shape */}
                    <svg
                        width="52"
                        height="52"
                        viewBox="0 0 52 52"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative"
                    >
                        <defs>
                            <linearGradient id="hexGrad" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#818cf8" />
                                <stop offset="60%" stopColor="#6366f1" />
                                <stop offset="100%" stopColor="#7c3aed" />
                            </linearGradient>
                            <linearGradient id="hexBorder" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="rgba(165,180,252,0.7)" />
                                <stop offset="100%" stopColor="rgba(124,58,237,0.2)" />
                            </linearGradient>
                        </defs>
                        {/* Filled hex */}
                        <polygon
                            points="26,3 48,14.5 48,37.5 26,49 4,37.5 4,14.5"
                            fill="url(#hexGrad)"
                            fillOpacity="0.15"
                            stroke="url(#hexBorder)"
                            strokeWidth="1"
                        />
                        {/* Inner smaller hex */}
                        <polygon
                            points="26,12 40,20 40,32 26,40 12,32 12,20"
                            fill="url(#hexGrad)"
                            fillOpacity="0.25"
                            stroke="rgba(165,180,252,0.3)"
                            strokeWidth="0.5"
                        />
                        {/* Center dot */}
                        <circle cx="26" cy="26" r="4" fill="url(#hexGrad)" fillOpacity="0.9" />
                        {/* Corner accent lines */}
                        <line x1="26" y1="22" x2="26" y2="14" stroke="rgba(165,180,252,0.5)" strokeWidth="0.75" />
                        <line x1="26" y1="30" x2="26" y2="38" stroke="rgba(165,180,252,0.5)" strokeWidth="0.75" />
                    </svg>
                </div>
                {/* ProDOS wordmark */}
                <div className="flex flex-col items-center gap-0.5">
                    <span
                        className="text-sm font-bold tracking-[0.2em] uppercase"
                        style={{
                            background: "linear-gradient(135deg, #a5b4fc 0%, #818cf8 50%, #a78bfa 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            fontFamily: "var(--font-heading)",
                            letterSpacing: "0.22em",
                        }}
                    >
                        ProDOS
                    </span>
                    <span
                        className="text-[10px] tracking-widest text-white/30 uppercase"
                        style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.15em" }}
                    >
                        ProDoctivity OS
                    </span>
                </div>
            </motion.div>

            {/* Top badge */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="mb-8"
            >
                <span
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
                    style={{
                        background: "rgba(124, 58, 237, 0.12)",
                        border: "1px solid rgba(124, 58, 237, 0.35)",
                        color: "#a78bfa",
                        fontFamily: "var(--font-mono)",
                    }}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                    System v1.0 — Now Live
                </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="section-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 max-w-5xl leading-[1.05]"
            >
                Ambition Requires
                <br />
                <span
                    style={{
                        background:
                            "linear-gradient(135deg, #a78bfa 0%, #818cf8 50%, #6366f1 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
                >
                    Structure.
                </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="text-lg md:text-xl text-white/50 max-w-2xl mb-12 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
            >
                The Behavioural Operating System designed to bridge the gap between{" "}
                <span className="text-white/75">student intent</span> and{" "}
                <span className="text-white/75">consistent execution.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={4}
                className="flex flex-col sm:flex-row gap-4 items-center"
            >
                <a
                    href="https://t.me/ProDDOS_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-btn relative px-8 py-4 rounded-xl font-semibold text-white text-sm tracking-wide"
                    style={{
                        background:
                            "linear-gradient(135deg, #7c3aed 0%, #4338ca 100%)",
                        fontFamily: "var(--font-heading)",
                        letterSpacing: "0.02em",
                        display: "inline-block",
                    }}
                >
                    <span className="relative z-10">Get Early Access →</span>
                </a>

                <a
                    href="https://wa.me/2348151326097"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-xl font-medium text-white/60 text-sm tracking-wide hover:text-white/90 transition-colors duration-300 flex items-center gap-2"
                    style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        fontFamily: "var(--font-heading)",
                    }}
                >
                    <span>Open WhatsApp</span>
                    <span style={{ color: "#25D366" }}>↗</span>
                </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-white/25 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                    Scroll
                </span>
                <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
            </motion.div>
        </section>
    );
}
