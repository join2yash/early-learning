import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  LogoMark,
  MenuIcon,
  CloseIcon,
  ArrowRightIcon,
} from "./Icons.jsx";


const links = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/Services",
    label: "Services",
  },
  {
    to: "/Blog",
    label: "Resources",
  },
  {
    to: "/Contact",
    label: "Contact",
  },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);


  const closeMenu = () => {
    setOpen(false);
  };


  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">

      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        <div className="h-[76px] flex items-center justify-between">


          {/* ==================================================
              BRAND
          ================================================== */}

          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 group"
          >

            <LogoMark
              className="
                w-11 h-11
                transition-transform duration-200
                group-hover:-rotate-3
              "
            />

            <span
              className="
                font-display
                text-[18px]
                leading-[0.95]
                font-bold
                text-indigo
              "
            >
              Early Learning
              <br />
              <span className="text-coral">
                Point
              </span>
            </span>

          </Link>


          {/* ==================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav className="hidden md:flex items-center gap-1">

            {links.map((link) => (

              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `
                  relative
                  px-4
                  py-2.5
                  rounded-full
                  text-sm
                  font-semibold
                  transition-all
                  duration-200

                  ${
                    isActive
                      ? "text-indigo bg-sky"
                      : "text-ink/65 hover:text-indigo hover:bg-sky/70"
                  }
                  `
                }
              >
                {link.label}
              </NavLink>

            ))}

          </nav>


          {/* ==================================================
              DESKTOP CTA
          ================================================== */}

          <Link
            to="/contact"
            className="
              hidden
              md:inline-flex
              items-center
              gap-2
              bg-gold
              hover:bg-gold-dark
              text-indigo
              font-bold
              text-sm
              px-5
              py-3
              rounded-full
              shadow-sm
              hover:shadow-md
              transition-all
              duration-200
              hover:-translate-y-0.5
            "
          >
            Book a consultation

            <ArrowRightIcon
              className="w-4 h-4"
            />
          </Link>


          {/* ==================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="
              md:hidden
              flex
              items-center
              justify-center
              w-11
              h-11
              rounded-full
              text-indigo
              bg-sky
              hover:bg-sky-deep
              transition-colors
            "
            aria-label={
              open
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >

            {open ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}

          </button>

        </div>


        {/* ==================================================
            MOBILE NAVIGATION
        ================================================== */}

        <div
          id="mobile-navigation"
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-200
            ${
              open
                ? "max-h-[420px] opacity-100 pb-5"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <nav
            className="
              rounded-2xl
              bg-cream
              border
              border-slate-200/70
              p-2
              mb-4
            "
          >

            {links.map((link) => (

              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  justify-between
                  px-4
                  py-3.5
                  rounded-xl
                  text-sm
                  font-semibold
                  transition-colors

                  ${
                    isActive
                      ? "text-indigo bg-white shadow-sm"
                      : "text-ink/70 hover:text-indigo hover:bg-white/70"
                  }
                  `
                }
              >

                {link.label}

                <ArrowRightIcon className="w-4 h-4 opacity-50" />

              </NavLink>

            ))}


            <Link
              to="/contact"
              onClick={closeMenu}
              className="
                flex
                items-center
                justify-center
                gap-2
                mt-2
                px-4
                py-3.5
                rounded-xl
                bg-gold
                text-indigo
                text-sm
                font-bold
              "
            >
              Book a consultation
              <ArrowRightIcon className="w-4 h-4" />
            </Link>

          </nav>

        </div>

      </div>

    </header>
  );
}
