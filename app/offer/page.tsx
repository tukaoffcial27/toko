export default function OfferPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <h2 className="mb-6 text-xs font-bold uppercase tracking-[0.5em] text-[#d4af37]">Exclusive Offer</h2>
      <h1 className="mb-10 text-4xl md:text-6xl font-bold text-[#f9e2af]">
        Bangun Website Bisnis <br /> Kelas Dunia Bersama Kami
      </h1>
      <p className="mb-16 text-lg leading-relaxed text-[#f9e2af]/60">
        Kami tidak hanya membuat website, kami membangun infrastruktur digital yang elegan, 
        cepat, dan dirancang khusus untuk meningkatkan prestise bisnis Anda di mata dunia.
      </p>
      
      <div className="grid gap-8 md:grid-cols-2 text-left">
        <div className="rounded-xl border border-[#d4af37]/20 bg-white/5 p-8">
          <h3 className="mb-4 text-[#d4af37] font-bold uppercase tracking-wider">Premium Design</h3>
          <p className="text-sm text-[#f9e2af]/50">Tampilan visual mewah yang diadaptasi khusus untuk identitas brand eksklusif Anda.</p>
        </div>
        <div className="rounded-xl border border-[#d4af37]/20 bg-white/5 p-8">
          <h3 className="mb-4 text-[#d4af37] font-bold uppercase tracking-wider">SaaS Infrastructure</h3>
          <p className="text-sm text-[#f9e2af]/50">Integrasi alat produktivitas otomatis seperti yang Anda lihat di ekosistem TUKA.</p>
        </div>
      </div>

      <div className="mt-20">
        {/* Update Link WhatsApp di bawah ini */}
        <a 
          href="https://wa.me/628118885567" 
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#d4af37] px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] text-[#0a192f] shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-105 transition-transform inline-block"
        >
          Konsultasi Proyek Gratis
        </a>
      </div>
    </section>
  );
}