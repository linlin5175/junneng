"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Status = "idle" | "drawing" | "win" | "lose";

const WIN_RATE = 0.1;

export default function LuckyDraw() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const openModal = () => {
    setStatus("idle");
    setOpen(true);
  };

  const draw = () => {
    setStatus("drawing");
    window.setTimeout(() => {
      setStatus(Math.random() < WIN_RATE ? "win" : "lose");
    }, 900);
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="fixed bottom-6 right-6 z-30 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.4)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/20 sm:bottom-8 sm:right-8"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
        </span>
        🎁 幸運抽獎
      </button>

      {mounted &&
        open &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#0a3550] to-[#01131f] p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent" />

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="關閉"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
              >
                ✕
              </button>

              {status === "idle" && (
                <div className="relative">
                  <div className="text-5xl">🎁</div>
                  <h3 className="mt-4 text-xl font-semibold text-white">深海幸運轉盤</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300/80">
                    每次抽獎有 10% 機會抽中
                    <br />
                    7-11 電子禮券乙張！
                  </p>
                  <button
                    type="button"
                    onClick={draw}
                    className="mt-6 w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
                  >
                    開始抽獎
                  </button>
                </div>
              )}

              {status === "drawing" && (
                <div className="relative">
                  <div className="animate-spin text-5xl">🌀</div>
                  <p className="mt-4 text-sm text-slate-300/80">深海水母正在祈禱好運中...</p>
                </div>
              )}

              {status === "win" && (
                <div className="relative">
                  <div className="text-6xl">🎉</div>
                  <h3 className="mt-4 text-xl font-bold text-white">恭喜中獎！</h3>
                  <p className="mt-2 text-sm text-cyan-200">獲得 7-11 電子禮券乙張</p>
                  <p className="mt-1 text-xs text-slate-400/60">
                    （示範功能，實際兌換請洽網站管理員）
                  </p>
                  <button
                    type="button"
                    onClick={draw}
                    className="mt-6 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm text-white transition hover:bg-white/20"
                  >
                    再抽一次
                  </button>
                </div>
              )}

              {status === "lose" && (
                <div className="relative">
                  <div className="text-6xl">🐠</div>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    很可惜，這次沒中獎
                  </h3>
                  <p className="mt-2 text-sm text-slate-300/70">
                    深海裡的寶藏得來不易，再試一次吧！
                  </p>
                  <button
                    type="button"
                    onClick={draw}
                    className="mt-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
                  >
                    再抽一次
                  </button>
                </div>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
