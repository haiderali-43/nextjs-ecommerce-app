// Logo.tsx (React/Next + Tailwind)
export default function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 group" aria-label="Bazar Vendor home">
      {/* Icon */}
      <svg
        viewBox="0 0 128 112"
        className="h-7 w-7 shrink-0"
        role="img"
        aria-hidden="true"
      >
        {/* Stall base */}
        <g fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="text-neutral-800">
          <path d="M16 88 H112" />
          <path d="M32 44 V88" />
          <path d="M96 44 V88" />
        </g>
        {/* Canopy */}
        <g>
          <path d="M16 32 H112 C116 32 116 40 112 40 H16 C12 40 12 32 16 32 Z" className="fill-rose-500" />
          {Array.from({ length: 5 }).map((_, i) => {
            const x = 24 + i * 16;
            return (
              <path key={i} d={`M${x} 40 c0 10 8 14 8 14 s8-4 8-14 v-8 h-16 v8z`} className="fill-white" />
            );
          })}
        </g>
      </svg>

      {/* Wordmark */}
      <span className="text-neutral-900 font-extrabold tracking-wide leading-none">
        Bazar <span className="text-rose-600">Vendor</span>
      </span>
    </a>
  );
}
