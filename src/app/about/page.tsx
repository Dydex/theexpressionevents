import Link from "next/link";
import Navbar from "@/components/Navbar";
import ClientTestimonialSection from "@/components/ClientTestimonialSection";
import ConnectSection from "@/components/ConnectSection";

const teamMembers = [
  {
    id: "member-1",
    name: "Lorem Ipsum",
    role: "Dolor Sit Amet & Consectetur",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.",
  },
  {
    id: "member-2",
    name: "Dolor Amet",
    role: "Sed Do Eiusmod & Tempor",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis.",
  },
  {
    id: "member-3",
    name: "Consectetur Elit",
    role: "Ut Labore & Dolore Magna",
    bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fefcfc] text-[#221a1d]">
      <Navbar />

      <main className="flex-1">
        {/* First section — intro */}
        <section className="bg-[#2a161e] text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left column: intro text, then the striped photo panel */}
            <div className="flex flex-col">
              <div className="flex items-center justify-center min-h-[calc(100vh-70px)] px-6 sm:px-12 lg:px-16 py-16 sm:py-20">
                <div className="max-w-xl flex flex-col items-center text-center">
                  <svg
                    className="w-20 h-24 sm:w-24 sm:h-28 mb-6 text-[#ffd5dd]"
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
                    <g stroke="currentColor" strokeLinecap="round">
                      <line x1="36" y1="53" x2="64" y2="53" strokeWidth="2.2" />
                      <line x1="41" y1="60" x2="59" y2="60" strokeWidth="2.2" />
                      <line x1="38" y1="67" x2="62" y2="67" strokeWidth="2.2" />
                    </g>
                  </svg>

                  <span className="block text-[11px] sm:text-xs font-sans font-medium uppercase tracking-[0.25em] text-[#ffd5dd] mb-8">
                    Let’s get to know each other
                  </span>

                  <h1 className="font-serif text-3xl sm:text-[40px] lg:text-[44px] font-normal leading-[1.2] tracking-wide mb-8">
                    After years of event planning, we wouldn&rsquo;t still be doing
                    this if it weren&rsquo;t{" "}
                    <em className="italic font-normal">fun for everyone</em>{" "}
                    involved&mdash;including us.
                  </h1>

                  <p className="font-serif text-base sm:text-lg leading-relaxed max-w-md">
                    We listen to learn about you, your families, and your
                    experiences. Then, we layer in{" "}
                    <em className="italic">
                      high-touch logistics &amp; thoughtful design
                    </em>{" "}
                    to execute an all-encompassing vision for your day.
                  </p>
                </div>
              </div>

              {/* Striped panel with inset photo — blank until the photo is supplied */}
              <div
                className="px-10 sm:px-20 lg:px-[16%] pt-24 sm:pt-40 lg:pt-56 pb-24 sm:pb-28"
                style={{
                  background:
                    "repeating-linear-gradient(90deg, #f6e9ec 0px, #f6e9ec 12px, #e6c6ce 12px, #e6c6ce 22px)",
                }}
              >
                <div className="aspect-[9/10] w-full bg-[#efe3e6]" />
              </div>

              {/* Full-width photo — blank until the photo is supplied */}
              <div className="aspect-[5/6] w-full bg-[#efe3e6] mt-28 sm:mt-44 lg:mt-64" />

              {/* Guidance text */}
              <div className="px-8 sm:px-14 lg:px-[10%] pt-20 sm:pt-28 lg:pt-36 pb-24 sm:pb-32">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.25] tracking-wide mb-14 sm:mb-20">
                  This is a{" "}
                  <em className="italic font-normal">once-in-a-lifetime</em>{" "}
                  experience&mdash;it&rsquo;s worth enjoying.
                </h2>

                <div className="pl-0 sm:pl-10 lg:pl-[7%] font-serif">
                  <p className="text-xl sm:text-2xl lg:text-[26px] leading-[1.45] mb-6">
                    We&rsquo;re <em className="italic">here to guide you</em>{" "}
                    through the entire process, offering up years of expertise
                    and a well-honed knack for logistics to make your dream
                    celebration a reality.
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl leading-[1.55] mb-5">
                    We won&rsquo;t pigeonhole you into a one-size-fits-all
                    design. We venture boldly into the{" "}
                    <em className="italic">never-been-done-before</em> to create
                    custom details that set your celebration apart.
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl leading-[1.55]">
                    We&rsquo;ll take the heavy lifting off your plate so the
                    only decisions left for you to make are the exciting ones,
                    and so that you and your families can enjoy every moment{" "}
                    <em className="italic">without undue worry or stress</em>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team intro — blank background photo with the founder card lapping both sections */}
        <section className="relative bg-[#7a5560] text-white text-center px-6 sm:px-12 pt-20 sm:pt-28 pb-44 sm:pb-56 lg:pb-64">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.2] tracking-wide mb-8 sm:mb-10">
              The team you can trust to{" "}
              <em className="italic font-normal">orchestrate every moment</em>{" "}
              of your celebration.
            </h2>
            <p className="font-serif italic text-xl sm:text-2xl lg:text-[28px]">
              (And whom you&rsquo;d also love to meet for happy hour.)
            </p>
          </div>
        </section>

        <section className="flow-root bg-[#7a5560] px-6 sm:px-12 pb-20 sm:pb-28">
          <div className="relative z-10 max-w-5xl mx-auto -mt-28 sm:-mt-32 lg:-mt-36 space-y-20 sm:space-y-28">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col lg:flex-row">
                {/* Photo — blank until supplied */}
                <div className="w-full lg:w-[52%] aspect-[4/5] bg-[#efe3e6] shrink-0" />

                {/* Card overlapping the photo */}
                <div className="bg-[#efe3e6] shadow-2xl text-center px-8 sm:px-12 lg:px-14 py-12 sm:py-14 mx-4 sm:mx-10 lg:mx-0 -mt-10 lg:mt-7 lg:-ml-[8%] self-start">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#221a1d] leading-tight uppercase tracking-wide">
                    {member.name}
                  </h3>
                  <p className="font-serif italic text-xl sm:text-2xl text-[#3d2830] mb-6">
                    {member.role}
                  </p>
                  <div className="w-20 h-[2px] bg-[#c84f60]/60 mx-auto mb-6" />
                  <p className="font-serif text-base sm:text-lg text-[#3d2830] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing call to action — blank background photo until supplied */}
        <section className="bg-[#5c3a45] text-white text-center px-6 py-28 sm:py-40 lg:py-52 min-h-[560px] sm:min-h-[680px] flex items-center justify-center">
          <div className="flex flex-col items-center max-w-3xl">
            <svg
              className="w-14 h-[72px] sm:w-16 sm:h-20 mb-8 text-white"
              viewBox="0 0 64 80"
              fill="none"
              stroke="currentColor"
            >
              <ellipse cx="32" cy="40" rx="28" ry="36" strokeWidth="3" />
              <ellipse
                cx="32"
                cy="40"
                rx="22"
                ry="30"
                strokeWidth="1.2"
                opacity="0.75"
              />
              <g strokeLinecap="round" strokeWidth="2.2">
                <line x1="22" y1="34" x2="42" y2="34" />
                <line x1="25" y1="40" x2="39" y2="40" />
                <line x1="23" y1="46" x2="41" y2="46" />
              </g>
            </svg>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-normal uppercase leading-[1.1] tracking-wide mb-8 sm:mb-10">
              planning an event?
            </h2>
            <p className="font-serif italic text-2xl sm:text-3xl lg:text-[34px] mb-10 sm:mb-12">
              Take the first step.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-[#cdd9ee] hover:bg-[#c84f60] text-[#3d2830] hover:text-white font-sans text-[12px] sm:text-[13px] font-medium tracking-[0.12em] uppercase px-8 py-4 transition-colors duration-300"
            >
              Connect with our team
            </Link>
          </div>
        </section>

        <ClientTestimonialSection />
        <ConnectSection />
      </main>
    </div>
  );
}
