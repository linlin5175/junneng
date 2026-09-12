"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "首頁" },
  { href: "/#creatures", label: "生物圖鑑" },
  { href: "/#about", label: "關於深海" },
  { href: "/blog", label: "深海誌" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header id="top" className="sticky top-0 z-20 flex justify-center px-4 pt-4">
      <nav className="w-full max-w-5xl rounded-2xl border border-white/15 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-3">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="bg-gradient-to-r from-cyan-200 via-sky-200 to-blue-300 bg-clip-text text-lg font-semibold tracking-wide text-transparent"
          >
            🌊 深海秘境
          </Link>

          <div className="hidden items-center gap-6 text-sm text-slate-200/80 md:flex">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="transition hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>

          <Link
            href="/#creatures"
            className="hidden rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-slate-100 transition hover:bg-white/20 md:inline-block"
          >
            探索生物
          </Link>

          <button
            type="button"
            aria-label={open ? "關閉選單" : "開啟選單"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg text-white transition hover:bg-white/20 md:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <div className="flex flex-col gap-1 border-t border-white/10 px-6 py-4 md:hidden">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-slate-200/80 transition hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#creatures"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-center text-sm font-semibold text-slate-950"
            >
              探索生物
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
