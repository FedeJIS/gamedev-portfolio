export const posts = [
  {
    slug: "unity-state-machines",
    title: "Building Scalable State Machines in Unity",
    date: "2024-11-15",
    tags: ["Unity", "C#", "Architecture"],
    excerpt:
      "How I stopped writing spaghetti animation controllers and started using a proper hierarchical state machine pattern for game entities.",
    readTime: "8 min read",
  },
  {
    slug: "vr-interaction-design",
    title: "What VR Taught Me About Game Feel",
    date: "2024-09-02",
    tags: ["VR", "Design"],
    excerpt:
      "In flat-screen games you can fake a lot. In VR, players call your bluff. Here's what I learned about interaction design after shipping two VR titles.",
    readTime: "6 min read",
  },
  {
    slug: "custom-editor-tools",
    title: "Unity Editor Tools That Actually Save Time",
    date: "2024-06-20",
    tags: ["Unity", "Tools", "C#"],
    excerpt:
      "The specific editor scripts and custom inspectors that cut iteration time in half on our last project.",
    readTime: "10 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 pt-32 pb-24">
      <div className="mb-16">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
          // Thoughts, breakdowns, devlogs
        </p>
        <h1 className="font-display font-bold text-5xl md:text-7xl text-text">
          Blog
        </h1>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col divide-y divide-border">
        {posts.map((post) => (
          <article key={post.slug} className="py-10 group">
            <div className="flex items-center gap-4 mb-3">
              <time className="font-mono text-xs text-muted">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric", month: "long", day: "numeric",
                })}
              </time>
              <span className="text-border">·</span>
              <span className="font-mono text-xs text-muted">{post.readTime}</span>
            </div>

            <h2 className="font-display font-bold text-2xl text-text group-hover:text-accent transition-colors mb-3">
              <a href={`/blog/${post.slug}`}>{post.title}</a>
            </h2>

            <p className="font-body text-text-dim text-sm leading-relaxed mb-4 max-w-none">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="font-mono text-xs text-muted border border-border px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
