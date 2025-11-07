import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToRegister = () => {
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0e27] pb-20">
      {/* Vertical Text - Left */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <div className="font-display text-[#ff6b35]/20 text-xl tracking-[0.5em] [writing-mode:vertical-lr] rotate-180">
          COMEDY BATTLE
        </div>
      </motion.div>

      {/* Vertical Text - Right */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <div className="font-display text-[#ff6b35]/20 text-xl tracking-[0.5em] [writing-mode:vertical-lr]">
          JAKARTA 2025
        </div>
      </motion.div>

      {/* Large Background Numbers */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none overflow-hidden">
        <div className="font-display text-[40vw] text-white leading-none">
          25
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center pt-48 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-[#ff6b35]/20 blur-2xl" />
            <div className="relative text-sm tracking-[0.5em] text-[#ff6b35] uppercase mb-4">
              Jakarta Experience Board
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h1 className="font-display text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.85] tracking-tighter mb-6">
            <div className="text-white">JAKARTA</div>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-[#ff6b35] blur-3xl opacity-50" />
              <div className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#ff8c42]">
                COMEDY
              </div>
            </div>
            <div className="text-white">BATTLE</div>
          </h1>
          
          <div className="flex items-center justify-center gap-8 my-8">
            <div className="h-px w-20 bg-[#ff6b35]" />
            <div className="font-display text-6xl text-[#ff6b35] tracking-wider">2025</div>
            <div className="h-px w-20 bg-[#ff6b35]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16 max-w-2xl mx-auto"
        >
          <p className="text-xl text-gray-400 leading-relaxed tracking-wide">
            Berani Lucu. Berani Jakarta.
          </p>
          <p className="text-sm text-gray-500 mt-4 tracking-wider uppercase">
            Kompetisi Stand-Up Comedy Terbesar Di Jakarta
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            onClick={scrollToRegister}
            className="group relative overflow-hidden bg-[#ff6b35] text-white px-12 py-4 text-sm tracking-[0.2em] uppercase"
            style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}
          >
            <span className="relative z-10">Daftar Audisi</span>
            <div className="absolute inset-0 bg-[#ff8c42] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </button>
          
          <button
            onClick={() => {
              const element = document.getElementById("about");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-12 py-4 text-sm tracking-[0.2em] uppercase text-[#ff6b35] border border-[#ff6b35] hover:bg-[#ff6b35] hover:text-white transition-all duration-300"
            style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}
          >
            Pelajari Lebih Lanjut
          </button>
        </motion.div>
      </div>
    </section>
  );
}