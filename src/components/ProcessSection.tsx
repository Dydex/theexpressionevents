import Link from "next/link";

interface ProcessCard {
  id: string;
  title: string;
  description: string;
}

const processCards: ProcessCard[] = [
  {
    id: "collaborate",
    title: "Collaborate",
    description:
      "Your big day is a celebration of your relationship and a kickoff for the rest of your life—you deserve a wedding that's specifically tailored to you as a couple. We'll help you mine for what matters to develop a vision that stays true to you. Then we'll free you up to walk away from the planning minutiae to enjoy your engagement.",
  },
  {
    id: "innovate",
    title: "Innovate",
    description:
      "When you're in *that* season where everyone you know is getting married—we'll set your party apart from the masses by dreaming up details you & your guests have never seen before and making them come to life. Our residential-design approach replaces trite wedding-y vibes with a curated and gracious guest experience that makes a lasting impact.",
  },
  {
    id: "orchestrate",
    title: "Orchestrate",
    description:
      "Leave it to us to ensure every detail falls into place. We've got relationships with some of the best vendors in the business, and we've been at this for years. When it comes to hurdles, we handle them without breaking a sweat. Trust our veritable army to manage your wedding weekend logistics from setup to tear down & everything in between.",
  },
];

export default function ProcessSection() {
  return (
    <>
      {/* ── Statement Headline ── coral bg, continues from triptych above. Extra bottom
          padding keeps the text clear of the cards below, which lap up into this section. */}
      <section className="bg-[#c84f60] text-white pt-20 sm:pt-28 pb-40 sm:pb-56 lg:pb-72 px-6 sm:px-12 text-center">
        <p className="font-serif text-3xl sm:text-[44px] lg:text-[52px] font-normal leading-[1.22] max-w-4xl mx-auto tracking-wide">
          Simply put: we take a complex process and make it{" "}
          <em className="italic font-normal">fun &amp; easy</em>.
        </p>
      </section>

      {/* ── Process Cards ── light cream bg with subtle vertical stripe; cards pulled up to
          lap over the coral section above. flow-root stops the negative margin below from
          collapsing with this section's own top, which would otherwise drag this section's
          background up and paint over the coral instead of letting it show through. */}
      <section
        className="flow-root pb-20 sm:pb-28 px-6 sm:px-12"
        style={{
          background:
            "repeating-linear-gradient(90deg, #f9f0f2 0px, #f9f0f2 28px, #f3e4e8 28px, #f3e4e8 30px)",
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10 -mt-28 sm:-mt-40 lg:-mt-56">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {processCards.map((card) => (
              <div
                key={card.id}
                className="bg-white px-8 py-10 sm:px-10 sm:py-12 text-center shadow-2xl"
              >
                {/* Script-style italic title */}
                <h3 className="font-serif text-2xl sm:text-3xl italic text-[#221a1d] mb-3">
                  {card.title}
                </h3>
                {/* Coloured underline accent */}
                <div className="w-full h-[6px] bg-[#cdd9ee] mb-6" />
                {/* Body */}
                <p className="font-serif text-sm sm:text-[15px] text-[#3d2830] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-14">
            <Link
              href="#portfolio"
              className="inline-block bg-[#cdd9ee] hover:bg-[#c84f60] text-[#3d2830] hover:text-white font-sans text-[11px] font-medium tracking-[0.25em] uppercase px-10 py-4 transition-colors duration-300"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
