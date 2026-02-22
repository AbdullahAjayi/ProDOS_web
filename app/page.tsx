"use client";

import StarfieldCanvas from "./components/StarfieldCanvas";
import MouseGradient from "./components/MouseGradient";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import MockupSection from "./components/MockupSection";
import ImpactSection from "./components/ImpactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main
      className="relative min-h-screen"
      style={{ background: "#020202" }}
    >
      {/* ── Layer 0: Canvas starfield (fixed) ── */}
      <StarfieldCanvas />

      {/* ── Layer 1: Mouse-follow gradient (fixed) ── */}
      <MouseGradient />

      {/* ── Layer 2: Grid overlay (fixed) ── */}
      <div
        className="fixed inset-0 grid-bg pointer-events-none"
        style={{ zIndex: 2 }}
      />

      {/* ── Layer 3: Large ambient glow orbs (fixed) ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 3 }}>
        {/* Top-left violet orb */}
        <div
          className="absolute -top-60 -left-60 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Bottom-right indigo orb */}
        <div
          className="absolute -bottom-60 -right-60 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(67,56,202,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Center orb, large */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.035) 0%, transparent 65%)",
            filter: "blur(80px)",
            animationName: "pulseGlow",
            animationDuration: "8s",
            animationIterationCount: "infinite",
          }}
        />
      </div>

      {/* ── Content layers ── */}
      <Navbar />

      <div id="hero">
        <HeroSection />
      </div>

      <div id="problem">
        <ProblemSection />
      </div>

      <div id="solution">
        <SolutionSection />
      </div>

      <div id="interface">
        <MockupSection />
      </div>

      <div id="impact">
        <ImpactSection />
      </div>

      <Footer />
    </main>
  );
}
