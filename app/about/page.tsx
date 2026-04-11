"use client";

import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type MilestoneKind = "professional" | "indie" | "other";

type Milestone = {
  kind: MilestoneKind;
  title: string;
  description: string;
  note?: string;
  linkHref?: string;
  placeholder?: boolean;
};

type YearBlock = {
  year: number;
  milestones: Milestone[];
};

// ─── Data ─────────────────────────────────────────────────────────────────────
// kind="professional" → left column, solid border
// kind="indie"        → right column, dashed accent border
// kind="other"        → right column, dotted muted border
//
// Add as many milestones per year as you want.
// Placeholder slots have placeholder: true — replace with real data when ready.

const timeline: YearBlock[] = [
  {
    year: 2014,
    milestones: [
      {
        kind: "professional",
        title: "The Spark",
        description:
          "Watched 'Indie Game: The Movie' and it changed everything. I realized games weren't just magic, they were systems I could build. Haven't stopped since.",
      },
       {
        kind: "indie",
        title: "Am I an indie dev now?",
        description:
          "I built my first Flappy Bird-inspired game using Construct 2 and reached 100 players on Kongregate!",
      },
    ],
  },
  {
    year: 2015,
    milestones: [
      {
        kind: "indie",
        title: "Launched my first Android Game!",
        description: "I spent my school days dreaming up game ideas and my evenings bringing them to life; I even coded my first game, 'Eternal: A love story' using Game Maker Studio!",
        note: "Before that, I overcame the nerves of my first solo launch with 'Galamore' where I handled both the art and the code using Construct 2."
      },
    ],
  },
  {
    year: 2016,
    milestones: [
      {
        kind: "professional",
        title: "Systems Engineering",
        description:
          "Started my degree with a single goal: becoming a professional game dev.",
        note: "Every project, when possible, had to be a game. I wasn't just studying, I was building the foundation of my career in secret.",
      },
      {
        kind: "indie",
        title: "200k downloads?!",
        description:
          "In a single week, I developed and launched 'Toca Cumbia DJ' for Android, which grew to 200.000 downloads organically and maintained thousands of active users. What an incredible ride!",
      },
    ],
  },
  {
    year: 2018,
    milestones: [
      {
        kind: "other",
        title: "My first Unity Project!",
        description: "For the Object Oriented Programming final, I asked if I could build a game to demonstrate the principles we'd learned. I decided to dive into Unity and create a shoot 'em up from scratch.",
      },
    ],
  },
  {
    year: 2019,
    milestones: [
       {
        kind: "other",
        title: "My own game development course",
        description:
          "Some of my teachers thought it would be a great idea for students to lead their own courses. I took the initiative to design and manage my own game design course, and my very first class had a record attendance of over 70 people!",
        note: "Teaching is not as easy as you might think.",
      },
      {
        kind: "indie",
        title: "Am in the news?",
        description:
          "I organized Game Jam Tandil 2019, the very first game jam in the city. I secured sponsorships from UNICEN, Globant, and ADVA, and we had over 100 participants who successfully built complete games in just a single day!",
        note: "Organizing a jam teaches you more about resilience and putting out fires than any tutorial ever could.",
        linkHref: "https://web.archive.org/web/20250324200231/https://www.enfoquedenegocios.com.ar/videojuegos-gamejam/"
      },
      {
        kind: "professional",
        title: "My first C# job",
        description:
          "I designed and developed a secure desktop application for monitoring and storing sensitive information.",
        note: "It wasn't the most exciting project, but it was a deep dive into C#."
      },
    ],
  },
  {
    year: 2020,
    milestones: [
      {
        kind: "professional",
        title: "My first Game Dev job!",
        description:
          "Following Game Jam Tandil 2019, the Head of the Game Studio at Globant hired me as a Junior Game Developer. The 'Hello World' of my professional career.",
        note: "Finally, I wasn't just making games: I was a Pro Game Developer."
      },
      {
        kind: "indie",
        title: "Fricodev was born!",
        description: "When the pandemic made in-person university courses impossible, I pivoted and launched my own online community. I reached 100 subscribers in the first week, and it has since grown to over 2,300!",
      },
    ],
  },
  {
    year: 2021,
    milestones: [
      {
        kind: "professional",
        title: "Geta Puzzle",
        description:
          "First time working for a studio in Dubai using Unity. A crazy year shipping features while collaborating with a distributed international team.",
        note: "'Hey kiddo, you can handle this, right? We need a custom Puzzle Editor built from scratch.' I built it and I realized I could hold my own in any global team.",
      },
      {
        kind: "indie",
        title: "PipPop! Studios",
        description: "I founded Pip Pop! Studios in 2021 to revolutionize mobile gaming with a 'Play to Win' model, featuring a unified currency that allows players to carry their progress across multiple games. I actively expanded this vision through various high-profile pitching events while managing the studio alongside other professional ventures.",
      },
      {
        kind: "other",
        title: "Frontenac",
        description: "I developed this game in a week, a first-person horror game for MDJam 2021 set in a haunted hotel in Mar del Plata. Built in Unity, the gameplay focuses on a tense atmosphere where the player must use a flashlight to explore dark corridors, interact with the environment, and collect items while avoiding supernatural threats.",
        linkHref: "https://www.youtube.com/watch?v=pK5xareCL_Y"
      },
     
    ],
  },
  {
    year: 2022,
    milestones: [
      {
        kind: "professional",
        title: "I am a Software Engineer now!",
        description:
          "I graduated as a Software Engineer, after all this years finally!",
      },
      {
        kind: "professional",
        title: "Geopoly",
        description:
          "The year I dove deep into the bridge between client and backend in Unity. Working on Geopoly, I mastered the patterns that keep global live games stable.",
        linkHref: "https://geopoly.io/",
      },
      {
        kind: "professional",
        title: "Mayo Clinics",
        description: "I built medical training simulator in Unity for Mayo Clinic to address COVID-19 cleaning protocols. By utilizing data from security cameras, we mapped a 3D digital twin to simulate personnel behavior and gamify the cleaning process."
      },
      {
        kind: "other",
        title: "Floor Sim - AR Project",
        description: "I built an AR flooring simulator using Unity and AR Foundation that allows users to map a real-world space and visualize various textures in real-time. By detecting floor surfaces and allowing for custom corner placement, the app creates a precise 3D digital twin to simulate and toggle between different materials.",
        linkHref: "https://www.youtube.com/watch?v=hJSXWxUCBi4"
      },
    ],
  },
  {
    year: 2023,
    milestones: [
      {
        kind: "professional",
        title: "Game of Thrones: Legends",
        description:
          "A full-circle moment. From playing Zynga games on Facebook as a kid to developing systems for Game of Thrones: Legends as a Senior Dev.",
        note: "First time working at a AAA-adjacent studio. The scale of a live game with millions of players changes how you think about every line of code.",
        linkHref: "/projects/zynga",
      },
      {
        kind: "indie",
        title: "My Icecream Journey: Worldwide!",
        description:
          "After a year of development, I returned to Android with a new launch. Although it surpassed 1,000 downloads, it didn't meet my expectations commercially. A humbling but vital learning experience in the mobile market.",
        note: "Developing a game while working full-time is an exercise and a constant balancing act of discipline and passion. It meant turning late nights and early mornings into my most productive hours, proving that with enough grit, you can bring a personal vision to life without compromising your professional standards.",
        linkHref: "https://www.youtube.com/shorts/dhVPdSjEFpU",
      },
      {
        kind: "other",
        title: "Taking my vision to the stage: Pitching the Play to Win business model.",
        description: "I pitched my business model at Prendete 2023, an entrepreneur competition where the grand prize was the chance to pitch in San Francisco. While I didn't take home the win, the experience of commanding the stage was a turning point for me. It was the moment I realized I had the drive to take on any challenge.",
        linkHref: "https://www.youtube.com/live/cvJqO1nt9NY?si=vCclTSg65GZLyjJj&t=8022",
      },
    ],
  },
  {
    year: 2024,
    milestones: [
       {
        kind: "professional",
        title: "Ninja Chess",
        description:
          "I built Ninja Chess from the ground up in Unity, a project that redefines the classic strategy of chess through a stylized, ninja-themed lens. I created a high-performance, browser-based experience that proves strategic depth can be both visually engaging and accessible.",
        note: "Fun fact: I maintained a daily puzzle streak on Chess.com for 720 days.",
        linkHref: "/projects/pepecoin",
      },
      {
        kind: "professional",
        title: "Pepecoin - Kekspace",
        description:
          "Summoned to build a multiplayer social ecosystem from scratch. I architected the client-server sync for a meme-world metaverse, proving that speed and clean architecture can coexist.",
        note: "Built core systems: isometric pathfinding, isometric NFT billboards, NFT minting, blockchain integration, multiplayer layer. All in Unity. Wild year.",
        linkHref: "/projects/pepecoin",
      },
      {
        kind: "indie",
        title: "Hell Squad",
        description:
          "Started serious development on Hell Squad, a bizarro multiversal roguelite top-down shooter. Full GDD, systems design, complete rework from prior version.",
      },
    ],
  },
  {
    year: 2025,
    milestones: [
      {
        kind: "professional",
        title: "Bit Heroes Quest",
        description:
          "Modernized legacy systems and shipped revenue-driving features for Monumental's high-traffic live-service title.",
      },
    ],
  },
  {
    year: 2026,
    milestones: [
      {
        kind: "other",
        title: "Now — open to next chapter",
        description:
          "Open to freelance projects and interesting full-time opportunities. 6 years of live-service, AAA-adjacent, and indie experience — ready to bring that to something new.",
      },
    ],
  },
];

