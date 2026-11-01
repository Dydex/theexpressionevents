import Link from "next/link";
import { PhilosophyCard } from "@/interfaces";

const philosophyCards: PhilosophyCard[] = [
  {
    id: "joyful",
    title: "Make it Joyful",
    lead: "Planning your event should, in fact,\nbe fun and enjoyable.",
    description:
      "Your celebration should feel exciting, not overwhelming. That's exactly why we do what we do — so you can experience a spectacular, stress-free journey from first conversation to final curtain.",
  },
  {
    id: "personal",
    title: "Make it Personal",
    lead: "Our clients never need to spend a single moment searching for inspiration.",
    description:
      "We get to know you on a personal level — your story, your style, your vision — and use every detail we learn to design a celebration that feels unmistakably, beautifully yours.",
  },
  {
    id: "flawless",
    title: "Make it Flawless",
    lead: "You don't know what you don't know\n— but we do.",
    description:
      "Our clients always say \"We couldn't have done it without you.\" Our productions are perfectly considered and supremely stress-free. We move mountains for your end-all, be-all celebration.",
  },
];

export default function PhilosophySection() {
  return (
    <>
      {/* ── Statement Headline ── coral bg, continues from triptych above */}
      <section className="bg-[#c84f60] text-white py-20 sm:py-28 px-6 sm:px-12 text-center">
        <p className="font-serif text-3xl sm:text-[44px] lg:text-[52px] font-normal leading-[1.22] max-w-4xl mx-auto tracking-wide">
          The way we see it, no two events should{" "}
          <em className="italic font-normal">ever</em>{" "}
          be the same because no two clients are the same—{" "}
          our approach to{" "}
          <em className="italic font-normal">every</em>{" "}
          celebration is this:
        </p>
      </section>

      {/* ── Philosophy Cards ── light cream bg with subtle vertical stripe */}
      <section
        className="py-20 sm:py-28 px-6 sm:px-12"
        style={{
          background:
            "repeating-linear-gradient(90deg, #f9f0f2 0px, #f9f0f2 28px, #f3e4e8 28px, #f3e4e8 30px)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* 3 white cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
            {philosophyCards.map((card) => (
              <div
                key={card.id}
                className="bg-white/95 px-8 py-10 sm:px-10 sm:py-12 text-center shadow-sm"
              >
                {/* Script-style italic title */}
                <h3 className="font-serif text-2xl sm:text-3xl italic text-[#221a1d] mb-3">
                  {card.title}
                </h3>
                {/* Coloured underline accent */}
                <div className="w-16 h-[3px] bg-[#d4bfca] mx-auto mb-6 rounded-full" />
                {/* Bold italic lead */}
                <p className="font-serif text-base sm:text-[17px] italic text-[#3d2830] leading-snug mb-5 font-medium whitespace-pre-line">
                  {card.lead}
                </p>
                {/* Body */}
                <p className="font-sans text-sm text-[#6b5860] leading-relaxed font-light">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href="#offerings"
              className="inline-block border border-[#c84f60] text-[#c84f60] hover:bg-[#c84f60] hover:text-white font-sans text-[11px] tracking-[0.28em] uppercase px-10 py-4 transition-colors duration-300"
            >
              Explore Our Offerings
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

