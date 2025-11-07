import { motion } from "motion/react";

export function Timeline() {
  const timelineSteps = [
    {
      number: "01",
      title: "Audisi Online",
      description: "Kirim video stand-up comedy terbaik kamu via Google Drive. Tunjukkan bakat dan keunikan materi kamu.",
      date: "Jan — Feb 2025",
    },
    {
      number: "02",
      title: "40 Peserta Terbaik",
      description: "Pengumuman peserta yang lolos ke tahap selanjutnya berdasarkan penilaian dari juri profesional.",
      date: "Maret 2025",
    },
    {
      number: "03",
      title: "20 Semifinalis",
      description: "Tampil live di venue Jakarta dengan juri profesional dan penonton langsung.",
      date: "April 2025",
    },
    {
      number: "04",
      title: "10 Finalis",
      description: "Battle sengit menuju Grand Final. Setiap penampilan akan dinilai dengan ketat.",
      date: "Mei 2025",
    },
    {
      number: "05",
      title: "Grand Final",
      description: "Penentuan Juara 1, 2, 3 dan Juara Favorit Netizen di Balai Sarbini.",
      date: "Juni 2025",
    },
  ];

  return (
    <section id="timeline" className="min-h-screen bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a] relative overflow-hidden py-32">
      {/* Section Number */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="absolute right-0 top-32 hidden lg:block"
      >
        <div className="font-display text-[200px] text-[#ff6b35]/5 leading-none">02</div>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-sm tracking-[0.3em] text-[#ff6b35] uppercase mb-6">
            / Alur Kompetisi
          </div>
          <h2 className="font-display text-7xl sm:text-8xl md:text-9xl text-white leading-[0.9] tracking-tighter">
            TIMELINE
          </h2>
        </motion.div>

        {/* Timeline Items */}
        <div className="space-y-1">
          {timelineSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-[#ff6b35]/0 group-hover:bg-[#ff6b35]/5 transition-colors duration-500" />
              
              {/* Content */}
              <div className="relative grid grid-cols-12 items-center gap-6 p-8 border-t border-[#ff6b35]/10 group-hover:border-[#ff6b35]/30 transition-colors duration-500">
                {/* Number */}
                <div className="col-span-12 sm:col-span-2">
                  <div className="font-display text-6xl sm:text-7xl text-[#ff6b35]/20 group-hover:text-[#ff6b35] transition-colors duration-500">
                    {step.number}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="col-span-12 sm:col-span-6">
                  <h3 className="font-display text-3xl sm:text-4xl text-white mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Date */}
                <div className="col-span-12 sm:col-span-4 text-left sm:text-right">
                  <div className="inline-block sm:block">
                    <div className="text-sm text-gray-500 tracking-widest uppercase mb-2">Timeline</div>
                    <div className="font-display text-xl text-[#ff6b35]">{step.date}</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="col-span-12">
                  <div className="h-px bg-[#ff6b35]/20 overflow-hidden">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-[#ff6b35] origin-left"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 flex flex-col md:flex-row items-center justify-between p-12 border border-[#ff6b35]/20 bg-[#1a1f3a]/50"
        >
          <div className="mb-6 md:mb-0">
            <div className="font-display text-3xl text-white mb-2">Siap Memulai Perjalanan?</div>
            <div className="text-gray-400">5 tahap menuju puncak kejayaan comedy Jakarta</div>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById("register");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#ff6b35] text-white px-12 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#ff8c42] transition-colors duration-300"
            style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}
          >
            Daftar Sekarang
          </button>
        </motion.div>
      </div>
    </section>
  );
}