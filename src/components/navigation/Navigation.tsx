"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); 
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage && !scrolled && !isOpen ? "bg-transparent" : "bg-white/80 backdrop-blur-lg shadow-lg"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                isHomePage && !scrolled ? "text-white" : "text-blue-900"
              }`}>
                BlynQ.
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map(link => (
                <Link key={link.path} href={link.path} className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  pathname === link.path ? "text-blue-600 font-semibold" : "text-gray-900"
                }`}>
                  {link.label}
                  {pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
              <button className="ml-4 px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium flex items-center space-x-2 transition-all hover:shadow-lg active:scale-95">
                <span>Get Started</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                isHomePage && !scrolled ? "text-white hover:bg-white/10" : "text-blue-600 hover:bg-blue-50"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-100 shadow-lg"
            >
              <div className="px-4 py-6 space-y-3">
                {navLinks.map(link => (
                  <Link key={link.path} href={link.path} className={`block px-4 py-3 text-gray-900 transition-colors ${
                    pathname === link.path ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"
                  }`}>
                    {link.label}
                  </Link>
                ))}
                <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-medium transition-all hover:shadow-lg active:scale-95">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
