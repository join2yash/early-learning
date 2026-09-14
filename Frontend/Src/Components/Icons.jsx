// ============================================================
// Early Learning Point
// Central SVG icon system
// ============================================================

/* ============================================================
   SERVICE ICONS
============================================================ */

export function PuzzleIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M18 7h7.5a3.5 3.5 0 0 1 3.5 3.5v3.2a3.2 3.2 0 1 0 6.4 0v-1.2H38a3 3 0 0 1 3 3V23h-4.2a3.2 3.2 0 1 0 0 6.4H41v6.1a3 3 0 0 1-3 3h-8.1v-3.2a3.2 3.2 0 1 0-6.4 0v3.2H16a3 3 0 0 1-3-3v-7.1h3.2a3.2 3.2 0 1 0 0-6.4H13v-8.9a3 3 0 0 1 3-3h2Z"
        fill="currentColor"
      />
    </svg>
  );
}


/* ============================================================
   SPEECH
============================================================ */

export function SpeechIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 10.5A4.5 4.5 0 0 1 13.5 6h21a4.5 4.5 0 0 1 4.5 4.5v16a4.5 4.5 0 0 1-4.5 4.5H23l-8.2 7v-7h-1.3A4.5 4.5 0 0 1 9 26.5v-16Z"
        fill="currentColor"
      />

      <circle cx="18" cy="18.5" r="2" fill="white" />
      <circle cx="24" cy="18.5" r="2" fill="white" />
      <circle cx="30" cy="18.5" r="2" fill="white" />
    </svg>
  );
}


/* ============================================================
   BOOK
============================================================ */

export function BookIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 12.5c-3.3-3-7.4-4.5-12.3-4.5C9.1 8 7 10.1 7 12.7v23.1c0 2.2 2 3.8 4.1 3.4 4.9-.9 9.2.2 12.9 3.2 3.7-3 8-4.1 12.9-3.2 2.1.4 4.1-1.2 4.1-3.4V12.7C41 10.1 38.9 8 36.3 8c-4.9 0-9 1.5-12.3 4.5Z"
        fill="currentColor"
      />

      <path
        d="M24 13v25.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}


/* ============================================================
   HEART
============================================================ */

export function HeartIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 39S8 29.4 8 18.7C8 13.7 11.8 10 16.6 10c3.1 0 5.8 1.7 7.4 4.5 1.6-2.8 4.3-4.5 7.4-4.5C36.2 10 40 13.7 40 18.7 40 29.4 24 39 24 39Z"
        fill="currentColor"
      />
    </svg>
  );
}


/* ============================================================
   PHONE
============================================================ */

export function PhoneIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.7 10.4c1.4 2.8 3.9 5.3 6.7 6.7l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11 21 3 13 3 3.6c0-.6.4-1 1-1h3.8c.6 0 1 .4 1 1 0 1.2.2 2.5.6 3.7.1.4 0 .8-.3 1.1l-2.4 2Z"
        fill="currentColor"
      />
    </svg>
  );
}


/* ============================================================
   LOCATION PIN
============================================================ */

export function PinIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 21.5s7-7.1 7-12.1a7 7 0 1 0-14 0c0 5 7 12.1 7 12.1Z"
        fill="currentColor"
      />

      <circle
        cx="12"
        cy="9.4"
        r="2.4"
        fill="white"
      />
    </svg>
  );
}


/* ============================================================
   ARROWS
============================================================ */

export function ArrowRightIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 12h15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="m13 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


export function ArrowUpRightIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


export function ChevronDownIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


/* ============================================================
   CHECK
============================================================ */

export function CheckIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m5 12.5 4.2 4.2L19 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


/* ============================================================
   SPARKLE
============================================================ */

export function SparkleIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2.5 13.8 9l6.2 3-6.2 1.8L12 20.5l-1.8-6.7L4 12l6.2-3L12 2.5Z"
        fill="currentColor"
      />

      <path
        d="m19 17 .7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z"
        fill="currentColor"
      />
    </svg>
  );
}


/* ============================================================
   MENU
============================================================ */

export function MenuIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}


/* ============================================================
   CLOSE
============================================================ */

export function CloseIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}


/* ============================================================
   LOGO
============================================================ */

export function LogoMark({ className = "w-10 h-10" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="32"
        cy="32"
        r="30"
        fill="#EAF4FB"
      />

      {/* Sunrise */}
      <path
        d="M32 6v7"
        stroke="#F4B740"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="m17 12 5 5"
        stroke="#F4B740"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="m47 12-5 5"
        stroke="#F4B740"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M10 28h7"
        stroke="#F4B740"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M54 28h-7"
        stroke="#F4B740"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Puzzle */}
      <path
        d="M19 22h8a5 5 0 1 1 10 0h8v8a5 5 0 1 0 0 10v5h-9a5 5 0 1 1-10 0h-7v-9a5 5 0 1 0 0-10v-4Z"
        fill="#17324D"
      />

      {/* Heart */}
      <path
        d="M32 41s-4.5-2.8-4.5-5.7c0-1.5 1-2.6 2.4-2.6.9 0 1.7.5 2.1 1.2.4-.7 1.2-1.2 2.1-1.2 1.4 0 2.4 1.1 2.4 2.6 0 2.9-4.5 5.7-4.5 5.7Z"
        fill="#F4B740"
      />
    </svg>
  );
}


