import { motion } from "framer-motion";

export function HeroStats() {
  const stats = [
    { number: "100%", label: "Audisi", sublabel: "Online" },
    { number: "5", label: "Tahap", sublabel: "Kompetisi" },
    { number: "4", label: "Venue", sublabel: "Prestisius" },
    { number: "1", label: "Juara", sublabel: "Terbaik" },
  ];

  return (
    <section className="relative bg-[#0a0e27] py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Wavy Divider Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12 sm:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="#1a1438" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Fun Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block px-4"
          >
            <div className="relative">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#ff6b35] via-[#ffd93d] to-[#a855f7] opacity-20 blur-2xl" />
              <p className="relative text-xl sm:text-2xl md:text-3xl font-display text-white transform -rotate-1 bg-[#1a1438] px-6 sm:px-8 py-3 sm:py-4 border-4 border-[#ffd93d]">
                "TIMING IS EVERYTHING"
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, rotate: 2 }}
              className="group relative"
            >
              {/* Background Gradient */}
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-[#ff6b35] via-[#ffd93d] to-[#a855f7] opacity-0 group-hover:opacity-30 blur-xl transition-all duration-300" />
              
              {/* Card */}
              <div className="relative bg-[#1a1438] border-2 sm:border-4 border-[#ff6b35] p-4 sm:p-6 md:p-8 text-center transform group-hover:border-[#ffd93d] transition-all duration-300">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                  className="font-display text-4xl sm:text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#ffd93d] mb-1 sm:mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-white text-xs sm:text-sm tracking-wider uppercase mb-1">{stat.label}</div>
                <div className="text-gray-400 text-xs">{stat.sublabel}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 w-16 h-16 sm:w-20 sm:h-20 border-4 border-[#a855f7] opacity-20 hidden md:block"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-10 w-12 h-12 sm:w-16 sm:h-16 bg-[#ffd93d] opacity-20 rounded-full hidden md:block"
        />
      </div>

      {/* Wavy Divider Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-12 sm:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="#1a1438" />
        </svg>
      </div>
    </section>
  );
}