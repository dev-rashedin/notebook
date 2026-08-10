"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import Navbar from "./Navbar";
import SecondaryNav from "./ui/SecondaryNav";

export default function MotionWrapper({ children, type = 'home' }: { children: ReactNode, type?: "docs" | "home" }) {
  const pathname = usePathname();
  const homeScreen = pathname === "/"

  return (
    <main>
      {homeScreen ? null : (
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
        className={`flex-1 overflow-y-auto min-h-[calc(100vh-80px)] flex items-center ${homeScreen ? "justify-center" : "justify-start xl:pl-24"} ${type === "docs" ? "px-5 sm:px-10 py-10 sm:py-16" : ""}`}
      >
        {children}
      </motion.div>
    </main>
  );
}
