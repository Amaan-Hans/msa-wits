const committee = [
  {
    name: "[ Name ]",
    role: "Ameer",
    faculty: "[ Faculty ]",
    bio: "Leads the MSA with a focus on community building, spiritual growth, and student welfare on campus.",
    initials: "A",
  },
  {
    name: "[ Name ]",
    role: "Deputy Ameer",
    faculty: "[ Faculty ]",
    bio: "Supports the Ameer across all portfolios and leads in their absence. Oversees internal coordination.",
    initials: "DA",
  },
  {
    name: "[ Name ]",
    role: "Secretary General",
    faculty: "[ Faculty ]",
    bio: "Manages all MSA communications, minutes, and administrative records.",
    initials: "SG",
  },
  {
    name: "[ Name ]",
    role: "Treasurer",
    faculty: "[ Faculty ]",
    bio: "Oversees the MSA budget, funding applications, and financial reporting.",
    initials: "T",
  },
  {
    name: "[ Name ]",
    role: "Sisters' Representative",
    faculty: "[ Faculty ]",
    bio: "Advocates for and leads initiatives within the sisters' community on campus.",
    initials: "SR",
  },
  {
    name: "[ Name ]",
    role: "Events Coordinator",
    faculty: "[ Faculty ]",
    bio: "Plans and executes all MSA events — from weekly programmes to large-scale campus events.",
    initials: "EC",
  },
  {
    name: "[ Name ]",
    role: "Social Media & PR",
    faculty: "[ Faculty ]",
    bio: "Manages the MSA's online presence, content creation, and public communications.",
    initials: "SM",
  },
  {
    name: "[ Name ]",
    role: "Outreach & Da'wah",
    faculty: "[ Faculty ]",
    bio: "Leads interfaith dialogue, revert support, and community outreach beyond the Muslim student body.",
    initials: "OD",
  },
  {
    name: "[ Name ]",
    role: "Academic Affairs",
    faculty: "[ Faculty ]",
    bio: "Coordinates academic support initiatives and connects students with resources.",
    initials: "AA",
  },
];

const colours = [
  "bg-[#023047] text-white",
  "bg-[#219ebc] text-white",
  "bg-[#8ecae6] text-[#023047]",
  "bg-slate-700 text-white",
  "bg-amber-600 text-white",
  "bg-purple-700 text-white",
  "bg-rose-600 text-white",
  "bg-emerald-700 text-white",
  "bg-sky-600 text-white",
];

export default function MeetTheTeamPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#023047] to-[#219ebc] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8ecae6]">
            The Committee
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            Meet the Team
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/80">
            The MSA is run by a dedicated group of students who volunteer their time to serve
            the Muslim community on campus.
          </p>
        </div>
      </section>

      {/* Committee grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#219ebc]">
          {new Date().getFullYear()} Committee
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
          Your representatives
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Names and photos will be updated once the committee is confirmed.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {committee.map((member, i) => (
            <div
              key={member.role}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              {/* Avatar */}
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl text-lg font-bold ${colours[i % colours.length]}`}
              >
                {member.initials}
              </div>

              <div className="mt-4 flex-1">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#219ebc]">
                  {member.role}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="text-sm text-slate-400">{member.faculty}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Want to get involved?</h2>
              <p className="mt-2 text-base text-slate-600">
                Committee elections are held annually. In the meantime, volunteer at any event.
              </p>
            </div>
            <a
              href="/how-to-join"
              className="inline-flex flex-shrink-0 items-center justify-center rounded-2xl bg-[#023047] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#219ebc]"
            >
              How to join
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
