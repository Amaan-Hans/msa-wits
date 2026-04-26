import Link from "next/link";

const keyConcepts = [
  {
    term: "Allah",
    definition:
      "In Arabic, Allah is the proper name of the One True God, the Creator. Islam teaches that Allah is the true God of all humankind. Jewish and Christian Arabs use this name to refer to God, and it is the word used for God in Arabic-language Bibles.",
  },
  {
    term: "Quran",
    definition:
      "The final Word of the One True God (Allah), revealed to Prophet Muhammad. Although revealed fourteen centuries ago, the Quranic text remains completely intact and unaltered in its original Arabic form — an eternal miracle in proof of his prophethood.",
  },
  {
    term: "Muhammad ﷺ",
    definition:
      "The last Prophet of the One True God (Allah), sent to all humankind. He was born in Makkah around 570 CE and received revelation over 23 years. His life, teachings, and character are preserved in the Sunnah and Hadith.",
  },
  {
    term: "Islam",
    definition:
      "Meaning 'submission' and 'peace' in Arabic, Islam is the way of life centred on surrendering to Allah alone. It is not a new religion — it is the same message of monotheism brought by all the prophets, including Abraham, Moses, Jesus, and Muhammad (peace be upon them all).",
  },
  {
    term: "Athan",
    definition:
      "The call to prayer (Athan) is announced daily at the beginning of each of the five daily prayer times. It is one of the most recognisable sounds in the Muslim world and serves as a reminder that worship is the purpose of life.",
  },
  {
    term: "Shahada",
    definition:
      "The declaration of faith: 'Ash-hadu an la ilaha ill-Allah, wa ash-hadu anna Muhammadan Rasul-Allah' — 'I bear witness that there is no god but Allah, and I bear witness that Muhammad is the Messenger of Allah.' This single statement is the door into Islam.",
  },
];

const quranicVerses = [
  {
    surah: "Surah Az-Zumar",
    ref: "39:53",
    arabic: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ",
    translation:
      "Say: O My servants who have transgressed against themselves — do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.",
  },
  {
    surah: "Surah Al-Hashr",
    ref: "59:22–24",
    arabic: "هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ",
    translation:
      "He is Allah, other than whom there is no deity, Knower of the unseen and the witnessed. He is the Entirely Merciful, the Especially Merciful. He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer, the Exalted in Might, the Compeller, the Superior.",
  },
  {
    surah: "Surah Al-Isra",
    ref: "17:23–24",
    arabic: "وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا",
    translation:
      "Your Lord has decreed that you worship none but Him, and that you be kind to parents. Whether one or both of them attain old age in your life, do not say to them a word of contempt, nor repel them, but address them in terms of honour.",
  },
  {
    surah: "Surah Al-Mu'minun",
    ref: "23:12–14",
    arabic: "وَلَقَدْ خَلَقْنَا الْإِنسَانَ مِن سُلَالَةٍ مِّن طِينٍ",
    translation:
      "And certainly did We create man from an extract of clay. Then We placed him as a sperm-drop in a firm lodging. Then We made the sperm-drop into a clinging clot, and We made the clot into a lump, and We made the lump, bones, and We covered the bones with flesh; then We developed him into another creation. So blessed is Allah, the best of creators.",
  },
];

const pillarsOfIslam = [
  {
    number: "1",
    name: "Shahada",
    detail: "Testimony that there is no god but Allah and that Muhammad ﷺ is His Messenger.",
  },
  {
    number: "2",
    name: "Salah",
    detail: "Five daily prayers — a direct connection between the servant and their Creator.",
  },
  {
    number: "3",
    name: "Zakah",
    detail: "Giving 2.5% of savings to those in need — purifying wealth and nurturing community.",
  },
  {
    number: "4",
    name: "Sawm",
    detail: "Fasting during the month of Ramadan — spiritual discipline, gratitude, and God-consciousness.",
  },
  {
    number: "5",
    name: "Hajj",
    detail: "Pilgrimage to Makkah once in a lifetime for those who are able — unity of the Muslim Ummah.",
  },
];

