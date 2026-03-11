"use client";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:federico.iribarrensusino@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}%0A%0AFrom: ${form.email}`;
    window.open(mailto);
    setSent(true);
  };

  return (
    <section id="contact" className="w-full flex flex-col items-center py-32 border-t border-border bg-bg">
      <div className="w-full max-w-xl px-6 flex flex-col">
        
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-5xl md:text-6xl text-text mb-6">
            Get In Touch
          </h2>
          <p className="font-body text-text-dim text-lg leading-relaxed">
            Whether you have a project in mind, want to collaborate, or just want
            to chat about game development, my inbox is always open!
          </p>
        </div>

        {/* Form Box */}
        <div className="bg-surface border border-border p-8 md:p-12">
          {sent ? (
            <div className="flex flex-col items-center justify-center py-16 gap-6">
              <span className="text-5xl text-accent">✓</span>
              <p className="font-display font-bold text-2xl text-text">Message sent!</p>
              <button onClick={() => setSent(false)} className="font-mono text-xs text-muted uppercase tracking-widest">[ Send another ]</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              
              {/* Name Field */}
              <div className="flex flex-col">
                <label className="font-mono text-[11px] text-muted uppercase tracking-[0.2em] pt-2">
                  Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-bg border border-border text-text font-body text-base outline-none focus:border-accent transition-all placeholder:text-muted/20"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label className="font-mono text-[11px] text-muted uppercase tracking-[0.2em]">
                  Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-bg border border-border text-text font-body text-base px-6 py-4 outline-none focus:border-accent transition-all placeholder:text-muted/20"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-4">
                <label className="font-mono text-[11px] text-muted uppercase tracking-[0.2em] pt-2">
                  Message
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-bg border border-border text-text font-body text-base px-6 py-4 outline-none focus:border-accent transition-all placeholder:text-muted/20 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-accent text-bg font-mono font-bold text-sm uppercase tracking-[0.2em] py-5 hover:bg-white hover:text-accent transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}