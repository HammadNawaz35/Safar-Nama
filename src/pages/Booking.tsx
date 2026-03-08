import { useState, forwardRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DESTINATIONS } from "@/data/destinations";
import { TOURS } from "@/data/tours";

const bookingSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(10, "Valid phone number required").max(20),
  destination: z.string().min(1, "Select a destination"),
  travelDate: z.string().min(1, "Select a travel date"),
  travelers: z.string().min(1, "Select number of travelers"),
  budget: z.string().optional(),
  specialRequests: z.string().max(1000).optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const Booking = forwardRef<HTMLDivElement>(function Booking(_, ref) {
  const [searchParams] = useSearchParams();
  const defaultDest = searchParams.get("dest") || searchParams.get("tour") || "";
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors }, getValues } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { destination: defaultDest, travelers: "2" },
  });

  const onSubmit = () => {
    setStep(3);
    setSubmitted(true);
  };

  const STEPS = ["Travel Details", "Your Information", "Confirmation"];

  return (
    <div ref={ref} className="pt-20 min-h-screen">
      <Helmet>
        <title>Book Your Trip — Safarnama</title>
        <meta name="description" content="Book your dream Pakistan trip. Fill in your details and our specialists will create a bespoke itinerary." />
      </Helmet>

      <div className="max-w-3xl mx-auto px-6 md:px-14 py-14 md:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="tag-badge mb-4 inline-block">Booking</div>
          <h1 className="font-display text-3xl md:text-5xl font-light mb-3 text-foreground">Plan Your Journey</h1>
          <p className="text-muted-foreground text-sm mb-12">
            Complete the form and your dedicated travel specialist will respond within 24 hours.
          </p>
        </motion.div>

        {/* Step indicator */}
        <div className="flex items-center mb-12 relative">
          <div className="absolute top-4 left-[16%] right-[16%] h-px bg-border z-0" />
          <div className="absolute top-4 left-[16%] h-px bg-gold z-0 transition-all duration-500" style={{ width: `${((step - 1) / (STEPS.length - 1)) * 100}%` }} />
          {STEPS.map((label, i) => (
            <div key={i} className="flex-1 text-center relative z-10">
              <div className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center text-sm font-semibold transition-all ${i + 1 <= step ? "bg-gold text-navy" : "bg-card border border-border text-muted-foreground"}`}>
                {i + 1 < step ? "✓" : i + 1}
              </div>
              <div className={`text-[11px] ${i + 1 === step ? "text-foreground" : "text-muted-foreground"}`}>{label}</div>
            </div>
          ))}
        </div>

        <div className="glass-card p-6 md:p-10 rounded-sm">
          {step === 1 && (
            <div className="grid gap-5">
              <h3 className="font-display text-xl mb-2 text-foreground">Where would you like to go?</h3>

              <div>
                <label className="text-[11px] text-muted-foreground uppercase tracking-widest block mb-2">Destination *</label>
                <select className="form-input" {...register("destination")}>
                  <option value="">Choose a destination</option>
                  {DESTINATIONS.map((d) => <option key={d.id} value={d.name}>{d.name}, {d.province}</option>)}
                  {TOURS.map((t) => <option key={`t-${t.id}`} value={t.name}>{t.name} (Tour)</option>)}
                </select>
                {errors.destination && <p className="text-destructive text-xs mt-1">{errors.destination.message}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] text-muted-foreground uppercase tracking-widest block mb-2">Travel Date *</label>
                  <input type="date" className="form-input" {...register("travelDate")} />
                  {errors.travelDate && <p className="text-destructive text-xs mt-1">{errors.travelDate.message}</p>}
                </div>
                <div>
                  <label className="text-[11px] text-muted-foreground uppercase tracking-widest block mb-2">Travelers *</label>
                  <select className="form-input" {...register("travelers")}>
                    {["1", "2", "3", "4", "5", "6", "7", "8+"].map((n) => <option key={n} value={n}>{n} {parseInt(n) === 1 ? "Person" : "People"}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] text-muted-foreground uppercase tracking-widest block mb-2">Budget Range (PKR)</label>
                <select className="form-input" {...register("budget")}>
                  <option value="">Flexible</option>
                  <option value="20000-40000">PKR 20,000 – 40,000</option>
                  <option value="40000-80000">PKR 40,000 – 80,000</option>
                  <option value="80000-150000">PKR 80,000 – 1,50,000</option>
                  <option value="150000+">PKR 1,50,000+</option>
                </select>
              </div>

              <button className="btn-primary justify-center mt-3" onClick={() => setStep(2)}>
                Continue to Your Details →
              </button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
              <h3 className="font-display text-xl mb-2 text-foreground">Tell us about yourself</h3>

              <div>
                <label className="text-[11px] text-muted-foreground uppercase tracking-widest block mb-2">Full Name *</label>
                <input className="form-input" placeholder="Your full name" {...register("fullName")} />
                {errors.fullName && <p className="text-destructive text-xs mt-1">{errors.fullName.message}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] text-muted-foreground uppercase tracking-widest block mb-2">Email *</label>
                  <input type="email" className="form-input" placeholder="your@email.com" {...register("email")} />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="text-[11px] text-muted-foreground uppercase tracking-widest block mb-2">Phone *</label>
                  <input type="tel" className="form-input" placeholder="+92 300 1234567" {...register("phone")} />
                  {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label className="text-[11px] text-muted-foreground uppercase tracking-widest block mb-2">Special Requests</label>
                <textarea className="form-input min-h-[100px]" placeholder="Any dietary requirements, mobility needs, special occasions…" {...register("specialRequests")} />
              </div>

              <div className="flex gap-3 mt-2">
                <button type="button" className="btn-outline" onClick={() => setStep(1)}>← Back</button>
                <button type="submit" className="btn-primary flex-1 justify-center">Submit Booking ✓</button>
              </div>
            </form>
          )}

          {step === 3 && submitted && (
            <div className="text-center py-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-light mx-auto mb-7 flex items-center justify-center text-4xl shadow-[0_0_0_16px_hsla(var(--gold)/0.1),0_0_0_32px_hsla(var(--gold)/0.05)]">
                ✓
              </div>
              <h3 className="font-display text-3xl mb-3 text-foreground">Booking Received!</h3>
              <p className="text-muted-foreground leading-relaxed max-w-md mx-auto mb-3">
                Thank you, <strong className="text-foreground">{getValues("fullName") || "Traveller"}</strong>.
              </p>
              <p className="text-muted-foreground text-sm max-w-md mx-auto mb-10">
                Your specialist will contact you at <strong className="text-foreground">{getValues("email")}</strong> within 24 hours with a personalised itinerary.
              </p>
              <div className="border border-border p-5 bg-card/50 mb-8 text-left rounded-sm">
                <div className="text-[11px] text-gold tracking-widest uppercase mb-4">Booking Summary</div>
                {[
                  ["Destination", getValues("destination") || "—"],
                  ["Travel Date", getValues("travelDate") || "—"],
                  ["Travelers", getValues("travelers")],
                  ["Budget", getValues("budget") || "Flexible"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between py-2.5 border-b border-border text-sm last:border-b-0">
                    <span className="text-muted-foreground">{k}</span>
                    <span className="text-foreground font-medium">{v}</span>
                  </div>
                ))}
              </div>
              <button className="btn-primary justify-center" onClick={() => { setStep(1); setSubmitted(false); }}>
                Plan Another Journey
              </button>
            </div>
          )}
        </div>

        {step < 3 && (
          <div className="flex gap-6 mt-8 justify-center flex-wrap">
            {["🔒 Secure Booking", "✓ No Hidden Fees", "⭐ 4.9/5 Rating", "♻ Free Cancellation 48h"].map((t) => (
              <span key={t} className="text-xs text-muted-foreground">{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

export default Booking;
