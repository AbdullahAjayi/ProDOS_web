"use client";

import { useEffect, useRef } from "react";

export default function StarfieldCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        // Generate stars
        const STAR_COUNT = 220;
        const stars = Array.from({ length: STAR_COUNT }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 1.4 + 0.2,
            alpha: Math.random() * 0.6 + 0.1,
            speed: Math.random() * 0.12 + 0.02,
            twinkleSpeed: Math.random() * 0.02 + 0.005,
            twinkleDir: Math.random() > 0.5 ? 1 : -1,
        }));

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", resize);

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            for (const star of stars) {
                // Twinkle
                star.alpha += star.twinkleSpeed * star.twinkleDir;
                if (star.alpha >= 0.7 || star.alpha <= 0.05) {
                    star.twinkleDir *= -1;
                }

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.fill();

                // Slow drift upward
                star.y -= star.speed;
                if (star.y < -2) {
                    star.y = height + 2;
                    star.x = Math.random() * width;
                }
            }

            animationId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
        />
    );
}
