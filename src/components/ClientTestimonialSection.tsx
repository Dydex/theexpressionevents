import Image from "next/image";

interface Testimonial {
  id: number;
  image: string | null;
  quoteLead: string;
  quoteBody: string;
  quotePull: string;
  name: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/images/testimonial-dance.jpg",
    quoteLead:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    quoteBody:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    quotePull:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    name: "Lorem & Ipsum",
    location: "Married in Lagos, Nigeria",
  },
  {
    id: 2,
    image: null,
    quoteLead:
      "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    quoteBody:
      "Nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    quotePull:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Lorem & Ipsum",
    location: "Married in Abuja, Nigeria",
  },
  {
    id: 3,
    image: null,
    quoteLead:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.",
    quoteBody:
      "Excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    quotePull:
      "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis est eligendi optio.",
    name: "Lorem & Ipsum",
    location: "Married in Accra, Ghana",
  },
  {
    id: 4,
    image: null,
    quoteLead:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    quoteBody:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    quotePull:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem & Ipsum",
    location: "Married in Nairobi, Kenya",
  },
];

export default function ClientTestimonialSection() {
  return (
    <section className="bg-[#2a161e] py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 mb-12 sm:mb-16">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.2] text-white tracking-wide">
          Our Clients Say the Nicest Things
        </h2>
      </div>

      {/* Horizontally Scrolling Testimonial Slides — one full-width slide in view at a time.
          Extra vertical padding here is required: once overflow-x is "auto", the browser forces
          overflow-y to "auto" too, so the card's negative margin / shadow needs room to sit in,
          or it gets clipped instead of floating over the image like it should. */}
      <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pt-12 pb-16 -mt-12 -mb-16 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="snap-center shrink-0 w-full px-6 sm:px-12 lg:px-16"
          >
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:items-center">
              {/* Image Side — inset, with gap showing the background around it */}
              <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[560px]">
                {t.image ? (
                  <Image
                    src={t.image}
                    alt={`The Expression Events — ${t.name}`}
                    fill
                    quality={90}
                    sizes="(min-width: 1024px) 50vw, 88vw"
                    className="object-cover object-center shadow-2xl"
                  />
                ) : (
                  <div className="w-full h-full bg-[#3d2830] shadow-2xl flex flex-col items-center justify-center text-center px-8">
                    <svg
                      className="w-10 h-10 text-[#8a6a73] mb-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    >
                      <rect x="3" y="4" width="18" height="16" rx="1.5" />
                      <circle cx="8.5" cy="9.5" r="1.75" />
                      <path d="M21 16.5 15.5 11 5 20" />
                    </svg>
                    <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#8a6a73]">
                      Image Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Text Side — cream card that laps over the image edge */}
              <div className="relative z-10 -mt-10 mx-5 sm:mx-10 lg:mx-0 lg:-ml-24 bg-[#fbf4f6] px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 shadow-2xl">
                <div className="max-w-xl">
                  <span className="block text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.30em] text-[#d65063] mb-6">
                    Lorem Ipsum Dolor
                  </span>

                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.2] text-[#221a1d] tracking-wide mb-8">
                    Lorem Ipsum Dolor Sit Amet
                  </h3>

                  <div className="space-y-5 font-sans text-sm sm:text-[15px] text-[#6b5860] leading-relaxed font-light">
                    <p>&ldquo;{t.quoteLead}</p>
                    <p>{t.quoteBody}</p>
                    <p className="font-serif italic text-[#3d2830] text-base sm:text-lg font-medium leading-relaxed">
                      &ldquo;{t.quotePull}&rdquo;
                    </p>
                  </div>

                  <p className="mt-9 text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-[#c84f60] font-medium">
                    {t.name} &nbsp;|&nbsp; {t.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
