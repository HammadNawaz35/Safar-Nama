import { forwardRef } from "react";
import { Link } from "react-router-dom";

const Footer = forwardRef<HTMLElement>(function Footer(_, ref) {
  const cats: Record<string, { label: string; path?: string }[]> = {
    Explore: [
      { label: "Destinations", path: "/destinations" },
      { label: "Tours", path: "/tours" },
      { label: "Blog", path: "/blog" },
      { label: "Trip Planner", path: "/trip-planner" },
    ],
    Company: [
      { label: "About Us" },
      { label: "Contact", path: "/contact" },
      { label: "Careers" },
      { label: "Press Kit" },
    ],
    Support: [
      { label: "Travel Insurance" },
      { label: "Cancellations" },
      { label: "Privacy Policy" },
      { label: "Terms of Service" },
    ],
  };

  return (
    <footer ref={ref} className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-14 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="font-display text-xl font-semibold tracking-widest mb-4">
              SAFAR<span className="gold-gradient-text">NAMA</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px] mb-6">
              Crafting extraordinary travel experiences across Pakistan's most breathtaking landscapes since 2020.
            </p>
            <div className="flex gap-2.5">
              {["𝕏", "f", "in", "◎"].map((s) => (
                <button
                  key={s}
                  className="w-9 h-9 flex items-center justify-center border border-border text-muted-foreground text-sm rounded-sm hover:border-gold-strong hover:text-gold transition-all"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          {Object.entries(cats).map(([heading, items]) => (
            <div key={heading}>
              <div className="text-[10px] text-gold tracking-[0.2em] uppercase mb-5">{heading}</div>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.label}>
                    {item.path ? (
                      <Link to={item.path} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-muted-foreground text-sm cursor-default">{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="p-6 md:p-8 border border-border rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="font-display text-lg">Join Our Travel Circle</div>
            <div className="text-sm text-muted-foreground mt-1">Exclusive deals, hidden gems, and curated inspiration.</div>
          </div>
          <div className="flex w-full md:w-auto">
            <input className="form-input rounded-r-none border-r-0 flex-1 md:w-64" placeholder="your@email.com" />
            <button className="btn-primary rounded-l-none whitespace-nowrap py-3 px-5">Subscribe</button>
          </div>
        </div>

        <div className="section-divider mb-6" />
        <div className="text-center text-xs text-muted-foreground">
          <p>© 2026 Safarnama Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
