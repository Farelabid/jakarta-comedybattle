import { motion } from "framer-motion";
import { Instagram, Youtube, Twitter, Mail } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", url: "#" },
    { icon: Youtube, label: "YouTube", url: "#" },
    { icon: Twitter, label: "Twitter", url: "#" },
    { icon: Mail, label: "Email", url: "mailto:info@jxb.jakarta.go.id" },
  ];

  const faqs = [
    {
      question: "Siapa yang dapat mendaftar?",
      answer: "Siapa saja yang berusia 17-35 tahun dan memiliki minat dalam stand-up comedy.",
    },
    {
      question: "Apakah ada biaya pendaftaran?",
      answer: "Tidak, pendaftaran Jakarta Comedy Battle 2025 sepenuhnya gratis.",
    },
    {
      question: "Bagaimana proses seleksi?",
      answer: "Video Anda akan dinilai oleh juri profesional. 40 peserta terbaik akan diumumkan.",
    },
    {
      question: "Apa hadiah untuk pemenang?",
      answer: "Piala Gubernur & Wakil Gubernur DKI Jakarta, uang tunai, dan kesempatan berkarir.",
    },
  ];

  return (
    <footer id="faq" className="bg-[#0a0e27] border-t-4 border-[#ff6b35]">
      {/* FAQ Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24 md:py-32">
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
            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#ffd93d] to-[#a855f7] text-[#0a0e27] text-xs sm:text-sm tracking-[0.3em] uppercase transform -rotate-2 inline-block">
              / Pertanyaan Umum
            </span>
          </motion.div>
          <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffd93d] to-white leading-[0.9] tracking-tighter">
            FAQ
          </h2>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, rotate: index % 2 === 0 ? 1 : -1 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-[#ff6b35] via-[#ffd93d] to-[#a855f7] opacity-0 group-hover:opacity-30 blur-xl transition-all duration-300" />
              <div className="relative bg-[#1a1438] border-2 sm:border-4 border-[#ff6b35] group-hover:border-[#ffd93d] transition-colors duration-500 p-4 sm:p-6 md:p-8">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="font-display text-3xl sm:text-4xl text-[#ff6b35]/30 group-hover:text-[#ffd93d] transition-colors duration-500 flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-white text-base sm:text-lg md:text-xl mb-3 sm:mb-4">{faq.question}</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t-2 border-[#ff6b35]/20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            {/* Logo & Info */}
            <div className="lg:col-span-5">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <div className="font-display text-5xl sm:text-6xl text-white tracking-tighter leading-none mb-2 sm:mb-4">
                  JCB<span className="text-[#ff6b35]">.</span>
                </div>
                <div className="font-display text-xs text-[#ff6b35] tracking-[0.3em] mb-4 sm:mb-6">2025</div>
              </motion.div>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                Kompetisi Stand-Up Comedy terbesar di Jakarta memperebutkan Piala Gubernur & Wakil Gubernur DKI Jakarta
              </p>
              <div className="inline-block px-4 py-2 border-l-4 border-[#ffd93d] bg-[#ffd93d]/10">
                <div className="text-xs text-gray-600 tracking-wider uppercase">
                  Dipersembahkan oleh
                </div>
                <div className="text-sm text-[#ffd93d] tracking-wide">
                  Jakarta Experience Board
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <div className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4 sm:mb-6">Quick Links</div>
              <ul className="space-y-2 sm:space-y-3">
                {["Tentang", "Timeline", "Venue", "FAQ", "Daftar"].map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => {
                        const element = document.getElementById(link.toLowerCase());
                        if (element) element.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-gray-400 hover:text-[#ffd93d] transition-colors text-sm sm:text-base flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-[#ffd93d] group-hover:w-4 transition-all" />
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="lg:col-span-4">
              <div className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4 sm:mb-6">Follow Us</div>
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1a1438] border-2 border-[#ff6b35] hover:border-[#ffd93d] flex items-center justify-center text-[#ff6b35] hover:bg-gradient-to-r hover:from-[#ff6b35] hover:to-[#ffd93d] hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </motion.a>
                ))}
              </div>
              <div className="text-xs text-gray-600">
                © 2025 Jakarta Experience Board.
                <br />
                All rights reserved.
              </div>
            </div>
          </div>

          {/* Bottom Tagline */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t-2 border-[#ff6b35]/10 text-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 border-4 border-[#ffd93d] bg-[#ffd93d]/10"
            >
              <div className="font-display text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] via-[#ffd93d] to-[#a855f7] tracking-wide">
                Berani Lucu. Berani Jakarta.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}