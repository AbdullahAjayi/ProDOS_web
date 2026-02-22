"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const features = [
    {
        number: "01",
        icon: "🔥",
        title: "Individual Consistency Systems",
        subtitle: "Streak Architecture",
        description:
            "ProDOS builds an invisible scaffolding around your daily habits. Behavioral triggers and streak mechanics create compounding momentum that outlasts motivation spikes.",
        details: ["Smart habit triggers", "Streak protection alerts", "Adaptive scheduling"],
        accent: "#7c3aed",
        glow: "rgba(124, 58, 237, 0.15)",
    },
    {
        number: "02",
        icon: "🌐",
        title: "Social Accountability Loops",
        subtitle: "Peer Dynamics",
        description:
            "Collaborative challenges broadcast your commitment to a community of peers. Public accountability creates a social contract that internal discipline cannot replicate.",
        details: ["Peer-led challenges", "Group streak leaderboards", "Accountability partners"],
        accent: "#0ea5e9",
        glow: "rgba(14, 165, 233, 0.15)",
    },
    {
        number: "03",
        icon: "📊",
        title: "Performance Analytics",
        subtitle: "Data-Driven Feedback",
        description:
            "Every session logged becomes a data point. ProDOS surfaces patterns invisible to the naked eye — your peak hours, completion frequencies, and consistency trajectories.",
        details: ["Weekly performance reports", "Behavioral pattern mapping", "Predictive consistency scores"],
        accent: "#10b981",
        glow: "rgba(16, 185, 129, 0.15)",
    },
];

const FeatureCard = ({
    feature,
    index,
}: {
    feature: (typeof features)[0];
    index: number;
}) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
                delay: index * 0.15,
                duration: 0.8,
                ease: EASE,
            }}
            className="gradient-border rounded-2xl p-8 flex flex-col gap-5 group hover:scale-[1.02] transition-transform duration-500 cursor-default"
            style={{
                background: `rgba(255,255,255,0.025)`,
                backdropFilter: "blur(20px)",
                boxShadow: `0 0 0 0 ${feature.accent}`,
                transition: "transform 0.5s ease, box-shadow 0.5s ease",
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${feature.glow}, 0 0 0 1px ${feature.accent}30`;
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0 transparent";
            }}
        >
            {/* Top row */}
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                        style={{ background: `${feature.accent}20`, border: `1px solid ${feature.accent}35` }}
                    >
                        {feature.icon}
                    </div>
                    <span
                        className="text-xs tracking-widest"
                        style={{ fontFamily: "var(--font-mono)", color: feature.accent }}
                    >
                        {feature.number}
                    </span>
                </div>
                <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: feature.accent, boxShadow: `0 0 8px ${feature.accent}` }}
                />
            </div>

            {/* Title */}
            <div>
                <p
                    className="text-xs uppercase tracking-widest mb-1"
                    style={{ color: `${feature.accent}cc`, fontFamily: "var(--font-mono)" }}
                >
                    {feature.subtitle}
                </p>
                <h3
                    className="section-heading text-xl font-bold text-white leading-snug"
                    style={{ letterSpacing: "-0.02em" }}
                >
                    {feature.title}
                </h3>
            </div>

            {/* Divider */}
            <div
                className="w-full h-px"
                style={{
                    background: `linear-gradient(90deg, ${feature.accent}40, transparent)`,
                }}
            />

            {/* Description */}
            <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>

            {/* Feature list */}
            <ul className="flex flex-col gap-2 mt-auto">
                {feature.details.map((d, i) => (
                    <li
                        key={i}
                        className="flex items-center gap-2 text-xs"
                        style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-mono)" }}
                    >
                        <span style={{ color: feature.accent }}>›</span>
                        {d}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default function SolutionSection() {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

    return (
        <section className="relative py-28 px-6" style={{ zIndex: 10 }}>
            <div className="max-w-6xl mx-auto">
                {/* Section title */}
                <motion.div
                    ref={titleRef}
                    initial={{ opacity: 0, y: 40 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="text-center mb-16"
                >
                    <span
                        className="text-xs tracking-widest uppercase text-violet-400 mb-4 block"
                        style={{ fontFamily: "var(--font-mono)" }}
                    >
                        02 — The Solution
                    </span>
                    <h2
                        className="section-heading text-4xl md:text-5xl font-bold text-white"
                        style={{ letterSpacing: "-0.03em" }}
                    >
                        How ProDOS Works
                    </h2>
                    <p className="text-white/40 mt-4 max-w-xl mx-auto text-base leading-relaxed">
                        Three interlocking systems that operate like a true operating system — running silently beneath your ambitions.
                    </p>
                </motion.div>

                {/* Cards grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <FeatureCard key={f.number} feature={f} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
