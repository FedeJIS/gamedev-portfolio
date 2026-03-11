import { posts } from "../page";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="max-w-7xl mx-auto px-8 pt-32 pb-24">
      <div className="max-w-5xl mx-auto">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors mb-12"
      >
        ← Back to blog
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <time className="font-mono text-xs text-muted">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric", month: "long", day: "numeric",
            })}
          </time>
          <span className="text-border">·</span>
          <span className="font-mono text-xs text-muted">{post.readTime}</span>
        </div>
        <h1 className="font-display font-bold text-4xl md:text-5xl text-text mb-4">
          {post.title}
        </h1>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="font-mono text-xs text-muted border border-border px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-border pt-8">
        <p className="font-body text-text-dim text-lg leading-relaxed mb-6">
          {post.excerpt}
        </p>
        <p className="font-body text-text-dim leading-relaxed mb-6">
          This is where your full blog post content goes. You can write it directly
          in this file, or (better) use MDX to write Markdown files that get rendered here.
        </p>
        <p className="font-body text-text-dim leading-relaxed">
          For a proper blog setup, consider adding the <code className="font-mono text-accent text-sm bg-surface px-1 py-0.5">next-mdx-remote</code> package
          so you can write posts as .mdx files without touching any code.
        </p>
      </div>
      </div>
    </div>
  );
}
