import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-8 border-t border-white/15 bg-white/5 backdrop-blur-xl">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-3">
        <div>
          <p className="bg-gradient-to-r from-cyan-200 via-sky-200 to-blue-300 bg-clip-text text-lg font-semibold text-transparent">
            🌊 深海秘境
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-300/70">
            帶你潛入陽光無法抵達的世界，認識那些在黑暗中發光的深海生命。
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">快速連結</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300/70">
            <Link href="/" className="w-fit transition hover:text-white">
              首頁
            </Link>
            <Link href="/#creatures" className="w-fit transition hover:text-white">
              生物圖鑑
            </Link>
            <Link href="/#about" className="w-fit transition hover:text-white">
              關於深海
            </Link>
            <Link href="/blog" className="w-fit transition hover:text-white">
              深海誌
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">聯絡我們</p>
          <p className="mt-3 text-sm text-slate-300/70">deepsea@example.com</p>
          <div className="mt-3 flex gap-3 text-lg">
            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 transition hover:bg-white/20"
            >
              📘
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 transition hover:bg-white/20"
            >
              📸
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 transition hover:bg-white/20"
            >
              📺
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-slate-400/70">
        © 2026 深海秘境．探索地球最後的秘境
      </div>
    </footer>
  );
}
