import { Link } from "react-router-dom";
import { services } from "../Data/services.js";
import { posts } from "../Data/Posts.js";
import { SunriseHero, HeartIcon } from "../Components/Icons.jsx";
import ServiceCard from "../Components/ServiceCard.jsx";
import BlogCard from "../Components/BlogCard.jsx";

const pillars = [
  { label: "Understanding", detail: "We start by listening to your child and your family." },
  { label: "Support", detail: "Consistent, one-to-one attention at every session." },
  { label: "Growth", detail: "Plans that evolve as your child does." },
];

export default function Home() {
  const featuredServices = services.slice(0, 3);
  const featuredPosts = posts.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-14 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-coral font-semibold mb-3">Naveen Shahdara, Delhi</p>
          <h1 className="font-display text-4xl md:text-5xl text-indigo leading-tight mb-6">
            A brighter future for every child
          </h1>
          <p className="text-lg text-ink/70 max-w-md mb-8 leading-relaxed">
            Early Learning Point offers individualized ABA therapy, speech therapy, and
            special education support, built around your child's own pace and journey.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-gold hover:bg-gold-dark text-indigo font-semibold px-7 py-3.5 rounded-full transition-colors"
            >
              Book a Consultation
            </Link>
            <Link
              to="/services"
              className="border-2 border-indigo text-indigo font-semibold px-7 py-3.5 rounded-full hover:bg-indigo hover:text-white transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
        <SunriseHero className="w-full max-w-md mx-auto" />
      </section>

      {/* Pillars */}
      <section className="bg-sky">
        <div className="max-w-6xl mx-auto px-6 py-14 grid sm:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div key={p.label} className="flex items-start gap-3">
              <HeartIcon className="w-6 h-6 text-coral shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg text-indigo mb-1">{p.label}</h3>
                <p className="text-ink/70 text-sm leading-relaxed">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-10">
          <h2 className="font-display text-3xl text-indigo mb-3">Our services</h2>
          <p className="text-ink/70 leading-relaxed">
            Every plan is individualized support for your child's unique journey, across
            three areas of care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      {/* Blog preview */}
      <section className="bg-sky">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <h2 className="font-display text-3xl text-indigo mb-3">From our blog</h2>
              <p className="text-ink/70 max-w-md">
                Practical notes for parents, written by our team.
              </p>
            </div>
            <Link to="/blog" className="text-indigo font-semibold hover:underline">
              View all articles
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-indigo">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="font-display text-3xl text-white mb-4">
            Let's support your child's journey together
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
            Reach out for a first conversation about your child's behavioral and
            developmental needs. No pressure, just a starting point.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-indigo font-semibold px-8 py-3.5 rounded-full transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
