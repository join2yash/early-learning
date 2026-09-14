import { Link } from "react-router-dom";
import { services } from "../data/services.js";
import { PuzzleIcon, SpeechIcon, BookIcon } from "../components/icons.jsx";

const iconMap = { puzzle: PuzzleIcon, speech: SpeechIcon, book: BookIcon };
const barColor = { puzzle: "bg-coral", speech: "bg-indigo", book: "bg-gold" };

const steps = [
  { title: "Initial conversation", detail: "We learn about your child and what brought you here." },
  { title: "Assessment", detail: "A closer look at strengths, needs, and goals." },
  { title: "Individualized plan", detail: "A plan built around your child, shared with your family." },
  { title: "Ongoing sessions & review", detail: "Regular sessions, with the plan adjusted as your child grows." },
];

export default function Services() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <p className="text-coral font-semibold mb-3">Our services</p>
        <h1 className="font-display text-4xl text-indigo mb-5 max-w-xl">
          Individualized support for every child's unique journey
        </h1>
        <p className="text-ink/70 max-w-xl leading-relaxed">
          Each area of care below is delivered one-to-one, and shaped around your child's
          own pace rather than a fixed program.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 space-y-10">
        {services.map((s) => {
          const Icon = iconMap[s.icon] || BookIcon;
          return (
            <div
              key={s.slug}
              id={s.slug}
              className="bg-white border border-sky-deep rounded-2xl overflow-hidden scroll-mt-24"
            >
              <div className={`h-1.5 ${barColor[s.icon] || "bg-gold"}`} />
              <div className="p-8 md:p-10 grid md:grid-cols-[auto,1fr] gap-8">
                <div className="w-14 h-14 rounded-full bg-sky flex items-center justify-center text-indigo shrink-0">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="font-display text-2xl text-indigo mb-1">{s.name}</h2>
                  <p className="text-coral font-medium mb-4">{s.tagline}</p>
                  <p className="text-ink/70 leading-relaxed mb-6 max-w-2xl">{s.description}</p>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-display text-base text-indigo mb-2">Who it's for</h3>
                      <ul className="space-y-1.5 text-ink/70 text-sm">
                        {s.whoItsFor.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-gold-dark">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-display text-base text-indigo mb-2">What to expect</h3>
                      <ul className="space-y-1.5 text-ink/70 text-sm">
                        {s.whatToExpect.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-gold-dark">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* How we work: a real sequence, so numbering earns its place */}
      <section className="bg-sky">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="font-display text-3xl text-indigo mb-10">How we work together</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.title}>
                <div className="w-9 h-9 rounded-full bg-indigo text-white flex items-center justify-center font-display text-sm mb-4">
                  {i + 1}
                </div>
                <h3 className="font-display text-lg text-indigo mb-2">{step.title}</h3>
                <p className="text-ink/70 text-sm leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="font-display text-2xl text-indigo mb-4">Have a question first?</h2>
        <p className="text-ink/70 mb-7">We're happy to talk it through before you decide anything.</p>
        <Link
          to="/contact"
          className="inline-block bg-gold hover:bg-gold-dark text-indigo font-semibold px-7 py-3.5 rounded-full transition-colors"
        >
          Book a Consultation
        </Link>
      </section>
    </div>
  );
}
