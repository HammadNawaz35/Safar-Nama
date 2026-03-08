import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DestinationCard from "./DestinationCard";
import type { Destination } from "@/data/destinations";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  destinations: Destination[];
}

export default function DestinationCarousel({ destinations }: Props) {
  const itemsPerPage = 4;
  const totalPages = Math.ceil(destinations.length / itemsPerPage);
  const [page, setPage] = useState(0);

  const next = useCallback(() => {
    setPage((p) => (p + 1) % totalPages);
  }, [totalPages]);

  const prev = useCallback(() => {
    setPage((p) => (p - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const startIdx = page * itemsPerPage;
  const visibleItems = destinations.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="relative">
      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:text-gold hover:border-gold/50 transition-all duration-300 shadow-lg"
        aria-label="Previous"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:text-gold hover:border-gold/50 transition-all duration-300 shadow-lg"
        aria-label="Next"
      >
        <ChevronRight size={18} />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {visibleItems.map((d, i) => (
            <DestinationCard key={d.id} destination={d} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2.5 mt-8">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === page
                ? "w-8 bg-gold"
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
