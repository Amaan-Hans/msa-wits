const MAPS_LINK =
  "https://www.google.com/maps/place/Wits+Musalla/@-26.1883634,28.0287288,241m/data=!3m1!1e3!4m6!3m5!1s0x1e950c0fcba25889:0x8375c9b2bbb1c36e!8m2!3d-26.1883663!4d28.0291218!16s%2Fg%2F1pyqvcpct";

const musalla = {
  name: "Wits Musalla",
  address: "East Campus, University of the Witwatersrand, Johannesburg",
  hours: "Request card access to enter the facility",
  notes:
    "The central prayer space for all Muslim students on campus. All MSA programmes start here.",
};

const dosList = [
  { label: "Enter in Silence", detail: "Lower your voice upon entering to preserve the peaceful atmosphere." },
  { label: "Use Time Wisely", detail: "Spend your time in Du'a (supplication), Dhikr (remembrance), and recitation of the Qur'an." },
  { label: "Greet with Salaam", detail: "Offer greetings if others are not engaged in worship. If alone, say: Assalamu a'laynaa wa a'laa I'baadillahis saaliheen." },
  { label: "Dress Respectfully", detail: "Wear clean, modest clothing suitable for prayer." },
  { label: "Face the Qiblah", detail: "Sit or pray facing the direction of the Ka'bah when possible." },
  { label: "Be Mindful of Space", detail: "Sit in a way that allows others to join comfortably, especially during Jumu'ah or congregational prayers." },
  { label: "Make Intention (Niyyah)", detail: "Before engaging in any act of worship, renew your intention sincerely for the sake of Allah." },
  { label: "Observe Sunnah Prayers", detail: "Utilise the musalla for additional voluntary prayers, especially before and after obligatory ones." },
  { label: "Encourage Others", detail: "Invite fellow students to join you in prayer or dhikr." },
];

const dontsList = [
  "Do not raise your voice.",
  "Avoid discussing worldly matters.",
  "Do not walk in front of someone performing salaah.",
  "Refrain from announcing or searching for lost items.",
  "Do not spit or blow your nose in the Musalla.",
  "Do not force your way into a full saff (row).",
  "Avoid climbing over others who are seated.",
  "No weapons or harmful objects allowed.",
  "Do not fiddle with your body or clothing.",
  "Refrain from cracking your knuckles.",
  "Do not obstruct doorways or passageways.",
];

const facilityRules = [
  { label: "Keep It Clean", detail: "Leave the Musalla and its facilities tidy for others." },
  { label: "Respect the Musalla", detail: "Treat this space with reverence and care." },
  { label: "No Eating or Drinking", detail: "Kindly refrain from consuming food or beverages inside." },
  { label: "No Leaning on Glass", detail: "Please avoid leaning against glass surfaces." },
  { label: "Phones on Silent", detail: "Switch off or silence your phone upon entering." },
  { label: "Do Not Make a Mess", detail: "Be mindful of your surroundings and belongings." },
  { label: "Water Conservation", detail: "Use water wisely and avoid wastage." },
  { label: "Toilet Cleanliness", detail: "Keep toilets clean for the next person. Use only what is necessary." },
  { label: "Air Conditioning", detail: "If you are the last to leave, kindly switch off the air conditioner to prevent unnecessary usage." },
  { label: "Notice Board", detail: "Reserved for official MSA notices only. Unapproved notices will be removed without notice." },
  { label: "Programs & Events", detail: "No programmes or events may be held without prior approval from the MSA." },
  { label: "Disclaimer", detail: "The MSA Musalla is not liable for any personal damages, injuries, or stolen items. Please take care of your belongings and exercise caution." },
];


