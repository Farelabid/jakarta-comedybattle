import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Venue() {
  const venues = [
    {
      name: "Balai Sarbini",
      location: "Plaza Semanggi, Jakarta Selatan",
      description: "Venue prestisius untuk Grand Final dengan kapasitas besar dan fasilitas premium",
      image: "https://images.unsplash.com/photo-1639408396873-4a284924bc3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwaGFsbCUyMHN0YWdlfGVufDF8fHx8MTc2MjQ4NzYzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      mapsUrl: "https://maps.google.com/?q=Balai+Sarbini+Jakarta",
    },
    {
      name: "Taman Ismail Marzuki",
      location: "Cikini, Jakarta Pusat",
      description: "Pusat kesenian legendaris Jakarta dengan atmosfer artistik yang kental",
      image: "https://images.unsplash.com/photo-1722321974501-059dff03e970?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwYXVkaXRvcml1bSUyMGxpZ2h0c3xlbnwxfHx8fDE3NjI0ODc2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      mapsUrl: "https://maps.google.com/?q=Taman+Ismail+Marzuki+Jakarta",
    },
    {
      name: "Gedung Kesenian Jakarta",
      location: "Sawah Besar, Jakarta Pusat",
      description: "Bangunan bersejarah dengan akustik sempurna untuk pertunjukan comedy",
      image: "https://images.unsplash.com/photo-1759477274012-263d469f0e16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2ZW51ZSUyMHN0YWdlfGVufDF8fHx8MTc2MjQ4NzYzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      mapsUrl: "https://maps.google.com/?q=Gedung+Kesenian+Jakarta",
    },
    {
      name: "Post Bloc",
      location: "Kemang, Jakarta Selatan",
      description: "Venue modern dan trendy di jantung kawasan kreatif Jakarta",
      image: "https://images.unsplash.com/photo-1680422252857-3b13987bd7b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBjZW50ZXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjI0ODc2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      mapsUrl: "https://maps.google.com/?q=Post+Bloc+Kemang+Jakarta",
    },
  ];

  return (
    <section id="venue" className="min-h-screen bg-gradient-to-br from-[#1a1438] to-[#0a0e27] relative overflow-hidden py-16 sm:py-24 md:py-32">
      {/* Decorative Circle */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-10 w-64 h-64 sm:w-80 sm:h-80 border-8 border-[#ffd93d] rounded-full opacity-5 hidden lg:block"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 md:mb-24"
        >
          <motion.div
            whileHover={{ rotate: 5 }}
            className="inline-block mb-6 sm:mb-8"
          >
            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#a855f7] to-[#ff6b35] text-white text-xs sm:text-sm tracking-[0.3em] uppercase transform -rotate-2 inline-block">
              / Lokasi Kompetisi
            </span>
          </motion.div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
            <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-white via-[#a855f7] to-white leading-[0.9] tracking-tighter">
              VENUE
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-md">
              Empat venue prestisius di Jakarta yang akan menjadi saksi perjalanan para peserta
            </p>
          </div>
        </motion.div>

        {/* Venue Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {venues.map((venue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, rotate: index % 2 === 0 ? 1 : -1 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#ff6b35] via-[#ffd93d] to-[#a855f7] opacity-0 group-hover:opacity-30 blur-xl transition-all duration-300" />
              
              {/* Card */}
              <div className="relative overflow-hidden bg-[#1a1438] border-2 sm:border-4 border-[#ff6b35] group-hover:border-[#ffd93d] transition-colors duration-500">
                {/* Image */}
                <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
                  <ImageWithFallback
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1438] via-[#1a1438]/50 to-transparent" />
                  
                  {/* Number Overlay */}
                  <div className="absolute top-4 sm:top-8 left-4 sm:left-8">
                    <div className="font-display text-6xl sm:text-7xl md:text-8xl text-white/10 group-hover:text-[#ffd93d]/30 transition-colors duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8">
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4 tracking-tight">
                    {venue.name}
                  </h3>
                  
                  <div className="flex items-start gap-2 sm:gap-3 text-gray-500 mb-4 sm:mb-6">
                    <MapPin size={16} className="flex-shrink-0 mt-1 text-[#ffd93d] sm:w-[18px] sm:h-[18px]" />
                    <span className="text-sm sm:text-base">{venue.location}</span>
                  </div>

                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                    {venue.description}
                  </p>

                  <a
                    href={venue.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 border-2 border-[#ffd93d] text-[#ffd93d] hover:bg-[#ffd93d] hover:text-[#0a0e27] transition-all group/link"
                  >
                    <span className="text-xs sm:text-sm tracking-wider uppercase">Lihat Lokasi</span>
                    <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}