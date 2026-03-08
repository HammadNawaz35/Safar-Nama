import { useState, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { DESTINATIONS, PROVINCES } from "@/data/destinations";
import DestinationCard from "@/components/DestinationCard";
import { motion } from "framer-motion";

const InteractiveTravelMap = lazy(() => import("@/components/InteractiveTravelMap"));

export default function Destinations() {
  const [province, setProvince] = useState("All");
  const [sort, setSort] = useState("rating");
  const [search, setSearch] = useState("");
  const [budget, setBudget] = useState("All");

  let items = province === "All" ? DESTINATIONS : DESTINATIONS.filter((d) => d.province === province);
  if (search) items = items.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()) || d.province.toLowerCase().includes(search.toLowerCase()));
  if (budget === "Under 30K") items = items.filter((d) => d.price < 30000);
  else if (budget === "30K-50K") items = items.filter((d) => d.price >= 30000 && d.price <= 50000);
  else if (budget === "Above 50K") items = items.filter((d) => d.price > 50000);

  items = [...items].sort((a, b) => (sort === "rating" ? b.rating - a.rating : a.price - b.price));

  return (
    <div className="pt-20 min-h-screen">
      <Helmet>
        <title>Destinations — Explore Pakistan | Safarnama</title>
        <meta name="description" content="Discover 14+ breathtaking destinations across Pakistan. From Hunza Valley to Ziarat." />
      </Helmet>

      {/* Hero Banner */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=85"
          alt="Pakistan Destinations"
          className="w-full h-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-background/70 flex flex-col items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="tag-badge mb-4">Explore</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-6xl font-light text-foreground">
            All Destinations
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-muted-foreground mt-3">
            Discover {DESTINATIONS.length} extraordinary places
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-14 py-14">
        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center mb-10">
          <div className="flex gap-2 flex-wrap">
            {PROVINCES.map((p) => (
              <button
                key={p}
                onClick={() => setProvince(p)}
                className={`btn-outline py-1.5 px-4 text-[11px] ${p === province ? "bg-gold text-navy border-gold" : ""}`}
              >
                {p}
              </button>
            ))}
          </div>
          <div className="flex gap-2.5 w-full lg:w-auto flex-wrap">
            <input
              className="form-input w-full lg:w-44 py-2 px-3 text-sm"
              placeholder="Search…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select className="form-input w-full sm:w-36 py-2 px-3 text-sm" value={budget} onChange={(e) => setBudget(e.target.value)}>
              <option value="All">All Budgets</option>
              <option value="Under 30K">Under PKR 30K</option>
              <option value="30K-50K">PKR 30K-50K</option>
              <option value="Above 50K">Above PKR 50K</option>
            </select>
            <select className="form-input w-full sm:w-36 py-2 px-3 text-sm" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="rating">Top Rated</option>
              <option value="price">Lowest Price</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {items.map((d, i) => (
            <DestinationCard key={d.id} destination={d} index={i} />
          ))}
        </div>

        {items.length === 0 && (
          <div className="text-center text-muted-foreground py-20">
            <div className="text-4xl mb-3">🔍</div>
            No results found. Try a different filter.
          </div>
        )}

        {/* Map */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <div className="tag-badge mb-3 inline-block">Interactive Map</div>
            <h2 className="font-display text-2xl md:text-3xl font-light">Explore on the Map</h2>
          </div>
          <Suspense fallback={<div className="w-full h-[500px] bg-muted animate-pulse rounded-2xl" />}>
            <InteractiveTravelMap />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
