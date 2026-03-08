import { Link } from "react-router-dom";
import type { Tour } from "@/data/tours";
import { formatPKR } from "@/utils/format";
import { motion } from "framer-motion";

interface Props {
  tour: Tour;
  index?: number;
}

export default function TourCard({ tour: t, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: Math.min(index * 0.1, 0.4), duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-card border border-border rounded-lg card-hover overflow-hidden max-w-[360px] mx-auto w-full">
        <div className="img-zoom h-40 relative">
          <img src={t.img} alt={t.name} className="w-full h-full object-cover block" loading="lazy" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${t.color}dd 0%, transparent 50%)` }} />
          <span className="absolute top-2.5 left-2.5 bg-gold text-navy text-[8px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm">{t.badge}</span>
          <div className="absolute bottom-2 left-2.5 flex gap-1 flex-wrap">
            {t.highlights.slice(0, 2).map((h) => (
              <span key={h} className="text-[8px] bg-background/70 backdrop-blur-md border border-border/30 text-foreground/80 px-1.5 py-0.5 rounded-sm">{h}</span>
            ))}
          </div>
        </div>
        <div className="p-3.5">
          <div className="font-display text-base text-foreground leading-tight">{t.name}</div>
          <div className="text-muted-foreground text-[10px] mt-0.5">{t.duration}</div>
          <div className="flex flex-wrap gap-1 mt-2">
            {t.includes.slice(0, 2).map((inc) => (
              <span key={inc} className="text-[9px] text-muted-foreground border border-border px-1.5 py-0.5 rounded-sm">✓ {inc}</span>
            ))}
            {t.includes.length > 2 && (
              <span className="text-[9px] text-gold">+{t.includes.length - 2} more</span>
            )}
          </div>
          <div className="flex justify-between items-center mt-3 pt-2.5 border-t border-border">
            <div>
              <span className="text-[10px] text-muted-foreground line-through mr-1">{formatPKR(t.oldPrice)}</span>
              <span className="text-base text-gold font-medium">{formatPKR(t.price)}</span>
              <div className="text-[8px] text-muted-foreground">per person</div>
            </div>
            <Link to={`/booking?tour=${encodeURIComponent(t.name)}`} className="btn-primary py-1.5 px-3 text-[9px] rounded-full">
              Book
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
