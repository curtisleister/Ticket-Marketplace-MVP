/**
 * StubVault brand logo — vault arch with baseball-stitched red circle and vault dial.
 * Recreated as inline SVG from the brand logo design.
 */
export default function Logo({ size = 48, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Vault arch / door shape — dark green */}
      <path
        d="M10 110V50C10 25.1472 30.1472 5 55 5h10C90.8528 5 111 25.1472 111 50v60H10Z"
        fill="#111A0E"
        stroke="#2A4520"
        strokeWidth="2"
      />

      {/* Inner arch cutout — slightly lighter */}
      <path
        d="M22 110V52C22 32.67 37.67 17 57 17h6C82.33 17 98 32.67 98 52v58H22Z"
        fill="#1C2E16"
      />

      {/* Red baseball circle */}
      <circle cx="60" cy="58" r="30" fill="#8C1F1A" />

      {/* Baseball stitching — left curve */}
      <path
        d="M42 38C46 44 46 52 44 58C42 64 42 72 46 78"
        stroke="#F0E6CC"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Stitching ticks — left */}
      <line x1="41" y1="42" x2="45" y2="44" stroke="#F0E6CC" strokeWidth="1" strokeLinecap="round" />
      <line x1="40" y1="47" x2="44" y2="48" stroke="#F0E6CC" strokeWidth="1" strokeLinecap="round" />
      <line x1="40" y1="52" x2="44" y2="53" stroke="#F0E6CC" strokeWidth="1" strokeLinecap="round" />
      <line x1="40" y1="57" x2="44" y2="58" stroke="#F0E6CC" strokeWidth="1" strokeLinecap="round" />
      <line x1="40" y1="62" x2="44" y2="63" stroke="#F0E6CC" strokeWidth="1" strokeLinecap="round" />
      <line x1="40" y1="67" x2="44" y2="68" stroke="#F0E6CC" strokeWidth="1" strokeLinecap="round" />
      <line x1="41" y1="72" x2="45" y2="73" stroke="#F0E6CC" strokeWidth="1" strokeLinecap="round" />

      {/* Baseball stitching — right curve */}
      <path
        d="M78 38C74 44 74 52 76 58C78 64 78 72 74 78"
        stroke="#F0E6CC"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Stitching ticks — right */}
      <line x1="79" y1="42" x2="75" y2="44" stroke="#F0E6CC" strokeWidth="1" strokeLinecap="round" />
      <line x1="80" y1="47" x2="76" y2="48" stroke="#F0E6CC" strokeWidth="1" strokeLinecap="round" />
      <line x1="80" y1="52" x2="76" y2="53" stroke="#F0E6CC" strokeWidth="1" strokeLinecap="round" />
      <line x1="80" y1="57" x2="76" y2="58" stroke="#F0E6CC" strokeWidth="1" strokeLinecap="round" />
      <line x1="80" y1="62" x2="76" y2="63" stroke="#F0E6CC" strokeWidth="1" strokeLinecap="round" />
      <line x1="80" y1="67" x2="76" y2="68" stroke="#F0E6CC" strokeWidth="1" strokeLinecap="round" />
      <line x1="79" y1="72" x2="75" y2="73" stroke="#F0E6CC" strokeWidth="1" strokeLinecap="round" />

      {/* Vault dial — outer ring */}
      <circle cx="60" cy="58" r="10" fill="#1C2E16" stroke="#F0E6CC" strokeWidth="1.5" />
      {/* Vault dial — inner circle */}
      <circle cx="60" cy="58" r="5" fill="#111A0E" stroke="#DFD0AD" strokeWidth="1" />
      {/* Vault dial — tick marks */}
      <line x1="60" y1="49" x2="60" y2="51" stroke="#F0E6CC" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="60" y1="65" x2="60" y2="67" stroke="#F0E6CC" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="51" y1="58" x2="53" y2="58" stroke="#F0E6CC" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="67" y1="58" x2="69" y2="58" stroke="#F0E6CC" strokeWidth="1.5" strokeLinecap="round" />
      {/* Vault dial — pointer/handle */}
      <line x1="60" y1="58" x2="60" y2="52" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />

      {/* Bottom vault handle bar */}
      <rect x="48" y="92" width="24" height="4" rx="2" fill="#2A4520" />
      <rect x="50" y="98" width="20" height="3" rx="1.5" fill="#2A4520" />
    </svg>
  );
}
