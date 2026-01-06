export default function TermsPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-[#f9e2af]/80">
      {/* HEADER HALAMAN */}
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.5em] text-[#d4af37]">Legal Agreement</h2>
        <h1 className="text-4xl md:text-5xl font-black text-[#f9e2af] uppercase tracking-tighter">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm opacity-50 uppercase tracking-widest">Terakhir Diperbarui: 5 Januari 2026</p>
        <div className="mx-auto mt-6 h-[1px] w-20 bg-[#d4af37] opacity-40"></div>
      </div>

      {/* ISI KONTEN */}
      <div className="space-y-12 text-sm leading-loose tracking-wide md:text-base">
        <section>
          <h3 className="mb-4 text-lg font-bold text-[#d4af37] uppercase tracking-widest">1. Penerimaan Ketentuan</h3>
          <p>
            Dengan mengakses dan menggunakan layanan di TUKA Official Store, Anda dianggap telah membaca, memahami, dan menyetujui untuk terikat oleh Ketentuan Layanan ini. Jika Anda tidak menyetujui bagian apa pun dari ketentuan ini, Anda tidak diperbolehkan menggunakan layanan kami.
          </p>
        </section>

        <section>
          <h3 className="mb-4 text-lg font-bold text-[#d4af37] uppercase tracking-widest">2. Penggunaan Layanan</h3>
          <p>
            Anda setuju untuk menggunakan layanan kami hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku di Indonesia. Anda dilarang keras untuk:
          </p>
          <ul className="ml-6 mt-4 list-disc space-y-2 opacity-80">
            <li>Menggunakan layanan untuk tujuan penipuan atau aktivitas ilegal.</li>
            <li>Mencoba merusak, mengganggu, atau memodifikasi infrastruktur teknis kami.</li>
            <li>Menyebarkan materi yang melanggar hak kekayaan intelektual orang lain.</li>
          </ul>
        </section>

        <section>
          <h3 className="mb-4 text-lg font-bold text-[#d4af37] uppercase tracking-widest">3. Hak Kekayaan Intelektual</h3>
          <p>
            Semua konten, logo, desain, dan perangkat lunak yang tersedia di TUKA Official Store adalah milik eksklusif kami atau pemberi lisensi kami dan dilindungi oleh undang-undang hak cipta. Penggunaan layanan kami tidak memberi Anda hak kepemilikan atas aset intelektual tersebut.
          </p>
        </section>

        <section>
          <h3 className="mb-4 text-lg font-bold text-[#d4af37] uppercase tracking-widest">4. Batasan Tanggung Jawab</h3>
          <p>
            Layanan kami disediakan "sebagaimana adanya". TUKA Official Store tidak bertanggung jawab atas kerugian langsung atau tidak langsung yang timbul dari penggunaan atau ketidakmampuan Anda dalam menggunakan alat SaaS kami.
          </p>
        </section>

        <section>
          <h3 className="mb-4 text-lg font-bold text-[#d4af37] uppercase tracking-widest">5. Perubahan Ketentuan</h3>
          <p>
            Kami berhak untuk mengubah Ketentuan Layanan ini kapan saja tanpa pemberitahuan sebelumnya. Perubahan akan berlaku segera setelah dipublikasikan di halaman ini.
          </p>
        </section>

        <section>
          <h3 className="mb-4 text-lg font-bold text-[#d4af37] uppercase tracking-widest">6. Informasi Kontak</h3>
          <p>
            Pertanyaan mengenai Ketentuan Layanan ini dapat dikirimkan kepada kami melalui:
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