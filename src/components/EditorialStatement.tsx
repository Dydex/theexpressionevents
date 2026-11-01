export default function EditorialStatement() {
  return (
    <section className="bg-[#c84f60] text-white py-20 sm:py-28 lg:py-32 px-8 sm:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

        {/* Ornate Badge / Crest — centered */}
        <div className="mb-7 sm:mb-9 text-white/90 inline-block">
          <svg
            className="w-[88px] h-[104px] sm:w-[104px] sm:h-[124px]"
            viewBox="0 0 100 120"
            fill="none"
            stroke="currentColor"
          >
            {/* Outer cartouche */}
            <path
              d="M 22 8 H 78 C 88 8, 92 12, 92 22 V 42 C 86 46, 86 54, 92 58 V 98 C 92 108, 88 112, 78 112 H 22 C 12 112, 8 108, 8 98 V 58 C 14 54, 14 46, 8 42 V 22 C 8 12, 12 8, 22 8 Z"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Inner frame */}
            <path
              d="M 26 14 H 74 C 82 14, 86 18, 86 26 V 42 C 81 46, 81 54, 86 58 V 94 C 86 102, 82 106, 74 106 H 26 C 18 106, 14 102, 14 94 V 58 C 19 54, 19 46, 14 42 V 26 C 14 18, 18 14, 26 14 Z"
              strokeWidth="1"
              opacity="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* 3 Brand Lines */}
            <g stroke="currentColor" strokeLinecap="round">
              <line x1="36" y1="46" x2="64" y2="46" strokeWidth="2.2" />
              <line x1="41" y1="53" x2="59" y2="53" strokeWidth="2.2" />
              <line x1="38" y1="60" x2="62" y2="60" strokeWidth="2.2" />
            </g>
            {/* Top flourish */}
            <circle cx="50" cy="30" r="4" strokeWidth="1.2" />
            <path d="M 42 32 Q 50 25 58 32" strokeWidth="1" />
            <path d="M 38 35 Q 32 30 36 24" strokeWidth="0.8" />
            <path d="M 62 35 Q 68 30 64 24" strokeWidth="0.8" />
            {/* Bottom flourish */}
            <circle cx="50" cy="78" r="4" strokeWidth="1.2" />
            <path d="M 42 76 Q 50 83 58 76" strokeWidth="1" />
            <path d="M 38 73 Q 32 78 36 84" strokeWidth="0.8" />
            <path d="M 62 73 Q 68 78 64 84" strokeWidth="0.8" />
            {/* Dashed ellipse */}
            <ellipse cx="50" cy="53" rx="14" ry="17" strokeWidth="1" strokeDasharray="3 3" opacity="0.55" />
          </svg>
        </div>

        {/* Tracked pre-title */}
        <span className="block text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.30em] text-white/75 mb-7 sm:mb-9">
          The Kind of Party Your Guests Talk About for Decades
        </span>

        {/* Main Editorial Headline — centered */}
        <h2 className="font-serif text-3xl sm:text-[44px] lg:text-[52px] font-normal leading-[1.22] text-white tracking-wide mb-7 sm:mb-9">
          Escape{" "}
          <em className="italic font-normal">the overwhelm</em>{" "}
          of planning to-dos and trade in the dime-a-dozen details for a{" "}
          <em className="italic font-normal">fête that fits your story</em>
        </h2>

        {/* Supporting paragraph — centered, slightly muted */}
        <p className="font-serif text-base sm:text-lg lg:text-[19px] text-white/80 leading-relaxed font-light max-w-xl">
          Let us help you plan a second-to-none celebration to{" "}
          <em className="italic text-white/95">kick off your future</em>{" "}
          with the{" "}
          <em className="italic text-white/95">event of a lifetime</em>{" "}
          … without losing your wits in the process.
        </p>

      </div>
    </section>
  );
}
