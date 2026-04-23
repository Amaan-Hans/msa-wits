const upcomingEvents = [
  {
    title: "Arabic Language Classes",
    date: "Every Tuesday & Thursday",
    time: "5:00 PM – 6:30 PM",
    location: "MSA Room, Student Centre",
    category: "Education",
    description:
      "Weekly Arabic classes open to all levels — from complete beginners to those looking to refine their reading and grammar.",
  },
  {
    title: "Weekly Discussion Circle",
    date: "Every Friday",
    time: "5:30 PM – 7:00 PM",
    location: "MSA Room, Student Centre",
    category: "Spiritual",
    description:
      "An open discussion circle covering topics in Islamic knowledge, current affairs, and personal development from an Islamic perspective.",
  },
  {
    title: "Sisters' Circle",
    date: "Every Wednesday",
    time: "4:30 PM – 5:30 PM",
    location: "Library Seminar Room",
    category: "Community",
    description:
      "A safe, supportive space for sisters to connect, share, and grow together in faith and sisterhood.",
  },
  {
    title: "Bayaan — Friday Reminder",
    date: "Every Friday",
    time: "After Jumu'ah",
    location: "Main Campus Musalla",
    category: "Lecture",
    description:
      "A short post-Jumu'ah talk delivered by a guest speaker or senior student. Topics vary weekly.",
  },
];

const categoryColours: Record<string, string> = {
  Education: "bg-blue-50 text-blue-700 border-blue-100",
  Spiritual: "bg-[#8ecae6]/20 text-[#023047] border-[#8ecae6]/30",
  Community: "bg-purple-50 text-purple-700 border-purple-100",
  Lecture: "bg-amber-50 text-amber-700 border-amber-100",
  Social: "bg-rose-50 text-rose-700 border-rose-100",
};

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
            Stay up to date with everything happening on campus. All events are open to
            the wider student community.
          </p>
        </div>
      </section>

      {/* Events list */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        {upcomingEvents.length > 0 ? (
          <div className="flex flex-col gap-5">
            {upcomingEvents.map((event) => (
              <article
                key={event.title}
                className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-start sm:gap-8"
              >
                {/* Category pill */}
                <div className="sm:pt-1">
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${categoryColours[event.category] ?? "bg-slate-100 text-slate-700 border-slate-200"}`}
                  >
                    {event.category}
                  </span>
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-slate-900">{event.title}</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    {event.date} &middot; {event.time} &middot; {event.location}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* ── Filler when no events ── */
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
                <a
                  href="https://www.instagram.com/msa_wits/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#219ebc] hover:underline"
                >
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
