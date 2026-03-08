import { Link } from "react-router-dom";
import type { Destination } from "@/data/destinations";
import { formatPKR } from "@/utils/format";
import { motion } from "framer-motion";

interface Props {
  destination: Destination;
  index?: number;
}

export default function DestinationCard({ destination: d, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: Math.min(index * 0.08, 0.4), duration: 0.6, ease: "easeOut" }}
    >
      <Link to={`/booking?dest=${encodeURIComponent(d.name)}`} className="block no-underline group">
        <div className="bg-card border border-border rounded-lg card-hover cursor-pointer overflow-hidden">
          <div className="img-zoom h-44 relative">
            <img src={d.img} alt={d.name} className="w-full h-full object-cover block" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="tag-badge absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-[9px]">{d.tag}</span>
          </div>
          <div className="p-3.5">
            <div className="flex justify-between items-start">
              <div className="min-w-0">
                <div className="font-display text-base text-foreground leading-tight">{d.name}</div>
                <div className="text-muted-foreground text-[11px] mt-0.5">{d.province}</div>
              </div>
              <div className="text-gold text-sm font-medium text-right flex-shrink-0 ml-2">
                {formatPKR(d.price)}
                <div className="text-[9px] text-muted-foreground mt-0.5">per person</div>
              </div>
            </div>
            <div className="text-[11px] text-muted-foreground/70 mt-1.5 line-clamp-1">{d.highlight}</div>
            <div className="flex justify-between items-center mt-2.5">
              <div className="flex gap-1.5 items-center">
                <span className="stars-gold text-[10px]">{"★".repeat(Math.floor(d.rating))}</span>
                <span className="text-[11px] text-muted-foreground">{d.rating}</span>
              </div>
              <span className="text-[9px] text-muted-foreground">{d.climate}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
