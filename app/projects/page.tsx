import { projects } from "@/components/ProjectsSection";
import Link from "next/link";

const categoryColors: Record<string, string> = {
  VR: "text-purple-400 border-purple-400/30 bg-purple-400/5",
  Game: "text-sky-400 border-sky-400/30 bg-sky-400/5",
  Tool: "text-orange-400 border-orange-400/30 bg-orange-400/5",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 pt-32 pb-24">
      <div className="mb-16">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
          // Everything I've shipped
        </p>
        <h1 className="font-display font-bold text-5xl md:text-7xl text-text">
          All Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group bg-surface border border-border hover:border-accent/40 transition-all duration-300 overflow-hidden"
          >
            <div
              className="h-48 bg-gradient-to-br from-surface to-bg flex items-center justify-center border-b border-border"
              style={{
                backgroundImage: `radial-gradient(ellipse at ${i % 2 === 0 ? "30%" : "70%"} 50%, rgba(232,255,71,0.04), transparent)`,
              }}
            >
              <span className="font-mono text-4xl font-bold text-border select-none group-hover:text-accent/10 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h2 className="font-display font-bold text-xl text-text group-hover:text-accent transition-colors">
                  {project.title}
                </h2>
                <span className={`font-mono text-xs border px-2 py-0.5 ${categoryColors[project.category] ?? ""}`}>
                  {project.category}
                </span>
              </div>
              <p className="font-body text-sm text-text-dim leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs text-muted border border-border px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