export default function MusallahPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#023047] to-[#219ebc] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8ecae6]">
            On Campus
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            Musalla
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/80">
            Prayer spaces available to all Muslim students across Wits main campus.
            Maintained by the MSA Musalla Committee.
          </p>
          <p className="mt-2 text-sm text-[#8ecae6]">
            Scroll down for directions and campus location.
          </p>
        </div>
      </section>

      {/* Jumu'ah info */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#219ebc]">
            Every Friday
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">Jumu&apos;ah Salaah</h2>
          <p className="mt-1 text-sm text-slate-500">Wits Musalla, East Campus · Khateeb rotates weekly — check Instagram for announcements</p>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {/* 1st Jamaat */}
            <div className="rounded-3xl border border-[#8ecae6]/40 bg-[#8ecae6]/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#219ebc]">1st Jamaat</p>
              <div className="mt-4 space-y-2">
                {[
                  { label: "Adhaan", time: "12:30" },
                  { label: "Lecture", time: "after Adhaan" },
                  { label: "Sunnah", time: "12:55" },
                  { label: "Khutbah", time: "13:00" },
                ].map(({ label, time }) => (
                  <div key={label} className="flex items-center justify-between rounded-xl bg-white/60 px-4 py-2.5">
                    <span className="text-sm font-medium text-slate-700">{label}</span>
                    <span className="text-sm font-bold text-[#023047]">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2nd Jamaat */}
            <div className="rounded-3xl border border-[#023047]/20 bg-[#023047]/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#023047]">2nd Jamaat</p>
              <div className="mt-4 space-y-2">
                {[
                  { label: "Adhaan", time: "13:20" },
                  { label: "Sunnah", time: "after Adhaan" },
                  { label: "Lecture", time: "13:25" },
                  { label: "Khutbah", time: "13:45" },
                ].map(({ label, time }) => (
                  <div key={label} className="flex items-center justify-between rounded-xl bg-white/60 px-4 py-2.5">
                    <span className="text-sm font-medium text-slate-700">{label}</span>
                    <span className="text-sm font-bold text-[#023047]">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Important notice */}
          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800">
            <span className="mt-0.5 text-base">📢</span>
            <p>
              <span className="font-semibold">MSA-Organised Only:</span> All Jumu&apos;ah on campus are organised exclusively by the MSA.
              During holidays and exam periods, only the <span className="font-semibold">1st Jamaat</span> will take place.
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#219ebc]">
          Prayer Space
        </p>
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 text-3xl font-semibold tracking-tight text-slate-900 hover:text-[#219ebc] transition-colors"
        >
          Campus Location
          <svg className="h-6 w-6 text-[#219ebc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </a>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-start">
          {/* Map embedded in the info card */}
          <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden"
              aria-label="Open Wits Musalla in Google Maps"
            >
              <iframe
                src="https://maps.google.com/maps?q=-26.1883663,28.0291218&z=18&output=embed"
                width="100%"
                height="300"
                style={{ border: 0, display: "block" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wits Musalla location"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#023047]/0 transition-colors duration-200 group-hover:bg-[#023047]/30">
                <span className="scale-90 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-[#023047] opacity-0 shadow-lg transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                  Open in Google Maps
                </span>
              </div>
            </a>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-900">{musalla.name}</h3>
              <p className="mt-1 text-sm text-[#219ebc] font-medium">{musalla.address}</p>
              <p className="mt-1 text-sm text-slate-500">{musalla.hours}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{musalla.notes}</p>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-[#023047] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#219ebc]"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Access notice — right column */}
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
              Action Required
            </p>
            <h3 className="mt-2 text-xl font-semibold text-amber-900">Musalla Access Records</h3>
            <p className="mt-1 text-sm font-medium text-amber-700">
              السلام عليكم ورحمة الله وبركاته
            </p>
            <p className="mt-4 text-sm leading-7 text-amber-800">
              We are currently updating our access records. All students who require access are
              requested to promptly complete the form.
            </p>
            <p className="mt-3 text-sm leading-7 text-amber-800">
              Please ensure that your details are submitted as soon as possible.
            </p>
            <a
              href="https://forms.gle/89TfsVygCZS5Hy4W7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-amber-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-800"
            >
              Complete Access Form →
            </a>
            <p className="mt-4 text-center text-sm text-amber-600">جزاكم الله خيرًا — MSA Wits Musalla Committee</p>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#219ebc]">
            Contacts
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Get in Touch
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* Musalla issues */}
            <div className="rounded-3xl border border-slate-200 bg-stone-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#023047] text-white text-xl">
                🕌
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Musalla-Related Issues</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                For any musalla-related issues, maintenance concerns, or to place an advertisement or notice on the board, please contact:
              </p>
              <div className="mt-4 rounded-2xl border border-[#8ecae6]/40 bg-[#8ecae6]/10 px-5 py-4">
                <p className="font-semibold text-[#023047]">Muhammed Dinath</p>
                <a href="tel:0611590011" className="mt-1 block text-sm text-[#219ebc] hover:underline font-medium">
                  061 159 0011
                </a>
              </div>
            </div>

            {/* Da'wah / Revert support */}
            <div className="rounded-3xl border border-slate-200 bg-stone-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#219ebc] text-white text-xl">
                ☪️
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Da&apos;wah &amp; Revert Support</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Are you a revert or curious about Islam? Reach out for guidance and support on this beautiful journey. We&apos;re here to help.
              </p>
              <div className="mt-4 rounded-2xl border border-[#8ecae6]/40 bg-[#8ecae6]/10 px-5 py-4">
                <p className="font-semibold text-[#023047]">Hafiz Zahid Mulla</p>
                <a href="tel:0718449341" className="mt-1 block text-sm text-[#219ebc] hover:underline font-medium">
                  071 844 9341
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Etiquette — Do's */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#219ebc]">
          Adab
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
          Musalla Etiquette
        </h2>
        <p className="mt-3 text-base text-slate-600">
          Wits Main (East) Campus — please help us maintain a serene and dignified space for all students.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Do's */}
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Focus on Worship (Do&apos;s)
            </p>
            <ul className="mt-5 space-y-4">
              {dosList.map((item) => (
                <li key={item.label} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white text-[10px] font-bold">✓</span>
                  <span><span className="font-semibold text-slate-800">{item.label}:</span> {item.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Don'ts */}
          <div className="rounded-3xl border border-rose-200 bg-rose-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
              Avoid Distractions (Don&apos;ts)
            </p>
            <ul className="mt-5 space-y-3">
              {dontsList.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-rose-600 text-white text-[10px] font-bold">✕</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Facility rules */}
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#219ebc]">
            Facility Etiquette &amp; Respect for the Space
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {facilityRules.map((rule, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#023047] text-white text-[10px] font-bold">{i + 1}</span>
                <span><span className="font-semibold text-slate-800">{rule.label}:</span> {rule.detail}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm font-medium text-[#219ebc]">
            جَزَاكَ ٱللَّٰهُ خَيْرًا — MSA Musalla Committee
          </p>
        </div>
      </section>
    </main>
  );
}
