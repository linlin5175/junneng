import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OceanBackdrop from "./components/OceanBackdrop";
import Parallax from "./components/Parallax";

type SeaCreature = {
  emoji: string;
  name: string;
  latin: string;
  depth: string;
  desc: string;
  photo?: string;
  credit?: string;
};

const creatures: SeaCreature[] = [
  {
    emoji: "🐡",
    name: "1.鮟鱇魚",
    latin: "Anglerfish",
    depth: "棲息深度 300–4000 公尺",
    desc: "頭頂垂著會發光的誘餌，在伸手不見五指的深海中引誘獵物靠近，是深海中最著名的伏擊型獵手，也是深海最具代表性的形象之一。",
    photo: "/images/anglerfish.jpg",
    credit: "The New York Public Library · 1808 年科學繪圖（公共領域）",
  },
  {
    emoji: "🦑",
    name: "大王烏賊",
    latin: "Architeuthis dux",
    depth: "棲息深度 300–1000 公尺",
    desc: "體長可達 13 公尺，擁有動物界最大的眼睛之一，用來捕捉最後一絲微光。",
  },
  {
    emoji: "🐙",
    name: "吸血鬼魷魚",
    latin: "Vampyroteuthis infernalis",
    depth: "棲息深度 600–1200 公尺",
    desc: "名字聽起來嚇人，個性卻十分溫和，受威脅時會反捲觸手嚇阻天敵。",
  },
  {
    emoji: "🎗️",
    name: "皇帶魚",
    latin: "Regalecus glesne",
    depth: "棲息深度 200–1000 公尺",
    desc: "已知最長的硬骨魚，體長可達 11 公尺，常被視為海嘯將至的預兆。",
  },
  {
    emoji: "🦐",
    name: "巨型等足蟲",
    latin: "Bathynomus giganteus",
    depth: "棲息深度 200–2500 公尺",
    desc: "深海版的鼠婦，體型可達 40 公分，能數年不進食。",
  },
  {
    emoji: "🪼",
    name: "深海水母",
    latin: "Atolla jellyfish",
    depth: "棲息深度 500–3000 公尺",
    desc: "能自體發出生物螢光，藉此迷惑掠食者或吸引獵物。",
    photo: "/images/jellyfish.jpg",
    credit: "Yevhenii Dubrovskyi / Unsplash",
  },
];

const stats = [
  { value: "95%", label: "海洋尚未被探索" },
  { value: "10,935m", label: "已知海洋最深處" },
  { value: "200m", label: "無光層的起點" },
];

const zones = [
  { name: "表層帶", range: "0–200m", grad: "from-sky-300/60 to-sky-400/20" },
  { name: "中層帶（暮光帶）", range: "200–1000m", grad: "from-blue-500/50 to-blue-700/20" },
  { name: "無光層", range: "1000–4000m", grad: "from-indigo-800/60 to-indigo-950/30" },
  { name: "深淵層", range: "4000–6000m", grad: "from-slate-900/80 to-black/40" },
  { name: "超深淵層", range: "6000m+", grad: "from-black to-black" },
];

