import Image from "next/image";
import Link from "next/link";

export default function TeamOfferingsSection() {
  return (
    <>
      {/* ── Banner: "Needless to say, we'd be honored..." ── headline sits near the top so the
          cards below (pulled up to lap over this section) only overlap plain photo, not text ── */}
      <section className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col items-center justify-start overflow-hidden text-center text-white px-6 pt-20 sm:pt-24 lg:pt-28 pb-44 sm:pb-60 lg:pb-80">
        {/* Luxury Background Image with Soft Contrast Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/shoes-accessories-full.jpg"
            alt="The Expression Events — Luxury bridal shoes and embellished emerald accessories"
            fill
            quality={90}
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/55" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          {/* Ornate Cartouche / Crest Badge */}
          <div className="mb-6 sm:mb-8 text-white/95">
            <svg
              className="w-16 h-20 sm:w-20 sm:h-24 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
              viewBox="0 0 100 120"
              fill="none"
              stroke="currentColor"
            >
              {/* Outer notched frame */}
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
                opacity="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* 3 Brand Lines in Center */}
              <line x1="36" y1="46" x2="64" y2="46" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="41" y1="53" x2="59" y2="53" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="38" y1="60" x2="62" y2="60" strokeWidth="2.2" strokeLinecap="round" />
              {/* Flourishes */}
              <circle cx="50" cy="30" r="3.5" strokeWidth="1.2" />
              <circle cx="50" cy="78" r="3.5" strokeWidth="1.2" />
            </svg>
          </div>

          {/* Statement Headline with Italic Accent */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal leading-[1.24] text-white tracking-wide max-w-2xl drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
            Needless to say, we&apos;d be{" "}
            <em className="italic font-normal">honored</em>{" "}
            to help you plan your event day.
          </h2>
        </div>
      </section>

      {/* ── Two Cards: Our Team & Our Offerings — pulled up to lap over the banner above.
          flow-root stops the negative margin below from collapsing with this section's own
          top, which would otherwise drag this section's background up over the banner. ── */}
      <section
        className="flow-root pb-20 sm:pb-28 px-6 sm:px-12"
        style={{
          background:
            "repeating-linear-gradient(90deg, #f9f0f2 0px, #f9f0f2 28px, #f3e4e8 28px, #f3e4e8 30px)",
        }}
      >
        <div className="max-w-5xl mx-auto relative z-10 -mt-28 sm:-mt-40 lg:-mt-56">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Card 1: Our Team */}
            <div className="bg-white p-10 sm:p-14 text-center shadow-2xl flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-3xl sm:text-[38px] text-[#221a1d] font-normal mb-6">
                  Our Team
                </h3>
                <p className="font-sans text-sm sm:text-[15px] text-[#6b5860] leading-relaxed font-light mb-10 max-w-md mx-auto">
                  We have been planning events together for years. We&apos;re happy to
                  report our client-vendor arrangements often become bonafide
                  friendships, and our clients are some of our very favorite
                  people.
                </p>
              </div>

              <div>
                <Link
                  href="#contact"
                  className="inline-block bg-[#ecd2d8] hover:bg-[#c84f60] text-[#3d2830] hover:text-white font-sans text-[11px] font-medium tracking-[0.25em] uppercase px-8 py-3.5 transition-colors duration-300"
                >
                  Meet The Team
                </Link>
              </div>
            </div>

            {/* Card 2: Our Offerings */}
            <div className="bg-white p-10 sm:p-14 text-center shadow-2xl flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-3xl sm:text-[38px] text-[#221a1d] font-normal mb-6">
                  Our Offerings
                </h3>
                <p className="font-sans text-sm sm:text-[15px] text-[#6b5860] leading-relaxed font-light mb-10 max-w-md mx-auto">
                  We offer full-service event planning, management, and bespoke decoration.
                  The Expression Events celebrations are unlike any other, and
                  every celebration is a new endeavor!
                </p>
              </div>

              <div>
                <Link
                  href="#offerings"
                  className="inline-block bg-[#ecd2d8] hover:bg-[#c84f60] text-[#3d2830] hover:text-white font-sans text-[11px] font-medium tracking-[0.25em] uppercase px-8 py-3.5 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

