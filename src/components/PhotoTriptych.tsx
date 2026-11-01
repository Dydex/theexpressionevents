import Image from "next/image";

export default function PhotoTriptych() {
  return (
    <section className="bg-[#c84f60] py-6 sm:py-8">
      {/* 3-column triptych: narrow | wide featured | narrow */}
      <div
        className="w-full grid gap-3 sm:gap-4 px-3 sm:px-4"
        style={{ gridTemplateColumns: "22fr 56fr 22fr" }}
      >
        {/* Left — venue stage décor */}
        <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] overflow-hidden">
          <Image
            src="/images/venue-stage-full.jpg"
            alt="The Expression Events — Luxury event venue and décor setup"
            fill
            quality={90}
            sizes="22vw"
            className="object-cover object-top"
          />
        </div>

        {/* Center — featured bridesmaids group shot */}
        <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] overflow-hidden">
          <Image
            src="/images/bridesmaids-full.jpg"
            alt="The Expression Events — Bridal party celebration"
            fill
            quality={90}
            sizes="56vw"
            className="object-cover object-top"
          />

          {/* Brand badge overlay — bottom center */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10">
            <svg
              viewBox="0 0 90 42"
              className="w-20 h-auto sm:w-24 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              fill="none"
              stroke="white"
            >
              <ellipse cx="45" cy="21" rx="43" ry="19" strokeWidth="1.4" />
              <ellipse cx="45" cy="21" rx="38" ry="14" strokeWidth="0.8" opacity="0.7" />
              <line x1="29" y1="18" x2="61" y2="18" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="33" y1="21.5" x2="57" y2="21.5" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="31" y1="25" x2="59" y2="25" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Right — hands/accessories luxury detail */}
        <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] overflow-hidden">
          <Image
            src="/images/hands-full.jpg"
            alt="The Expression Events — Luxury accessories and detail shot"
            fill
            quality={90}
            sizes="22vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
