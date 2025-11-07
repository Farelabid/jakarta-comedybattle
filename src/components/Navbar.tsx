import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
          ? "bg-[#0a0e27]/90 backdrop-blur-xl" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div 
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="font-display text-5xl text-white tracking-tighter leading-none">
              JCB<span className="text-[#ff6b35]">.</span>
            </div>
            <div className="font-display text-xs text-[#ff6b35] tracking-[0.3em] mt-1">2025</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-[#ff6b35] transition-colors duration-300 text-sm tracking-wider uppercase"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={() => scrollToSection("register")}
              className="bg-[#ff6b35] text-white px-8 py-3 text-sm tracking-wider uppercase hover:bg-[#ff8c42] transition-colors duration-300"
              style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}
            >
              Daftar
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
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
            className="fixed inset-0 bg-[#0a0e27] md:hidden pt-24"
          >
            <div className="px-6 py-8 space-y-6">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-white text-3xl font-display py-3 border-b border-[#ff6b35]/20 hover:text-[#ff6b35] transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
              <button
                onClick={() => scrollToSection("register")}
                className="w-full bg-[#ff6b35] text-white px-8 py-4 text-lg tracking-wider uppercase mt-8"
              >
                Daftar Sekarang
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}