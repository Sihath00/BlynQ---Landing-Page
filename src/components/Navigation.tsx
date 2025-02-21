import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  const navLinks = [{
    path: "/",
    label: "Home"
  }, {
    path: "/about",
    label: "About"
  }, {
    path: "/services",
    label: "Services"
  },{
    path: "/FAQ",
    label: "FAQ"
  },{
    path: "/contact",
    label: "Contact"
  }];
  const shouldBeTransparent = isHomePage && !scrolled && !isOpen;
  return <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${shouldBeTransparent ? "bg-transparent" : "bg-white/80 backdrop-blur-lg shadow-lg"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
              <span className={`text-2xl font-bold transition-colors duration-300 ${shouldBeTransparent ? "text-white" : "text-blue-900"}`}>
                BlynQ.
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map(link => <Link key={link.path} to={link.path} className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${shouldBeTransparent ? "text-white" : "text-gray-900"}`}>
                  {link.label}
                  {location.pathname === link.path && <motion.div layoutId="navbar-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" initial={false} transition={{
                duration: 0.3
              }} />}
                </Link>)}
              <button className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-medium flex items-center space-x-2 transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-95">
                <span>Get Started</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${shouldBeTransparent ? "text-white hover:bg-white/10" : "text-blue-600 hover:bg-blue-50"}`} aria-label="Toggle menu">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: "auto"
        }} exit={{
          opacity: 0,
          height: 0
        }} transition={{
          duration: 0.3
        }} className="md:hidden bg-white border-t border-gray-100 shadow-lg">
              <div className="px-4 py-6 space-y-3 max-h-[calc(100vh-5rem)] overflow-y-auto">
                {navLinks.map(link => <Link key={link.path} to={link.path} className={`block px-4 py-3 rounded-lg text-gray-900 transition-colors ${location.pathname === link.path ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"}`}>
                    {link.label}
                  </Link>)}
                <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-95">
                  Get Started
                </button>
              </div>
            </motion.div>}
        </AnimatePresence>
      </nav>
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 0.3
      }} className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>;
};