const placeholderShades = ["#efe3e6", "#e7d7db", "#efe3e6"];

export default function PortfolioTriptych() {
  return (
    <section className="w-full bg-[#c84f60] py-3 sm:py-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 px-3 sm:px-4">
        {placeholderShades.map((shade, i) => (
          <div
            key={i}
            className="relative h-[320px] sm:h-[460px] lg:h-[560px] flex flex-col items-center justify-center"
            style={{ backgroundColor: shade }}
          >
            <svg
              className="w-9 h-9 sm:w-10 sm:h-10 text-[#b79aa3] mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
            >
              <rect x="3" y="4" width="18" height="16" rx="1.5" />
              <circle cx="8.5" cy="9.5" r="1.75" />
              <path d="M21 16.5 15.5 11 5 20" />
            </svg>
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#b79aa3]">
              Image Coming Soon
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
