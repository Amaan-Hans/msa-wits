'use client';

import { useEffect, useState } from 'react';

interface QuranVerse {
  arabic: string;
  translation: string;
  surahName: string;
  surahNumber: number;
  ayahNumber: number;
}

interface DailyHadith {
  text: string;
  source: string;
}

function getDayOfYear(): number {
  const now = new Date();
  return Math.floor(
    (now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000
  );
}

export function LiveDailyContent() {
  const [verse, setVerse] = useState<QuranVerse | null>(null);
  const [hadith, setHadith] = useState<DailyHadith | null>(null);

  useEffect(() => {
    const day = getDayOfYear();

    const verseNum = (day % 6236) + 1;
    fetch(
      `https://api.alquran.cloud/v1/ayah/${verseNum}/editions/quran-uthmani,en.sahih`
    )
      .then((r) => r.json())
      .then((json) => {
        const [arabic, english] = json.data as [
          { text: string; surah: { englishName: string; number: number }; numberInSurah: number },
          { text: string; surah: { englishName: string; number: number }; numberInSurah: number },
        ];
        setVerse({
          arabic: arabic.text,
          translation: english.text,
          surahName: english.surah.englishName,
          surahNumber: english.surah.number,
          ayahNumber: english.numberInSurah,
        });
      })
      .catch(() => {});

    const hadithNum = (day % 7563) + 1;
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-bukhari/${hadithNum}.json`
    )
      .then((r) => r.json())
      .then((json) => {
        const h = json.hadiths?.[0];
        if (h?.text) {
          setHadith({
            text: h.text,
            source: `${json.metadata?.name ?? 'Sahih al-Bukhari'} · ${h.hadithnumber ?? hadithNum}`,
          });
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
      <div className="grid gap-6 lg:grid-cols-2">

        {/* Quran verse */}
        <div className="flex flex-col rounded-3xl border border-[#8ecae6]/40 bg-[#8ecae6]/10 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#219ebc]">
            Verse of the Day
          </p>
          {verse ? (
            <>
              <p
                dir="rtl"
                lang="ar"
                className="mt-5 text-right text-2xl leading-loose text-[#023047]"
                style={{ fontFamily: "'Amiri', 'Scheherazade New', serif" }}
              >
                {verse.arabic}
              </p>
              <p className="mt-5 text-base italic leading-7 text-slate-700">
                &ldquo;{verse.translation}&rdquo;
              </p>
              <p className="mt-auto pt-5 text-sm font-medium text-[#219ebc]">
                — Surah {verse.surahName} ({verse.surahNumber}:{verse.ayahNumber})
              </p>
            </>
          ) : (
            <p className="mt-4 text-sm text-slate-500">Loading verse…</p>
          )}
        </div>

        {/* Hadith */}
        <div className="flex flex-col rounded-3xl border border-amber-100 bg-amber-50 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
            Hadith of the Day
          </p>
          {hadith ? (
            <>
              <blockquote className="mt-5 line-clamp-6 text-base italic leading-8 text-slate-700">
                &ldquo;{hadith.text}&rdquo;
              </blockquote>
              <p className="mt-auto pt-5 text-sm font-medium text-amber-700">
                — {hadith.source}
              </p>
            </>
          ) : (
            <p className="mt-4 text-sm text-slate-500">Loading hadith…</p>
          )}
        </div>

      </div>
    </section>
  );
}
