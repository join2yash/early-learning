import { Link } from "react-router-dom";
import { PuzzleIcon, SpeechIcon, BookIcon } from "./icons.jsx";

const iconMap = {
  puzzle: PuzzleIcon,
  speech: SpeechIcon,
  book: BookIcon,
};

const barColor = {
  puzzle: "bg-coral",
  speech: "bg-indigo",
  book: "bg-gold",
};

export default function ServiceCard({ service, compact = false }) {
  const Icon = iconMap[service.icon] || BookIcon;

  return (
    <Link
      to={`/services#${service.slug}`}
      className="group block bg-white border border-sky-deep rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all"
    >
      <div className={`h-1.5 ${barColor[service.icon] || "bg-gold"}`} />
      <div className="p-7">
        <div className="w-12 h-12 rounded-full bg-sky flex items-center justify-center text-indigo mb-4">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="font-display text-xl text-indigo mb-1">{service.name}</h3>
        <p className="text-sm text-coral font-medium mb-3">{service.tagline}</p>
        {!compact && <p className="text-ink/70 leading-relaxed">{service.summary}</p>}
        <span className="inline-block mt-4 text-indigo font-semibold group-hover:underline">
          Learn more
        </span>
      </div>
    </Link>
  );
}
