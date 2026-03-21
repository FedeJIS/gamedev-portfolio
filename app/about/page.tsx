export default function AboutPage() {
  const timeline: (
    | { type: "job"; year: string; title: string; description: string }
    | { type: "note"; text: string }
  )[] = [
    {
      type: "job",
      year: "2024-2026",
      title: "Pepecoin | Sr. Unity Engineer",
      description:
        "Summoned to build a multiplayer social ecosystem from scratch. I architected the client-server sync for a meme-world metaverse, proving that speed and clean architecture can coexist.",
    },
    {
      type: "note",
      text: "Ended up building core systems for the game like isometric pathfinding, isometric NFT billboards, NFT minting, blockchain integration, multiplayer layer. All in Unity. Wild year.",
    },
    {
      type:"note",
      text: "Also at Monumental I worked in Bit Heroes Quest a complex live-service title. Modernizing legacy systems and shipping revenue-driving features for a high-traffic game as a freelancer."
    },
    {
      type: "job",
      year: "2023-2024",
      title: "Zynga | Sr. Unity Engineer",
      description:
        "A full-circle moment. From playing Zynga games on Facebook as a kid to developing systems for Game of Thrones: Legends as a Senior Dev.",
    },
    {
      type: "note",
      text: "First time working at a AAA-adjacent studio. The scale of a live game with millions of players changes how you think about every line of code.",
    },
    {
      type: "job",
      year: "2022-2023",
      title: "Widow Games | Ssr. Unity Engineer",
      description:
        "The year I dove deep into the bridge between client and backend. Working on Geopoly, I mastered the patterns that keep global live games stable.",
    },
    {
      type: "note",
      text: "Also at Tuxdi Digital I created interactive experiences with AR and worked in a simulator for Mayo Clinics as a freelancer.",
    },
    {
      type: "job",
      year: "2021-2021",
      title: "Geta Club | Unity Engineer",
      description:
        "First time working for a studio in Dubai. A crazy year shipping features while collaborating with a distributed international team.",
    },
    {
      type: "note",
      text: "'Hey kiddo, you can handle this, right? We need a custom Puzzle Editor built from scratch.' I built it and I realized I could hold my own in any global team.",
    },
    {
      type: "job",
      year: "2020-2021",
      title: "Globant | Unreal Game Developer",
      description:
        "The 'Hello World' of my professional career. Led an internal demo from scratch in Unreal Engine. Finally, I wasn't just making games, I was a Game Developer.",
    },
    {
      type: "note",
      text: "Also shipped a secure .NET desktop app at SMB. Full stack before I even knew what that meant.",
    },
    {
      type: "job",
      year: "2019",
      title: "Game Jam Tandil — Organizer & Dev",
      description:
        "Organized and competed in Game Jam Tandil 2019. Built a complete game in 48 hours and helped run the whole event.",
    },
    {
      type: "note",
      text: "Organizing a jam teaches you more about game dev than any tutorial ever could.",
    },
    {
      type: "job",
      year: "2016",
      title: "Systems Engineering at UNICEN",
      description:
        "Started my degree with a single goal: becoming a professional game dev. My thesis was a Systematic Literature Review of Agile methodologies in Game Development.",
    },
    {
      type: "note",
      text: "I made a deal with myself: every project, when possible, had to be a game. I wasn't just studying; I was building the foundation of my career in secret.",
    },
    {
      type: "job",
      year: "2014",
      title: "The Spark",
      description:
        "Watched 'Indie Game: The Movie' and it changed everything. I realized games weren't just magic, they were systems I could build. Haven't stopped since.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-8 pt-32 pb-24">
      {/* Header */}
      <div className="mb-16">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
          // Who I am
        </p>
        <h1 className="font-display font-bold text-5xl md:text-7xl text-text mb-8">
          About Me
        </h1>
        <div className="max-w-2xl">
          <p className="font-body text-text-dim text-lg leading-relaxed mb-4">
            Software Engineer from Argentina. I specialize in 
            Unity & C#. Designing scalable gameplay systems,
            robust live-service infrastructures, and the
            kind of tools that make a whole team faster.
          </p>
          <p className="font-body text-text-dim text-lg leading-relaxed">
           From indie prototypes to global live-services, I’ve shipped on every platform.
           I believe in code that is as pragmatic as it is clean, and as intuitive as it is powerful.
          </p>
        </div>
      </div>

      {/* Two col */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        {/* Left col — values + stack */}
        <div>
          <h2 className="font-display font-bold text-2xl text-text mb-8">
            What I care about
          </h2>
          <div className="flex flex-col gap-6 mb-12">
            {[
              {
                title: "Clean Architecture",
                body: "SOLID principles, design patterns, and code that future teammates can read without wanting to quit.",
              },
              {
                title: "Shipping",
                body: "I've worked on live titles with real players. I know the difference between prototype code and production code.",
              },
              {
                title: "Systems Thinking",
                body: "Whether it's a poker game, a pathfinding grid, or a currency economy — I design for scalability first.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="flex gap-4">
                <span className="w-px bg-accent/30 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-display font-semibold text-text mb-1">{title}</p>
                  <p className="font-body text-sm text-text-dim leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display font-bold text-2xl text-text mb-6">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "C#", "Unity", "Unreal Engine", "C++", "Java", "Python",
              "SmartFox Server", "PostgreSQL", "MySQL",
              "Android", "iOS", "WebGL", "Steam",
              "SOLID", "Agile", "Scrum", "AR Foundation",
            ].map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs text-muted border border-border px-2 py-1 hover:border-accent/40 hover:text-text-dim transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right col — timeline */}
        <div>
          <h2 className="font-display font-bold text-2xl text-text mb-8">
            Timeline
          </h2>

          <div className="relative">
            {/* Continuous vertical line */}
            <div className="absolute left-[5px] top-3 bottom-3 w-px bg-border" />

            <div className="flex flex-col">
              {timeline.map((item, i) => {
                if (item.type === "job") {
                  return (
                    <div key={i} className="relative flex gap-5">
                      {/* Dot node */}
                      <div className="flex-shrink-0 w-3 pt-1.5 z-10">
                        <div className="w-[11px] h-[11px] rounded-full border-2 border-accent bg-bg" />
                      </div>
                      {/* Content */}
                      <div className="pb-1">
                        <span className="font-mono text-xs text-accent block mb-0.5">
                          {item.year}
                        </span>
                        <p className="font-display font-semibold text-sm text-text mb-1">
                          {item.title}
                        </p>
                        <p className="font-body text-xs text-text-dim leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                }

                // Interstitial note between jobs
                return (
                  <div key={i} className="relative flex gap-5 py-3">
                    {/* Empty space to align with the line */}
                    <div className="flex-shrink-0 w-3" />
                    {/* Note bubble */}
                    <div className="border-l-2 border-dashed border-muted/30 pl-3 py-1">
                      <p className="font-mono text-xs text-muted/70 italic leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border border-border bg-surface p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display font-bold text-2xl text-text mb-2">
            Want to work together?
          </p>
          <p className="font-body text-text-dim text-sm">
            Open to freelance projects and interesting full-time opportunities.
          </p>
        </div>
        <div className="flex gap-4 flex-wrap">
          <a
            href="/projects"
            className="flex-shrink-0 bg-accent text-bg font-mono font-medium text-sm px-6 py-3 hover:bg-accent-dim transition-colors"
          >
            View Projects →
          </a>
          <a
            href="/#contact"
            className="flex-shrink-0 border border-border text-text font-mono text-sm px-6 py-3 hover:border-accent hover:text-accent transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}