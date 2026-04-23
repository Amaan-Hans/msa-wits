'use client';

import { useEffect, useState } from 'react';

interface HijriDate {
  day: string;
  month: { en: string };
  year: string;
}

export function LiveIslamicDate() {
  const [hijri, setHijri] = useState<HijriDate | null>(null);
  const [gregorian, setGregorian] = useState<string | null>(null);

  useEffect(() => {
    const timestamp = Math.floor(Date.now() / 1000);
    fetch(
      `https://api.aladhan.com/v1/timings/${timestamp}?latitude=-26.1929&longitude=28.0305&method=2`
    )
      .then((r) => r.json())
      .then((json) => {
        setHijri(json.data?.date?.hijri ?? null);
        setGregorian(json.data?.date?.readable ?? null);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#8ecae6]">
        Islamic Date
      </p>
      {hijri ? (
        <>
          <p className="mt-2 text-xl font-semibold text-white">
            {hijri.day} {hijri.month.en} {hijri.year} AH
          </p>
          <p className="mt-1 text-sm text-[#8ecae6]/80">{gregorian}</p>
        </>
      ) : (
        <p className="mt-2 text-sm text-[#8ecae6]/60">Loading…</p>
      )}
    </div>
  );
}
