import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 text-[#f9e2af]/80">
      {/* HEADER SECTION */}
      <div className="mb-20 text-center">
        <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.5em] text-[#d4af37]">Our Identity</h2>
        <h1 className="text-4xl md:text-6xl font-black text-[#f9e2af] uppercase tracking-tighter">
          About TUKA
        </h1>
        <div className="mx-auto mt-8 h-[1px] w-32 bg-[#d4af37] opacity-40"></div>
      </div>

      <div className="grid gap-16 md:grid-cols-2 items-center">
        {/* GAMBAR/LOGO BESAR */}
        <div className="relative flex justify-center">
          <div className="relative h-64 w-64 md:h-80 md:w-80">
            <Image 
              src="/logo.png" 
              alt="Tuka Official Logo" 
              fill 
              className="object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.2)]"
            />
          </div>
          {/* Aksen Lingkaran Emas Tipis */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-72 w-72 rounded-full border border-[#d4af37]/10 md:h-96 md:w-96"></div>
          </div>
        </div>

        {/* KONTEN TEKS */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-[#d4af37] uppercase tracking-widest">Digital Efficiency, Elegant Design.</h3>
          <p className="text-lg leading-relaxed">
            Lahir dari kebutuhan akan efisiensi, **TUKA Official Store** hadir sebagai jembatan bagi para pengusaha untuk beralih dari administrasi manual yang membosankan menuju otomatisasi digital yang elegan.
          </p>
          <p className="text-base leading-relaxed opacity-70">
            Kami percaya bahwa setiap bisnis, sekecil apa pun, layak mendapatkan alat (tools) yang profesional dan berkelas. Itulah mengapa setiap produk SaaS yang kami bangun di bawah bendera Guidify selalu mengutamakan dua hal: **Kecepatan eksekusi** dan **Estetika mewah**.
          </p>
        </div>
      </div>

      {/* VISI & MISI SECTION */}
      <div className="mt-32 grid gap-10 md:grid-cols-2">
        <div className="rounded-2xl border border-[#d4af37]/20 bg-white/5 p-10">
          <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[#d4af37]">Visi Kami</h4>
          <p className="text-xl font-light leading-relaxed italic">
            "Menjadi standar global dalam penyediaan instrumen bisnis digital yang memadukan kecanggihan teknologi dengan keindahan visual."
          </p>
        </div>
        <div className="rounded-2xl border border-[#d4af37]/20 bg-white/5 p-10">
          <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[#d4af37]">Misi Kami</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li className="flex gap-3">
              <span className="text-[#d4af37]">•</span>
              Membangun alat SaaS yang spesifik untuk memecahkan masalah administrasi nyata (pain points).
            </li>
            <li className="flex gap-3">
              <span className="text-[#d4af37]">•</span>
              Memberikan pengalaman pengguna yang eksklusif melalui desain user-interface yang mewah.
            </li>
            <li className="flex gap-3">
              <span className="text-[#d4af37]">•</span>
              Terus berinovasi mengikuti perkembangan kebutuhan digital ekonomi di tahun 2026 dan seterusnya.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}