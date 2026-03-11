"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gridSize = 48;
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const dist = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2)
          );
          const alpha = 0.04 + 0.03 * Math.sin(dist / 80 - t * 0.8);
          ctx.strokeStyle = `rgba(232,255,71,${alpha})`;
          ctx.strokeRect(x, y, gridSize, gridSize);
        }
      }
      t += 0.01;
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.6 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(232,255,71,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-in animate-delay-100" style={{ animationFillMode: "forwards" }}>
            <span className="w-8 h-px bg-accent" />
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              Software Engineer · Unity · C#
            </span>
          </div>

          <h1
            className="font-mono text-sm font-medium tracking-widest uppercase text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tighter text-text mb-6 opacity-0 animate-fade-up animate-delay-200"
            style={{ animationFillMode: "forwards" }}
          >
            <span className="text-text">frico</span>
            <span className="text-accent">dev</span>
          </h1>

          <p
            className="font-body text-text-dim text-base md:text-lg max-w-4xl leading-relaxed mb-10 opacity-0 animate-fade-up animate-delay-300"
            style={{ animationFillMode: "forwards" }}
          >
            Software Engineer specialized in Unity & C# with 5+ years shipping games. 
            I turn complex systems into immersive experiences.
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-up animate-delay-400"
            style={{ animationFillMode: "forwards" }}
          >
          </div>

          <div
            className="flex flex-wrap justify-center gap-10 mt-16 pt-8 border-t border-border opacity-0 animate-fade-up animate-delay-500"
            style={{ animationFillMode: "forwards" }}
          >
            {[
              { value: "6+", label: "Years Experience" },
              { value: "3+", label: "Games Shipped" },
              { value: "3", label: "Live-Service Titles" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-display font-bold text-3xl text-accent">{value}</p>
                <p className="font-body text-xs text-muted mt-1 uppercase tracking-wider">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-8 bg-muted animate-pulse" />
      </div>
    </section>
  );
}