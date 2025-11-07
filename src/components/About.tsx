import { motion } from "motion/react";
import { Mic2, Users, Trophy, Star } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Mic2,
      title: "Panggung Prestisius",
      description: "Tampil di venue-venue terbaik Jakarta dengan fasilitas profesional",
    },
    {
      icon: Trophy,
      title: "Piala Bergengsi",
      description: "Memperebutkan Piala Gubernur & Wakil Gubernur DKI Jakarta",
    },
    {
      icon: Users,
      title: "Networking Luas",
      description: "Bertemu dengan comedian profesional dan komunitas comedy",
    },
    {
      icon: Star,
      title: "Eksposur Media",
      description: "Promosi di seluruh platform Jakarta Experience Board",
    },
  ];

  return (
    <section id="about" className="min-h-screen bg-[#0a0e27] relative overflow-hidden">
      {/* Diagonal Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1a1f3a] transform skew-x-12 origin-top-right" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
        {/* Section Number */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute left-0 top-32 hidden lg:block"
        >
          <div className="font-display text-[200px] text-[#ff6b35]/5 leading-none">01</div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="sticky top-32">
              <div className="text-sm tracking-[0.3em] text-[#ff6b35] uppercase mb-6">
                / Tentang Kompetisi
              </div>
              
              <h2 className="font-display text-7xl sm:text-8xl text-white leading-[0.9] mb-8 tracking-tighter">
                JAKARTA<br />
                COMEDY<br />
                BATTLE
              </h2>
              
              <div className="w-24 h-1 bg-[#ff6b35] mb-8" />
              
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Jakarta Comedy Battle 2025 adalah ajang kompetisi stand-up comedy terbesar di Jakarta 
                yang memberikan kesempatan bagi para pelawak berbakat untuk menunjukkan kemampuan mereka 
                di panggung profesional.
              </p>
              
              <div className="inline-block border-l-4 border-[#ff6b35] pl-6">
                <div className="text-sm text-gray-500 tracking-wider uppercase mb-2">Dipersembahkan Oleh</div>
                <div className="font-display text-2xl text-[#ff6b35]">Jakarta Experience Board</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <div className="lg:col-span-7 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-[#ff6b35]/0 group-hover:bg-[#ff6b35]/10 transition-colors duration-300" />
                <div className="relative bg-[#1a1f3a] border-l-4 border-[#ff6b35]/30 group-hover:border-[#ff6b35] transition-colors duration-300 p-8 flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#ff6b35]/10 group-hover:bg-[#ff6b35] transition-colors duration-300 flex items-center justify-center">
                      <feature.icon className="text-[#ff6b35] group-hover:text-white transition-colors duration-300" size={28} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-white mb-3 tracking-tight">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                  <div className="flex-shrink-0 font-display text-5xl text-[#ff6b35]/10 group-hover:text-[#ff6b35]/20 transition-colors duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Audisi Online", value: "100%", unit: "Digital" },
            { label: "Venue Profesional", value: "04", unit: "Lokasi" },
            { label: "Tahap Kompetisi", value: "05", unit: "Tahap" },
            { label: "Grand Prize", value: "01", unit: "Piala" },
          ].map((stat, index) => (
            <div key={index} className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6 border border-[#ff6b35]/20 group-hover:border-[#ff6b35]/50 transition-colors duration-300">
                <div className="font-display text-5xl text-[#ff6b35] mb-2">{stat.value}</div>
                <div className="text-xs text-gray-500 tracking-wider uppercase mb-1">{stat.label}</div>
                <div className="text-xs text-[#ff6b35]/60">{stat.unit}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
