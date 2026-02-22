"use client";

import { useEffect, useRef } from "react";

export default function MouseGradient() {
    const gradientRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = gradientRef.current;
        if (!el) return;

        let rafId: number;
        let targetX = window.innerWidth / 2;
        let targetY = window.innerHeight / 2;
        let currentX = targetX;
        let currentY = targetY;

        const onMouseMove = (e: MouseEvent) => {
            targetX = e.clientX;
            targetY = e.clientY;
        };

        const animate = () => {
            // Smooth lerp
            currentX += (targetX - currentX) * 0.06;
            currentY += (targetY - currentY) * 0.06;

            el.style.background = `radial-gradient(700px circle at ${currentX}px ${currentY}px, rgba(67, 56, 202, 0.12), rgba(124, 58, 237, 0.06) 40%, transparent 70%)`;
            rafId = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", onMouseMove, { passive: true });
        animate();

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div
            ref={gradientRef}
            className="fixed inset-0 pointer-events-none transition-none"
            style={{ zIndex: 1 }}
        />
    );
}
