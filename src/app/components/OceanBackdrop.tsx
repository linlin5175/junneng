import type { ReactNode } from "react";
import Parallax from "./Parallax";
import LuckyDraw from "./LuckyDraw";

export default function OceanBackdrop({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#062a3f] via-[#01131f] to-[#000509] text-slate-100">
      {/* 背景光暈與浮動裝飾（滾動視差） */}
      <Parallax
        speed={0.08}
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"
      />
      <Parallax
        speed={-0.12}
        className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"
      />
      <Parallax
        speed={0.05}
        className="pointer-events-none absolute left-1/3 bottom-0 h-80 w-80 rounded-full bg-sky-600/10 blur-3xl"
      />
      <Parallax speed={-0.2} className="pointer-events-none absolute right-16 top-24 hidden sm:block">
        <div className="text-4xl opacity-30 animate-float">🫧</div>
      </Parallax>
      <Parallax speed={0.15} className="pointer-events-none absolute left-16 top-72 hidden sm:block">
        <div className="text-2xl opacity-20 animate-float [animation-delay:-3s]">🫧</div>
      </Parallax>
      <Parallax
        speed={-0.1}
        className="pointer-events-none absolute right-1/3 top-[520px] hidden sm:block"
      >
        <div className="text-3xl opacity-20 animate-float [animation-delay:-1.5s]">🫧</div>
      </Parallax>

      {children}

      <LuckyDraw />
    </div>
  );
}
