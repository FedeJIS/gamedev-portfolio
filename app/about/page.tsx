"use client";

import { useState } from "react";

type JobEntry = {
  type: "job";
  year: string;
  title: string;
  description: string;
  note?: string;
  side?: { title: string; desc: string };
  linkHref?: string;
};

type YearMarker = {
  type: "year";
  year: string;
};

type TimelineEntry = JobEntry | YearMarker;

const timeline: TimelineEntry[] = [
  { type: "year", year: "2014" },
  {
    type: "job",
    year: "",
    title: "The Spark",
    description:
      "Watched 'Indie Game: The Movie' and it changed everything. I realized games weren't just magic, they were systems I could build. Haven't stopped since.",
  },
  { type: "year", year: "2016" },
  {
    type: "job",
    year: "",
    title: "Systems Engineering at UNICEN",
    description:
      "Started my degree with a single goal: becoming a professional game dev. My thesis was a Systematic Literature Review of Agile methodologies in Game Development.",
    note: "I made a deal with myself: every project, when possible, had to be a game. I wasn't just studying; I was building the foundation of my career in secret.",
    side: {
      title: "Indie prototypes (self-taught)",
      desc: "Unity from scratch, nights and weekends. Dozens of abandoned prototypes that taught more than any class.",
    },
  },
  { type: "year", year: "2019" },
  {
    type: "job",
    year: "",
    title: "Game Jam Tandil — Organizer & Dev",
    description:
      "Organized and competed in Game Jam Tandil 2019. Built a complete game in 48 hours and helped run the whole event.",
    note: "Organizing a jam teaches you more about game dev than any tutorial ever could.",
    side: {
      title: "Thesis: Agile in Game Dev (SLR)",
      desc: "Systematic Literature Review on Agile methodologies applied to game development.",
    },
  },
  { type: "year", year: "2020" },
  {
    type: "job",
    year: "",
    title: "Globant | Unreal Game Developer",
    description:
      "The 'Hello World' of my professional career. Led an internal demo from scratch in Unreal Engine. Finally, I wasn't just making games, I was a Game Developer.",
    note: "Also shipped a secure .NET desktop app at SMB. Full stack before I even knew what that meant.",
    side: {
      title: "Freelance: .NET desktop app @ SMB",
      desc: "Built and shipped a secure internal desktop application. First taste of full-stack outside game dev.",
    },
  },
  { type: "year", year: "2021" },
  {
    type: "job",
    year: "",
    title: "Geta Club | Unity Engineer",
    description:
      "First time working for a studio in Dubai. A crazy year shipping features while collaborating with a distributed international team.",
    note: "'Hey kiddo, you can handle this, right? We need a custom Puzzle Editor built from scratch.' I built it and I realized I could hold my own in any global team.",
    side: {
      title: "First distributed int'l team",
      desc: "Collaborating across timezones and cultures. Learned to communicate clearly and ship reliably without being in the same room.",
    },
  },
  { type: "year", year: "2022" },
  {
    type: "job",
    year: "",
    title: "Widow Games | Ssr. Unity Engineer",
    description:
      "The year I dove deep into the bridge between client and backend. Working on Geopoly, I mastered the patterns that keep global live games stable.",
    side: {
      title: "Freelance: AR + Mayo Clinics sim",
      desc: "Built interactive AR experiences and a medical training simulator for Mayo Clinics at Tuxdi Digital.",
    },
    linkHref: "/projects/geopoly",
  },
  { type: "year", year: "2023" },
  {
    type: "job",
    year: "",
    title: "Zynga | Sr. Unity Engineer",
    description:
      "A full-circle moment. From playing Zynga games on Facebook as a kid to developing systems for Game of Thrones: Legends as a Senior Dev.",
    note: "First time working at a AAA-adjacent studio. The scale of a live game with millions of players changes how you think about every line of code.",
    side: {
      title: "Freelance: Bit Heroes Quest",
      desc: "Modernized legacy systems and shipped revenue-driving features for Monumental's high-traffic live-service title.",
    },
    linkHref: "/projects/zynga",
  },
  { type: "year", year: "2024" },
  {
    type: "job",
    year: "",
    title: "Pepecoin | Sr. Unity Engineer",
    description:
      "Summoned to build a multiplayer social ecosystem from scratch. I architected the client-server sync for a meme-world metaverse, proving that speed and clean architecture can coexist.",
    note: "Ended up building core systems: isometric pathfinding, isometric NFT billboards, NFT minting, blockchain integration, multiplayer layer. All in Unity. Wild year.",
    side: {
      title: "Indie: Hell Squad dev begins",
      desc: "Started serious development on Hell Squad, a bizarro multiversal roguelite top-down shooter. Full GDD, systems design, complete rework.",
    },
    linkHref: "/projects/pepecoin",
  },
  { type: "year", year: "2026" },
  {
    type: "job",
    year: "",
    title: "Now — open to next chapter",
    description:
      "Open to freelance projects and interesting full-time opportunities. 6 years of live-service, AAA-adjacent, and indie experience — ready to bring that to something new.",
    side: {
      title: "Hell Squad — active development",
      desc: "Actively building Hell Squad alongside professional work. Characters, zones, ability kits — the whole thing.",
    },
  },
  { type: "year", year: "2027" },
  {
    type: "job",
    year: "",
    title: "Now — open to next chapter",
    description:
      "Open to freelance projects and interesting full-time opportunities. 6 years of live-service, AAA-adjacent, and indie experience — ready to bring that to something new.",
    side: {
      title: "Hell Squad — active development",
      desc: "Actively building Hell Squad alongside professional work. Characters, zones, ability kits — the whole thing.",
    },
  },
];

