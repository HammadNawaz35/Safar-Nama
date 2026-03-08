import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { BLOG_POSTS } from "@/data/blogs";
import { motion } from "framer-motion";

export default function BlogPost() {
  const { id } = useParams();
  const post = BLOG_POSTS.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl mb-4 text-foreground">Post Not Found</h1>
          <Link to="/blog" className="btn-outline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      <Helmet>
        <title>{post.title} — Safarnama Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.img} />
      </Helmet>

      <div className="relative h-72 md:h-[450px] overflow-hidden">
        <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-6 md:px-14 pb-10 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="tag-badge mb-4 inline-block">{post.category}</span>
              <h1 className="font-display text-3xl md:text-5xl font-light leading-tight text-foreground">{post.title}</h1>
              <div className="flex gap-4 mt-4 text-sm text-muted-foreground">
                <span>By {post.author}</span>
                <span>{post.date}</span>
                <span>{post.readTime} read</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 md:px-14 py-14">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <p className="text-lg leading-relaxed text-foreground/90 mb-6 font-display italic">{post.excerpt}</p>
          <div className="section-divider mb-8" />
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/80 leading-relaxed mb-4">
              {post.content || post.excerpt}
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Pakistan remains one of the world's best-kept travel secrets. With landscapes that rival the Swiss Alps, hospitality that puts five-star hotels to shame, and a cultural heritage spanning thousands of years, this is a country that rewards the curious traveller with experiences beyond imagination.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Whether you're trekking to alpine meadows beneath the shadow of eight-thousanders, cruising across turquoise glacial lakes, or exploring ancient Buddhist ruins in the valleys of Swat, every day brings a new chapter in an unforgettable story.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              The best part? You don't need to be an extreme adventurer to enjoy it. Pakistan's northern areas offer experiences for every comfort level, from luxury resorts overlooking crystal-clear lakes to comfortable camping beneath star-filled skies.
            </p>
          </div>
        </motion.div>

        <div className="section-divider my-10" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link to="/blog" className="btn-outline">← Back to Blog</Link>
          <Link to="/booking" className="btn-primary">Plan Your Trip →</Link>
        </div>
      </article>
    </div>
  );
}
