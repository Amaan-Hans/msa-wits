'use client';

import { useState } from 'react';

export interface EventData {
  title: string;
  category: string;
  day?: string;
  dayRange?: string;
  month?: string;
  year?: string;
  dayOfWeek?: string;
  dateLabel?: string;
  publicHoliday?: string;
  time?: string;
  venue?: string;
  address?: string;
  mapsLink?: string;
  whatsappLink?: { label: string; href: string };
  cost?: string;
  contact?: { name: string; email: string };
  intro?: string;
  body?: string;
  expect?: string[];
  notes?: string[];
  tba?: boolean;
  teaser?: string;
}

const categoryColours: Record<string, string> = {
  Education: "bg-blue-50 text-blue-700 border-blue-100",
  Spiritual: "bg-[#8ecae6]/20 text-[#023047] border-[#8ecae6]/30",
  Community: "bg-purple-50 text-purple-700 border-purple-100",
  Lecture: "bg-amber-50 text-amber-700 border-amber-100",
  Social: "bg-rose-50 text-rose-700 border-rose-100",
  "Community · Palestine Solidarity": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Religious · Tabligh": "bg-[#8ecae6]/20 text-[#023047] border-[#8ecae6]/40",
};

function EventCard({ event }: { event: EventData }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Clickable header */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left"
        aria-expanded={open}
      >
        <div className="flex items-center justify-between gap-4 px-6 py-5">
          <div className="flex flex-col gap-1.5">
            <span className={`inline-flex w-fit rounded-full border px-3 py-0.5 text-xs font-semibold ${categoryColours[event.category] ?? "bg-slate-100 text-slate-700 border-slate-200"}`}>
              {event.category}
            </span>
            <h2 className="text-base font-semibold text-slate-900 sm:text-lg">{event.title}</h2>
            {!event.tba && (
              <p className="text-xs text-slate-400">
                {event.dateLabel ?? `${event.dayOfWeek} ${event.day ?? event.dayRange} ${event.month}`}
                {event.time && <> · {event.time}</>}
                {event.venue && <> · {event.venue}</>}
              </p>
            )}
            {event.tba && <p className="text-xs text-slate-400">Date & details to be announced</p>}
          </div>

          <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 bg-stone-50 text-slate-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>

      {/* Expandable body */}
      <div className={`transition-all duration-300 ease-in-out ${open ? 'max-h-[2400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="border-t border-slate-100 px-6 pb-7 pt-5">
          {event.tba ? (
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-slate-300 bg-stone-50 py-10 text-center">
              <span className="text-4xl">🔥</span>
              <div>
                <h3 className="text-base font-semibold text-slate-800">Coming Soon</h3>
                <p className="mt-2 max-w-sm text-sm leading-7 text-slate-500">{event.teaser}</p>
              </div>
              <p className="text-xs text-slate-400">Keep an eye on our Instagram and WhatsApp for the announcement.</p>
            </div>
          ) : (
            <>
              {/* Date · Time · Venue */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3.5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">
                      {event.dayRange ? 'Dates' : 'Time'}
                    </p>
                    <p className="text-sm font-bold text-amber-900">
                      {event.dateLabel ?? event.time}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3.5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-emerald-900">{event.venue}</p>
                    <p className="truncate text-xs text-emerald-700">{event.address}</p>
                  </div>
                </div>
              </div>

              {/* Cost */}
              {event.cost && (
                <div className="mt-3 flex items-center gap-3 rounded-2xl border border-[#8ecae6]/40 bg-[#8ecae6]/10 px-4 py-3.5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#023047] text-white text-lg">
                    💳
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#219ebc]">Cost</p>
                    <p className="text-sm font-bold text-[#023047]">{event.cost}</p>
                  </div>
                </div>
              )}

              {/* Maps link */}
              {event.mapsLink && (
                <a
                  href={event.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center gap-2 rounded-2xl border border-slate-200 bg-stone-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-[#8ecae6] hover:text-[#023047]"
                >
                  <svg className="h-4 w-4 text-[#219ebc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                  <svg className="ml-auto h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}

              {event.intro && <p className="mt-6 text-sm leading-7 text-slate-700">{event.intro}</p>}
              {event.body && <p className="mt-2 text-sm leading-7 text-slate-600">{event.body}</p>}

              {event.expect && event.expect.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#219ebc]">What to Expect</h3>
                  <ul className="mt-3 space-y-2.5">
                    {event.expect.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#023047] text-[10px] font-bold text-white">{i + 1}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {event.notes && event.notes.length > 0 && (
                <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <h3 className="flex items-center gap-2 text-xs font-semibold text-amber-800">
                    <span>📢</span> Please Note
                  </h3>
                  <ul className="mt-2.5 space-y-1.5">
                    {event.notes.map((note, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs leading-6 text-amber-900">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-amber-600" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* WhatsApp group link */}
              {event.whatsappLink && (
                <a
                  href={event.whatsappLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {event.whatsappLink.label}
                </a>
              )}

              {event.contact && (
                <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-stone-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Contact & RSVP</p>
                    <p className="mt-0.5 text-sm font-semibold text-slate-800">{event.contact.name}</p>
                  </div>
                  <a
                    href={`mailto:${event.contact.email}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#023047] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#219ebc]"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {event.contact.email}
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export function EventAccordion({ events }: { events: EventData[] }) {
  return (
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="absolute left-[35px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#219ebc] via-[#8ecae6] to-slate-200 sm:left-[39px]" />

      <div className="flex flex-col gap-6">
        {events.map((event, i) => (
          <div key={event.title} className="flex items-start gap-4 sm:gap-6">
            {/* Date bubble */}
            <div className="relative z-10 flex-shrink-0">
              <div className="flex h-[72px] w-[72px] flex-col items-center justify-center rounded-2xl bg-[#023047] text-white shadow-md sm:h-20 sm:w-20">
                {event.tba ? (
                  <>
                    <span className="text-lg">🔥</span>
                    <span className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-[#8ecae6]">Soon</span>
                  </>
                ) : (
                  <>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#8ecae6]">{event.month}</span>
                    <span className="text-2xl font-bold leading-none">{event.dayRange ?? event.day}</span>
                    <span className="text-[9px] text-white/50">{event.dayOfWeek?.slice(0, 3).toUpperCase()}</span>
                  </>
                )}
              </div>
              {i < events.length - 1 && (
                <div className="absolute -bottom-8 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#8ecae6]/60" />
              )}
            </div>

            {/* Card */}
            <div className="min-w-0 flex-1 pt-1">
              <EventCard event={event} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
