'use client';

import { useState } from 'react';

export interface CardData {
  title: string;
  description: string;
  date: string;
  tag: string;
  gradient: string;
}

/*
  Layout maths (all in px):
    CARD_W  = 320   (w-80)
    GAP     = 20    (gap-5)
    STEP    = 340   (one scroll tick)
    VISIBLE = 3 cards = 3×320 + 2×20 = 1000
    PEEK    = space reserved on each side for the faded neighbours
    CONTAINER = VISIBLE + 2×PEEK = 1000 + 156 = 1156

  translateX = PEEK − idx × STEP
  This centres the active 3 cards and lets one card peek on each side.
*/
const CARD_W = 320;
const GAP = 20;
const STEP = CARD_W + GAP;   // 340
const PEEK = 78;              // (1156 − 1000) / 2
const CONTAINER_W = 3 * CARD_W + 2 * GAP + 2 * PEEK; // 1156

export function CardCarousel({ cards }: { cards: CardData[] }) {
  const MAX_IDX = Math.max(0, cards.length - 3);
  const [idx, setIdx] = useState(0);

  const tx = PEEK - idx * STEP;

  return (
    /*
      outer: clips left/right via overflow-hidden, but is tall enough
             (pt-6 headroom) that the hover-lift is never clipped on top.
      We do NOT use overflow-hidden on the Y axis so the lifted card shadow
      and translation are fully visible — overflow:hidden applies to both axes,
      but because the inner div adds pt-6 (24 px) the card's lifted position
      (max 12 px) stays inside the container boundary.
    */
    <div
      className="relative mx-auto overflow-hidden"
      style={{ maxWidth: CONTAINER_W }}
    >
      {/* Sliding strip */}
      <div
        className="flex gap-5 pt-6 pb-10 transition-transform duration-500 ease-out"
        style={{ transform: `translateX(${tx}px)`, width: 'max-content' }}
      >
        {cards.map((card, i) => {
          const active = i >= idx && i < idx + 3;
          return (
            <article
              key={card.title}
              className={[
                'relative flex h-72 w-80 flex-none overflow-hidden rounded-3xl shadow-lg',
                `bg-gradient-to-br ${card.gradient}`,
                'transition-all duration-300 group',
                active
                  ? 'opacity-100 cursor-pointer hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/30'
                  : 'opacity-25 pointer-events-none select-none',
              ].join(' ')}
            >
              {/* Bottom vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              <div className="relative flex h-full flex-col justify-between p-8">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/55">
                    {card.tag}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {card.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/50">{card.date}</span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition group-hover:bg-white/30">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Left arrow — sits over the dimmed left card */}
      {idx > 0 && (
        <button
          onClick={() => setIdx(i => Math.max(0, i - 1))}
          className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg shadow-black/20 backdrop-blur transition hover:scale-110 hover:bg-white"
          aria-label="Previous"
        >
          <svg className="h-5 w-5 text-[#023047]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Right arrow — sits over the dimmed right card */}
      {idx < MAX_IDX && (
        <button
          onClick={() => setIdx(i => Math.min(MAX_IDX, i + 1))}
          className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg shadow-black/20 backdrop-blur transition hover:scale-110 hover:bg-white"
          aria-label="Next"
        >
          <svg className="h-5 w-5 text-[#023047]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
