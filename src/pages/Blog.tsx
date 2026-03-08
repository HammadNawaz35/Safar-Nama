import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { BLOG_POSTS } from "@/data/blogs";
import { motion } from "framer-motion";

export default function Blog() {
  const [cat, setCat] = useState("All");
  const cats = ["All", ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];
  const filtered = cat === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === cat);

  return (
    <div className="pt-20 min-h-screen">
      <Helmet>
        <title>Travel Blog — Pakistan Stories | Safarnama</title>
        <meta name="description" content="Read travel stories, guides and tips about exploring Pakistan's most beautiful destinations." />
      </Helmet>

      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1600&q=85" alt="" className="w-full h-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-background/70 flex flex-col items-center justify-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-6xl font-light text-foreground">
            Travel Journal
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-muted-foreground mt-3">
            Stories, guides, and inspiration from across Pakistan
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-14 py-14">
        <div className="flex gap-2 flex-wrap mb-12">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`btn-outline py-1.5 px-4 text-[11px] ${c === cat ? "bg-gold text-navy border-gold" : ""}`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Featured */}
        {cat === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-card border border-border rounded-sm overflow-hidden card-hover mb-14"
          >
            <div className="img-zoom h-64 lg:h-96">
              <img src={BLOG_POSTS[0].img} alt={BLOG_POSTS[0].title} className="w-full h-full object-cover block" />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="tag-badge mb-5 inline-block self-start">Featured · {BLOG_POSTS[0].date}</span>
              <h2 className="font-display text-2xl md:text-3xl leading-tight mb-4 text-foreground">{BLOG_POSTS[0].title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{BLOG_POSTS[0].excerpt}</p>
              <Link to={`/blog/${BLOG_POSTS[0].id}`} className="btn-primary self-start">Read Full Story</Link>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post, i) => (
            <motion.div
              key={`${post.id}-${cat}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/blog/${post.id}`} className="block no-underline card-hover">
                <div className="img-zoom h-48 rounded-sm overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover block" loading="lazy" />
                </div>
                <div className="pt-4">
                  <div className="flex gap-2.5 items-center mb-2.5">
                    <span className="tag-badge text-[9px]">{post.category}</span>
                    <span className="text-[11px] text-muted-foreground">{post.date}</span>
                    <span className="text-[11px] text-muted-foreground/60">· {post.readTime}</span>
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
      </div>
    </div>
  );
}