function JobNode({ entry }: { entry: JobEntry }) {
  const [open, setOpen] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);
  const isMajor = !!entry.linkHref || ["Globant | Unreal Game Developer", "Geta Club | Unity Engineer", "Widow Games | Ssr. Unity Engineer", "Zynga | Sr. Unity Engineer", "Pepecoin | Sr. Unity Engineer"].includes(entry.title);

  return (
    <div className="relative flex items-start" style={{ minHeight: "48px" }}>
      {/* Left side branch */}
      {entry.side && (
        <div className="w-[calc(50%-20px)] pr-3 flex justify-end">
          <div
            className="border border-dashed border-border/40 rounded cursor-pointer w-full max-w-xs"
            onClick={() => setSideOpen((s) => !s)}
          >
            <div className="px-3 py-2">
              <p className="font-mono text-xs text-muted text-right leading-snug">
                {entry.side.title}
              </p>
            </div>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: sideOpen ? "200px" : "0px" }}
            >
              <div className="px-3 pb-2 border-t border-dashed border-border/30">
                <p className="font-mono text-xs text-muted/60 italic leading-relaxed mt-2 text-right">
                  {entry.side.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer if no side */}
      {!entry.side && <div className="w-[calc(50%-20px)]" />}

      {/* Center dot */}
      <div className="flex-shrink-0 w-10 flex justify-center pt-2.5 z-10">
        <div
          className={`rounded-full border-2 ${
            isMajor
              ? "w-3 h-3 border-accent bg-bg"
              : "w-2.5 h-2.5 border-border bg-bg"
          }`}
        />
      </div>

      {/* Right main node */}
      <div className="w-[calc(50%-20px)] pl-0">
        <div
          className={`border rounded cursor-pointer transition-colors ${
            entry.linkHref
              ? "border-border/60 bg-surface hover:border-accent/40"
              : isMajor
              ? "border-border/40 bg-surface"
              : "border-border/20 bg-transparent"
          }`}
          onClick={() => setOpen((o) => !o)}
        >
          <div className="px-3 py-2">
            <span className="font-mono text-xs text-accent block mb-0.5">
              {entry.year}
            </span>
            <p className="font-display font-semibold text-sm text-text leading-snug flex items-center gap-1">
              {entry.linkHref ? (
                <a
                  href={entry.linkHref}
                  className="hover:text-accent transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {entry.title}
                </a>
              ) : (
                entry.title
              )}
              {entry.linkHref && (
                <span className="text-muted text-xs font-normal">↗</span>
              )}
            </p>
          </div>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: open ? "400px" : "0px" }}
          >
            <div className="px-3 pb-3 border-t border-border/20">
              <p className="font-body text-xs text-text-dim leading-relaxed mt-2">
                {entry.description}
              </p>
              {entry.note && (
                <div className="border-l-2 border-dashed border-muted/30 pl-3 mt-3">
                  <p className="font-mono text-xs text-muted/70 italic leading-relaxed">
                    {entry.note}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 pt-32 pb-24">
      {/* Header */}
      <div className="mb-16 text-center">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
          // Career
        </p>
        <h1 className="font-display font-bold text-5xl md:text-7xl text-text mb-6">
          Timeline
        </h1>
        <p className="font-body text-text-dim text-base leading-relaxed max-w-xl mx-auto">
          From watching a documentary that changed my life to shipping multiplayer metaverses — click any node to expand.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Spine */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/30 -translate-x-1/2" />

        <div className="flex flex-col gap-3">
          {timeline.map((entry, i) => {
            if (entry.type === "year") {
              return (
                <div key={i} className="relative flex justify-center z-10 py-1">
                  <span className="font-mono text-xs text-accent/80 bg-bg px-2">
                    {entry.year}
                  </span>
                </div>
              );
            }
            return <JobNode key={i} entry={entry} />;
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