/* ============================================================
   HERO ILLUSTRATION
============================================================ */

export function SunriseHero({ className = "w-full h-auto" }) {
  return (
    <svg
      viewBox="0 0 520 470"
      className={className}
      role="img"
      aria-label="Illustration representing learning, communication and growth"
    >

      {/* Background */}
      <circle
        cx="260"
        cy="235"
        r="205"
        fill="#EAF4FB"
      />

      {/* Decorative stars */}
      <path
        d="m92 122 4 11 11 4-11 4-4 11-4-11-11-4 11-4 4-11Z"
        fill="#EF8354"
      />

      <path
        d="m424 125 3 9 9 3-9 3-3 9-3-9-9-3 9-3 3-9Z"
        fill="#F4B740"
      />

      <circle
        cx="120"
        cy="218"
        r="5"
        fill="#8EBD9E"
      />

      <circle
        cx="408"
        cy="215"
        r="5"
        fill="#EF8354"
      />

      {/* Sun */}
      <circle
        cx="260"
        cy="190"
        r="77"
        fill="#F4B740"
      />

      {/* Sun face */}
      <circle
        cx="234"
        cy="181"
        r="5"
        fill="#17324D"
      />

      <circle
        cx="286"
        cy="181"
        r="5"
        fill="#17324D"
      />

      <path
        d="M242 204c10 9 26 9 36 0"
        stroke="#17324D"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Sun rays */}
      <path
        d="M260 87V63"
        stroke="#F4B740"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <path
        d="m195 105-16-16"
        stroke="#F4B740"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <path
        d="m325 105 16-16"
        stroke="#F4B740"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Back hill */}
      <path
        d="M30 343c62-61 127-74 190-39 55 31 112 40 178 2 35-20 62-22 92-13v96H30v-46Z"
        fill="#D6E9DF"
      />

      {/* Front hill */}
      <path
        d="M0 365c72-51 140-48 205-9 66 40 123 43 184 4 49-31 86-35 131-16v126H0V365Z"
        fill="#17324D"
      />

      {/* Puzzle circle */}
      <circle
        cx="102"
        cy="306"
        r="32"
        fill="white"
      />

      <circle
        cx="102"
        cy="306"
        r="25"
        fill="#F8DDD3"
      />

      <path
        d="M91 294h8a5 5 0 1 1 10 0h8v8a5 5 0 1 0 0 10v5h-9a5 5 0 1 1-10 0h-7v-9a5 5 0 1 0 0-10v-4Z"
        fill="#EF8354"
      />

      {/* Speech circle */}
      <circle
        cx="260"
        cy="382"
        r="32"
        fill="white"
      />

      <circle
        cx="260"
        cy="382"
        r="25"
        fill="#DCEEF5"
      />

      <path
        d="M246 370a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3h-9l-6 5v-5h-7a3 3 0 0 1-3-3v-13Z"
        fill="#17324D"
      />

      <circle
        cx="255"
        cy="376"
        r="1.5"
        fill="white"
      />

      <circle
        cx="260"
        cy="376"
        r="1.5"
        fill="white"
      />

      <circle
        cx="265"
        cy="376"
        r="1.5"
        fill="white"
      />

      {/* Book circle */}
      <circle
        cx="418"
        cy="306"
        r="32"
        fill="white"
      />

      <circle
        cx="418"
        cy="306"
        r="25"
        fill="#FFF0C9"
      />

      <path
        d="M418 294c-4-3-8-4-12-4-2 0-4 2-4 4v17c0 2 2 3 4 3 4-1 8 0 12 3 4-3 8-4 12-3 2 0 4-1 4-3v-17c0-2-2-4-4-4-4 0-8 1-12 4Z"
        fill="#A06E12"
      />

      <path
        d="M418 294v20"
        stroke="white"
        strokeWidth="1.7"
      />

      {/* Small flowers */}
      <circle
        cx="130"
        cy="374"
        r="5"
        fill="#F4B740"
      />

      <circle
        cx="141"
        cy="374"
        r="5"
        fill="#EF8354"
      />

      <circle
        cx="390"
        cy="371"
        r="5"
        fill="#8EBD9E"
      />

      <circle
        cx="401"
        cy="371"
        r="5"
        fill="#F4B740"
      />

    </svg>
  );
}