// ─── Kind config ──────────────────────────────────────────────────────────────

const kindConfig: Record<
  MilestoneKind,
  {
    label: string;
    dot: string;
    card: string;
    titleColor: string;
    side: "left" | "right";
  }
> = {
  professional: {
    label: "Professional",
    dot: "w-3 h-3 bg-accent border-2 border-bg ring-2 ring-accent/60",
    card: "border border-border/70 bg-surface hover:border-accent/50 transition-colors",
    titleColor: "text-text",
    side: "right",
  },
  indie: {
    label: "Indie / Game Dev",
    dot: "w-2.5 h-2.5 bg-bg border-2 border-accent/80 ring-1 ring-accent/30",
    card: "border border-dashed border-accent/40 bg-transparent hover:border-accent/70 transition-colors",
    titleColor: "text-accent/90",
    side: "left",
  },
  other: {
    label: "Other / Cool stuff",
    dot: "w-2 h-2 bg-muted/30 border border-muted/50",
    card: "border border-dotted border-border/40 bg-transparent hover:border-border/70 transition-colors",
    titleColor: "text-text-dim",
    side: "left",
  },
};

// ─── MilestoneCard ────────────────────────────────────────────────────────────

function MilestoneCard({ m }: { m: Milestone }) {
  const [open, setOpen] = useState(false);
  const cfg = kindConfig[m.kind];

  if (m.placeholder) {
    return (
      <div className="border border-dotted border-border/15 rounded px-3 py-1.5 opacity-25 cursor-default select-none">
        <p className="font-mono text-xs text-muted italic truncate">{m.title}</p>
      </div>
    );
  }

  return (
    <div
      className={`rounded cursor-pointer ${cfg.card}`}
      onClick={() => setOpen((o) => !o)}
    >
      <div className="px-3 py-2 flex items-start justify-between gap-2">
        <p className={`font-display font-semibold text-sm leading-snug flex-1 min-w-0 ${cfg.titleColor} flex items-center gap-1 flex-wrap`}>
          {m.linkHref ? (
            <a
              href={m.linkHref}
              className="hover:text-accent transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {m.title}
            </a>
          ) : (
            m.title
          )}
          {m.linkHref && (
            <span className="text-muted/60 text-xs font-normal">↗</span>
          )}
        </p>
        <span className="font-mono text-xs text-muted/50 flex-shrink-0 mt-0.5 select-none">
          {open ? "−" : "+"}
        </span>
      </div>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "400px" : "0px" }}
      >
        <div className="px-3 pb-3 border-t border-border/20">
          <p className="font-body text-xs text-text-dim leading-relaxed mt-2">
            {m.description}
          </p>
          {m.note && (
            <div className="border-l-2 border-dashed border-muted/30 pl-3 mt-3">
              <p className="font-mono text-xs text-muted/70 italic leading-relaxed">
                {m.note}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">

      {/* Header */}
      <div className="mb-16 text-center">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
          // Career
        </p>
        <h1 className="font-display font-bold text-5xl md:text-7xl text-text mb-6">
          Timeline
        </h1>
        <p className="font-body text-text-dim text-base leading-relaxed max-w-xl mx-auto">
          From watching a documentary that changed my life to shipping
          multiplayer metaverses. Click any milestone to expand.
        </p>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-8 mb-14 font-mono text-xs text-muted flex-wrap">
        {(Object.entries(kindConfig) as [MilestoneKind, (typeof kindConfig)[MilestoneKind]][]).map(
          ([kind, cfg]) => (
            <span key={kind} className="flex items-center gap-2">
              <span className={`inline-block rounded-full flex-shrink-0 ${cfg.dot}`} style={{ width: 10, height: 10 }} />
              {cfg.label}
            </span>
          )
        )}
      </div>

      {/* Timeline */}
      <div className="relative">

        {/* Spine */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border bg-accent/30 -translate-x-1/2 z-0" />

        <div className="flex flex-col">
          {timeline.map((block) => {
            const leftMs = block.milestones.filter((m) => kindConfig[m.kind].side === "left");
            const rightMs = block.milestones.filter((m) => kindConfig[m.kind].side === "right");
            const rowCount = Math.max(leftMs.length, rightMs.length, 1);

            return (
              <div key={block.year}>

                {/* Year marker */}
                <div className="relative flex justify-center items-center z-10 py-5">
                  <div className="relative z-10 flex flex-col items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                    <span className="font-mono text-xs font-semibold text-accent bg-bg px-2.5 py-0.5 border border-accent/40 rounded-sm tracking-widest">
                      {block.year}
                    </span>
                  </div>
                </div>

                {/* Milestone rows */}
                {Array.from({ length: rowCount }).map((_, rowIdx) => {
                  const leftM = leftMs[rowIdx];
                  const rightM = rightMs[rowIdx];
                  const dotKind = leftM?.kind ?? rightM?.kind;
                  const dotCfg = kindConfig[dotKind];

                  return (
                    <div key={rowIdx} className="relative flex items-start mb-2.5">

                      {/* Left col */}
                      <div className="w-[calc(50%-18px)] pr-3 flex justify-end">
                        {leftM ? (
                          <div className="w-full max-w-[260px]">
                            <MilestoneCard m={leftM} />
                          </div>
                        ) : (
                          <div className="w-full max-w-[260px]" />
                        )}
                      </div>

                      {/* Center dot */}
                      <div className="flex-shrink-0 w-9 flex justify-center pt-2.5 z-10">
                        <div className={`rounded-full flex-shrink-0 ${dotCfg.dot}`} />
                      </div>

                      {/* Right col */}
                      <div className="w-[calc(50%-18px)] pl-3">
                        {rightM ? (
                          <div className="w-full max-w-[260px]">
                            <MilestoneCard m={rightM} />
                          </div>
                        ) : (
                          <div className="w-full max-w-[260px]" />
                        )}
                      </div>

                    </div>
                  );
                })}

              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="border border-border bg-surface p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-24">
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