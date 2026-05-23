import { useEffect, useState } from "react";
import b1 from "@/assets/1.png";
import b2 from "@/assets/2.png";
import b3 from "@/assets/3.png";
import b4 from "@/assets/4.png";

const banners = [b1, b2, b3, b4];

export function Banners() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % banners.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="mt-8 mb-8 md:mt-8 md:mb-12 lg:mt-8 lg:mb-16">
      <div className="relative mx-auto max-w-full overflow-hidden">
        <div className="relative h-[140px] w-full md:h-[240px] lg:h-[300px]">
          {banners.map((b, i) => (
            <img
              key={i}
              src={b}
              alt={`Banner ${i + 1}`}
              width={1920}
              height={600}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            />
          ))}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 space-x-2">
            <button
              aria-label="Previous banner"
              onClick={() => setIdx((i) => (i - 1 + banners.length) % banners.length)}
              className="rounded-full bg-black/30 p-2 text-white hover:bg-black/40"
            >
              ‹
            </button>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <button
              aria-label="Next banner"
              onClick={() => setIdx((i) => (i + 1) % banners.length)}
              className="rounded-full bg-black/30 p-2 text-white hover:bg-black/40"
            >
              ›
            </button>
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {banners.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to banner ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-2 w-8 rounded-full transition-colors ${i === idx ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banners;
