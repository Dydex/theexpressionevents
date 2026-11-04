import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-70px)] min-h-[640px] max-h-[1100px] overflow-hidden flex items-center justify-center">
      {/* Background Image — Full High-Res Celebration Photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-celebration-full.jpg"
          alt="The Expression Events - Grand Luxury Celebration"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35" />
      </div>

      {/* Logo centered */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 select-none max-w-4xl mx-auto">
        <div className="relative w-full max-w-[340px] sm:max-w-[520px] md:max-w-[650px] lg:max-w-[720px] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] filter">
          <Image
            src="/images/the-expression-events-logo-v2.png"
            alt="The Expression Events"
            width={648}
            height={97}
            priority
            className="w-full h-auto object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/90 hover:text-white transition-colors duration-300 group drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        aria-label="Scroll to discover more"
      >
        <span className="text-[10px] font-sans tracking-[0.28em] uppercase mb-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
          Explore
        </span>
        <svg
          className="w-4 h-4 animate-bounce opacity-90 group-hover:opacity-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
