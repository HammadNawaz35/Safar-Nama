import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const paymentSchema = z.object({
  cardholderName: z.string().trim().min(2, "Cardholder name required").max(100),
  cardNumber: z.string().trim().min(16, "Enter a valid card number").max(19),
  expiry: z.string().trim().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Format: MM/YY"),
  cvv: z.string().trim().regex(/^\d{3,4}$/, "Enter a valid CVV"),
  billingAddress: z.string().trim().min(5, "Billing address required").max(200),
});

type PaymentFormData = z.infer<typeof paymentSchema>;

export default function Checkout() {
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
  });

  const cardNum = watch("cardNumber") || "";

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\D/g, "").slice(0, 16);
    return v.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\D/g, "").slice(0, 4);
    if (v.length >= 3) return v.slice(0, 2) + "/" + v.slice(2);
    return v;
  };

  const onSubmit = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <div className="pt-20 min-h-screen">
      <Helmet>
        <title>Checkout — Safarnama</title>
        <meta name="description" content="Complete your booking payment securely." />
      </Helmet>

      <div className="max-w-xl mx-auto px-6 md:px-14 py-14 md:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="tag-badge mb-4 inline-block">Payment</div>
          <h1 className="font-display text-3xl md:text-4xl font-light mb-3 text-foreground">Secure Checkout</h1>
          <p className="text-muted-foreground text-sm mb-10">Your payment details are encrypted and secure.</p>
        </motion.div>

        {!success ? (
          <div className="glass-card p-6 md:p-10 rounded-sm">
            {/* Card preview */}
            <div className="bg-gradient-to-br from-navy to-navy-mid rounded-lg p-6 mb-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="text-[10px] tracking-widest uppercase opacity-60 mb-8">Card Payment</div>
              <div className="font-mono text-lg tracking-widest mb-6">
                {cardNum ? formatCardNumber(cardNum) : "•••• •••• •••• ••••"}
              </div>
              <div className="flex justify-between text-xs opacity-70">
                <span>CARDHOLDER</span>
                <span>EXPIRES</span>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
              <div>
                <label className="text-[11px] text-muted-foreground uppercase tracking-widest block mb-2">Cardholder Name *</label>
                <input className="form-input" placeholder="Name on card" {...register("cardholderName")} />
                {errors.cardholderName && <p className="text-destructive text-xs mt-1">{errors.cardholderName.message}</p>}
              </div>

              <div>
                <label className="text-[11px] text-muted-foreground uppercase tracking-widest block mb-2">Card Number *</label>
                <input
                  className="form-input font-mono"
                  placeholder="1234 5678 9012 3456"
                  {...register("cardNumber")}
                  onChange={(e) => setValue("cardNumber", e.target.value.replace(/\D/g, "").slice(0, 16))}
                  value={formatCardNumber(cardNum)}
                />
                {errors.cardNumber && <p className="text-destructive text-xs mt-1">{errors.cardNumber.message}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] text-muted-foreground uppercase tracking-widest block mb-2">Expiry *</label>
                  <input
                    className="form-input"
                    placeholder="MM/YY"
                    {...register("expiry")}
                    onChange={(e) => setValue("expiry", formatExpiry(e.target.value))}
                  />
                  {errors.expiry && <p className="text-destructive text-xs mt-1">{errors.expiry.message}</p>}
                </div>
                <div>
                  <label className="text-[11px] text-muted-foreground uppercase tracking-widest block mb-2">CVV *</label>
                  <input
                    type="password"
                    className="form-input"
                    placeholder="•••"
                    maxLength={4}
                    {...register("cvv")}
                  />
                  {errors.cvv && <p className="text-destructive text-xs mt-1">{errors.cvv.message}</p>}
                </div>
              </div>

              <div>
                <label className="text-[11px] text-muted-foreground uppercase tracking-widest block mb-2">Billing Address *</label>
                <input className="form-input" placeholder="Street address, city" {...register("billingAddress")} />
                {errors.billingAddress && <p className="text-destructive text-xs mt-1">{errors.billingAddress.message}</p>}
              </div>

              <button type="submit" disabled={processing} className="btn-primary justify-center mt-3 disabled:opacity-50">
                {processing ? "Processing…" : "Pay Securely →"}
              </button>
            </form>

            <div className="flex gap-4 mt-6 justify-center">
              {["🔒 SSL Encrypted", "💳 Visa/Mastercard", "✓ PCI Compliant"].map((t) => (
                <span key={t} className="text-[10px] text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-10 rounded-sm text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-light mx-auto mb-7 flex items-center justify-center text-4xl">✓</div>
            <h2 className="font-display text-3xl mb-3 text-foreground">Payment Successful!</h2>
            <p className="text-muted-foreground mb-8">Your booking has been confirmed. Check your email for the receipt and itinerary details.</p>
            <a href="/" className="btn-primary">Back to Home</a>
          </motion.div>
        )}
      </div>
    </div>
  );
}
