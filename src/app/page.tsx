import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EditorialStatement from "@/components/EditorialStatement";
import PhotoTriptych from "@/components/PhotoTriptych";
import PhilosophySection from "@/components/PhilosophySection";
import ClientTestimonialSection from "@/components/ClientTestimonialSection";
import TeamOfferingsSection from "@/components/TeamOfferingsSection";
import PortfolioTriptych from "@/components/PortfolioTriptych";
import ProcessSection from "@/components/ProcessSection";
import ConnectSection from "@/components/ConnectSection";
import Image from "next/image";
import Link from "next/link";
import { EventPillar } from "@/interfaces";

const eventPillars: EventPillar[] = [
  {
    id: "planning",
    number: "01",
    title: "Event Planning",
    description:
      "Comprehensive concept design, timeline architecting, budget structuring, and dedicated vendor curation from the first sketch to the celebration day.",
    linkText: "Inquire Now",
    linkHref: "#contact",
  },
  {
    id: "management",
    number: "02",
    title: "Flawless Management",
    description:
      "Precision logistics, guest coordination, and backstage production management so you can immerse yourself completely in your celebration.",
    linkText: "Inquire Now",
    linkHref: "#contact",
  },
  {
    id: "decoration",
    number: "03",
    title: "Bespoke Decoration",
    description:
      "Grand canopy florals, custom marquee tent drapery, dramatic lighting, luxury table settings, and tailored spatial architecture.",
    linkText: "Inquire Now",
    linkHref: "#contact",
  },
  {
    id: "moodboard",
    number: "04",
    title: "Mood Board Creation",
    description:
      "Curated color stories, tactile texture palettes, fabric sourcing, and bespoke aesthetic direction to crystallize your celebration vision before production begins.",
    linkText: "Inquire Now",
    linkHref: "#contact",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fefcfc] text-[#221a1d]">
      {/* Brand Navigation Bar with Just The Name */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section with Picture 2 & Logo */}
        <Hero />

        {/* Editorial Statement Section (Pink/Rose Section) */}
        <EditorialStatement />

        {/* Brand Focus Bar */}
        <section className="bg-[#24151a] text-white border-b border-[#3a2027] py-5 px-6">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-14 text-center">
            <div className="flex items-center space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-[#e65b6c]"></span>
              <span className="font-serif text-lg tracking-[0.18em] uppercase text-[#ffe4ea]">Corporate Events</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-[#e65b6c]"></span>
              <span className="font-serif text-lg tracking-[0.18em] uppercase text-[#ffe4ea]">Social Celebrations</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-[#e65b6c]"></span>
              <span className="font-serif text-lg tracking-[0.18em] uppercase text-[#ffe4ea]">Intimate Gatherings</span>
            </div>
          </div>
        </section>

        {/* Section After Pink: Luxury Table Setting Background (Picture is now fully visible) */}
        <section id="about" className="relative py-32 sm:py-44 px-6 sm:px-12 text-center text-white overflow-hidden flex items-center justify-center min-h-[580px]">
          {/* Background Image: Luxury Table Setting */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/tablescape-full.jpg"
              alt="The Expression Events - Luxury Tablescape & Event Setting"
              fill
              quality={90}
              className="object-cover object-center"
            />
            {/* Subtle light overlay so the photo is bright, vivid and clearly visible */}
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Centered White Logo */}
            <div className="flex justify-center mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              <Image
                src="/images/the-expression-events-logo-v2.png"
                alt="The Expression Events"
                width={360}
                height={54}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight max-w-3xl mx-auto mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              Transforming visions into unforgettable, beautifully styled celebrations.
            </h2>

            <div className="w-16 h-[2px] bg-[#e65b6c] mx-auto mb-6 shadow-md" />

            <p className="font-sans text-base sm:text-lg text-white leading-relaxed max-w-2xl mx-auto font-light drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              At <strong className="font-medium text-white">The Expression Events</strong>, we specialize in full-service event planning, seamless management, and bespoke decoration. Whether you are hosting a high-profile corporate gala, a landmark celebration, or an intimate private soirée, we infuse every corner with artistry, elegance, and emotional resonance.
            </p>
          </div>
        </section>

        {/* Photo Triptych — 3 real event photos on coral background */}
        <PhotoTriptych />

        {/* Philosophy Statement + Cards (Make it Joyful, Personal, Flawless) */}
        <PhilosophySection />

        {/* Client Testimonial Spotlight — image + quote split section */}
        <ClientTestimonialSection />

        {/* Team & Offerings Spotlight Section */}
        <TeamOfferingsSection />

        {/* Full-Bleed 3-Column Portfolio Strip */}
        <PortfolioTriptych />

        {/* Process Statement + Cards (Collaborate, Innovate, Orchestrate) */}
        <ProcessSection />

        {/* Image Gallery Strip + Quick Links / Crest / Social CTA */}
        <ConnectSection />

        {/* Next Section: Core Capabilities (01, 02, 03, 04) */}
        <section id="offerings" className="bg-[#fbf4f6] py-24 sm:py-32 px-6 sm:px-12 border-y border-[#f0d8df]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-sans uppercase tracking-[0.3em] text-[#d65063] font-semibold block mb-3">
                Our Capabilities
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#221a1d] font-normal">
                Signature Event Pillars
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {eventPillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="bg-white p-8 sm:p-9 shadow-sm border border-[#f2dce1] flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <span className="font-serif text-3xl text-[#d65063] italic mb-3 block">
                      {pillar.number}
                    </span>
                    <h3 className="font-serif text-2xl text-[#221a1d] mb-4">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-sm text-[#6b5860] leading-relaxed mb-6 font-light">
                      {pillar.description}
                    </p>
                  </div>
                  <Link
                    href={pillar.linkHref}
                    className="inline-flex items-center text-xs font-sans font-medium tracking-[0.2em] uppercase text-[#d65063] hover:text-[#b83d50] transition-colors"
                  >
                    {pillar.linkText} &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Showcase Section */}
        <section id="portfolio" className="py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs font-sans uppercase tracking-[0.3em] text-[#d65063] font-semibold block mb-3">
                Selected Works
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#221a1d] font-normal">
                Spectacular Productions
              </h2>
            </div>
            <p className="font-sans text-sm text-[#6b5860] max-w-md mt-4 md:mt-0 font-light">
              Explore how we translate grand architectural concepts into breathtaking realities.
            </p>
          </div>

          {/* Marquee Featured Project */}
          <div className="relative w-full h-[480px] sm:h-[620px] overflow-hidden shadow-xl mb-8 group rounded-sm">
            <Image
              src="/images/hero.jpg"
              alt="The Expression Events Marquee Tent Reception"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent flex flex-col justify-end p-8 sm:p-14 text-white">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#ffd8df] font-sans mb-2 font-medium">
                Featured Production
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light">
                The Golden Pavilion Soirée
              </h3>
              <p className="font-sans text-sm text-[#ebd9dc] max-w-xl mt-3 font-light">
                A custom tented marquee installation featuring suspended floral clouds, cascading crystal chandeliers, and opulent bespoke staging.
              </p>
            </div>
          </div>
        </section>

        {/* Press / Brand Quote Section */}
        <section id="press" className="bg-[#2a161e] text-[#fff5f6] py-20 sm:py-28 px-6 sm:px-12 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#d65063]/15 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="w-8 h-[2px] bg-[#e65b6c]"></span>
              <span className="text-[11px] font-sans uppercase tracking-[0.35em] text-[#ffd5dd] font-medium">
                Our Signature Standard
              </span>
              <span className="w-8 h-[2px] bg-[#e65b6c]"></span>
            </div>

            <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl font-light italic leading-relaxed mb-8 text-[#fff]">
              &ldquo;The Expression Events creates extraordinary worlds where grand architecture meets heartfelt celebration.&rdquo;
            </blockquote>

            <a
              href="https://instagram.com/the.expressionevents"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 bg-[#d65063] hover:bg-[#b83d50] text-white text-xs font-sans tracking-[0.22em] uppercase px-6 py-2.5 rounded-full transition-colors shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Follow @the.expressionevents</span>
            </a>
          </div>
        </section>

        {/* Contact / Inquiries Section */}
        <section id="contact" className="py-24 sm:py-32 px-6 sm:px-12 max-w-4xl mx-auto text-center">
          <span className="text-xs font-sans uppercase tracking-[0.3em] text-[#d65063] font-semibold block mb-4">
            Begin The Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#221a1d] font-normal mb-6">
            Inquire With Our Studio
          </h2>
          <p className="font-sans text-base text-[#6b5860] max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            We accept a limited number of commissions each season to ensure uncompromising devotion to every celebration. Share your event vision with us.
          </p>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            <div>
              <label className="block text-[11px] font-sans tracking-[0.18em] uppercase text-[#443339] mb-2 font-medium">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full bg-[#fbf4f6] border border-[#ecd2d8] px-4 py-3 text-sm focus:outline-none focus:border-[#d65063] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] font-sans tracking-[0.18em] uppercase text-[#443339] mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="name@domain.com"
                className="w-full bg-[#fbf4f6] border border-[#ecd2d8] px-4 py-3 text-sm focus:outline-none focus:border-[#d65063] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] font-sans tracking-[0.18em] uppercase text-[#443339] mb-2 font-medium">
                Event Category
              </label>
              <select className="w-full bg-[#fbf4f6] border border-[#ecd2d8] px-4 py-3 text-sm focus:outline-none focus:border-[#d65063] transition-colors">
                <option>Corporate Event</option>
                <option>Social Celebration / Private Event</option>
                <option>Intimate Gathering / Soirée</option>
                <option>Full Event Decoration &amp; Styling</option>
                <option>Mood Board Creation &amp; Aesthetic Concept</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-sans tracking-[0.18em] uppercase text-[#443339] mb-2 font-medium">
                Estimated Date &amp; Location
              </label>
              <input
                type="text"
                placeholder="Month / Year • City / Venue"
                className="w-full bg-[#fbf4f6] border border-[#ecd2d8] px-4 py-3 text-sm focus:outline-none focus:border-[#d65063] transition-colors"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-[11px] font-sans tracking-[0.18em] uppercase text-[#443339] mb-2 font-medium">
                Your Vision / Notes
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about the dream, aesthetic, and atmosphere you wish to create..."
                className="w-full bg-[#fbf4f6] border border-[#ecd2d8] px-4 py-3 text-sm focus:outline-none focus:border-[#d65063] transition-colors"
              ></textarea>
            </div>
            <div className="sm:col-span-2 text-center pt-4">
              <button
                type="button"
                className="bg-[#d65063] hover:bg-[#ba3d4e] text-white font-sans text-xs uppercase tracking-[0.25em] font-medium py-4 px-10 transition-colors shadow-md cursor-pointer rounded-sm"
              >
                Submit Consultation Request
              </button>
            </div>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#24151a] text-[#f2e4e8] py-16 px-6 sm:px-12 border-t border-[#3a2027]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start mb-2">
              <Image
                src="/images/the-expression-events-logo-v2.png"
                alt="The Expression Events Logo"
                width={260}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="font-sans text-xs tracking-[0.18em] text-[#d4b6bf] uppercase">
              Event Planning, Management and Decoration
            </p>
          </div>

          <div className="flex items-center space-x-8 text-xs font-sans tracking-[0.2em] uppercase text-[#e0c0c8]">
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#offerings" className="hover:text-white transition-colors">Offerings</Link>
            <Link href="#portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <p className="text-[11px] font-sans tracking-[0.1em] text-[#9f7d87]">
            &copy; 2026 The Expression Events. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
