import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Venue() {
  // Data venue disesuaikan dengan PDF Page 12
  const venues = [
    {
      name: "Balai Sarbini",
      location: "Plaza Semanggi, Jakarta Selatan",
      description: "Venue prestisius untuk Grand Final dengan kapasitas besar dan fasilitas premium.",
      image: "https://images.unsplash.com/photo-1639408396873-4a284924bc3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwaGFsbCUyMHN0YWdlfGVufDF8fHx8MTc2MjQ4NzYzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      mapsUrl: "https://maps.google.com/?q=Balai+Sarbini+Jakarta",
    },
    {
      name: "Taman Ismail Marzuki",
      location: "Cikini, Jakarta Pusat",
      description: "Pusat kesenian legendaris Jakarta dengan atmosfer artistik yang kental.",
      image: "https://images.unsplash.com/photo-1722321974501-059dff03e970?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwYXVkaXRvcml1bSUyMGxpZ2h0c3xlbnwxfHx8fDE3NjI0ODc2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      mapsUrl: "https://maps.google.com/?q=Taman+Ismail+Marzuki+Jakarta",
    },
    {
      name: "Post Bloc",
      location: "Sawah Besar, Jakarta Pusat", // Lokasi di PDF adalah Post Bloc, bukan Kemang. Dan urutannya ke-3
      description: "Ruang kreatif publik yang diadaptasi dari gedung bersejarah.",
      image: "https://images.unsplash.com/photo-1680422252857-3b13987bd7b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBjZW50ZXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjI0ODc2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      mapsUrl: "https://maps.google.com/?q=Post+Bloc+Jakarta",
    },
    {
      name: "Gedung Kesenian Jakarta",
      location: "Sawah Besar, Jakarta Pusat",
      description: "Bangunan bersejarah dengan akustik sempurna untuk pertunjukan.",
      image: "https://images.unsplash.com/photo-1759477274012-263d469f0e16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2ZW51ZSUyMHN0YWdlfGVufDF8fHx8MTc2MjQ4NzYzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      mapsUrl: "https://maps.google.com/?q=Gedung+Kesenian+Jakarta",
    },
  ];

  return (
    <section id="venue" className="min-h-screen bg-[#1a1f3a] relative overflow-hidden py-32">
      {/* Section Number */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="absolute left-0 top-32 hidden lg:block"
      >
        <div className="font-display text-[200px] text-[#ff6b35]/5 leading-none">03</div>
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
            / Lokasi Kompetisi
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="font-display text-7xl sm:text-8xl md:text-9xl text-white leading-[0.9] tracking-tighter">
              VENUE
            </h2>
            <p className="text-gray-400 max-w-md">
              Empat venue prestisius di Jakarta yang akan menjadi saksi perjalanan para peserta.
            </p>
          </div>
        </motion.div>

        {/* Venue Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {venues.map((venue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative overflow-hidden bg-[#0a0e27] border border-[#ff6b35]/20 group-hover:border-[#ff6b35]/50 transition-colors duration-500">
                {/* Image */}
                <div className="relative h-96 overflow-hidden">
                  <ImageWithFallback
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/50 to-transparent" />
                  
                  {/* Number Overlay */}
                  <div className="absolute top-8 left-8">
                    <div className="font-display text-8xl text-white/10 group-hover:text-[#ff6b35]/30 transition-colors duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-display text-4xl text-white mb-4 tracking-tight">
                    {venue.name}
                  </h3>
                  
                  <div className="flex items-start gap-3 text-gray-500 mb-6">
                    <MapPin size={18} className="flex-shrink-0 mt-1 text-[#ff6b35]" />
                    <span>{venue.location}</span>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-8">
                    {venue.description}
                  </p>

                  <a
                    href={venue.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-[#ff6b35] hover:text-[#ff8c42] transition-colors group/link"
                  >
                    <span className="text-sm tracking-wider uppercase">Lihat Lokasi</span>
                    <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
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