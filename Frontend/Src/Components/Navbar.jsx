import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LogoMark } from "./Icons.jsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-sky-deep">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <LogoMark className="w-11 h-11" />
          <span className="font-display text-xl text-indigo leading-tight">
            Early Learning
            <br className="hidden sm:block" /> Point
          </span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive ? "text-indigo" : "text-ink/70 hover:text-indigo"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="bg-gold hover:bg-gold-dark text-indigo font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Book a Consultation
          </NavLink>
        </nav>

        <button
          className="md:hidden p-2 text-indigo"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-1 px-6 pb-5 bg-white border-t border-sky-deep">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-2.5 font-medium ${isActive ? "text-indigo" : "text-ink/70"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
