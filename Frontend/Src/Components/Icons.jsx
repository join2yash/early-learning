// Original, hand-built SVG icons and illustrations for Early Learning Point.
// No photographs or third-party artwork are used.

export function PuzzleIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 10h8a2 2 0 0 1 2 2v3.2a3.2 3.2 0 1 0 0 6.4V25a2 2 0 0 1-2 2h-3.2a3.2 3.2 0 1 1-6.4 0H11a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3.2a3.2 3.2 0 1 0 6.4 0V12a2 2 0 0 1 2-2Z"
        transform="translate(2 3)"
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
        d="M9 12a4 4 0 0 1 4-4h22a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H21l-7 6v-6h-1a4 4 0 0 1-4-4V12Z"
        fill="currentColor"
      />

      <circle cx="18" cy="19" r="1.8" fill="white" />
      <circle cx="24" cy="19" r="1.8" fill="white" />
      <circle cx="30" cy="19" r="1.8" fill="white" />
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
        d="M24 14c-2.8-2.4-6.6-3.6-11.5-3.6-1.4 0-2.5 1-2.5 2.4v19.6c0 1.1.9 1.8 2 1.7 4.4-.5 8.3.6 12 3.4 3.7-2.8 7.6-3.9 12-3.4 1.1.1 2-.6 2-1.7V12.8c0-1.4-1.1-2.4-2.5-2.4-4.9 0-8.7 1.2-11.5 3.6Z"
        fill="currentColor"
      />

      <path
        d="M24 14v20"
        stroke="white"
        strokeWidth="1.6"
      />
    </svg>
  );
}


export function HeartIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 38S8 28.5 8 18.5C8 13.8 11.8 10 16.5 10c3 0 5.7 1.6 7.5 4.3 1.8-2.7 4.5-4.3 7.5-4.3C36.2 10 40 13.8 40 18.5 40 28.5 24 38 24 38Z"
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
        d="M6.6 10.8c1.4 2.7 3.9 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11 21 3 13 3 4.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z"
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
        d="M12 22s7-7.3 7-12.5A7 7 0 0 0 5 9.5C5 14.7 12 22 12 22Z"
        fill="currentColor"
      />

      <circle
        cx="12"
        cy="9.5"
        r="2.5"
        fill="white"
      />
    </svg>
  );
}


export function LogoMark({ className = "w-10 h-10" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="32"
        cy="32"
        r="30"
        fill="#EAF4FB"
      />

      <path
        d="M32 4c1.5 3.6 1.5 7 0 10M46 9c-.6 3.8-2.4 6.7-5.2 8.7M56 22c-3.4 1.5-7 1.7-10.4.6M60 38c-3.7-.7-6.8-2.4-9-5.1"
        stroke="#F4B740"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      <g transform="translate(16 16)">
        <path
          d="M16 4c-2 0-3.7 1.5-3.7 3.7v3.6c-2-.6-4 .9-4 3s2 3.6 4 3v3.7c0 2 1.7 3.7 3.7 3.7h4c1 3 3.6 5 6.7 5 3.7 0 6.7-3 6.7-6.7 0-.6-.1-1.1-.2-1.6a3.7 3.7 0 1 0 0-7.4c.1-.5.2-1 .2-1.6 0-3.7-3-6.7-6.7-6.7-3.1 0-5.7 2-6.7 5h-4Z"
          fill="#1D3557"
        />
      </g>
    </svg>
  );
}


// Existing hero illustration.
export function SunriseHero({ className = "w-full h-auto" }) {
  return (
    <svg
      viewBox="0 0 420 420"
      className={className}
      role="img"
      aria-label="Illustration representing early learning, communication and growth"
    >
      <circle
        cx="210"
        cy="210"
        r="190"
        fill="#EAF4FB"
      />

      <circle
        cx="210"
        cy="190"
        r="92"
        fill="#F4B740"
      />

      <path
        d="M105 285c30-62 75-93 105-93s75 31 105 93"
        fill="#1D3557"
      />

      <circle
        cx="130"
        cy="125"
        r="27"
        fill="#EF8354"
      />

      <circle
        cx="290"
        cy="125"
        r="27"
        fill="#D3E9F7"
      />

      <circle
        cx="210"
        cy="85"
        r="23"
        fill="#FBD98A"
      />

      <path
        d="M80 310c50 28 210 28 260 0"
        stroke="#8EBDA0"
        strokeWidth="12"
        strokeLinecap="round"
      />

      <circle
        cx="105"
        cy="325"
        r="7"
        fill="#EF8354"
      />

      <circle
        cx="315"
        cy="325"
        r="7"
        fill="#F4B740"
      />

      <circle
        cx="210"
        cy="335"
        r="6"
        fill="#1D3557"
      />

      <path
        d="M205 171c-9 0-16 7-16 16s7 16 16 16h10"
        stroke="#1D3557"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <circle
        cx="184"
        cy="156"
        r="5"
        fill="#1D3557"
      />

      <circle
        cx="236"
        cy="156"
        r="5"
        fill="#1D3557"
      />

      <path
        d="M167 104l-13-14M253 104l13-14M210 75V57"
        stroke="#F4B740"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}


export function ArrowRightIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h13M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


export function SparkleIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2l1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z"
        fill="currentColor"
      />

      <path
        d="M19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"
        fill="currentColor"
      />
    </svg>
  );
}
