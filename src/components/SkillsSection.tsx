const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["C#", "Java", "C++", "Python", "PostgreSQL"],
  },
  {
    category: "Game Engines",
    skills: ["Unity", "Unreal Engine 5", "Game Maker", "Construct", "PyGame"],
  },
  {
    category: "Architecture", 
    skills: ["SOLID Principles", "Clean Architecture", "Design Patterns", "Object-Oriented Design", "Dependency Injection"],
  },
  {
    category: "Tools & Pipeline",
    skills: ["SmartFox", "Unity Editor Scripting", "Git", "AWS", "Unity Cloud Build"],
  },
  {
    category: "Methodology",
    skills: ["Agile", "Technical Leadership", "Technical Documentation", "Project Planning", "Cross-Disciplinary Collaboration"],
  },
  {
    category: "Professional Principles",
    skills: [
      "Technical Stewardship", 
      "Methodological Rigor",
      "Knowledge Sharing", 
      "K.I.S.S", 
      "Pragmatic Problem-Solving"
    ],
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-8 py-24 border-t border-border text-center">
      <div className="mb-14 flex flex-col items-center">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
          // Professional DNA
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
