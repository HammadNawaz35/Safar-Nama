import { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fn = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setProgress((scrollTop / (scrollHeight - clientHeight)) * 100);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-0.5 z-[2001]"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, hsl(var(--gold)), hsl(var(--gold-light)))",
        transition: "width 0.1s linear",
      }}
    />
  );
}
