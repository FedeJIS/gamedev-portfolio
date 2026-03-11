import { projects } from "@/components/ProjectsSection";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="max-w-7xl mx-auto px-8 pt-32 pb-24">
      <div className="max-w-5xl mx-auto">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors mb-12"
      >
        ← Back to projects
      </Link>

      {/* Hero placeholder */}
      <div className="h-64 md:h-80 bg-surface border border-border flex items-center justify-center mb-12">
        <span className="font-mono text-6xl font-bold text-border">
          {String(projects.indexOf(project) + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Meta row */}
      <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-border">
        {[
          { label: "Role", value: project.role },
          { label: "Year", value: project.year },
          { label: "Category", value: project.category },
        ].map(({ label, value }) => (
          <div key={label}>
            <p className="font-mono text-xs text-muted uppercase tracking-wider mb-1">{label}</p>
            <p className="font-body text-sm text-text">{value}</p>
          </div>
        ))}
        <div>
          <p className="font-mono text-xs text-muted uppercase tracking-wider mb-1">Tech</p>
          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag) => (
              <span key={tag} className="font-mono text-xs text-muted border border-border px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <h1 className="font-display font-bold text-4xl md:text-5xl text-text mb-6">
        {project.title}
      </h1>

      <div className="prose prose-invert max-w-none">
        <p className="font-body text-text-dim text-lg leading-relaxed mb-6">
          {project.description}
        </p>
        <p className="font-body text-text-dim leading-relaxed">
          {/* Add more detailed write-up here */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Replace this with a
          detailed breakdown of the project — challenges, solutions, what you learned.
        </p>
      </div>

      {/* Nav to next project */}
      <div className="mt-16 pt-8 border-t border-border flex justify-between">
        <div>
          {projects[projects.indexOf(project) - 1] && (
            <Link
              href={`/projects/${projects[projects.indexOf(project) - 1].slug}`}
              className="font-mono text-xs text-muted hover:text-accent transition-colors"
            >
              ← {projects[projects.indexOf(project) - 1].title}
            </Link>
          )}
        </div>
        <div>
          {projects[projects.indexOf(project) + 1] && (
            <Link
              href={`/projects/${projects[projects.indexOf(project) + 1].slug}`}
              className="font-mono text-xs text-muted hover:text-accent transition-colors"
            >
              {projects[projects.indexOf(project) + 1].title} →
            </Link>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
