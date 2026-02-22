"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// WhatsApp-style message bubbles
const messages = [
    {
        type: "system",
        text: "ProDOS System initialized. Welcome back, Abdullah.",
        time: "09:00 AM",
    },
    {
        type: "user",
        text: "/list_habits",
        time: "09:01 AM",
    },
    {
        type: "bot",
        lines: [
            "📋 Your Active Habits",
            "",
            "1. 📚 Daily Reading — 30 mins",
            "   Streak: 🔥 12 days",
            "   Next reminder: 08:00 PM",
            "",
            "2. 💪 Morning Workout — 45 mins",
            "   Streak: 🔥 7 days",
            "   Next reminder: 06:30 AM",
            "",
            "3. ✍️ Study Session — 2 hours",
            "   Streak: 🔥 12 days",
            "   Next reminder: 03:00 PM",
        ],
        time: "09:01 AM",
    },
    {
        type: "system",
        text: "Day 12 Study Session Logged. System stable. ✅",
        time: "03:12 PM",
        highlight: true,
    },
    {
        type: "bot",
        lines: [
            "🎯 Consistency Score: 94%",
            "",
            "You're in the top 8% of users this week.",
            "Keep the momentum — 3 days to your next milestone.",
        ],
        time: "03:12 PM",
    },
];

export default function MockupSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section className="relative py-28 px-6 overflow-hidden" style={{ zIndex: 10 }}>
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: EASE }}
                    viewport={{ once: true, margin: "-80px" }}
                    className="text-center mb-16"
                >
                    <span
                        className="text-xs tracking-widest uppercase text-violet-400 mb-4 block"
                        style={{ fontFamily: "var(--font-mono)" }}
                    >
                        03 — Live Interface
                    </span>
                    <h2
                        className="section-heading text-4xl md:text-5xl font-bold text-white"
                        style={{ letterSpacing: "-0.03em" }}
                    >
                        ProDOS in Action
                    </h2>
                    <p className="text-white/40 mt-4 max-w-xl mx-auto text-base">
                        Runs silently through WhatsApp. No new app. No friction. Just structure.
                    </p>
                </motion.div>

                {/* Floating phone mockup */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 80, scale: 0.9 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 1, ease: EASE }}
                    className="float-anim mx-auto"
                    style={{ maxWidth: 420 }}
                >
                    {/* Phone frame */}
                    <div
                        className="relative rounded-[2.5rem] overflow-hidden mx-auto"
                        style={{
                            background: "#111",
                            border: "1px solid rgba(255,255,255,0.1)",
                            boxShadow:
                                "0 0 0 1px rgba(124,58,237,0.2), 0 40px 100px rgba(0,0,0,0.8), 0 0 80px rgba(124,58,237,0.15)",
                            width: "100%",
                            maxWidth: 380,
                        }}
                    >
                        {/* WhatsApp header */}
                        <div
                            className="flex items-center gap-3 px-5 py-4"
                            style={{ background: "#1a1a1a", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                        >
                            <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg"
                                style={{ background: "rgba(124,58,237,0.2)" }}>
                                🖥️
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                                    ProDOS Bot
                                </p>
                                <p className="text-xs" style={{ color: "#25D366" }}>● online</p>
                            </div>
                            <div className="ml-auto flex gap-2 text-white/30">
                                <span className="text-xs">☎</span>
                                <span className="text-xs">⋮</span>
                            </div>
                        </div>

                        {/* Chat area */}
                        <div
                            className="flex flex-col gap-3 p-4 overflow-y-auto"
                            style={{
                                background: "linear-gradient(180deg, #0d1117 0%, #0a0d12 100%)",
                                minHeight: 480,
                                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                            }}
                        >
                            {messages.map((msg, i) => {
                                if (msg.type === "system") {
                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ delay: 0.3 + i * 0.18, duration: 0.5 }}
                                            className="text-center"
                                        >
                                            <span
                                                className="inline-block px-3 py-1.5 rounded-full text-xs"
                                                style={{
                                                    background: msg.highlight
                                                        ? "rgba(124,58,237,0.25)"
                                                        : "rgba(255,255,255,0.07)",
                                                    border: msg.highlight
                                                        ? "1px solid rgba(124,58,237,0.5)"
                                                        : "1px solid rgba(255,255,255,0.08)",
                                                    color: msg.highlight ? "#a78bfa" : "rgba(255,255,255,0.45)",
                                                    fontFamily: "var(--font-mono)",
                                                }}
                                            >
                                                {msg.text}
                                            </span>
                                        </motion.div>
                                    );
                                }

                                if (msg.type === "user") {
                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={inView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.3 + i * 0.18, duration: 0.5 }}
                                            className="flex justify-end"
                                        >
                                            <div
                                                className="max-w-[75%] px-4 py-2 rounded-2xl rounded-br-sm"
                                                style={{ background: "#2563eb" }}
                                            >
                                                <p className="text-white text-sm" style={{ fontFamily: "var(--font-mono)" }}>
                                                    {msg.text}
                                                </p>
                                                <p className="text-white/40 text-xs mt-1 text-right">{msg.time} ✓✓</p>
                                            </div>
                                        </motion.div>
                                    );
                                }

                                // bot
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.3 + i * 0.18, duration: 0.5 }}
                                        className="flex justify-start"
                                    >
                                        <div
                                            className="max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-sm"
                                            style={{
                                                background: "rgba(255,255,255,0.06)",
                                                border: "1px solid rgba(255,255,255,0.08)",
                                            }}
                                        >
                                            {msg.lines?.map((line, li) => (
                                                <p
                                                    key={li}
                                                    className={`text-xs leading-relaxed ${line === "" ? "h-2" : ""}`}
                                                    style={{
                                                        color: line.startsWith("🎯") || line.includes("94%")
                                                            ? "#a78bfa"
                                                            : "rgba(255,255,255,0.75)",
                                                        fontFamily: "var(--font-mono)",
                                                    }}
                                                >
                                                    {line}
                                                </p>
                                            ))}
                                            <p className="text-white/30 text-xs mt-2">{msg.time}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Input bar */}
                        <div
                            className="flex items-center gap-3 px-4 py-3"
                            style={{ background: "#1a1a1a", borderTop: "1px solid rgba(255,255,255,0.06)" }}
                        >
                            <div className="flex-1 px-4 py-2 rounded-full text-white/25 text-xs flex items-center"
                                style={{ background: "rgba(255,255,255,0.06)", fontFamily: "var(--font-mono)" }}>
                                Type a message...
                            </div>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                                style={{ background: "rgba(124,58,237,0.4)" }}>
                                ➤
                            </div>
                        </div>
                    </div>

                    {/* Floating glow rings */}
                    <div
                        className="absolute -inset-8 rounded-full pointer-events-none"
                        style={{
                            background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
                            filter: "blur(30px)",
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
