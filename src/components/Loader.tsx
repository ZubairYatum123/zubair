import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

export const Loader = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const seen = sessionStorage.getItem("loader_seen");
    if (seen) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("loader_seen", "1");
    }, 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-accent font-display text-2xl font-semibold text-primary-foreground shadow-elegant">
              {profile.initials}
            </div>
            <div className="h-1 w-32 overflow-hidden rounded-full bg-secondary">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-1/2 bg-foreground"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
