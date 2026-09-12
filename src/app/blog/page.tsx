import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OceanBackdrop from "../components/OceanBackdrop";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "深海誌 Blog | 深海秘境",
  description: "深海生物介紹文章，帶你認識鮟鱇魚、大王烏賊、巨型等足蟲等深海奇幻生命。",
};

export default function BlogPage() {
  return (
    <OceanBackdrop>
      <Header />

      <main className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-16 px-6 pb-24 pt-16 sm:pt-24">
        <section className="relative w-full overflow-hidden rounded-3xl border border-white/15 bg-white/10 px-6 py-14 text-center shadow-[0_8px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:px-16">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-3xl bg-gradient-to-b from-white/25 to-transparent" />
          <span className="relative inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200/90">
            Deep Sea Journal
          </span>
          <h1 className="relative mx-auto mt-6 max-w-xl bg-gradient-to-r from-cyan-200 via-sky-100 to-blue-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            深海誌
          </h1>
          <p className="relative mx-auto mt-4 max-w-lg text-base text-slate-200/80">
            關於深海生物的觀察筆記——牠們如何發光、如何獵食，又如何在黑暗與高壓中活下來。
          </p>
        </section>

        <section className="w-full">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/15 hover:shadow-[0_8px_32px_rgba(34,211,238,0.15)]"
              >
                {post.photo ? (
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={post.photo}
                      alt={post.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-lg backdrop-blur-sm">
                      {post.emoji}
                    </span>
                  </div>
                ) : (
                  <div className="relative flex h-44 w-full items-center justify-center bg-gradient-to-br from-cyan-400/20 to-blue-700/20 text-6xl">
                    {post.emoji}
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-400/70">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}閱讀</span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-white">{post.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-200/80">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan-200/90">
                    閱讀全文 →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </OceanBackdrop>
  );
}
