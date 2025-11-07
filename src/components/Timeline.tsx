import { motion } from "framer-motion";

export function Timeline() {
  const timelineSteps = [
    {
      number: "01",
      title: "Audisi Online",
      description: "Kirim video stand-up comedy terbaik kamu via Google Drive. Tunjukkan bakat dan keunikan materi kamu.",
      date: "Nov 2025",
      color: "#ff6b35"
    },
    {
      number: "02",
      title: "40 Peserta Terbaik",
      description: "Pengumuman peserta yang lolos ke tahap selanjutnya berdasarkan penilaian dari juri profesional.",
      date: "Awal Des 2025",
      color: "#ffd93d"
    },
    {
      number: "03",
      title: "20 Semifinalis",
      description: "Tampil live di venue Jakarta dengan juri profesional dan penonton langsung.",
      date: "Des 2025",
      color: "#a855f7"
    },
    {
      number: "04",
      title: "10 Finalis",
      description: "Battle sengit menuju Grand Final. Setiap penampilan akan dinilai dengan ketat.",
      date: "Des 2025",
      color: "#ff6b35"
    },
    {
      number: "05",
      title: "Grand Final",
      description: "Penentuan Juara 1, 2, 3 dan Juara Favorit Netizen di Balai Sarbini.",
      date: "Des 2025",
      color: "#ffd93d"
    },
  ];

  return (
    <section id="timeline" className="min-h-screen bg-[#0a0e27] relative overflow-hidden py-16 sm:py-24 md:py-32">
      {/* Colorful Background Shapes */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-[#a855f7] to-[#ff6b35] opacity-10 rounded-full blur-3xl"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 md:mb-24 text-center"
        >
          <motion.div
            whileHover={{ rotate: 5 }}
            className="inline-block mb-6 sm:mb-8"
          >
            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#ff6b35] to-[#ffd93d] text-[#0a0e27] text-xs sm:text-sm tracking-[0.3em] uppercase transform -rotate-2 inline-block">
              / Alur Kompetisi
            </span>
          </motion.div>
          <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffd93d] to-white leading-[0.9] tracking-tighter">
            TIMELINE
          </h2>
        </motion.div>

        {/* Timeline Items - Zigzag Layout */}
        <div className="space-y-12 sm:space-y-16">
          {timelineSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Number Badge */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="flex-shrink-0"
              >
                <div 
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center border-4 sm:border-6 md:border-8"
                  style={{ 
                    borderColor: step.color,
                    background: `linear-gradient(135deg, ${step.color}20, transparent)`
                  }}
                >
                  <span className="font-display text-4xl sm:text-5xl md:text-6xl" style={{ color: step.color }}>
                    {step.number}
                  </span>
                </div>
              </motion.div>

              {/* Content Card */}
              <motion.div
                whileHover={{ x: index % 2 === 0 ? 10 : -10, rotate: index % 2 === 0 ? 2 : -2 }}
                className="flex-1 relative group w-full"
              >
                <div 
                  className="absolute -inset-1 sm:-inset-2 opacity-0 group-hover:opacity-50 blur-xl transition-all duration-300"
                  style={{ background: `linear-gradient(to right, ${step.color}, #ffd93d)` }}
                />
                <div className="relative bg-[#1a1438] border-2 sm:border-4 p-4 sm:p-6 md:p-8" style={{ borderColor: step.color }}>
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
                      {step.title}
                    </h3>
                    <div 
                      className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm tracking-wider whitespace-nowrap"
                      style={{ backgroundColor: `${step.color}20`, color: step.color }}
                    >
                      {step.date}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="mt-16 sm:mt-24 md:mt-32 relative group cursor-pointer"
          onClick={() => {
            const element = document.getElementById("register");
            if (element) element.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-[#ff6b35] via-[#ffd93d] to-[#a855f7] opacity-50 blur-xl group-hover:opacity-75 transition-opacity" />
          <div className="relative bg-[#1a1438] border-2 sm:border-4 border-[#ffd93d] p-8 sm:p-10 md:p-12 text-center transform group-hover:rotate-1 transition-transform">
            <div className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#ffd93d] mb-3 sm:mb-4">
              SIAP BERAKSI?
            </div>
            <div className="text-gray-300 text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
              5 tahap menuju puncak kejayaan comedy Jakarta
            </div>
            <div className="inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-gradient-to-r from-[#ff6b35] to-[#ffd93d] text-[#0a0e27] text-sm sm:text-base tracking-[0.2em] uppercase transform -rotate-1">
              Daftar Sekarang →
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}