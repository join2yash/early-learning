import { Link } from "react-router-dom";
import { LogoMark, PhoneIcon, PinIcon, HeartIcon } from "./icons.jsx";

export default function Footer() {
  return (
    <footer className="bg-indigo text-white">
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <LogoMark className="w-10 h-10" />
            <span className="font-display text-lg">Early Learning Point</span>
          </div>
          <p className="text-white/70 max-w-xs">
            Understanding, support, and growth for every child's unique journey.
          </p>
        </div>

        <div>
          <h3 className="font-display text-base mb-3 text-gold">Explore</h3>
          <ul className="space-y-2 text-white/80">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base mb-3 text-gold">Reach us</h3>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-gold" />
              <a href="tel:+917838553575" className="hover:text-white">78385 53575</a>
            </li>
            <li className="flex items-center gap-2">
              <PinIcon className="w-4 h-4 text-gold" />
              <span>Naveen Shahdara, Delhi</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 px-6 text-center text-white/60 text-sm flex items-center justify-center gap-1.5">
        <span>Made with care for every child</span>
        <HeartIcon className="w-4 h-4 text-coral" />
      </div>
    </footer>
  );
}
