import { motion } from "framer-motion";
import { Mic2, Users, Trophy, Star, Calendar, MapPin } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Mic2,
      title: "Panggung Prestisius",
      description: "Tampil di venue terbaik Jakarta dengan fasilitas profesional, di Taman Ismail Marzuki untuk Grand Final",
      color: "#ff6b35"
    },
    {
      icon: Trophy,
      title: "Piala Bergengsi",
      description: "Memperebutkan Piala Gubernur & Wakil Gubernur DKI Jakarta dengan hadiah menarik",
      color: "#ffd93d"
    },
    {
      icon: Users,
      title: "Networking Luas",
      description: "Bertemu dengan comedian profesional dan komunitas comedy Jakarta",
      color: "#a855f7"
    },
    {
      icon: Star,
      title: "Eksposur Media",
      description: "Promosi di seluruh platform Jakarta Experience Board dan media partner",
      color: "#ff6b35"
    },
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-[#1a1438] to-[#0a0e27] relative overflow-hidden py-16 sm:py-24 md:py-32">
      {/* Decorative Circles */}
      <div className="absolute top-20 left-10 w-32 h-32 sm:w-40 sm:h-40 border-8 border-[#ff6b35] rounded-full opacity-10 hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-60 sm:h-60 border-8 border-[#ffd93d] rounded-full opacity-10 hidden lg:block" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="lg:sticky lg:top-32">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block mb-6 sm:mb-8"
              >
                <span className="px-4 py-2 bg-[#ff6b35] text-white text-xs sm:text-sm tracking-[0.3em] uppercase transform -rotate-2 inline-block">
                  / Tentang Kompetisi
                </span>
              </motion.div>
              
              <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter mb-6 sm:mb-8">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="block text-white"
                >
                  JAKARTA
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#ffd93d] transform rotate-2 inline-block"
                >
                  COMEDY
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="block text-white"
                >
                  BATTLE
                </motion.span>
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Jakarta Comedy Battle 2025 adalah ajang kompetisi stand-up comedy terbesar di Jakarta 
                  yang memberikan kesempatan bagi para calon komika berbakat untuk menunjukkan kemampuan mereka 
                  di panggung profesional.
                </p>

                {/* Tema Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <div className="border-l-4 border-[#ff6b35] pl-4 sm:pl-6 bg-[#ff6b35]/10 py-3 sm:py-4">
                    <div className="text-xs sm:text-sm text-[#ff6b35] tracking-wider uppercase mb-1">Tema Audisi</div>
                    <div className="font-display text-xl sm:text-2xl text-white">"Betah Tinggal di Jakarta"</div>
                  </div>

                  <div className="border-l-4 border-[#ffd93d] pl-4 sm:pl-6 bg-[#ffd93d]/10 py-3 sm:py-4">
                    <div className="text-xs sm:text-sm text-[#ffd93d] tracking-wider uppercase mb-1">Tema Grand Final</div>
                    <div className="font-display text-xl sm:text-2xl text-white">"Jakarta: Panggung Segala Cerita"</div>
                  </div>
                </motion.div>

                {/* Grand Final Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-[#a855f7] pl-4 sm:pl-6 bg-[#a855f7]/10 py-3 sm:py-4"
                >
                  <div className="text-xs sm:text-sm text-gray-400 tracking-wider uppercase mb-2">Grand Final</div>
                  <div className="flex items-center gap-2 text-white text-base sm:text-lg mb-2">
                    <Calendar size={18} className="text-[#a855f7]" />
                    <span>Jumat, 19 Desember 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-white text-base sm:text-lg">
                    <MapPin size={18} className="text-[#a855f7]" />
                    <span>Taman Ismail Marzuki</span>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 10 }}
                  className="inline-block border-l-4 border-[#ffd93d] pl-4 sm:pl-6 bg-[#ffd93d]/10 py-3 sm:py-4"
                >
                  <div className="text-xs sm:text-sm text-gray-400 tracking-wider uppercase mb-1 sm:mb-2">Dipersembahkan Oleh</div>
                  <div className="font-display text-2xl sm:text-3xl text-[#ffd93d] pt-[0px] pr-[26px] pb-[0px] pl-[0px]">Jakarta Experience Board</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: -10, rotate: -1 }}
                className="group relative"
              >
                <div 
                  className="absolute -inset-1 sm:-inset-2 opacity-0 group-hover:opacity-50 blur-xl transition-all duration-300" 
                  style={{ background: `linear-gradient(to right, ${feature.color}, #ffd93d)` }}
                />
                <div className="relative bg-[#1a1438] border-2 sm:border-4 border-transparent group-hover:border-[#ffd93d] transition-all duration-300 p-4 sm:p-6 md:p-8 flex items-start gap-4 sm:gap-6">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0"
                  >
                    <div 
                      className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full"
                      style={{ backgroundColor: `${feature.color}20` }}
                    >
                      <feature.icon style={{ color: feature.color }} className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl sm:text-3xl text-white mb-2 sm:mb-3 tracking-tight">{feature.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats with Fun Design */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { label: "Audisi Online", value: "100%", color: "#ff6b35" },
            { label: "Venue Profesional", value: "04", color: "#ffd93d" },
            { label: "Tahap Kompetisi", value: "05", color: "#a855f7" },
            { label: "Grand Prize", value: "01", color: "#ff6b35" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, rotate: [0, 5, -5, 0] }}
              className="relative"
            >
              <div 
                className="absolute -inset-1 blur-lg opacity-50"
                style={{ backgroundColor: stat.color }}
              />
              <div className="relative bg-[#0a0e27] border-2 sm:border-4 p-4 sm:p-6 text-center" style={{ borderColor: stat.color }}>
                <div className="font-display text-3xl sm:text-4xl md:text-5xl mb-1 sm:mb-2" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-xs text-white tracking-wider uppercase">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}