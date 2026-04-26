import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Show up",
    description:
      "The simplest step. Come to any MSA event — the Bayaan after Jumu'ah, Arabic classes, or a sisters' circle. No registration needed, just walk in.",
    link: null,
  },
  {
    number: "02",
    title: "Join the WhatsApp group",
    description:
      "Our WhatsApp community is where announcements, reminders, and casual conversation happen. Join via the link below, or scan the QR code on the home page.",
    link: { label: "Join WhatsApp Group", href: "https://chat.whatsapp.com/LWC0uU6HtqbHXe5TuDQZbG" },
  },
  {
    number: "03",
    title: "Fill in the membership form",
    description:
      "A short form that helps us keep track of our community. It takes under two minutes and allows you to support what we do.",
    link: null,
  },
  {
    number: "04",
    title: "Get involved",
    description:
      "Volunteer at events, join a sub-committee, or simply show up consistently. The more you give, the more you'll get out of your time with the MSA.",
    link: null,
  },
];

const faqs = [
  {
    q: "Do I have to be a practising Muslim to join?",
    a: "Not at all. The MSA welcomes all Muslim students, wherever they are on their journey. We also welcome non-Muslim students who are curious about Islam.",
  },
  {
    q: "Is there a membership fee?",
    a: "Membership is R130 as a contribution to the MSA. However, you do not need to be a paid member to access any MSA facilities, events, or resources — all students are welcome regardless.",
  },
  {
    q: "How do I get onto the committee?",
    a: "Committee positions are discussed in the MSA WhatsApp group. Join the group to stay informed when positions open up.",
  },
  {
    q: "I'm a first-year — will I fit in?",
    a: "Absolutely. The MSA especially encourages first-years to plug in early. University can feel isolating in the first few weeks; the MSA community makes a real difference.",
  },
  {
    q: "What if I can't make it to events regularly?",
    a: "Join the WhatsApp group and follow us on Instagram — that way you stay connected even when you can't attend in person.",
  },
];

export default function HowToJoinPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#023047] to-[#219ebc] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8ecae6]">
            Membership
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            How to Join
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/80">
            Becoming part of the MSA is straightforward. There are no barriers — just show
            up and you&apos;re already one of us.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#219ebc]">
          Getting started
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
          Four simple steps
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <span className="text-4xl font-bold text-[#8ecae6]">{step.number}</span>
              <h3 className="mt-4 text-xl font-semibold text-[#023047]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              {step.link && (
                <a
                  href={step.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  {step.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* What you get */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#219ebc]">
                Why join?
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                What being a member means
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Membership is not a transaction. It is an investment in your spiritual,
                academic, and social well-being. The MSA exists to make your time at Wits
                richer — in every sense of the word.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#8ecae6]/40 bg-[#8ecae6]/10 p-8">
              <ul className="space-y-4">
                {[
                  "Access to weekly programmes, Arabic classes, and lectures",
                  "A ready-made community of like-minded students",
                  "Support from committee members who understand student life",
                  "Updates on prayer times, Jumu'ah, and campus musalla info",
                  "Opportunities to volunteer, lead, and grow",
                  "Connections to other Islamic societies across South Africa",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm leading-7 text-[#023047]">
                    <span className="mt-1.5 h-4 w-4 flex-shrink-0 rounded-full bg-[#219ebc]/20 text-[#219ebc] flex items-center justify-center text-[10px] font-bold">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#219ebc]">
          FAQ
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
          Common questions
        </h2>

        <div className="mt-10 flex flex-col gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-base font-semibold text-[#023047]">{faq.q}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-2xl font-semibold text-slate-900">
              Ready? Come say salaam.
            </h2>
            <p className="max-w-md text-base text-slate-600">
              The best first step is just showing up. Find us at the next event or reach out
              directly.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/events"
                className="inline-flex items-center justify-center rounded-2xl bg-[#023047] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#219ebc]"
              >
                See upcoming events
              </Link>
              <a
                href="mailto:msa@wits.ac.za"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
