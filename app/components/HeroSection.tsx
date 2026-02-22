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
            {/* Top badge */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
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
                custom={1}
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
                custom={2}
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
                custom={3}
                className="flex flex-col sm:flex-row gap-4 items-center"
            >
                <button
                    className="cosmic-btn relative px-8 py-4 rounded-xl font-semibold text-white text-sm tracking-wide"
                    style={{
                        background:
                            "linear-gradient(135deg, #7c3aed 0%, #4338ca 100%)",
                        fontFamily: "var(--font-heading)",
                        letterSpacing: "0.02em",
                    }}
                >
                    <span className="relative z-10">Get Early Access →</span>
                </button>

                <button
                    className="px-8 py-4 rounded-xl font-medium text-white/60 text-sm tracking-wide hover:text-white/90 transition-colors duration-300"
                    style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        fontFamily: "var(--font-heading)",
                    }}
                >
                    Watch Demo
                </button>
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
