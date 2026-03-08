import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { TOURS } from "@/data/tours";
import TourCard from "@/components/TourCard";
import { motion } from "framer-motion";

export default function Tours() {
  const [sort, setSort] = useState("popularity");

  const items = [...TOURS].sort((a, b) => {
    if (sort === "price") return a.price - b.price;
    if (sort === "duration") return a.days - b.days;
    return b.popularity - a.popularity;
  });

  return (
    <div className="pt-20 min-h-screen">
      <Helmet>
        <title>Tour Packages — Pakistan Adventures | Safarnama</title>
        <meta name="description" content="All-inclusive Pakistan tour packages. Hunza, Skardu, Fairy Meadows, Swat and more." />
      </Helmet>

      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=85" alt="" className="w-full h-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-background/70 flex flex-col items-center justify-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-6xl font-light text-foreground">
            Tour Packages
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-muted-foreground mt-3">
            All-inclusive journeys crafted with passion
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-14 py-14">
        <div className="flex justify-end mb-8">
          <select className="form-input w-44 py-2 px-3 text-sm" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="popularity">Most Popular</option>
            <option value="price">Lowest Price</option>
            <option value="duration">Shortest Duration</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {items.map((t, i) => (
            <TourCard key={t.id} tour={t} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
