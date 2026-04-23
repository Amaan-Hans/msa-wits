const tips = [
  {
    category: "Salaah First",
    colour: "border-[#8ecae6]/40 bg-[#8ecae6]/10",
    labelColour: "text-[#219ebc]",
    items: [
      "Block your five daily prayers in your timetable — treat them as non-negotiable.",
      "Use the on-campus musalla so you never have to miss a prayer between lectures.",
      "Set quiet reminders on your phone for each adhan time.",
      "Pray with other students when you can — the congregation strengthens your resolve.",
    ],
  },
  {
    category: "Time Management",
    colour: "border-amber-100 bg-amber-50",
    labelColour: "text-amber-700",
    items: [
      "Plan your week on Sunday evening so deadlines and MSA events don't clash.",
      "Use the Pomodoro method: 25 minutes of focused study, then a short break for dhikr.",
      "Identify your peak productivity hours and protect them for deep academic work.",
      "Batch admin tasks (emails, admin) into one daily slot so they don't interrupt study flow.",
    ],
  },
  {
    category: "Seeking Knowledge",
    colour: "border-purple-100 bg-purple-50",
    labelColour: "text-purple-700",
    items: [
      "Treat your degree as an act of worship — make an intention (niyyah) before studying.",
      "Attend MSA weekly programmes to stay connected to Islamic knowledge alongside academics.",
      "Read at least one Islamic book or article per week — even 15 minutes daily adds up.",
      "Listen to beneficial lectures or podcasts during your commute or gym session.",
    ],
  },
  {
    category: "Community & Brotherhood/Sisterhood",
    colour: "border-rose-100 bg-rose-50",
    labelColour: "text-rose-700",
    items: [
      "Plug into the MSA from week one — isolation is one of the biggest struggles at university.",
      "Be consistent at weekly events; relationships deepen through repeated presence.",
      "Check in on your Muslim peers, especially during exam season.",
      "Offer to study together — accountability partners boost both grades and deen.",
    ],
  },
  {
    category: "Mental Health & Well-being",
    colour: "border-emerald-100 bg-emerald-50",
    labelColour: "text-emerald-700",
    items: [
      "Recognise that difficulty is part of the test — but you are not meant to struggle alone.",
      "Make duaa your first response to anxiety, not your last resort.",
      "Sleep, exercise, and eat well — your body has rights over you.",
      "Reach out to Wits Student Counselling or a trusted MSA member if you are overwhelmed.",
    ],
  },
  {
    category: "Avoiding Pitfalls",
    colour: "border-slate-200 bg-stone-50",
    labelColour: "text-slate-700",
    items: [
      "Be intentional about who you spend your time with — environment shapes character.",
      "Limit social media to intentional slots; endless scrolling drains focus and barakah.",
      "If you fall short, make tawbah and continue — consistency matters more than perfection.",
      "Stay wary of procrastination disguised as 'preparing to study'.",
    ],
  },
];

const quotes = [
  {
    text: "Whoever follows a path in pursuit of knowledge, Allah will make easy for him a path to Paradise.",
    source: "Sahih Muslim",
  },
  {
    text: "Take advantage of five before five: your youth before your old age, your health before your sickness, your wealth before your poverty, your free time before your business, and your life before your death.",
    source: "Al-Hakim (Sahih)",
  },
];

export default function StudentLifePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#023047] to-[#219ebc] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8ecae6]">
            Resources
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            Student Life
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/80">
            Practical tips for navigating university while staying grounded in your deen.
            You do not have to choose between your studies and your faith.
          </p>
        </div>
      </section>

      {/* Hadith / Quote banner */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
          <div className="grid gap-5 lg:grid-cols-2">
            {quotes.map((q) => (
              <blockquote
                key={q.source}
                className="rounded-3xl border border-[#8ecae6]/30 bg-[#8ecae6]/10 p-7"
              >
                <p className="text-base italic leading-8 text-[#023047]">&ldquo;{q.text}&rdquo;</p>
                <footer className="mt-4 text-sm font-medium text-[#219ebc]">— {q.source}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#219ebc]">
          Practical Guidance
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
          Balancing deen and studies
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {tips.map((section) => (
            <div
              key={section.category}
              className={`rounded-3xl border p-8 ${section.colour}`}
            >
              <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${section.labelColour}`}>
                {section.category}
              </p>
              <ul className="mt-5 space-y-3">
                {section.items.map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current opacity-40" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
          <div className="rounded-[2rem] bg-gradient-to-br from-[#023047] to-[#219ebc] p-10 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8ecae6]">
              You are not alone
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Come find your community.
            </h2>
            <p className="mt-4 max-w-xl text-base text-white/80">
              The MSA exists precisely for moments when university feels overwhelming. Come to
              an MSA event, talk to a committee member, or just sit in the musalla — the door is
              always open.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/events"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-[#023047] transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                See upcoming events
              </a>
              <a
                href="/how-to-join"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                How to join the MSA
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
