import Link from "next/link";

export type Project = {
  slug: string;
  title: string;
  company?: string;
  tags: string[];
  category: string;
  role: string;
  year: string;
  description: string;
  type: "professional" | "indie" | "side-projects";
};

export const projects: Project[] = [
  // ── Professional ──────────────────────────────────────────
   {
    slug: "game-of-thrones-legends",
    title: "Game of Thrones: Legends",
    company: "Zynga",
    tags: ["Unity", "C#", "Live-Service", "Mobile"],
    category: "Mobile",
    role: "Unity Engineer (Contractor)",
    year: "2023",
    description:
      "Shipped features for Zynga's GoT title: out-of-currency flow, push notifications, solo PvP, player stats, daily calendar, in-game shop, character upgrades, and more.",
    type: "professional",
  },
  {
    slug: "bit-heroes-quest",
    title: "Bit Heroes Quest",
    company: "Monumental",
    tags: ["Unity", "C#", "Live-Service", "Legacy Code"],
    category: "Multiplatform",
    role: "Unity Engineer (Freelance)",
    year: "2025",
    description:
      "End-to-end maintenance and evolution of a complex live-service title. Modernized legacy systems, reworked revenue-driving features, and kept a high-traffic game running smoothly while shipping new content.",
    type: "professional",
  },
  {
    slug: "kekspace",
    title: "Kekspace",
    company: "Pepecoin",
    tags: ["Unity", "C#", "Multiplayer", "Web3", "SmartFox"],
    category: "WebGL",
    role: "Unity Engineer (Contractor)",
    year: "2024",
    description:
      "Multiplayer social game for Pepecoin built from scratch. Implemented isometric pathfinding, NFT gallery, crypto wallet integration, poker, fishing, friends system, daily rewards, minigames, and a hard currency economy.",
    type: "professional",
  },
  {
    slug: "ninja-chess",
    title: "Ninja Chess",
    company: "Gatsby Games",
    tags: ["Unity", "C#", "Chess", "Strategy"],
    category: "Mobile",
    role: "Unity Engineer (Contractor)",
    year: "2024",
    description:
      "Designed the architecture and core gameplay of a chess variant with a ninja theme from the ground up, in collaboration with other developers.",
    type: "professional",
  },
  {
    slug: "trump-solana-golf",
    title: "Trump Solana Golf",
    company: "Aconcagua Games",
    tags: ["Unity", "C#", "Web3", "Mobile"],
    category: "Mobile",
    role: "Unity Engineer (Contractor)",
    year: "2024",
    description:
      "Collaborated with designers and artists to develop and publish this Web3 golf game. Handled core gameplay systems and blockchain integration.",
    type: "professional",
  },
  {
    slug: "geopoly",
    title: "Geopoly",
    company: "Widow Games",
    tags: ["Unity", "C#", "Live-Service", "Tools"],
    category: "Mobile",
    role: "Unity Engineer (Contractor)",
    year: "2022",
    description:
      "Added ranking systems, minigames, in-game notifications, and customization. Built custom Editor tools, a service layer for database connectivity, and refactored with Clean Architecture principles.",
    type: "professional",
  },
  {
    slug: "geta-club",
    title: "Geta Puzzle",
    company: "Geta Club",
    tags: ["Unity", "C#", "Level Editor"],
    category: "Mobile",
    role: "Unity Engineer (Contractor)",
    year: "2021",
    description:
      "Developed game mechanics and enhanced a custom level editor to speed up level creation workflows for game designers.",
    type: "professional",
  },

  // ── Indie ──────────────────────────────────────────────
  ,
  {
    slug: "game-jam-tandil-2019",
    title: "Game Jam Tandil 2019",
    tags: ["Unity", "C#", "Game Jam"],
    company: "Self",
    category: "Game Jam",
    role: "Organizer & Developer",
    year: "2019",
    description:
      "Organized and participated in the Game Jam Tandil 2019 event. Designed and shipped a complete game under 48-hour constraints.",
    type: "indie",
  },
  ,

  // ── Side Projects ──────────────────────────────────────────────
  {
    slug: "fricodev",
    title: "Fricodev",
    tags: ["Youtube"],
    company: "",
    category: "Social Media",
    role: "Owner",
    year: "2020",
    description:
      "Created a game developers community during 2020. Reached more than 2k suscribers and uploaded videos regarding to industry and Unity tutorials.",
    type: "side-projects",
  },
  {
    slug: "game-jam-tandil-2019",
    title: "Game Jam Tandil 2019",
    tags: ["Game Jam"],
    company: "",
    category: "Game Jam",
    role: "Organizer",
    year: "2019",
    description:
      "Organized and participated in the Game Jam Tandil 2019 event. Designed and shipped a complete game under 48-hour constraints.",
    type: "side-projects",
  }
  
];

const categoryColors: Record<string, string> = {
  Mobile: "text-sky-400 border-sky-400/30 bg-sky-400/5",
  Multiplatform: "text-sky-400 border-sky-400/30 bg-sky-400/5",
  WebGL: "text-sky-400 border-sky-400/30 bg-sky-400/5",
  Desktop: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
  GameJam: "text-orange-400 border-orange-400/30 bg-orange-400/5",
  Youtube: "text-orange-400 border-orange-400/30 bg-orange-400/5",

};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative bg-surface border border-border hover:border-accent/40 transition-all duration-300 overflow-hidden"
    >
      <div
        className="h-40 bg-gradient-to-br from-surface to-bg flex items-center justify-center border-b border-border"
        style={{
          backgroundImage: `radial-gradient(ellipse at ${index % 2 === 0 ? "30%" : "70%"} 50%, rgba(232,255,71,0.04), transparent)`,
        }}
      >
        <span className="font-mono text-4xl font-bold text-border select-none group-hover:text-accent/10 transition-colors">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="p-5">
        {project.company && (
          <p className="font-mono text-xs text-muted mb-1">{project.company}</p>
        )}
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display font-bold text-lg text-text group-hover:text-accent transition-colors leading-tight">
            {project.title}
          </h3>
          <span
            className={`font-mono text-xs border px-2 py-0.5 ml-2 flex-shrink-0 ${
              categoryColors[project.category] ?? "text-muted border-border"
            }`}
          >
            {project.category}
          </span>
        </div>

        <p className="font-body text-xs text-text-dim leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs text-muted border border-border px-1.5 py-0.5"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="font-mono text-xs text-muted px-1">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
          <span className="font-mono text-xs text-muted">{project.year}</span>
        </div>
      </div>

      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-accent text-sm font-mono">↗</span>
      </div>
    </Link>
  );
}

export default function ProjectsSection() {
  const professional = projects.filter((p) => p.type === "professional");
  const indie = projects.filter((p) => p.type === "indie");
  const side = projects.filter((p) => p.type === "side-projects");

  return (
    <section id="projects" className="max-w-7xl mx-auto px-8 py-24 text-center">
      <div className="mb-14 flex flex-col items-center gap-5">
        <div>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
            // My Life Work
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text">
            Projects
          </h2>
        </div>
      </div>

      {/* Professional */}
      <div className="mb-14">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            Professional Experience
          </span>
          <span className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {professional.slice(0, 6).map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Indie */}
      <div className="mb-14">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            Indie Projects
          </span>
          <span className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {indie.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>

      <div className="mt-8 md:hidden text-center" />

       {/* Side */}
       <div className="mb-14">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            Side Projects
          </span>
          <span className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {side.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>

      <div className="mt-8 md:hidden text-center" />

    </section>
  );
}
