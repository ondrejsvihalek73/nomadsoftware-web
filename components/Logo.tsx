export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="nomad-g" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#37F0FF" />
            <stop offset="1" stopColor="#7B61FF" />
          </linearGradient>
        </defs>
        <rect x="0.5" y="0.5" width="31" height="31" rx="9" stroke="url(#nomad-g)" strokeOpacity="0.6" />
        <path d="M9 23V9l14 14V9" stroke="url(#nomad-g)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="9" r="2.4" fill="#37F0FF" />
        <circle cx="23" cy="23" r="2.4" fill="#7B61FF" />
        <circle cx="23" cy="9" r="1.6" fill="#C4FF4D" />
      </svg>
      <span className="font-semibold tracking-[-0.02em] text-[1.05rem]">
        NOMAD<span className="text-muted font-normal"> software</span>
      </span>
    </span>
  );
}
