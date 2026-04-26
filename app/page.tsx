import Image from "next/image";
import Link from "next/link";
import { CardCarousel } from "./components/CardCarousel";
import { LiveIslamicDate } from "./components/LiveIslamicDate";
import { LivePrayerTimes } from "./components/LivePrayerTimes";
import { LiveDailyContent } from "./components/LiveDailyContent";

export default function HomePage() {
  const cards = [
    {
      title: "Arabic Classes",
      description: "Build your foundation in classical Arabic with weekly sessions open to all levels.",
      date: "Tues & Thurs · 5:00 PM",
      tag: "Education",
      gradient: "from-[#219ebc] to-[#023047]",
    },
    {
      title: "Quran Classes",
      description: "Recitation, tajweed, and understanding — open to beginners and advanced students alike.",
      date: "Sundays · 10:00 AM",
      tag: "Spiritual",
      gradient: "from-[#023047] to-[#0a4a6e]",
    },
    {
      title: "Donate",
      description: "Support MSA programmes, student welfare, and community initiatives on campus.",
      date: "Always open",
      tag: "Support",
      gradient: "from-amber-500 to-amber-800",
    },
    {
      title: "Revert Information",
      description: "Resources, guidance, and community support for those new to Islam.",
      date: "Ongoing",
      tag: "Info",
      gradient: "from-[#8ecae6] to-[#219ebc]",
    },
    {
      title: "Bayaan",
      description: "Weekly Islamic talks and reminders from scholars and student speakers.",
      date: "Fridays · After Jumu'ah",
      tag: "Lecture",
      gradient: "from-slate-600 to-slate-900",
    },
  ];

  const partnerOrgs = [
    {
      name: "Palestine Solidarity Committee – Wits",
      description: "Advocating for Palestinian rights on campus.",
      href: "#",
    },
    {
      name: "Wits SRC",
      description: "Student Representative Council at the University of the Witwatersrand.",
      href: "#",
    },
    {
      name: "Islamic Relief SA Students",
      description: "Connecting students with humanitarian aid and relief work.",
      href: "#",
    },
    {
      name: "SA Students Congress (SASCO)",
      description: "Progressive student movement active on campus.",
      href: "#",
    },
    {
      name: "Jamiatul Ulama South Africa",
      description: "A leading Islamic scholarly body providing religious guidance and community services across South Africa.",
      href: "https://www.jamiatsa.org/",
    },
  ];

  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden text-white">
        {/* Background image */}
        <Image
          src="/images/background_header.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Colour gradient overlay — starts #8ecae6, through #219ebc, to #023047 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8ecae6]/50 via-[#219ebc]/55 to-[#023047]/80" />
        {/* Extra left-side darkness so white text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#023047]/40 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              {/* Logo badge */}
              <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 py-2 pl-2 pr-5 text-sm font-medium backdrop-blur">
                <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-full bg-white">
                  <Image
                    src="/images/MSA_Logo_whitebackground.jpg"
                    alt="MSA Wits Logo"
                    fill
                    className="object-contain p-0.5"
                    priority
                  />
                </div>
                <span>Muslim Student Association · Wits</span>
              </div>

              <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                A welcoming space for faith, friendship, and student life.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
                Stay connected with prayer times, weekly gatherings, community events,
                and opportunities to grow spiritually alongside fellow students on campus.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#events"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-[#023047] shadow-lg shadow-black/10 transition hover:-translate-y-0.5"
                >
                  View Upcoming Events
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Learn About the MSA
                </a>
              </div>
            </div>

            {/* Info cards */}
            <div className="flex flex-col gap-4 lg:min-w-[240px]">
              <LiveIslamicDate />

              {/* Jumu'ah card — whole card → /musalla, location text → Google Maps */}
              <div className="relative rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur transition hover:bg-white/20">
                <Link href="/musalla" className="absolute inset-0 rounded-3xl" aria-label="Go to Musalla page" />
                <p className="text-xs font-semibold uppercase tracking-widest text-[#8ecae6]">
                  Jumu&apos;ah
                </p>
                <p className="mt-2 text-xl font-semibold text-white">1:15 PM</p>
                <a
                  href="https://www.google.com/maps/place/Wits+Musalla/@-26.1883634,28.0287288,241m/data=!3m1!1e3!4m6!3m5!1s0x1e950c0fcba25889:0x8375c9b2bbb1c36e!8m2!3d-26.1883663!4d28.0291218!16s%2Fg%2F1pyqvcpct"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 mt-1 block text-sm text-[#8ecae6]/80 hover:text-white hover:underline"
                >
                  Wits Musalla, East Campus
                </a>
              </div>

              {/* Prayer Space card — location text → Google Maps */}
              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#8ecae6]">
                  Prayer Space
                </p>
                <p className="mt-2 text-xl font-semibold text-white">Open Daily</p>
                <a
                  href="https://www.google.com/maps/place/Wits+Musalla/@-26.1883634,28.0287288,241m/data=!3m1!1e3!4m6!3m5!1s0x1e950c0fcba25889:0x8375c9b2bbb1c36e!8m2!3d-26.1883663!4d28.0291218!16s%2Fg%2F1pyqvcpct"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm text-[#8ecae6]/80 hover:text-white hover:underline"
                >
                  Wits Musalla, East Campus
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LivePrayerTimes />

      <LiveDailyContent />

      {/* ── Events ── */}
      <section id="events" className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#219ebc]">
            Get Involved
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            What we do
          </h2>
        </div>

        <CardCarousel cards={cards} />
      </section>

      {/* ── About ── */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">

          {/* Window image */}
          <div className="relative min-h-72 overflow-hidden rounded-3xl lg:min-h-0">
            <Image
              src="/images/window_image.png"
              alt="Islamic geometric window with warm light"
              fill
              className="object-cover"
            />
          </div>

          {/* Text + get involved */}
          <div className="flex flex-col justify-center gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#219ebc]">
                About Us
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Supporting Muslim students in every stage of university life.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                The Muslim Student Association exists to foster a sense of belonging, spiritual
                growth, and service on campus. Whether you are looking for a place to pray,
                attend a programme, join Arabic classes, or contribute to the community — the MSA
                is here for you.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#8ecae6]/40 bg-[#8ecae6]/10 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#023047]">Get involved this semester</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[#023047]/75">
                <li>Attend weekly programmes and discussions</li>
                <li>Join our Arabic language classes</li>
                <li>Volunteer at outreach and service events</li>
                <li>Connect with the committee and student community</li>
                <li>Stay updated on prayer and campus announcements</li>
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-flex rounded-2xl bg-[#023047] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#219ebc]"
              >
                Contact the MSA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Connected Organisations ── */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#219ebc]">
            Community
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Connected Organisations
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            We stand alongside and collaborate with these student organisations on campus and
            beyond.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partnerOrgs.map((org) => (
              <a
                key={org.name}
                href={org.href}
                className="group rounded-3xl border border-slate-200 bg-stone-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#8ecae6] hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#023047]">
                  {org.name}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{org.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social Media & Contact ── */}
      <section
        id="contact"
        className="border-t border-[#023047] bg-gradient-to-br from-[#023047] via-[#219ebc]/80 to-[#023047]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8ecae6]">
              Stay Connected
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
              Be part of the MSA community.
            </h2>
            <p className="mt-3 text-base text-[#8ecae6]/80">
              Follow us on social media and stay updated on everything happening at Wits MSA.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/msa_wits/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 p-8 text-white transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30"
            >
              <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="mt-4 text-xl font-semibold">Instagram</span>
              <span className="mt-1 text-sm opacity-80">@msa_wits</span>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/witsmsa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30"
            >
              <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="mt-4 text-xl font-semibold">Facebook</span>
              <span className="mt-1 text-sm opacity-80">Wits MSA</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/muslim-student-association-of-witwatersrand"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center rounded-3xl bg-gradient-to-br from-sky-600 to-sky-700 p-8 text-white transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30"
            >
              <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="mt-4 text-xl font-semibold">LinkedIn</span>
              <span className="mt-1 text-sm opacity-80">MSA of Witwatersrand</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://chat.whatsapp.com/LWC0uU6HtqbHXe5TuDQZbG"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center rounded-3xl bg-gradient-to-br from-[#25D366] to-[#128C7E] p-8 text-white transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30"
            >
              <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="mt-4 text-xl font-semibold">WhatsApp</span>
              <span className="mt-1 text-sm opacity-80">Join our group</span>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@msa_wits"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center rounded-3xl bg-gradient-to-br from-slate-800 to-slate-950 p-8 text-white transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30"
            >
              <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.27 8.27 0 004.84 1.56V6.84a4.85 4.85 0 01-1.07-.15z"/>
              </svg>
              <span className="mt-4 text-xl font-semibold">TikTok</span>
              <span className="mt-1 text-sm opacity-80">@msa_wits</span>
            </a>
          </div>

          {/* QR code + email */}
          <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="relative h-36 w-36 overflow-hidden rounded-2xl bg-white p-2 shadow-lg">
                <Image
                  src="/images/QR.png"
                  alt="MSA Wits QR code"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <p className="text-sm text-[#8ecae6]">Scan to explore the beauty of Islam</p>
            </div>

            <div className="hidden h-24 w-px bg-white/10 sm:block" />

            <a
              href="mailto:msa@wits.ac.za"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Email Us · msa@wits.ac.za
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
