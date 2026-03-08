import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="pt-20 min-h-screen">
      <Helmet>
        <title>Contact Us — Safarnama</title>
        <meta name="description" content="Get in touch with Safarnama travel specialists. We're here to help plan your perfect Pakistan trip." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 md:px-14 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="tag-badge mb-5 inline-block">Get In Touch</div>
            <h1 className="font-display text-3xl md:text-5xl font-light leading-tight mb-6 text-foreground">
              Let's Plan
              <br />
              Something
              <br />
              <em className="gold-gradient-text">Extraordinary</em>
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed mb-12 max-w-sm">
              Whether you have a specific destination in mind or just a sense of wanderlust, our specialists are ready to help.
            </p>

            <div className="flex flex-col gap-7">
              {[
                ["📍", "Office", "Jinnah Avenue, F-7 Markaz, Islamabad", "Walk-ins welcome Mon–Fri"],
                ["✉️", "Email", "hello@safarnama.pk", "We reply within 4 business hours"],
                ["📞", "Phone", "+92 51 111 7233", "Mon–Sat · 9am–7pm PKT"],
                ["💬", "WhatsApp", "+92 300 1234567", "Available for urgent support"],
              ].map(([icon, label, value, sub]) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-border bg-card/50 text-lg">
                    {icon}
                  </div>
                  <div>
                    <div className="text-[10px] text-gold uppercase tracking-widest mb-0.5">{label}</div>
                    <div className="text-foreground text-sm font-medium">{value}</div>
                    <div className="text-muted-foreground text-xs mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <div className="glass-card p-6 md:p-10 rounded-sm">
              {!sent ? (
                <>
                  <h3 className="font-display text-xl mb-6 text-foreground">Send a Message</h3>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] text-muted-foreground uppercase tracking-widest block mb-1.5">First Name</label>
                        <input className="form-input" placeholder="First Name" />
                      </div>
                      <div>
                        <label className="text-[11px] text-muted-foreground uppercase tracking-widest block mb-1.5">Last Name</label>
                        <input className="form-input" placeholder="Last Name" />
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] text-muted-foreground uppercase tracking-widest block mb-1.5">Email</label>
                      <input type="email" className="form-input" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="text-[11px] text-muted-foreground uppercase tracking-widest block mb-1.5">Subject</label>
                      <input className="form-input" placeholder="How can we help?" />
                    </div>
                    <div>
                      <label className="text-[11px] text-muted-foreground uppercase tracking-widest block mb-1.5">Message</label>
                      <textarea className="form-input min-h-[120px]" placeholder="Tell us about your dream journey…" />
                    </div>
                    <button className="btn-primary w-full justify-center mt-2" onClick={() => setSent(true)}>
                      Send Message ✦
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="text-5xl mb-5">✉️</div>
                  <h3 className="font-display text-2xl mb-3 text-foreground">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Thank you for reaching out. Our team will respond within 4 business hours.
                  </p>
                  <button className="btn-outline" onClick={() => setSent(false)}>Send Another Message</button>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* FAQ */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <div className="tag-badge mb-3 inline-block">FAQ</div>
            <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              ["How far in advance should I book?", "We recommend 4–8 weeks for most destinations, and 3+ months for peak seasons like autumn in Hunza or summer in Skardu."],
              ["Is Pakistan safe for tourists?", "Absolutely. Northern Pakistan is very safe and welcoming. Our guides ensure your comfort and safety throughout the journey."],
              ["Can itineraries be customised?", "Yes! Every Safarnama journey is built from scratch. No two itineraries are ever the same."],
              ["What's included in tour prices?", "All tours include accommodation, transportation, meals as specified, guide services, and entry fees. Flights are extra unless stated."],
            ].map(([q, a]) => (
              <motion.div
                key={q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 border border-border bg-card rounded-sm"
              >
                <div className="font-display text-base mb-2 text-foreground">{q}</div>
                <p className="text-muted-foreground text-xs leading-relaxed">{a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
