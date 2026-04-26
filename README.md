# MSA Wits — Official Website

The official website for the Muslim Student Association (MSA) at the University of the Witwatersrand, Johannesburg. Built and maintained by Amaan Hanslod.

**Live site:** [msa-wits.netlify.app](https://msa-wits.netlify.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Rendering | Static export — all pages prerendered at build time |
| Hosting | Netlify (free tier, auto-deploy on push) |
| Runtime data | Client-side fetch (prayer times, Quran verse, Hadith) |

---

## Features

- **Live prayer times** — fetched from the Aladhan API on page load, calculated for Wits campus coordinates
- **Islamic date** — live Hijri date alongside the Gregorian date
- **Daily Quran verse** — rotates daily via AlQuran.cloud API (Arabic + English translation)
- **Daily Hadith** — rotates daily from the Bukhari collection via the fawazahmed0 Hadith API
- **6 pages** — Home, Events, Musalla, Student Life, Meet the Team, How to Join
- **Interactive map** — embedded Google Maps pinned to the Wits Musalla with click-through to full Maps
- **Responsive navbar** — sticky with active route highlighting and animated mobile hamburger
- **Horizontal card carousel** — CSS transform-based with per-card opacity, keyboard-accessible arrows
- **Real committee data** — Executive Committee + 6 portfolios with all 2026 members

---

## Architecture notes

- All pages are statically exported (`output: 'export'`) — zero server required
- Dynamic data (prayer times, verse, hadith) fetches client-side via `useEffect` so it's always fresh
- Interactive components (`Navbar`, `CardCarousel`, `LivePrayerTimes`, etc.) are isolated `'use client'` components; all other pages are pure server components
- Images use `unoptimized: true` compatible with static hosting

---

## Getting Started

```bash
git clone https://github.com/Amaan-Hans/msa-wits.git
cd msa-wits
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## External APIs used

| API | Purpose | Auth |
|---|---|---|
| [Aladhan](https://aladhan.com/prayer-times-api) | Prayer times + Islamic date | None |
| [AlQuran.cloud](https://alquran.cloud/api) | Daily Quran verse (Arabic + English) | None |
| [fawazahmed0 Hadith API](https://github.com/fawazahmed0/hadith-api) | Daily Hadith (Bukhari) | None |

All APIs are free and require no API key.

---

## License

MIT
