import { motion } from "motion/react";

export function HeroStats() {
  return (
    <section className="relative bg-[#0a0e27] py-16 md:py-20 border-t border-[#ff6b35]/20">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            { number: "40", label: "Peserta Terbaik" },
            { number: "20", label: "Semifinalis" },
            { number: "10", label: "Finalis" },
            { number: "01", label: "Juara" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-[#ff6b35]/10 transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
              <div className="relative bg-[#1a1f3a] p-6 md:p-8 border border-[#ff6b35]/20">
                <div className="font-display text-4xl md:text-5xl text-[#ff6b35] mb-2">{stat.number}</div>
                <div className="text-xs text-gray-500 tracking-widest uppercase">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
