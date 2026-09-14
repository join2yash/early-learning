// ============================================================
// Early Learning Point — Icon System
// ============================================================
// All icons are hand-built SVGs.
// They share the same rounded, friendly visual language.
// No external icon library is required.
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
        d="M18 7h7.5a3.5 3.5 0 0 1 3.5 3.5v3.2a3.2 3.2 0 1 0 6.4 0v-1.2H38a3 3 0 0 1 3 3V23h-4.2a3.2 3.2 0 1 0 0 6.4H41v6.1a3 3 0 0 1-3 3h-8.1v-3.2a3.2 3.2 0 1 0-6.4 0v3.2H16a3 3 0 0 1-3-3v-7.1h3.2a3.2 3.2 0 1 0 0-6.4H13v-8.9a3 3 0 0 1 3-3H18Z"
        fill="currentColor"
      />
    </svg>
  );
}


export function SpeechIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 10.5A4.5 4.5 0 0 1 13.5 6h21A4.5 4.5 0 0 1 39 10.5v16A4.5 4.5 0 0 1 34.5 31H23l-8.2 7v-7h-1.3A4.5 4.5 0 0 1 9 26.5v-16Z"
        fill="currentColor"
      />

      <circle
        cx="18"
        cy="18.5"
        r="2"
        fill="white"
      />

      <circle
        cx="24"
        cy="18.5"
        r="2"
        fill="white"
      />

      <circle
        cx="30"
        cy="18.5"
        r="2"
        fill="white"
      />
    </svg>
  );
}


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

      <path
        d="M13 14.5c3.2 0 6.2.8 8.8 2.4M39 14.5c-3.2 0-6.2.8-8.8 2.4"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity=".7"
      />
    </svg>
  );
}


/* ============================================================
   GENERAL / SUPPORT ICONS
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
        d="M24 39S8 29.4 8 18.7C8 13.7 11.8 10 16.6 10c3.1 0 5.8 1.7 7.4 4.5C25.6 11.7 28.3 10 31.4 10 36.2 10 40 13.7 40 18.7 40 29.4 24 39 24 39Z"
        fill="currentColor"
      />
    </svg>
  );
}


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
   NAVIGATION ICONS
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
   STATUS / DECORATIVE ICONS
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
   MOBILE MENU
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
   BRAND
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

      {/* Sunrise rays */}
      <path
        d="M32 5v8"
        stroke="#F4B740"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      <path
        d="m16.5 11.5 5.3 5.3"
        stroke="#F4B740"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      <path
        d="m47.5 11.5-5.3 5.3"
        stroke="#F4B740"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      <path
        d="M9 28h8"
        stroke="#F4B740"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      <path
        d="M55 28h-8"
        stroke="#F4B740"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* Main puzzle shape */}
      <path
        d="M19 22h8.2a4.8 4.8 0 1 1 9.6 0H45v8.2a4.8 4.8 0 1 
