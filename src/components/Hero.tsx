import { motion } from "motion/react";
import { ArrowDown, Sparkles, Zap } from "lucide-react";
import { Mic2, Laugh } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1438] to-[#0a0e27] overflow-hidden flex items-center justify-center">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #ff6b35 1px, transparent 1px),
            linear-gradient(180deg, #ff6b35 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Colorful Blob Backgrounds */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 -left-20 w-[600px] h-[600px] bg-[#ff6b35] rounded-full blur-[150px] opacity-20"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-[#ffd93d] rounded-full blur-[150px] opacity-20"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#a855f7] rounded-full blur-[150px] opacity-15"
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-32 sm:py-40 md:py-48">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-12"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-[#ffd93d]" size={24} />
            </motion.div>
            <span className="px-6 py-3 bg-gradient-to-r from-[#ff6b35] to-[#ffd93d] text-[#0a0e27] tracking-[0.3em] uppercase inline-block transform -rotate-2">
              Jakarta Comedy Battle 2025
            </span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="text-[#a855f7]" size={24} />
            </motion.div>
          </motion.div>

          {/* Main Title with Overlapping Style */}
          <div className="relative mb-12 md:mb-16 overflow-visible px-4 sm:px-0">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-[20vw] sm:text-[16vw] md:text-[12vw] lg:text-[10vw] xl:text-[9rem] leading-[0.9] tracking-tighter overflow-visible"
            >
              <span className="block text-white">BERANI</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] via-[#ffd93d] to-[#a855f7] transform -rotate-2 inline-block">
                LUCU
              </span>
              <span className="block text-white">BERANI</span>
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] via-[#ff6b35] to-[#ffd93d] bg-[length:200%_auto] transform rotate-2 inline-block"
              >
                JAKARTA
              </motion.span>
            </motion.h1>

            {/* Fun Geometric Shapes */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-8 -right-4 sm:-right-5 md:right-10 lg:right-20 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-[#ffd93d] flex items-center justify-center transform rotate-12"
            >
              <Mic2 className="text-[#0a0e27] w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14" />
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0], y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute -bottom-8 -left-4 sm:-left-5 md:left-10 lg:left-20 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#ff6b35] rounded-full flex items-center justify-center transform -rotate-12"
            >
              <Laugh className="text-white w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12 max-w-3xl mx-auto px-4"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
              Kompetisi Stand-Up Comedy Terbesar di Jakarta
              <br />
              <span className="text-[#ffd93d]">Piala Gubernur & Wakil Gubernur DKI Jakarta</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById("register");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative px-10 py-5 bg-gradient-to-r from-[#ff6b35] to-[#ffd93d] text-[#0a0e27] tracking-[0.2em] uppercase overflow-hidden transform -rotate-1"
            >
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 flex items-center gap-3">
                Daftar Sekarang
                <Zap size={20} />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById("about");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-10 py-5 border-2 border-white text-white tracking-[0.2em] uppercase hover:bg-white hover:text-[#0a0e27] transition-colors transform rotate-1"
            >
              Pelajari Lebih Lanjut
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-gray-500 text-sm tracking-widest uppercase">Scroll</span>
            <ArrowDown className="text-[#ff6b35]" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}