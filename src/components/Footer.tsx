import { motion } from "motion/react";
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
      answer: "Siapa saja yang berusia 18 tahun ke atas dan memiliki minat dalam stand-up comedy.",
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
    <footer id="faq" className="bg-[#0a0e27] border-t border-[#ff6b35]/20">
      {/* FAQ Section */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
        {/* Section Number */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute left-0 hidden lg:block"
        >
          <div className="font-display text-[200px] text-[#ff6b35]/5 leading-none">05</div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-sm tracking-[0.3em] text-[#ff6b35] uppercase mb-6">
            / Pertanyaan Umum
          </div>
          <h2 className="font-display text-7xl sm:text-8xl md:text-9xl text-white leading-[0.9] tracking-tighter">
            FAQ
          </h2>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-[#ff6b35]/0 group-hover:bg-[#ff6b35]/5 transition-colors duration-500" />
              <div className="relative bg-[#1a1f3a] border border-[#ff6b35]/10 group-hover:border-[#ff6b35]/30 transition-colors duration-500 p-8">
                <div className="flex items-start gap-6">
                  <div className="font-display text-4xl text-[#ff6b35]/30 group-hover:text-[#ff6b35] transition-colors duration-500 flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-white text-xl mb-4">{faq.question}</h3>
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#ff6b35]/20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Logo & Info */}
            <div className="lg:col-span-5">
              <div className="font-display text-6xl text-white tracking-tighter leading-none mb-4">
                JCB<span className="text-[#ff6b35]">.</span>
              </div>
              <div className="font-display text-xs text-[#ff6b35] tracking-[0.3em] mb-6">2025</div>
              <p className="text-gray-500 leading-relaxed mb-8">
                Kompetisi Stand-Up Comedy terbesar di Jakarta memperebutkan Piala Gubernur & Wakil Gubernur DKI Jakarta
              </p>
              <div className="text-xs text-gray-600 tracking-wider uppercase">
                Dipersembahkan oleh Jakarta Experience Board
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <div className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-6">Quick Links</div>
              <ul className="space-y-3">
                {["Tentang", "Timeline", "Venue", "FAQ", "Daftar"].map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => {
                        const element = document.getElementById(link.toLowerCase());
                        if (element) element.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-gray-400 hover:text-[#ff6b35] transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="lg:col-span-4">
              <div className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-6">Follow Us</div>
              <div className="flex items-center gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1a1f3a] border border-[#ff6b35]/20 hover:border-[#ff6b35] flex items-center justify-center text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
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
          <div className="mt-16 pt-12 border-t border-[#ff6b35]/10 text-center">
            <div className="font-display text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] tracking-wide">
              Berani Lucu. Berani Jakarta.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
