const skillGroups = [
  {
    category: "Core",
    skills: ["C#", "Unity", "Object-Oriented Design", "SOLID Principles", "Design Patterns"],
  },
  {
    category: "Gameplay",
    skills: ["Gameplay Systems", "Physics", "AI & Pathfinding", "Procedural Generation", "VFX / Shaders"],
  },
  {
    category: "VR / AR",
    skills: ["Meta Quest", "OpenXR", "Hand Tracking", "Spatial UI", "Performance Optimization"],
  },
  {
    category: "Tools & Pipeline",
    skills: ["Unity Editor Scripting", "Git / Version Control", "CI/CD", "Addressables", "ScriptableObjects"],
  },
  {
    category: "Web (Learning)",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Node.js"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-8 py-24 border-t border-border text-center">
      <div className="mb-14 flex flex-col items-center">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
          // What I work with
        </p>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-text">
          Skills & Tech
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="bg-surface border border-border p-6 hover:border-accent/30 transition-colors duration-300"
          >
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
              {group.category}
            </p>
            <ul className="flex flex-col gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />
                  <span className="font-body text-sm text-text-dim">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
