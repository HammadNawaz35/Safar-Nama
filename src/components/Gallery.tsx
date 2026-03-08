import { useState, useCallback, forwardRef } from "react";
import { GALLERY_IMAGES } from "@/data/gallery";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = forwardRef<HTMLDivElement>(function Gallery(_, ref) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox((i) => (((i ?? 0) - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)), []);
  const next = useCallback(() => setLightbox((i) => (((i ?? 0) + 1) % GALLERY_IMAGES.length)), []);

  return (
    <>
      <div ref={ref} className="columns-2 md:columns-3 lg:columns-4 gap-3">
        {GALLERY_IMAGES.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="mb-3 break-inside-avoid img-zoom cursor-pointer relative group rounded-sm overflow-hidden"
            onClick={() => setLightbox(i)}
          >
            <img src={img.src} alt={img.label} className="w-full block" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div>
                <div className="font-display text-sm text-foreground">{img.label}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Click to enlarge</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[2000] bg-background/97 flex items-center justify-center animate-fade-in" onClick={close}>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/50 border border-border text-foreground flex items-center justify-center cursor-pointer">
            <ChevronLeft size={20} />
          </button>
          <div onClick={(e) => e.stopPropagation()} className="flex flex-col items-center gap-4 max-w-[90vw]">
            <img src={GALLERY_IMAGES[lightbox].src} alt={GALLERY_IMAGES[lightbox].label} className="max-w-full max-h-[85vh] object-contain" />
            <div className="font-display text-lg text-foreground/80">{GALLERY_IMAGES[lightbox].label}</div>
          </div>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/50 border border-border text-foreground flex items-center justify-center cursor-pointer">
            <ChevronRight size={20} />
          </button>
          <button onClick={close} className="absolute top-5 right-6 bg-transparent border-none text-muted-foreground text-2xl cursor-pointer">
            <X size={24} />
          </button>
        </div>
      )}
    </>
  );
});

export default Gallery;
