import { posts } from "../Data/posts.js";
import BlogCard from "../Components/BlogCard.jsx";

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-16 pb-20">
      <p className="text-coral font-semibold mb-3">Our blog</p>
      <h1 className="font-display text-4xl text-indigo mb-5 max-w-xl">
        Notes for parents, from our team
      </h1>
      <p className="text-ink/70 max-w-xl leading-relaxed mb-12">
        General information and everyday ideas — not a substitute for a professional
        evaluation. If something here raises a question about your own child, we're
        happy to talk it through.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
