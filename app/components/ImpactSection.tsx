"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stats = [
    {
        value: "100+",
        label: "Active Users",
        sub: "beta cohort",
        accent: "#7c3aed",
    },
    {
        value: "12",
        label: "Avg. Streak (days)",
        sub: "median retention",
        accent: "#0ea5e9",
    },
    {
        value: "94%",
        label: "Session Completion",
        sub: "vs. 23% industry avg.",
        accent: "#10b981",
    },
];

const sdgPoints = [
    {
        tag: "SDG 4.1",
        text: "Ensuring inclusive and equitable quality education.",
    },
    {
        tag: "SDG 4.4",
        text: "Increasing youth with relevant skills for employment.",
    },
    {
        tag: "SDG 4.7",
        text: "Promoting sustainable development through behavioural systems.",
    },
];

export default function ImpactSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section className="relative py-28 px-6" style={{ zIndex: 10 }} ref={ref}>
            <div className="max-w-6xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="text-center mb-16"
                >
                    <span
                        className="text-xs tracking-widest uppercase text-violet-400 mb-4 block"
                        style={{ fontFamily: "var(--font-mono)" }}
                    >
                        04 — Impact & Validation
                    </span>
                    <h2
                        className="section-heading text-4xl md:text-5xl font-bold text-white"
                        style={{ letterSpacing: "-0.03em" }}
                    >
                        Built for Scale.
                        <br />
                        <span
                            style={{
                                background: "linear-gradient(135deg, #a78bfa, #818cf8)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Aligned with Purpose.
                        </span>
                    </h2>
                </motion.div>

                {/* Stats row */}
                <div className="grid md:grid-cols-3 gap-5 mb-16">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                delay: i * 0.12,
                                duration: 0.7,
                                ease: EASE,
                            }}
                            className="gradient-border rounded-2xl p-8 text-center"
                            style={{
                                background: "rgba(255,255,255,0.025)",
                                backdropFilter: "blur(16px)",
                            }}
                        >
                            <p
                                className="terminal-text text-5xl md:text-6xl font-bold mb-2"
                                style={{ color: stat.accent }}
                            >
                                {stat.value}
                            </p>
                            <p
                                className="text-white font-semibold text-base mb-1"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                {stat.label}
                            </p>
                            <p
                                className="text-xs"
                                style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-mono)" }}
                            >
                                {stat.sub}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* SDG Alignment */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
                    className="gradient-border rounded-2xl p-8"
                    style={{
                        background: "rgba(255,255,255,0.02)",
                        backdropFilter: "blur(16px)",
                    }}
                >
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Left: SDG badge */}
                        <div className="flex flex-col gap-4 md:w-1/3">
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                                    style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)" }}
                                >
                                    🎓
                                </div>
                                <div>
                                    <p
                                        className="text-xs tracking-widest uppercase"
                                        style={{ color: "#a78bfa", fontFamily: "var(--font-mono)" }}
                                    >
                                        UN Alignment
                                    </p>
                                    <p
                                        className="text-white font-bold text-lg"
                                        style={{ fontFamily: "var(--font-heading)" }}
                                    >
                                        SDG 4
                                    </p>
                                </div>
                            </div>
                            <p className="text-white/40 text-sm leading-relaxed">
                                Quality Education — ProDOS directly targets the structural deficits in self-directed learning systems at scale.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px self-stretch" style={{ background: "rgba(255,255,255,0.08)" }} />

                        {/* Right: SDG points */}
                        <div className="flex flex-col gap-4 md:flex-1">
                            {sdgPoints.map((pt, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <span
                                        className="flex-shrink-0 px-2.5 py-1 rounded-lg text-xs font-semibold"
                                        style={{
                                            background: "rgba(124,58,237,0.12)",
                                            border: "1px solid rgba(124,58,237,0.3)",
                                            color: "#a78bfa",
                                            fontFamily: "var(--font-mono)",
                                        }}
                                    >
                                        {pt.tag}
                                    </span>
                                    <p className="text-white/55 text-sm leading-relaxed">{pt.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
