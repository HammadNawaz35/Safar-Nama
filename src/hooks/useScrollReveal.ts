import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("revealed");
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.1 }
    );
    el.querySelectorAll(".reveal-item").forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  });
  return ref;
}
