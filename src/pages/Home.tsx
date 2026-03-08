import { lazy, Suspense } from "react";
import { UserCheck, MapPinned, HeadsetIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import DestinationCarousel from "@/components/DestinationCarousel";
import TourCard from "@/components/TourCard";
import Testimonials from "@/components/Testimonials";
import GalleryComponent from "@/components/Gallery";
import { DESTINATIONS } from "@/data/destinations";
import { TOURS } from "@/data/tours";
import { BLOG_POSTS } from "@/data/blogs";
import { motion } from "framer-motion";

const InteractiveTravelMap = lazy(() => import("@/components/InteractiveTravelMap"));

const sectionReveal = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Safarnama — Premium Pakistan Travel & Tours</title>
        <meta name="description" content="Discover Pakistan's breathtaking landscapes with Safarnama. Book luxury tours to Hunza, Skardu, Fairy Meadows and more." />
        <meta property="og:title" content="Safarnama — Premium Pakistan Travel" />
        <meta property="og:description" content="Explore the natural beauty of Pakistan with curated travel experiences." />
      </Helmet>

      <Hero />

      {/* Featured Destinations */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="py-20 md:py-28 px-10 md:px-16 max-w-7xl mx-auto"
      >
        <div className="mb-12">
          <div className="tag-badge mb-4 inline-block">Top Destinations</div>
          <h2 className="font-display text-3xl md:text-4xl font-light leading-tight">
            Places That Will
            <br />
            Leave You Breathless
          </h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-lg">
            Handpicked destinations across Pakistan for extraordinary beauty and once-in-a-lifetime experiences.
          </p>
        </div>
        <DestinationCarousel destinations={DESTINATIONS} />
        <div className="text-center mt-10">
          <Link to="/destinations" className="btn-outline">View All Destinations</Link>
        </div>
      </motion.section>

      {/* Why Safarnama */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="bg-card border-y border-border py-20 md:py-24 px-6 md:px-14"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="tag-badge mb-4 inline-block">Why Safarnama</div>
            <h2 className="font-display text-3xl md:text-4xl font-light leading-tight mb-4">
              Not a Package Tour.
              <br />A <em className="gold-gradient-text">Personal Masterpiece.</em>
            </h2>
            <p className="text-muted-foreground text-sm mb-8 max-w-lg">
              Every journey is crafted around your interests, pace, and vision of perfection.
            </p>
            <div className="flex flex-col gap-5">
              {[
                [UserCheck, "Dedicated Travel Specialist", "A single expert handles your entire journey from start to finish."],
                [MapPinned, "Local Expertise", "Born and raised guides who know every hidden trail and secret viewpoint."],
                [HeadsetIcon, "24/7 Support", "Real people on call wherever you are in Pakistan's mountains."],
              ].map(([Icon, title, desc]) => (
                <motion.div
                  key={title as string}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-border bg-card text-gold rounded-md">
                    {(() => { const I = Icon as React.ElementType; return <I size={18} />; })()}
                  </div>
                  <div>
                    <div className="font-medium text-sm mb-1 text-foreground">{title as string}</div>
                    <div className="text-muted-foreground text-xs leading-relaxed">{desc as string}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=750&q=85"
              alt="Fairy Meadows"
              className="w-full h-80 md:h-[500px] object-cover rounded-lg"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 md:-bottom-5 md:-left-5 bg-gold text-navy p-5 rounded-md">
              <div className="font-display text-4xl font-semibold leading-none">4.9</div>
              <div className="text-[11px] uppercase tracking-widest mt-1">Avg Review Score</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Tours */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="py-20 md:py-28 px-6 md:px-14 max-w-7xl mx-auto"
      >
        <div className="mb-12">
          <div className="tag-badge mb-4 inline-block">Curated Packages</div>
          <h2 className="font-display text-3xl md:text-4xl font-light">
            Tours Designed for
            <br />
            Every Explorer
          </h2>
          <p className="text-muted-foreground text-sm mt-3">All-inclusive itineraries crafted by local specialists.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center">
          {TOURS.slice(0, 4).map((t, i) => (
            <TourCard key={t.id} tour={t} index={i} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/tours" className="btn-outline">View All Tours</Link>
        </div>
      </motion.section>

      {/* Testimonials */}
      <Testimonials />

      {/* Blog Preview */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="py-20 md:py-28 px-6 md:px-14 max-w-7xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <div>
            <div className="tag-badge mb-4 inline-block">Travel Journal</div>
            <h2 className="font-display text-3xl md:text-4xl font-light">
              Stories from
              <br />
              Across Pakistan
            </h2>
          </div>
          <Link to="/blog" className="btn-text">All Articles →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(0, 3).map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Link to={`/blog/${post.id}`} className="block no-underline card-hover">
                <div className="img-zoom h-48 rounded-lg overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover block" loading="lazy" />
                </div>
                <div className="pt-4">
                  <div className="flex gap-2.5 items-center mb-2.5">
                    <span className="tag-badge text-[9px]">{post.category}</span>
                    <span className="text-[11px] text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg leading-snug mb-2 text-foreground">{post.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="flex justify-between items-center mt-3.5">
                    <span className="text-xs text-muted-foreground">By {post.author}</span>
                    <span className="btn-text text-xs">Read →</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="py-20 md:py-28 px-6 md:px-14 max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <div className="tag-badge mb-4 inline-block">Gallery</div>
          <h2 className="font-display text-3xl md:text-4xl font-light">Captured Moments</h2>
        </div>
        <GalleryComponent />
      </motion.section>

      {/* Interactive Map */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="py-20 md:py-28 px-6 md:px-14 max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <div className="tag-badge mb-4 inline-block">Explore the World</div>
          <h2 className="font-display text-3xl md:text-4xl font-light">Our Destinations</h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-lg mx-auto">
            From Pakistan's northern peaks to the Mediterranean coast — discover where your next journey begins.
          </p>
        </div>
        <Suspense fallback={<div className="w-full h-[500px] bg-muted animate-pulse rounded-2xl" />}>
          <InteractiveTravelMap />
        </Suspense>
      </motion.section>

      {/* CTA Banner */}
      <motion.section
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden mx-4 md:mx-14 mb-20 rounded-lg"
      >
        <motion.img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=85"
          alt="Pakistan mountains"
          className="w-full h-96 md:h-[440px] object-cover"
          loading="lazy"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-background/75 flex flex-col items-center justify-center text-center p-8 md:p-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-light max-w-xl mb-6 text-foreground"
          >
            Your Most Unforgettable Journey Starts Here
          </motion.h2>
          <p className="text-muted-foreground text-sm max-w-md leading-relaxed mb-9">
            Speak with a Safarnama specialist today. No obligation, just inspiration.
          </p>
          <div className="flex gap-3.5 flex-wrap justify-center">
            <Link to="/booking" className="btn-primary">Plan My Journey</Link>
            <Link to="/contact" className="btn-outline">Talk to a Specialist</Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}
