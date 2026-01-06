export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-[#f9e2af]/80">
      {/* HEADER HALAMAN */}
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.5em] text-[#d4af37]">Legal Document</h2>
        <h1 className="text-4xl md:text-5xl font-black text-[#f9e2af] uppercase tracking-tighter">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm opacity-50 uppercase tracking-widest">Terakhir Diperbarui: 5 Januari 2026</p>
        <div className="mx-auto mt-6 h-[1px] w-20 bg-[#d4af37] opacity-40"></div>
      </div>

      {/* ISI KONTEN */}
      <div className="space-y-12 text-sm leading-loose tracking-wide md:text-base">
        <section>
          <h3 className="mb-4 text-lg font-bold text-[#d4af37] uppercase tracking-widest">1. Pendahuluan</h3>
          <p>
            Selamat datang di TUKA Official Store. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan menjaga informasi Anda saat Anda menggunakan layanan SaaS kami.
          </p>
        </section>

        <section>
          <h3 className="mb-4 text-lg font-bold text-[#d4af37] uppercase tracking-widest">2. Informasi yang Kami Kumpulkan</h3>
          <p>
            Kami mengumpulkan informasi yang Anda berikan secara langsung saat menggunakan alat kami, seperti nama, alamat email, dan data administratif yang diperlukan untuk menghasilkan dokumen (seperti data invoice atau slip gaji).
          </p>
        </section>

        <section>
          <h3 className="mb-4 text-lg font-bold text-[#d4af37] uppercase tracking-widest">3. Penggunaan Data</h3>
          <p>Data yang kami kumpulkan digunakan untuk:</p>
          <ul className="ml-6 mt-4 list-disc space-y-2 opacity-80">
            <li>Menyediakan dan memelihara layanan SaaS kami.</li>
            <li>Memproses transaksi dan mengirimkan notifikasi terkait layanan.</li>
            <li>Meningkatkan fungsionalitas dan pengalaman pengguna di platform TUKA.</li>
            <li>Menyediakan dukungan teknis dan layanan pelanggan.</li>
          </ul>
        </section>

        <section>
          <h3 className="mb-4 text-lg font-bold text-[#d4af37] uppercase tracking-widest">4. Keamanan Data</h3>
          <p>
            TUKA Official Store menggunakan protokol keamanan standar industri untuk melindungi data Anda dari akses yang tidak sah. Namun, perlu diingat bahwa tidak ada metode transmisi data melalui internet yang 100% aman.
          </p>
        </section>

        <section>
          <h3 className="mb-4 text-lg font-bold text-[#d4af37] uppercase tracking-widest">5. Kontak Kami</h3>
          <p>
            Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, Anda dapat menghubungi kami melalui:
          </p>
          <div className="mt-4 rounded-xl border border-[#d4af37]/10 bg-white/5 p-6">
            <p>Email: <span className="text-[#d4af37]">tukaofficial27@gmail.com</span></p>
            <p>WhatsApp: <span className="text-[#d4af37]">08118885567</span></p>
          </div>
        </section>
      </div>
    </section>
  );
}