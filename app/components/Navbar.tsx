'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Events', href: '/events' },
  { label: "Da'wah", href: '/dawah' },
  { label: 'Musalla', href: '/musalla' },
  { label: 'Student Life', href: '/student-life' },
  { label: 'Meet the Team', href: '/meet-the-team' },
  { label: 'How to Join', href: '/how-to-join' },
  
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">

        {/* Logo — larger, left-anchored, prominent */}
        <Link href="/" className="flex items-center gap-4">
          <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-2xl border-2 border-[#8ecae6]/60 shadow-md">
            <Image
              src="/images/MSA_Logo_whitebackground.jpg"
              alt="MSA Wits"
              fill
              className="object-contain p-1"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight text-[#023047]">MSA Wits</span>
            <span className="text-xs font-medium text-[#219ebc]">Muslim Student Association</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                pathname === href
                  ? 'bg-[#023047] text-white'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-[#023047]'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-xl hover:bg-slate-100 md:hidden"
        >
          <span className={`h-0.5 w-5 rounded bg-slate-700 transition-all duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`h-0.5 w-5 rounded bg-slate-700 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 rounded bg-slate-700 transition-all duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-6 pb-5 pt-2 md:hidden">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block rounded-xl px-4 py-3.5 text-sm font-medium transition ${
                pathname === href
                  ? 'bg-[#023047] text-white'
                  : 'text-slate-700 hover:bg-slate-100 hover:text-[#023047]'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
