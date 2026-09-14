import { useParams, Link } from "react-router-dom";
import { posts } from "../Data/posts.js";
import { PuzzleIcon, SpeechIcon, BookIcon } from "../Components/icons.jsx";

const iconMap = { puzzle: PuzzleIcon, speech: SpeechIcon, book: BookIcon };
const accentBg = {
  gold: "bg-gold/15 text-gold-dark",
  coral: "bg-coral/15 text-coral",
  indigo: "bg-sky text-indigo",
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="font-display text-2xl text-indigo mb-3">Article not found</h1>
        <p className="text-ink/70 mb-6">This post may have been moved or renamed.</p>
        <Link to="/blog" className="text-indigo font-semibold hover:underline">
          Back to the blog
        </Link>
      </div>
    );
  }

  const Icon = iconMap[post.icon] || BookIcon;
  const date = new Date(post.publishedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <article className="max-w-2xl mx-auto px-6 pt-16 pb-24">
      <Link to="/blog" className="text-indigo font-semibold hover:underline text-sm">
        ← Back to the blog
      </Link>

      <div className={`w-12 h-12 rounded-full flex items-center justify-center my-6 ${accentBg[post.accent] || accentBg.gold}`}>
        <Icon className="w-6 h-6" />
      </div>

      <h1 className="font-display text-3xl text-indigo mb-3 leading-tight">{post.title}</h1>
      <p className="text-ink/50 text-sm mb-8">{date} · {post.readingMinutes} min read</p>

      <div className="space-y-5 text-ink/80 leading-relaxed">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12 border-t border-sky-deep pt-8">
        <Link
          to="/contact"
          className="inline-block bg-gold hover:bg-gold-dark text-indigo font-semibold px-6 py-3 rounded-full transition-colors"
        >
          Talk to our team
        </Link>
      </div>
    </article>
  );
}