function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`pointer-events-none -my-1 w-full ${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 1440 90" className="w-full" preserveAspectRatio="none">
        <path
          d="M0,40 C240,90 480,0 720,20 C960,40 1200,90 1440,40 L1440,90 L0,90 Z"
          fill="rgba(255,255,255,0.05)"
        />
        <path
          d="M0,60 C300,20 600,90 900,50 C1150,20 1300,60 1440,30 L1440,90 L0,90 Z"
          fill="rgba(255,255,255,0.03)"
        />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <OceanBackdrop>
      {/* 導覽列 */}
      <Header />

      {/* 主要內容 */}
      <main className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 pb-24 pt-16 sm:pt-24">
        {/* Hero */}
        <section className="relative w-full overflow-hidden rounded-3xl border border-white/15 bg-white/10 px-6 py-14 text-center shadow-[0_8px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:px-16 sm:py-20">
          <Parallax speed={0.12} className="pointer-events-none absolute -inset-y-32 inset-x-0 -z-10">
            <Image
              src="/images/hero-ocean.jpg"
              alt="深海海水"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-50"
            />
          </Parallax>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#062a3f]/70 via-[#01131f]/80 to-[#000509]/90" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-3xl bg-gradient-to-b from-white/25 to-transparent" />

          <span className="relative inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200/90">
            Explore the Abyss
          </span>

          <h1 className="relative mx-auto mt-6 max-w-2xl bg-gradient-to-r from-cyan-200 via-sky-100 to-blue-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
            探索無光之境
          </h1>
          <p className="relative mx-auto mt-5 max-w-xl text-base text-slate-200/80 sm:text-lg">
            在陽光無法抵達的深海之中，藏著地球上最神秘、最奇幻的生命型態。
          </p>

          <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#creatures"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
            >
              開始探索 ↓
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/20"
            >
              關於深海
            </a>
          </div>

          {/* 統計數據 */}
          <div className="relative mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-xl"
              >
                <p className="text-2xl font-bold text-white sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs text-slate-300/70">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="relative mt-3 text-[10px] text-slate-400/50">
            圖片來源：Francesco Ungaro / Unsplash
          </p>
        </section>

        <WaveDivider />

        {/* 關於深海 */}
        <section
          id="about"
          className="relative grid w-full scroll-mt-24 grid-cols-1 gap-8 overflow-hidden rounded-3xl border border-white/15 bg-white/10 px-8 py-14 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-12 md:grid-cols-5"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-3xl bg-gradient-to-b from-white/25 to-transparent" />

          <div className="relative md:col-span-3">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">關於深海</h2>
            <p className="mt-4 text-sm leading-7 text-slate-200/85 sm:text-base">
              深海指的是陽光無法穿透的海洋區域，通常始於海平面下 200
              公尺，被稱為「無光層」。極高的水壓、接近冰點的低溫，與終年不見天日的黑暗環境，
              孕育出地球上最獨特的生命型態——從自體發光的生物，到能承受數百大氣壓的奇異構造，
              深海至今仍是人類所知最少的秘境之一。
            </p>
          </div>

          <div className="relative flex flex-col gap-1 md:col-span-2">
            {zones.map((z) => (
              <div
                key={z.name}
                className={`flex items-center justify-between rounded-xl border border-white/10 bg-gradient-to-r px-4 py-3 text-xs sm:text-sm ${z.grad}`}
              >
                <span className="font-medium text-white">{z.name}</span>
                <span className="text-slate-200/70">{z.range}</span>
              </div>
            ))}
          </div>
        </section>

        <WaveDivider flip />

        {/* 生物卡片 */}
        <section id="creatures" className="w-full scroll-mt-24 pt-8">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200/90">
              Field Guide
            </span>
            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              深海生物圖鑑
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {creatures.map((c, i) => (
              <article
                key={c.name}
                className={`group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/15 hover:shadow-[0_8px_32px_rgba(34,211,238,0.15)] ${
                  i === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-3xl bg-gradient-to-b from-white/25 to-transparent" />

                {c.photo ? (
                  <div className="relative -mx-6 -mt-6 mb-4 h-44 overflow-hidden rounded-t-3xl sm:h-56">
                    <Image
                      src={c.photo}
                      alt={c.name}
                      fill
                      sizes="(min-width: 1024px) 672px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs text-slate-100 backdrop-blur-sm">
                      {c.depth}
                    </span>
                    <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-lg backdrop-blur-sm">
                      {c.emoji}
                    </span>
                  </div>
                ) : (
                  <div className="relative flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-600/20 text-3xl shadow-inner">
                      {c.emoji}
                    </div>
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-slate-200/80">
                      {c.depth}
                    </span>
                  </div>
                )}

                <h3 className="relative mt-4 text-xl font-semibold text-white">
                  {c.name}
                </h3>
                <p className="relative text-sm italic text-slate-300/70">{c.latin}</p>
                <p className="relative mt-3 text-sm leading-6 text-slate-200/85">
                  {c.desc}
                </p>
                {c.credit && (
                  <p className="relative mt-2 text-[10px] text-slate-400/50">
                    圖片來源：{c.credit}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </OceanBackdrop>
  );
}
