import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1800&q=85",
  "https://images.unsplash.com/photo-1618083707368-e498e14e48b4?w=1800&q=85",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=85",
  "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1800&q=85",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1800&q=85",
];

const STATS = [
  { target: 5000, suffix: "+", label: "Happy Travellers" },
  { target: 98, suffix: "%", label: "Satisfaction" },
  { target: 14, suffix: "+", label: "Destinations" },
  { target: 6, suffix: "yr", label: "Experience" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  const display = target >= 1000
    ? `${(count / 1000).toFixed(count >= target ? 0 : 1).replace(/\.0$/, "")}${count >= target ? ",000" : ",000".slice(0, 0)}`
    : `${count}`;

  const formatted = target >= 1000
    ? `${Math.floor(count).toLocaleString()}`
    : `${count}`;

  return (
    <span ref={ref} className="font-display text-xl md:text-2xl gold-gradient-text font-semibold">
      {formatted}{suffix}
    </span>
  );
}

export default function Hero() {
  const typed = useTypewriter(["Hunza Valley", "Fairy Meadows", "Skardu", "Neelum Valley", "Attabad Lake"]);
  const [currentImg, setCurrentImg] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImg((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <section className="relative h-screen min-h-[680px] overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentImg}
          src={HERO_IMAGES[currentImg]}
          alt="Pakistan Mountains"
          loading={currentImg === 0 ? "eager" : "lazy"}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover text-transparent"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-[hsla(210,60%,8%,0.88)] via-[hsla(210,60%,8%,0.45)] to-[hsla(210,60%,8%,0.08)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsla(210,60%,8%,0.72)] to-transparent" />

      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[18%] right-[6%] hidden md:block"
      >
        <div className="glass-card p-4 text-center">
          <div className="font-display text-3xl text-gold leading-none">14+</div>
          <div className="text-[10px] text-muted-foreground tracking-widest uppercase mt-1">Destinations</div>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 h-full flex flex-col justify-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="tag-badge mb-5">Premium Pakistan Travel</div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.1] max-w-[700px] text-white"
        >
          Explore the
          <br />
          <em className="italic">
            <span className="gold-gradient-text">{typed}</span>
            <span className="inline-block w-0.5 h-[0.75em] bg-gold animate-pulse align-middle ml-0.5" />
          </em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-white/70 text-sm max-w-[400px] mt-5 leading-relaxed"
        >
          Discover the natural beauty of Pakistan — from majestic Karakoram peaks to emerald valleys and ancient Silk Road heritage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-3.5 mt-8 flex-wrap"
        >
          <Link to="/destinations" className="btn-primary text-[10px] py-3 px-6 rounded-full">Explore Destinations →</Link>
          <Link to="/trip-planner" className="btn-outline text-[10px] py-3 px-6 rounded-full border-white/30 text-white hover:bg-white hover:text-[hsl(var(--navy))]">Plan Your Trip</Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex gap-8 md:gap-12 mt-12 flex-wrap"
        >
          {STATS.map(({ target, suffix, label }) => (
            <div key={label}>
              <CountUp target={target} suffix={suffix} />
              <div className="text-[10px] text-white/50 tracking-widest uppercase mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
