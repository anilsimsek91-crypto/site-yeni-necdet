"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Soyut bozkurt silüeti — sayfanın arkasında yaşayan, scroll ilerlemesine
 * bağlı çok yavaş hareket eden zarif bir atmosfer öğesi.
 *
 * Davranış:
 *  - Sayfa açıldığında sağ üstte başlar.
 *  - Aşağı inildikçe yavaşça sola kayar.
 *  - Sayfa sonuna doğru tekrar sağa doğru süzülür.
 *  - Hareket scroll progress'e bağlıdır (0 → 1).
 *
 * Kütüphane kullanılmaz; yalnızca passive scroll + CSS transform.
 * pointer-events:none, içeriğin önüne asla geçmez.
 */
export default function WolfBackdrop() {
  const [progress, setProgress] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    // Hareketi azaltılmış hareket tercih eden kullanıcılarda sabit bırak.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const update = () => {
      frame.current = null;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      setProgress(p);
    };

    const onScroll = () => {
      if (frame.current === null) {
        frame.current = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  // Yatay konum: sağ üstte başlar (78%), ortada sola süzülür (~22%),
  // sonra tekrar sağa doğru (~62%). Sinüs ile yumuşak bir yay çizer.
  const x = 78 - Math.sin(progress * Math.PI) * 56;
  // Dikey konum: scroll ile çok hafif aşağı doğru iner.
  const y = 12 + progress * 26;
  // Derinlik hissi için çok hafif ölçek ve dönüş.
  const scale = 1 + Math.sin(progress * Math.PI) * 0.06;
  const rotate = -4 + progress * 8;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute opacity-[0.05] transition-transform duration-700 ease-out will-change-transform md:opacity-[0.07]"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          transform: `translate(-50%, -50%) scale(${scale}) rotate(${rotate}deg)`,
        }}
      >
        <WolfMark className="h-[340px] w-[340px] text-bronze sm:h-[460px] sm:w-[460px] lg:h-[600px] lg:w-[600px]" />
      </div>
    </div>
  );
}

/**
 * Tek çizgi hissinde, soyut bozkurt silüeti. Maskot veya gerçekçi değil;
 * bozkır ruhunu temsil eden ince çizgisel bir iz.
 */
function WolfMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Baş ve kulaklar */}
      <path d="M52 78 L60 44 L74 66 L92 58 L104 72" />
      {/* Sırt çizgisi ve gövde */}
      <path d="M104 72 C128 70 150 84 162 110 C168 124 166 140 156 152" />
      {/* Göğüs ve ön bacak */}
      <path d="M104 72 C100 96 96 120 98 150 L96 168" />
      <path d="M112 150 L110 170" />
      {/* Arka bacak ve kuyruk */}
      <path d="M156 152 L154 172" />
      <path d="M138 156 L140 174" />
      <path d="M156 152 C172 150 184 138 188 120" />
      {/* Soyut tamga vurgusu (göz / iz) */}
      <path d="M66 70 L72 70" />
      <circle cx="70" cy="76" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
