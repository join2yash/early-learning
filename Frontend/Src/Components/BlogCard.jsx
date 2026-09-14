import { Link } from "react-router-dom";
import { PuzzleIcon, SpeechIcon, BookIcon } from "./icons.jsx";

const iconMap = { puzzle: PuzzleIcon, speech: SpeechIcon, book: BookIcon };
const accentBg = { gold: "bg-gold/15 text-gold-dark", coral: "bg-coral/15 text-coral", indigo: "bg-sky text-indigo" };

export default function BlogCard({ post }) {
  const Icon = iconMap[post.icon] || BookIcon;
  const date = new Date(post.publishedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col bg-white border border-sky-deep rounded-2xl p-7 hover:-translate-y-1 hover:shadow-lg transition-all"
    >
      <div className={`w-11 h-11 rounded-full flex items-center justify-center mb-4 ${accentBg[post.accent] || accentBg.gold}`}>
        <Icon className="w-5 h-5" />
      </div>
      <p className="text-xs text-ink/50 mb-2">{date} · {post.readingMinutes} min read</p>
      <h3 className="font-display text-lg text-indigo mb-2 leading-snug">{post.title}</h3>
      <p className="text-ink/70 text-sm leading-relaxed flex-1">{post.excerpt}</p>
      <span className="inline-block mt-4 text-indigo font-semibold group-hover:underline">
        Read the article
      </span>
    </Link>
  );
}
