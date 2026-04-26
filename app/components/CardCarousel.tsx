'use client';

import { useState, useEffect, useRef } from 'react';

export interface CardData {
  title: string;
  description: string;
  date: string;
  tag: string;
  gradient: string;
}

// Desktop constants
const CARD_W = 320;
const GAP = 20;
const STEP = CARD_W + GAP;
const PEEK = 78;
const CONTAINER_W = 3 * CARD_W + 2 * GAP + 2 * PEEK; // 1156

export function CardCarousel({ cards }: { cards: CardData[] }) {
  const [idx, setIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileCardW, setMobileCardW] = useState(280);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const w = containerRef.current?.offsetWidth ?? window.innerWidth;
      const mobile = w < 640;
      setIsMobile(mobile);
      if (mobile) setMobileCardW(Math.min(320, w - 72)); // 36px each side for arrows
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIdx = isMobile ? cards.length - 1 : Math.max(0, cards.length - 3);

  // Clamp idx when switching breakpoints
  useEffect(() => {
    if (idx > maxIdx) setIdx(maxIdx);
  }, [maxIdx, idx]);

  const mobilePeek = 36;
  const mobileStep = mobileCardW + GAP;
  const tx = isMobile
    ? mobilePeek - idx * mobileStep
    : PEEK - idx * STEP;

  return (
    <div
      ref={containerRef}
      className="relative mx-auto overflow-hidden"
      style={{ maxWidth: isMobile ? '100%' : CONTAINER_W }}
    >
      {/* Sliding strip */}
      <div
        className="flex gap-5 pt-6 pb-10 transition-transform duration-500 ease-out"
        style={{ transform: `translateX(${tx}px)`, width: 'max-content' }}
      >
        {cards.map((card, i) => {
          const active = isMobile ? i === idx : (i >= idx && i < idx + 3);
          return (
            <article
              key={card.title}
              style={isMobile ? { width: mobileCardW } : undefined}
              className={[
                'relative flex h-72 flex-none overflow-hidden rounded-3xl shadow-lg',
                isMobile ? '' : 'w-80',
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

      {/* Left arrow */}
      {idx > 0 && (
        <button
          onClick={() => setIdx(i => Math.max(0, i - 1))}
          className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg shadow-black/20 backdrop-blur transition hover:scale-110 hover:bg-white"
          aria-label="Previous"
        >
          <svg className="h-5 w-5 text-[#023047]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Right arrow */}
      {idx < maxIdx && (
        <button
          onClick={() => setIdx(i => Math.min(maxIdx, i + 1))}
          className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg shadow-black/20 backdrop-blur transition hover:scale-110 hover:bg-white"
          aria-label="Next"
        >
          <svg className="h-5 w-5 text-[#023047]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Mobile dot indicators */}
      {isMobile && (
        <div className="flex justify-center gap-1.5 pb-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${i === idx ? 'w-5 bg-[#219ebc]' : 'w-1.5 bg-slate-300'}`}
              aria-label={`Go to card ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
