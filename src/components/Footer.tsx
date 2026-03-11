import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border mt-24 flex justify-center">
      {/* Changed: max-w-xl to match your Contact section's width 
          This ensures the copyright and links sit on the same 'rails' as the form.
      */}
      <div className="w-full max-w-xl px-8 py-16 flex flex-col items-center gap-8 text-center">
        
        {/* Navigation / Links */}
        <div className="flex items-center justify-center gap-8">
          {[
            { label: "Itch.io", href: "https://fricodev.itch.io/" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/federico-iribarren-susino-971007/" },
            { label: "Email", href: "mailto:federico.iribarrensusino@gmail.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted hover:text-accent transition-all duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Copyright - Sharp and simple */}
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted/50">
          © {new Date().getFullYear()} <span className="text-muted">fricodev</span>
        </p>
        
      </div>
    </footer>
  );
}