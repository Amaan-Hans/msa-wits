import { EventAccordion } from "../components/EventAccordion";
import type { EventData } from "../components/EventAccordion";

const upcomingEvents: EventData[] = [
  {
    title: "JoBurg Sumud Action Group — Meet & Greet Send-Off",
    category: "Community · Palestine Solidarity",
    day: "27",
    month: "APR",
    year: "2026",
    dayOfWeek: "Monday",
    publicHoliday: "Freedom Day",
    time: "3:00 PM",
    venue: "Impala Crescent School",
    address: "19 Mandrill Street, Lenasia",
    contact: { name: "Naazim", email: "info@palestinesa.co.za" },
    intro:
      "You're warmly welcomed to join the JoBurg Sumud Action — a local part of the Global Sumud Flotilla (GSF-SA) initiative to support our communities and delegates.",
    body:
      "We're hosting a special send-off to meet our local delegates who will be sailing with the Flotilla and joining the Land Convoy, as well as some of our dedicated GSF ground crew.",
    expect: [
      "Quick introductions of our Sumud delegates, community representatives, and the GSF support team.",
      "A discussion on how we can build support and amplify the Palestine Solidarity Movement together.",
      "A conversation on Freedom, Justice and Equality in the wake of Genocide: What does the future hold?",
    ],
    notes: [
      "This is not a public meeting. For the safety of our delegates, their names will not be released to the media until they are assuredly safe on the boats.",
      "Should you wish to invite trusted community activists, friends, and family to this send-off, please let the organisers know.",
      "Donations for the mission are welcomed. Let's break the siege.",
      "Light refreshments (tea) will be available. Please confirm attendance with the contact below.",
    ],
  },
  {
    title: "Palestine Informal Picnic",
    category: "Community · Palestine Solidarity",
    day: "30",
    month: "APR",
    year: "2026",
    dayOfWeek: "Thursday",
    time: "1:15 PM – 2:15 PM",
    venue: "Library Lawns",
    address: "Wits Main Campus, East Campus",
    intro:
      "An informal picnic on the Library Lawns to bring students together in solidarity with Palestine. Come as you are — no agenda, no formalities, just community.",
    body:
      "This is a space to have real, meaningful conversations about Palestine, to connect with fellow students who care, and to build the kind of community that sustains a movement. Bring your lunch and your voice.",
    expect: [
      "Open, facilitated conversation on Palestine and the current situation.",
      "A chance to meet and connect with like-minded students on campus.",
      "A relaxed, welcoming environment — all are welcome to join.",
    ],
    notes: [
      "This is an informal gathering — no registration required, just show up.",
      "Bring your own lunch. The lawns are open and shaded.",
    ],
  },
  {
    title: "Laudium Ijtima 2026",
    category: "Religious · Tabligh",
    day: "1",
    dayRange: "1–3",
    month: "MAY",
    year: "2026",
    dayOfWeek: "Friday",
    dateLabel: "Fri 1 May (Jumu'ah) – Sun 3 May 2026",
    venue: "Laudium Sports Stadium",
    address: "Laudium, Pretoria, South Africa",
    mapsLink: "https://maps.app.goo.gl/Nvz1NFDS9LvajpBL6",
    cost: "R230 Ijtima voucher — includes all meals for the full period",
    whatsappLink: {
      label: "Join Da'wat & Tabligh Announcement Group",
      href: "https://chat.whatsapp.com/EM9GTVcR2icHnpoBIAqqDc",
    },
    intro:
      "The Laudium Ijtima 2026 covers Botswana, Lesotho, Swaziland, Gauteng, Free State, Limpopo, Mpumalanga, North West, and Northern Cape. The gathering begins with Jumu'ah Salaah on Friday 1 May and concludes on Sunday 3 May 2026.",
    body:
      "A Special Fikr in preparation for the Ijtima was held on Sunday 19 April at 8:30 AM at the Laudium Ijtima Site to prepare and finalise the 8 important Jamaats that function during the days of the Ijtima.",
    expect: [
      "Mashwera Jamaat of each Zone",
      "Tashkeel Jamaat",
      "Ikhtilaad Jamaat",
      "Majma Jhor Jamaat",
      "Istikbaal Jamaat",
      "Ghidmat Jamaat of each feeding tent",
      "Zikr and Du'a Jamaat",
      "Hirasah Jamaat",
    ],
    notes: [
      "Special request to all Ulema conducting Jumu'ah Bayaans to please inform about the forthcoming Ijtima.",
      "Special request to all areas to make concerted efforts to invite to this important gathering.",
      "Volunteers are welcome at the Ijtima Site.",
      "For transport arrangements, please contact your responsible brothers at your local Musjid or area.",
      "Please share with others — new members are welcome to join the Da'wat and Tabligh Announcement Group via the WhatsApp link below.",
    ],
  },
  {
    title: "Annual MSA Braai",
    category: "Social",
    tba: true,
    teaser:
      "The Annual MSA Braai is coming — one of the most anticipated events of the year. Date, time, and venue will be announced soon. Stay tuned.",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#023047] to-[#219ebc] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8ecae6]">
            MSA Wits
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            Upcoming Events
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/80">
            Stay up to date with everything happening on campus and in the community. Tap any event to see full details.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        {upcomingEvents.length > 0 ? (
          <EventAccordion events={upcomingEvents} />
        ) : (
          <div className="flex flex-col items-center gap-5 rounded-3xl border border-slate-200 bg-white px-8 py-20 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#8ecae6]/20">
              <svg className="h-8 w-8 text-[#219ebc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Nothing scheduled yet</h2>
              <p className="mt-2 max-w-sm text-sm leading-7 text-slate-500">
                We&apos;re still planning the next round of events. Follow us on Instagram{" "}
                <a href="https://www.instagram.com/msa_wits/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#219ebc] hover:underline">
                  @msa_wits
                </a>{" "}
                or join our WhatsApp group to be the first to know.
              </p>
            </div>
            <a
              href="https://www.instagram.com/msa_wits/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-[#023047] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#219ebc]"
            >
              Follow on Instagram
            </a>
          </div>
        )}
      </section>
    </main>
  );
}