const resources = [
  {
    title: "Islam Beauty",
    description:
      "An accessible introduction to Islam — featuring Quranic recitations, articles, and a 7-minute overview of the faith.",
    href: "https://islambeauty.com/en/",
    tag: "Website",
  },
  {
    title: "Quran.com",
    description:
      "Read, listen to, and explore the full Quran with translations in over 100 languages.",
    href: "https://quran.com",
    tag: "Quran",
  },
  {
    title: "IslamQA",
    description:
      "Reliable answers to questions about Islam from qualified scholars — covering all aspects of belief, worship, and daily life.",
    href: "https://islamqa.info/en",
    tag: "Q&A",
  },
  {
    title: "Seerah of the Prophet ﷺ",
    description:
      "An in-depth biography of Prophet Muhammad ﷺ — his character, mission, and timeless example for humanity.",
    href: "https://islambeauty.com/en/",
    tag: "Biography",
  },
];

export default function DawahPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-[#023047] via-[#023047] to-[#219ebc] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8ecae6]">
            Da&apos;wah
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Discover the Beauty of Islam
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            Islam is not just a religion — it is a complete way of life. Whether you are curious,
            questioning, or ready to learn, we welcome you with open arms and warm hearts.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#what-is-islam"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-[#023047] shadow-lg transition hover:-translate-y-0.5"
            >
              Start Learning
            </a>
            <Link
              href="/musalla"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Visit the Musalla
            </Link>
          </div>
        </div>
      </section>

      {/* ── What is Islam ── */}
      <section id="what-is-islam" className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#219ebc]">
          Introduction
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          What is Islam?
        </h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Islam is the world&apos;s second-largest religion, with over 1.8 billion followers across
              every continent. It is a faith rooted in the belief in One God — Allah — and in the
              prophethood of Muhammad ﷺ as His final messenger.
            </p>
            <p>
              The word <span className="font-semibold text-slate-800">Islam</span> comes from the
              Arabic root <span className="italic">Salema</span>, meaning peace, purity, submission,
              and obedience. In the religious sense, Islam means submission to the will of Allah
              and obedience to His law.
            </p>
            <p>
              Islam is not a new religion — it is the continuation of the same message brought by
              all the prophets throughout history: Abraham, Moses, Jesus, and finally Muhammad
              (peace be upon them all). The Quran confirms and completes the divine guidance
              given to humanity.
            </p>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              At its core, Islam teaches the oneness of God (Tawhid), accountability on the Day
              of Judgement, and the importance of living a life of worship, compassion, and justice.
            </p>
            <p>
              The Quran — Islam&apos;s holy scripture — is considered the literal word of Allah,
              revealed to Prophet Muhammad ﷺ over 23 years. Despite being revealed fourteen
              centuries ago, it remains completely intact and unaltered in its original Arabic
              form. It is an eternal miracle.
            </p>
            <p>
              Islam speaks to every dimension of human life: personal worship, family, community,
              ethics, law, and the natural world. It offers a comprehensive framework for living
              with purpose, meaning, and peace.
            </p>
          </div>
        </div>
      </section>

      {/* ── Five Pillars ── */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#219ebc]">
            The Foundation
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            The Five Pillars of Islam
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            The five pillars are the acts of worship that form the framework of Muslim life —
            each one a direct relationship between the worshipper and Allah.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {pillarsOfIslam.map((pillar) => (
              <div
                key={pillar.number}
                className="rounded-3xl border border-[#8ecae6]/30 bg-[#8ecae6]/10 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#023047] text-white text-sm font-bold">
                  {pillar.number}
                </div>
                <h3 className="mt-4 text-base font-semibold text-[#023047]">{pillar.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Concepts ── */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#219ebc]">
          Concepts
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
          Key Terms &amp; Concepts
        </h2>
        <p className="mt-3 max-w-2xl text-base text-slate-600">
          A short guide to the core ideas and terminology you will encounter when learning about Islam.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {keyConcepts.map((concept) => (
            <div
              key={concept.term}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#023047]">{concept.term}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{concept.definition}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quranic Verses ── */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#219ebc]">
            From the Quran
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            The Words of Allah
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            A selection of Quranic verses that speak to the heart — on mercy, creation, worship, and purpose.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {quranicVerses.map((verse) => (
              <div
                key={verse.ref}
                className="rounded-3xl border border-[#8ecae6]/30 bg-gradient-to-br from-[#8ecae6]/10 to-[#023047]/5 p-8"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-[#219ebc]">{verse.surah}</p>
                  <span className="rounded-full bg-[#023047]/10 px-3 py-1 text-xs font-medium text-[#023047]">
                    {verse.ref}
                  </span>
                </div>
                <p className="mt-5 text-right text-xl leading-10 text-[#023047] font-medium" dir="rtl">
                  {verse.arabic}
                </p>
                <p className="mt-5 text-sm leading-7 text-slate-700 italic">
                  &ldquo;{verse.translation}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Islam ── */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#219ebc]">
          Reflection
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
          Why Islam?
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              heading: "Rational Monotheism",
              body: "Islam presents a clear, rational, and consistent concept of God — One, without partners, intermediaries, or human form. It is a faith that invites reason and reflection.",
            },
            {
              heading: "Universal Message",
              body: "Islam is not a religion for a particular race or nation. Its message is addressed to all of humanity regardless of background, language, or social standing.",
            },
            {
              heading: "A Complete Way of Life",
              body: "Islam does not separate the sacred from the everyday. From prayer to business dealings, from family relations to environmental responsibility — Islam provides guidance for everything.",
            },
            {
              heading: "Preserved Scripture",
              body: "The Quran is the only religious scripture in the world that has been preserved in its original language — unchanged for over 1,400 years and memorised by millions.",
            },
            {
              heading: "Inner Peace",
              body: "The Arabic word for heart — Qalb — appears frequently in the Quran. Islam directly addresses the spiritual emptiness many people feel, offering genuine peace through remembrance of Allah.",
            },
            {
              heading: "Justice and Equality",
              body: "Islam was among the first traditions to establish rights for women, the poor, and enslaved people. The Prophet ﷺ declared that 'there is no superiority of an Arab over a non-Arab except by piety.'",
            },
          ].map((card) => (
            <div
              key={card.heading}
              className="rounded-3xl border border-slate-200 bg-stone-50 p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#8ecae6] hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-slate-900">{card.heading}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Resources ── */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#219ebc]">
            Learn More
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Resources
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            Trusted online resources to deepen your understanding of Islam at your own pace.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-3xl border border-slate-200 bg-stone-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#8ecae6] hover:shadow-md"
              >
                <span className="rounded-full bg-[#8ecae6]/20 px-3 py-1 text-xs font-semibold text-[#219ebc] w-fit">
                  {resource.tag}
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900 group-hover:text-[#023047]">
                  {resource.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-500">{resource.description}</p>
                <span className="mt-4 text-xs font-semibold text-[#219ebc]">
                  Visit →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — Interested in Islam ── */}
      <section className="border-t border-[#023047] bg-gradient-to-br from-[#023047] via-[#219ebc]/80 to-[#023047]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8ecae6]">
              Ready to Learn More?
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              We&apos;re here for you.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/80">
              Whether you are a curious student, someone exploring Islam, or a new Muslim looking
              for support — the MSA Wits community welcomes you. Reach out anytime.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="tel:0718449341"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-[#023047] shadow-lg transition hover:-translate-y-0.5"
              >
                Call Hafiz Zahid Mulla · 071 844 9341
              </a>
              <a
                href="mailto:msa@wits.ac.za"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Email · msa@wits.ac.za
              </a>
            </div>

            <p className="mt-8 text-2xl text-white/90" dir="rtl">
              ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّهِ وَبَرَكَاتُهُ
            </p>
            <p className="mt-2 text-sm text-[#8ecae6]">
              Peace, mercy, and blessings of Allah be upon you.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
