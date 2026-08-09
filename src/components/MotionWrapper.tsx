"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import Navbar from "./Navbar";
import SecondaryNav from "./ui/SecondaryNav";

export default function MotionWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <main>
      {pathname === "/" ? null : (
        <div>
          <Navbar type="sidebar" /> <SecondaryNav pathname={pathname} />
        </div>
      )}
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex-1 overflow-y-auto min-h-[calc(100vh-80px)] flex-center"
      >
        {children}
      </motion.div>
    </main>
  );
}
