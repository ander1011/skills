"use client";

export default function StormClouds() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base dark sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a2e] via-[#0d0b1a] to-[#0d0b1a]" />

      {/* Cloud layer 1 - large slow clouds */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 20%, rgba(40, 20, 70, 0.8) 0%, transparent 70%),
            radial-gradient(ellipse 70% 40% at 75% 15%, rgba(35, 18, 65, 0.7) 0%, transparent 65%),
            radial-gradient(ellipse 90% 45% at 50% 10%, rgba(30, 15, 55, 0.9) 0%, transparent 75%),
            radial-gradient(ellipse 60% 35% at 10% 30%, rgba(25, 12, 50, 0.6) 0%, transparent 60%),
            radial-gradient(ellipse 75% 40% at 90% 25%, rgba(35, 15, 60, 0.7) 0%, transparent 70%)
          `,
          animation: "cloud-drift-1 30s ease-in-out infinite alternate",
        }}
      />

      {/* Cloud layer 2 - medium clouds */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: `
            radial-gradient(ellipse 50% 30% at 30% 25%, rgba(50, 25, 80, 0.7) 0%, transparent 65%),
            radial-gradient(ellipse 45% 25% at 65% 20%, rgba(45, 22, 75, 0.6) 0%, transparent 60%),
            radial-gradient(ellipse 55% 30% at 45% 15%, rgba(40, 20, 70, 0.8) 0%, transparent 70%),
            radial-gradient(ellipse 40% 25% at 80% 30%, rgba(35, 18, 65, 0.5) 0%, transparent 55%),
            radial-gradient(ellipse 50% 28% at 15% 18%, rgba(45, 20, 75, 0.6) 0%, transparent 65%)
          `,
          animation: "cloud-drift-2 25s ease-in-out infinite alternate",
        }}
      />

      {/* Cloud layer 3 - small fast detail clouds */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(ellipse 30% 20% at 25% 22%, rgba(60, 30, 90, 0.6) 0%, transparent 60%),
            radial-gradient(ellipse 25% 15% at 55% 18%, rgba(55, 28, 85, 0.5) 0%, transparent 55%),
            radial-gradient(ellipse 35% 20% at 70% 28%, rgba(50, 25, 80, 0.6) 0%, transparent 60%),
            radial-gradient(ellipse 28% 18% at 40% 12%, rgba(60, 30, 95, 0.5) 0%, transparent 55%),
            radial-gradient(ellipse 32% 18% at 85% 20%, rgba(55, 25, 85, 0.4) 0%, transparent 55%)
          `,
          animation: "cloud-drift-3 20s ease-in-out infinite alternate",
        }}
      />

      {/* Lightning flash effect - pulses subtly */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 40% 30% at 35% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 70%),
            radial-gradient(ellipse 35% 25% at 65% 15%, rgba(59, 130, 246, 0.06) 0%, transparent 65%)
          `,
          animation: "lightning-flash 4s ease-in-out infinite",
        }}
      />

      {/* Bottom fade to page background */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0d0b1a] to-transparent" />

      <style jsx>{`
        @keyframes cloud-drift-1 {
          0% { transform: translateX(-30px) translateY(0px) scale(1); }
          50% { transform: translateX(30px) translateY(-10px) scale(1.02); }
          100% { transform: translateX(-20px) translateY(5px) scale(0.98); }
        }
        @keyframes cloud-drift-2 {
          0% { transform: translateX(20px) translateY(-5px) scale(1.01); }
          50% { transform: translateX(-25px) translateY(8px) scale(0.99); }
          100% { transform: translateX(15px) translateY(-3px) scale(1.02); }
        }
        @keyframes cloud-drift-3 {
          0% { transform: translateX(-15px) translateY(3px); }
          50% { transform: translateX(20px) translateY(-8px); }
          100% { transform: translateX(-10px) translateY(5px); }
        }
        @keyframes lightning-flash {
          0%, 90%, 100% { opacity: 0.3; }
          92% { opacity: 1; }
          94% { opacity: 0.4; }
          96% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
