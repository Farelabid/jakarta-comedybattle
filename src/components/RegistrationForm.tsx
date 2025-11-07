import { useState } from "react";
import { motion } from "motion/react";
import { Send, Check, Mic2 } from "lucide-react";

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    namaLengkap: "",
    namaPanggung: "",
    email: "",
    nomorHP: "",
    kota: "",
    linkVideo: "",
    bio: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setFormData({
        namaLengkap: "",
        namaPanggung: "",
        email: "",
        nomorHP: "",
        kota: "",
        linkVideo: "",
        bio: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="register" className="min-h-screen bg-[#0a0e27] relative overflow-hidden py-16 sm:py-24 md:py-32">
      {/* Diagonal Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-1/3 h-3/4 bg-[#1a1f3a] transform -skew-y-6 origin-bottom-left" />
      </div>

      {/* Decorative mic icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        viewport={{ once: true }}
        className="absolute top-20 right-20 hidden lg:block"
      >
        <Mic2 size={200} className="text-[#ff6b35]" />
      </motion.div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Number */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute right-0 top-20 sm:top-32 hidden lg:block"
        >
          <div className="font-display text-[150px] sm:text-[200px] text-[#ff6b35]/5 leading-none">04</div>
        </motion.div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 sm:mb-20 md:mb-24"
          >
            <div className="text-xs sm:text-sm tracking-[0.3em] text-[#ff6b35] uppercase mb-4 sm:mb-6">
              / Pendaftaran
            </div>
            <h2 className="font-display text-7xl sm:text-8xl md:text-9xl text-white leading-[0.9] tracking-tighter mb-8">
              DAFTAR<br />AUDISI
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Lengkapi formulir di bawah ini dan kirimkan video stand-up comedy terbaik Anda. 
              Pastikan semua informasi yang dimasukkan akurat.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            {/* Form */}
            <div className="lg:col-span-8">
              <div className="bg-[#1a1f3a] border border-[#ff6b35]/20 p-8 lg:p-12">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-24"
                  >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-[#ff6b35] mb-8">
                      <Check className="text-white" size={40} />
                    </div>
                    <h3 className="font-display text-4xl text-white mb-6">
                      PENDAFTARAN<br />BERHASIL
                    </h3>
                    <p className="text-gray-400 text-lg">
                      Terima kasih! Data Anda telah berhasil dikirim.
                      <br />
                      Tim kami akan menghubungi Anda segera.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs tracking-[0.2em] text-[rgb(218,218,218)] uppercase mb-3">
                          Nama Lengkap <span className="text-[#ff6b35]">*</span>
                        </label>
                        <input
                          type="text"
                          name="namaLengkap"
                          value={formData.namaLengkap}
                          onChange={handleChange}
                          required
                          className="w-full px-0 py-3 bg-transparent border-b-2 border-[#ff6b35]/30 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff6b35] transition-colors"
                          placeholder="Nama lengkap Anda"
                        />
                      </div>

                      <div>
                        <label className="block text-xs tracking-[0.2em] text-[rgb(218,218,218)] uppercase mb-3">
                          Nama Panggung
                        </label>
                        <input
                          type="text"
                          name="namaPanggung"
                          value={formData.namaPanggung}
                          onChange={handleChange}
                          className="w-full px-0 py-3 bg-transparent border-b-2 border-[#ff6b35]/30 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff6b35] transition-colors"
                          placeholder="Opsional"
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs tracking-[0.2em] text-[rgb(218,218,218)] uppercase mb-3">
                          Email <span className="text-[#ff6b35]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-0 py-3 bg-transparent border-b-2 border-[#ff6b35]/30 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff6b35] transition-colors"
                          placeholder="email@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-xs tracking-[0.2em] text-[rgb(218,218,218)] uppercase mb-3">
                          Nomor HP <span className="text-[#ff6b35]">*</span>
                        </label>
                        <input
                          type="tel"
                          name="nomorHP"
                          value={formData.nomorHP}
                          onChange={handleChange}
                          required
                          className="w-full px-0 py-3 bg-transparent border-b-2 border-[#ff6b35]/30 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff6b35] transition-colors"
                          placeholder="08xxxxxxxxxx"
                        />
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div>
                      <label className="block text-xs tracking-[0.2em] text-[rgb(218,218,218)] uppercase mb-3">
                        Kota Domisili <span className="text-[#ff6b35]">*</span>
                      </label>
                      <input
                        type="text"
                        name="kota"
                        value={formData.kota}
                        onChange={handleChange}
                        required
                        className="w-full px-0 py-3 bg-transparent border-b-2 border-[#ff6b35]/30 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff6b35] transition-colors"
                        placeholder="Jakarta, Bekasi, Tangerang, dll."
                      />
                    </div>

                    {/* Row 4 */}
                    <div>
                      <label className="block text-xs tracking-[0.2em] text-[rgb(218,218,218)] uppercase mb-3">
                        Link Video Google Drive <span className="text-[#ff6b35]">*</span>
                      </label>
                      <input
                        type="url"
                        name="linkVideo"
                        value={formData.linkVideo}
                        onChange={handleChange}
                        required
                        className="w-full px-0 py-3 bg-transparent border-b-2 border-[#ff6b35]/30 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff6b35] transition-colors"
                        placeholder="https://drive.google.com/..."
                      />
                      <p className="text-gray-600 text-xs mt-3">
                        Pastikan link dapat diakses oleh siapa saja (public access)
                      </p>
                    </div>

                    {/* Row 5 */}
                    <div>
                      <label className="block text-xs tracking-[0.2em] text-[rgb(218,218,218)] uppercase mb-3">
                        Bio Singkat <span className="text-[#ff6b35]">*</span>
                      </label>
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-0 py-3 bg-transparent border-b-2 border-[#ff6b35]/30 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff6b35] transition-colors resize-none"
                        placeholder="Ceritakan tentang diri Anda dan pengalaman comedy (maksimal 500 karakter)"
                        maxLength={500}
                      />
                      <p className="text-gray-600 text-xs mt-3 text-right">
                        {formData.bio.length}/500 karakter
                      </p>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-8">
                      <button
                        type="submit"
                        className="group relative w-full bg-[#ff6b35] text-white px-8 py-5 flex items-center justify-center gap-3 overflow-hidden"
                        style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}
                      >
                        <span className="relative z-10 flex items-center gap-3 text-sm tracking-[0.2em] uppercase">
                          <span>Kirim Pendaftaran</span>
                          <Send size={18} />
                        </span>
                        <div className="absolute inset-0 bg-[#ff8c42] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                {/* Requirements */}
                <div className="bg-[#1a1f3a] border-l-4 border-[#ff6b35] p-6 sm:p-8">
                  <h4 className="font-display text-xl sm:text-2xl text-white mb-4 sm:mb-6 tracking-tight">
                    Persyaratan Video
                  </h4>
                  <ul className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 border-2 border-[#ff6b35] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-[#ff6b35]" />
                      </div>
                      <span>Durasi video 3-5 menit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 border-2 border-[#ffd93d] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-[#ffd93d]" />
                      </div>
                      <span>Materi stand-up comedy original</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 border-2 border-[#a855f7] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-[#a855f7]" />
                      </div>
                      <span>Kualitas video minimal HD (720p)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 border-2 border-[#ff6b35] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-[#ff6b35]" />
                      </div>
                      <span>Audio jelas dan tidak pecah</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 border-2 border-[#ffd93d] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-[#ffd93d]" />
                      </div>
                      <span>Upload ke Google Drive (public)</span>
                    </li>
                  </ul>
                </div>

                {/* Contact */}
                <div className="bg-[#ff6b35]/10 p-6 sm:p-8">
                  <h4 className="font-display text-xl text-white mb-4 tracking-tight">
                    Butuh Bantuan?
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Hubungi tim kami jika Anda memiliki pertanyaan
                  </p>
                  <a href="mailto:info@jxb.jakarta.go.id" className="text-[#ff6b35] text-sm tracking-wider uppercase hover:text-[#ff8c42] transition-colors">
                    info@jxb.jakarta.go.id
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}