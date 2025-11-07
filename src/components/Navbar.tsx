import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Tentang", id: "about" },
    { label: "Timeline", id: "timeline" },
    { label: "Venue", id: "venue" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#0a0e27]/95 backdrop-blur-xl border-b-2 border-[#ff6b35]/30" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="font-display text-4xl sm:text-5xl text-white tracking-tighter leading-none">
              JCB<span className="text-[#ff6b35]">.</span>
            </div>
            <div className="font-display text-[10px] sm:text-xs text-[#ff6b35] tracking-[0.3em] mt-1">2025</div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-[#ffd93d] transition-colors duration-300 text-sm tracking-wider uppercase relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff6b35] to-[#ffd93d] group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ rotate: 2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("register")}
              className="bg-gradient-to-r from-[#ff6b35] to-[#ffd93d] text-[#0a0e27] px-6 lg:px-8 py-2.5 lg:py-3 text-sm tracking-wider uppercase transform -rotate-1"
            >
              Daftar
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gradient-to-br from-[#0a0e27] via-[#1a1438] to-[#0a0e27] md:hidden pt-20 sm:pt-24 overflow-y-auto"
          >
            <div className="px-6 py-8 space-y-6">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-white text-2xl sm:text-3xl font-display py-3 border-b-2 border-[#ff6b35]/20 hover:text-[#ffd93d] hover:border-[#ffd93d] transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => scrollToSection("register")}
                className="w-full bg-gradient-to-r from-[#ff6b35] to-[#ffd93d] text-[#0a0e27] px-8 py-4 text-lg tracking-wider uppercase mt-8 transform -rotate-1"
              >
                Daftar Sekarang
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}