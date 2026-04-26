const execColours = [
  "bg-[#023047] text-white",
  "bg-[#219ebc] text-white",
  "bg-[#219ebc] text-white",
  "bg-[#8ecae6] text-[#023047]",
  "bg-slate-700 text-white",
  "bg-slate-700 text-white",
];

const executive = [
  { role: "Chairperson", name: "Mohammed Irshaad Abubaker", initials: "MIA" },
  { role: "Vice Chairperson", name: "Shazia Muhamed", initials: "SM" },
  { role: "Vice Chairperson", name: "Muhammed Laher", initials: "ML" },
  { role: "Treasurer", name: "Ammar Malek", initials: "AM" },
  { role: "Secretary", name: "Fatima Zahraa Bham", initials: "FZB" },
  { role: "Secretary", name: "Tasmiyah Bhamjee", initials: "TB" },
];

const portfolioColours = [
  { bg: "bg-[#8ecae6]/10 border-[#8ecae6]/40", label: "text-[#219ebc]", head: "bg-[#023047] text-white" },
  { bg: "bg-purple-50 border-purple-200", label: "text-purple-700", head: "bg-purple-700 text-white" },
  { bg: "bg-amber-50 border-amber-200", label: "text-amber-700", head: "bg-amber-600 text-white" },
  { bg: "bg-rose-50 border-rose-200", label: "text-rose-700", head: "bg-rose-600 text-white" },
  { bg: "bg-emerald-50 border-emerald-200", label: "text-emerald-700", head: "bg-emerald-700 text-white" },
  { bg: "bg-slate-50 border-slate-200", label: "text-slate-700", head: "bg-slate-700 text-white" },
];

const portfolios = [
  {
    name: "Events Portfolio",
    description: "Coordinates and organises platforms for beneficial social, academic, and religious events for Muslim students on campus to foster community and strengthen Islamic identity.",
    head: "Mahdiya Bhyat",
    members: ["Johara Sheik", "Mohammed Zunaid Wania", "Mahdiyahh Paraze", "Assiatou Diallo"],
  },
  {
    name: "Musallah Portfolio",
    description: "Focuses on the overall management and upkeep of the prayer spaces — ensuring the musallahs are clean, organised, and welcoming, and coordinating salaah arrangements.",
    head: "Muhammad Dinath",
    members: ["Umar Vadi", "Nazeefah Matwadia", "Rahma Alasow"],
  },
  {
    name: "Student Affairs Portfolio",
    description: "Here to make your academic and religious life balance. From Ramadan skits to deferred papers — student affairs at your service.",
    head: "Abdul Ghani Khokhar",
    members: ["Shaziya Moosa", "Nusaiba Mahomed", "Sidra Shaikh", "Sekinah Adewumi"],
  },
  {
    name: "Social Media Portfolio",
    description: "Manages and grows the MSA Wits Instagram page through well-designed posts, Jumu'ah announcements, community updates, and consistent content.",
    head: "Zuhayra Cassim",
    members: ["Arwa Saleem"],
  },
  {
    name: "Da'wah Portfolio",
    description: "Facilitates and coordinates Islamic outreach initiatives in and around campus — Da'wah Weeks, talks by credible scholars, and supporting students interested in learning about or accepting Islam.",
    head: "Zaahid Mulla",
    members: ["Waleed", "Kadira Peter", "Sajida Jadwat", "Faatimah Bhamjee", "Tshepang Msiza"],
  },
  {
    name: "Outreach & Fundraising Portfolio",
    description: "Plans and coordinates key MSA events such as O-Week activities, iftaars, Eid brunches, the annual braai, and other fundraising initiatives.",
    head: "Zayanah Laher",
    members: ["Mohammed Muawiya Waseem", "Safeeyah Zweni", "Safiya Mndebele"],
  },
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
            The MSA 2026 committee — a dedicated group of students who volunteer their time
            to serve the Muslim community on campus.
          </p>
        </div>
      </section>

      {/* Executive Committee */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#219ebc]">
          Executive Committee
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
          Leadership
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {executive.map((member, i) => (
            <div
              key={`${member.role}-${member.name}`}
              className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-sm font-bold ${execColours[i % execColours.length]}`}>
                {member.initials}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#219ebc]">
                  {member.role}
                </p>
                <h3 className="mt-0.5 text-base font-semibold text-slate-900">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* General Committee — Portfolios */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#219ebc]">
            General Committee
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Portfolios
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolios.map((portfolio, i) => {
              const colours = portfolioColours[i % portfolioColours.length];
              return (
                <div
                  key={portfolio.name}
                  className={`rounded-3xl border p-7 ${colours.bg}`}
                >
                  <p className={`text-sm font-semibold uppercase tracking-[0.15em] ${colours.label}`}>
                    {portfolio.name}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{portfolio.description}</p>

                  <div className="mt-5 space-y-2">
                    {/* Head */}
                    <div className={`inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-semibold ${colours.head}`}>
                      <span>{portfolio.head}</span>
                      <span className="opacity-70">· Head</span>
                    </div>
                    {/* Members */}
                    <ul className="space-y-1 pt-1">
                      {portfolio.members.map((member) => (
                        <li key={member} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className="h-1 w-1 rounded-full bg-slate-400" />
                          {member}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-100 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Want to get involved?</h2>
              <p className="mt-2 text-base text-slate-600">
                Committee positions are discussed in the MSA WhatsApp group. Join to stay informed.
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

      {/* Website maintainer */}
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Website</p>
            <p className="mt-1 text-sm text-slate-600">
              This site is maintained by <span className="font-semibold text-slate-800">Amaan Hanslod</span>.
              If you notice any incorrect or outdated information on the website, please reach out at{" "}
              <a
                href="mailto:hanslodamaan4@gmail.com"
                className="font-medium text-[#219ebc] hover:underline"
              >
                hanslodamaan4@gmail.com
              </a>
              .
            </p>
            <p className="mt-2 text-xs text-slate-400">
              For all MSA-related queries, events, or community matters, please contact the committee directly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
