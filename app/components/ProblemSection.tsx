"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.7, ease: EASE },
    }),
};

const ProblemCard = ({
    label,
    icon,
    heading,
    bullets,
    accentColor,
    index,
}: {
    label: string;
    icon: string;
    heading: string;
    bullets: string[];
    accentColor: string;
    index: number;
}) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={index}
            className="gradient-border rounded-2xl p-8 flex flex-col gap-6"
            style={{
                background: "rgba(255,255,255,0.025)",
                backdropFilter: "blur(16px)",
            }}
        >
            {/* Label */}
            <div className="flex items-center gap-3">
                <span className="text-2xl">{icon}</span>
                <span
                    className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{
                        background: `${accentColor}18`,
                        border: `1px solid ${accentColor}40`,
                        color: accentColor,
                        fontFamily: "var(--font-mono)",
                    }}
                >
                    {label}
                </span>
            </div>

            {/* Heading */}
            <h3
                className="section-heading text-2xl md:text-3xl font-bold text-white leading-tight"
                style={{ letterSpacing: "-0.02em" }}
            >
                {heading}
            </h3>

            {/* Divider */}
            <div
                className="w-12 h-px"
                style={{
                    background: `linear-gradient(90deg, ${accentColor}80, transparent)`,
                }}
            />

            {/* Bullets */}
            <ul className="flex flex-col gap-3">
                {bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/55 text-sm leading-relaxed">
                        <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: accentColor }} />
                        {b}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default function ProblemSection() {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

    return (
        <section className="relative py-28 px-6" style={{ zIndex: 10 }}>
            <div className="max-w-6xl mx-auto">
                {/* Section label */}
                <motion.div
                    ref={titleRef}
                    variants={fadeUp}
                    initial="hidden"
                    animate={titleInView ? "visible" : "hidden"}
                    custom={0}
                    className="text-center mb-16"
                >
                    <span
                        className="text-xs tracking-widest uppercase text-violet-400 mb-4 block"
                        style={{ fontFamily: "var(--font-mono)" }}
                    >
                        01 — The Problem
                    </span>
                    <h2
                        className="section-heading text-4xl md:text-5xl font-bold text-white"
                        style={{ letterSpacing: "-0.03em" }}
                    >
                        The Execution Gap
                    </h2>
                    <p className="text-white/40 mt-4 max-w-xl mx-auto text-base leading-relaxed">
                        Learning resources have never been more accessible. Yet student performance remains stagnant. The crisis is not access — it is consistency.
                    </p>
                </motion.div>

                {/* Two-column cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    <ProblemCard
                        label="The Promise"
                        icon="🌐"
                        heading="Unbounded Resources"
                        accentColor="#34d399"
                        index={1}
                        bullets={[
                            "YouTube, Coursera, Khan Academy — world-class content, free.",
                            "AI tutors available 24/7. Every concept, explained.",
                            "Democratized access to knowledge has never been greater.",
                        ]}
                    />
                    <ProblemCard
                        label="The Failure"
                        icon="⚡"
                        heading="Unsupported Consistency"
                        accentColor="#f87171"
                        index={2}
                        bullets={[
                            "Traditional tools track tasks, not behaviour patterns.",
                            "No feedback loop. No social pressure. No structure.",
                            "87% of students abandon self-paced learning within 3 weeks.",
                        ]}
                    />
                </div>

                {/* Bridge statement */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    custom={3}
                    className="mt-12 text-center"
                >
                    <p
                        className="text-white/30 text-sm tracking-widest uppercase"
                        style={{ fontFamily: "var(--font-mono)" }}
                    >
            // The gap is not informational. It is structural.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
