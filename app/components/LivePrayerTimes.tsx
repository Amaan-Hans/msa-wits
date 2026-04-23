'use client';

import { useEffect, useState } from 'react';

interface Timings {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

export function LivePrayerTimes() {
  const [timings, setTimings] = useState<Timings | null>(null);
  const isFriday = new Date().getDay() === 5;

  useEffect(() => {
    const timestamp = Math.floor(Date.now() / 1000);
    fetch(
      `https://api.aladhan.com/v1/timings/${timestamp}?latitude=-26.1929&longitude=28.0305&method=2`
    )
      .then((r) => r.json())
      .then((json) => setTimings(json.data?.timings ?? null))
      .catch(() => {});
  }, []);

  const prayerTimes = timings
    ? [
        { name: 'Fajr', time: timings.Fajr },
        { name: 'Sunrise', time: timings.Sunrise },
        { name: 'Dhuhr', time: timings.Dhuhr },
        { name: 'Asr', time: timings.Asr },
        { name: 'Maghrib', time: timings.Maghrib },
        { name: 'Isha', time: timings.Isha },
      ]
    : [];

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#219ebc]">
              Today&apos;s Prayer Times
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
              Johannesburg · Wits Campus
            </h2>
          </div>
          {isFriday && (
            <span className="inline-flex self-start rounded-full bg-[#8ecae6]/20 px-4 py-1.5 text-sm font-semibold text-[#023047] sm:self-auto">
              Jumu&apos;ah Today · 1:15 PM
            </span>
          )}
        </div>

        {prayerTimes.length > 0 ? (
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {prayerTimes.map(({ name, time }) => (
              <div
                key={name}
                className="rounded-2xl border border-slate-100 bg-stone-50 p-4 text-center"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {name}
                </p>
                <p className="mt-2 text-xl font-semibold text-slate-900">{time}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-stone-50 p-6 text-center text-slate-500">
            Loading prayer times…
          </div>
        )}
      </div>
    </section>
  );
}
