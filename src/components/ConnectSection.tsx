import Image from "next/image";
import Link from "next/link";

const galleryItems: {
  image: string | null;
  shade: string;
  position: string;
}[] = [
  { image: null, shade: "#f3e4e8", position: "50% 50%" },
  { image: null, shade: "#f9f0f2", position: "50% 50%" },
  { image: null, shade: "#f3e4e8", position: "50% 50%" },
  { image: null, shade: "#f9f0f2", position: "50% 50%" },
  { image: null, shade: "#f3e4e8", position: "50% 50%" },
  { image: null, shade: "#f9f0f2", position: "50% 50%" },
];

const footerLinks = [
  { label: "Take Me Home", href: "/" },
  { label: "Meet The Team", href: "#about" },
  { label: "Our Offerings", href: "#offerings" },
  { label: "The Portfolio", href: "#portfolio" },
  { label: "Press & Features", href: "#press" },
];

export default function ConnectSection() {
  return (
    <>
      <section className="bg-[#fbf4f6] py-16 sm:py-20 px-6 sm:px-10">
        {/* 6-image gallery strip */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4 max-w-7xl mx-auto mb-14 sm:mb-16">
          {galleryItems.map((item, i) =>
            item.image ? (
              <div key={i} className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt="The Expression Events — Event styling detail"
                  fill
                  quality={90}
                  sizes="(min-width: 640px) 16vw, 33vw"
                  className="object-cover"
                  style={{ objectPosition: item.position }}
                />
              </div>
            ) : (
              <div
                key={i}
                className="relative aspect-square flex flex-col items-center justify-center"
                style={{ backgroundColor: item.shade }}
              >
                <svg
                  className="w-6 h-6 text-[#c9a7b0] mb-1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                >
                  <rect x="3" y="4" width="18" height="16" rx="1.5" />
                  <circle cx="8.5" cy="9.5" r="1.75" />
                  <path d="M21 16.5 15.5 11 5 20" />
                </svg>
                <span className="text-[8px] sm:text-[9px] font-sans uppercase tracking-[0.2em] text-[#c9a7b0] text-center px-2">
                  Image Coming Soon
                </span>
              </div>
            ),
          )}
        </div>

        <div className="max-w-7xl mx-auto border-t-2 border-[#c84f60]/40 pt-14 sm:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-6">
            {/* Left — quick links */}
            <ul className="flex flex-col items-center md:items-start gap-3 order-2 md:order-1">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-xs sm:text-[13px] font-medium tracking-[0.12em] uppercase text-[#443339] hover:text-[#c84f60] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Center — crest */}
            <div className="flex justify-center order-1 md:order-2">
              <svg
                className="w-20 h-24 sm:w-24 sm:h-28 text-[#c84f60]"
                viewBox="0 0 100 120"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M 22 8 H 78 C 88 8, 92 12, 92 22 V 42 C 86 46, 86 54, 92 58 V 98 C 92 108, 88 112, 78 112 H 22 C 12 112, 8 108, 8 98 V 58 C 14 54, 14 46, 8 42 V 22 C 8 12, 12 8, 22 8 Z"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 26 14 H 74 C 82 14, 86 18, 86 26 V 42 C 81 46, 81 54, 86 58 V 94 C 86 102, 82 106, 74 106 H 26 C 18 106, 14 102, 14 94 V 58 C 19 54, 19 46, 14 42 V 26 C 14 18, 18 14, 26 14 Z"
                  strokeWidth="1"
                  opacity="0.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* 3 Brand Lines */}
                <g stroke="currentColor" strokeLinecap="round">
                  <line x1="36" y1="53" x2="64" y2="53" strokeWidth="2.2" />
                  <line x1="41" y1="60" x2="59" y2="60" strokeWidth="2.2" />
                  <line x1="38" y1="67" x2="62" y2="67" strokeWidth="2.2" />
                </g>
              </svg>
            </div>

            {/* Right — CTA + socials */}
            <div className="flex flex-col items-center md:items-end gap-5 order-3">
              <Link
                href="#contact"
                className="inline-block bg-[#c84f60] hover:bg-[#b03d4e] text-white font-sans text-[11px] font-medium tracking-[0.25em] uppercase px-8 py-3.5 transition-colors duration-300"
              >
                Contact Us
              </Link>

              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="https://instagram.com/the.expressionevents"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="The Expression Events on Instagram"
                  className="w-9 h-9 rounded-full bg-[#2a161e] hover:bg-[#c84f60] flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com/@the.expressionevents"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="The Expression Events on TikTok"
                  className="w-9 h-9 rounded-full bg-[#2a161e] hover:bg-[#c84f60] flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
                  </svg>
                </a>

                {/* Facebook — link TBD */}
                <a
                  href="#"
                  aria-label="The Expression Events on Facebook"
                  className="w-9 h-9 rounded-full bg-[#2a161e] hover:bg-[#c84f60] flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.022 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.563v1.877h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.918 8.437-9.94z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal strip — copyright + terms only */}
      <div className="bg-[#2a161e] text-[#f2e4e8] px-6 sm:px-10 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <div className="flex items-center gap-2 font-sans text-[10px] sm:text-[11px] font-medium tracking-[0.14em] uppercase">
            <Link href="#" className="hover:text-white transition-colors">
              View Our Privacy Policy
            </Link>
            <span aria-hidden="true">|</span>
            <Link href="#" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
          <span className="font-sans text-[10px] sm:text-[11px] font-medium tracking-[0.14em] uppercase">
            &copy; Copyright 2026 The Expression Events
          </span>
        </div>
      </div>

      {/* Big closing photo with wordmark */}
      <div className="relative w-full h-[160px] sm:h-[230px] lg:h-[300px] overflow-hidden">
        <Image
          src="/_HB10646.jpg"
          alt="The Expression Events — luxury crystal tablescape"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "50% 78%" }}
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <span className="font-serif text-[11vw] leading-none whitespace-nowrap text-[#fffaf5] drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            The Expression Events
          </span>
        </div>
      </div>
    </>
  );
}
