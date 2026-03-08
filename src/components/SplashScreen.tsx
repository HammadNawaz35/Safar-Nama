import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  show: boolean;
}

export default function SplashScreen({ show }: SplashScreenProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-8"
          >
            {/* Colorful spinning circle */}
            <div className="relative w-20 h-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  border: "4px solid transparent",
                  borderTopColor: "hsl(var(--primary))",
                  borderRightColor: "hsl(340, 80%, 55%)",
                }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                className="absolute inset-2 rounded-full"
                style={{
                  border: "3px solid transparent",
                  borderTopColor: "hsl(45, 90%, 55%)",
                  borderLeftColor: "hsl(160, 70%, 45%)",
                }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
                className="absolute inset-4 rounded-full"
                style={{
                  border: "2px solid transparent",
                  borderBottomColor: "hsl(200, 85%, 55%)",
                  borderRightColor: "hsl(280, 75%, 60%)",
                }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-display text-5xl md:text-6xl font-semibold tracking-tight"
            >
              <span className="text-foreground">Safar</span>
              <span className="text-primary">nama</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-muted-foreground text-sm tracking-[0.3em] uppercase"
            >
              Premium Pakistan Travel
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
