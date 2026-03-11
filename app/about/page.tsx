export default function AboutPage() {
  const timeline = [
    {
      year: "2024",
      title: "Lead Programmer @ Studio X",
      description: "Led a team of 3 engineers building a VR multiplayer arena. Responsible for netcode, physics, and core gameplay systems.",
    },
    {
      year: "2023",
      title: "Programmer @ Indie Collective",
      description: "Shipped two mobile titles and one PC roguelike. Focused on procedural generation and satisfying game feel.",
    },
    {
      year: "2022",
      title: "Junior Unity Developer @ GameCo",
      description: "First professional role. Built UI systems, optimized performance for low-end devices, and contributed to 3 shipped titles.",
    },
    {
      year: "2020",
      title: "Started Game Dev Journey",
      description: "Discovered Unity, fell down a rabbit hole of tutorials, and never looked back. Built 10+ game jam projects.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 pt-32 pb-24">
      {/* Header */}
      <div className="mb-16">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
          // Who I am
        </p>
        <h1 className="font-display font-bold text-5xl md:text-7xl text-text mb-8">
          About Me
        </h1>
        <div className="max-w-3xl">
          <p className="font-body text-text-dim text-lg leading-relaxed mb-4">
            I'm a game developer with 5+ years of experience building games in
            Unity with C#. I specialize in gameplay systems, VR experiences, and
            performant game architecture.
          </p>
          <p className="font-body text-text-dim text-lg leading-relaxed">
            When I'm not making games, I'm playing them, studying them, or
            breaking them apart to understand what makes them feel good. I
            believe the best games are built at the intersection of technical
            rigor and genuine curiosity.
          </p>
        </div>
      </div>

      {/* Two col */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        {/* Values */}
        <div>
          <h2 className="font-display font-bold text-2xl text-text mb-8">
            What I care about
          </h2>
          <div className="flex flex-col gap-6">
            {[
              { title: "Game Feel", body: "The subtle stuff — input response, screen shake, sound design cues. The things players feel before they can name them." },
              { title: "Clean Architecture", body: "Code that future-you (and your teammates) can read, extend, and debug without crying." },
              { title: "Player Respect", body: "I build games that trust players to figure things out. No hand-holding, clear feedback loops." },
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
        </div>

        {/* Timeline */}
        <div>
          <h2 className="font-display font-bold text-2xl text-text mb-8">
            Experience
          </h2>
          <div className="flex flex-col gap-8">
            {timeline.map(({ year, title, description }) => (
              <div key={year} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="font-mono text-xs text-accent w-12 flex-shrink-0 pt-0.5">{year}</span>
                </div>
                <div className="pb-6 border-b border-border last:border-0">
                  <p className="font-display font-semibold text-text mb-1">{title}</p>
                  <p className="font-body text-sm text-text-dim leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
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
            I'm currently available for freelance projects and full-time opportunities.
          </p>
        </div>
        <a
          href="/#contact"
          className="flex-shrink-0 bg-accent text-bg font-mono font-medium text-sm px-6 py-3 hover:bg-accent-dim transition-colors"
        >
          Get in touch →
        </a>
      </div>
    </div>
  );
}
