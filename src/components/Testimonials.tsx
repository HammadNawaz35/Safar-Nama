import { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-20 md:py-28 px-6 md:px-14 max-w-4xl mx-auto">
      <div className="text-center mb-14">
        <div className="tag-badge mb-4 inline-block">Client Stories</div>
        <h2 className="font-display text-3xl md:text-4xl font-light">From Our Travellers</h2>
        <p className="text-muted-foreground text-sm mt-3 max-w-md mx-auto">
          Real experiences from real people who trusted us with their most precious journeys.
        </p>
      </div>

      <div className="relative min-h-[280px]">
        <AnimatePresence mode="wait">
          {TESTIMONIALS.map((t, i) =>
            i === active ? (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="font-display text-7xl text-gold/30 leading-none mb-2">"</div>
                <p className="font-display text-lg md:text-xl font-light italic leading-relaxed text-foreground/90 px-4 md:px-8">
                  {t.text}
                </p>
                <div className="flex flex-col items-center mt-8 gap-2">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold"
                    loading="lazy"
                  />
                  <div className="font-medium text-foreground">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.location}</div>
                  <span className="stars-gold">{"★".repeat(t.rating)}</span>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full border-none cursor-pointer transition-all duration-300 ${
              i === active ? "w-7 bg-gold" : "w-2 bg-muted"
            }`}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
