import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import OceanBackdrop from "../../components/OceanBackdrop";
import { posts, getPostBySlug } from "../posts";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | 深海誌`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <OceanBackdrop>
      <Header />

      <main className="relative z-10 mx-auto flex max-w-3xl flex-col gap-8 px-6 pb-24 pt-16 sm:pt-24">
        <Link
          href="/blog"
          className="inline-flex w-fit items-center gap-2 text-sm text-slate-300/70 transition hover:text-white"
        >
          ← 返回深海誌
        </Link>

        <article className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-3xl bg-gradient-to-b from-white/25 to-transparent" />

          {post.photo ? (
            <div className="relative h-56 w-full overflow-hidden sm:h-72">
              <Image
                src={post.photo}
                alt={post.title}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>
          ) : (
            <div className="relative flex h-56 w-full items-center justify-center bg-gradient-to-br from-cyan-400/20 to-blue-700/20 text-8xl sm:h-72">
              {post.emoji}
            </div>
          )}

          <div className="relative px-6 py-8 sm:px-10 sm:py-10">
            <div className="flex items-center gap-3 text-xs text-slate-400/70">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}閱讀</span>
            </div>
            <h1 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              {post.title}
            </h1>
            <p className="mt-3 text-sm italic text-slate-300/70">{post.excerpt}</p>

            <div className="mt-8 flex flex-col gap-5">
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-sm leading-7 text-slate-200/85 sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            {post.credit && (
              <p className="mt-8 text-[10px] text-slate-400/50">
                圖片來源：{post.credit}
              </p>
            )}
          </div>
        </article>

        <div className="flex flex-wrap gap-3">
          {posts
            .filter((p) => p.slug !== post.slug)
            .map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-200/80 backdrop-blur-xl transition hover:bg-white/20 hover:text-white"
              >
                {p.emoji} {p.title}
              </Link>
            ))}
        </div>
      </main>

      <Footer />
    </OceanBackdrop>
  );
}
