import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#d4af37]/10 bg-[#050c18] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {/* Kolom Brand */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-[0.4em] text-[#d4af37]">TUKA Official</h3>
            <p className="text-sm leading-relaxed text-[#f9e2af]/40">
              Pusat instrumen bisnis digital premium. Kami membantu ribuan pengusaha mengotomatisasi administrasi melalui teknologi SaaS terbaik.
            </p>
          </div>

          {/* Kolom Legal */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#d4af37]">Legal Support</h4>
            <nav className="flex flex-col gap-4 text-sm text-[#f9e2af]/50">
              <Link href="/privacy" className="hover:text-[#d4af37] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#d4af37] transition-colors">Terms of Service</Link>
              <Link href="/contact" className="hover:text-[#d4af37] transition-colors">Contact Center</Link>
            </nav>
          </div>

          {/* Kolom Partnership */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#d4af37]">Partnership</h4>
            <p className="text-sm text-[#f9e2af]/50">Miliki ekosistem digital personal untuk bisnis Anda.</p>
            <Link href="/offer" className="inline-block border-b-2 border-[#d4af37] pb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">
              Start Collaboration
            </Link>
          </div>
        </div>

        {/* Footer Mark */}
        <div className="mt-20 border-t border-[#d4af37]/5 pt-10 text-center">
          <p className="text-[11px] font-light uppercase tracking-[0.8em] text-[#d4af37]/30">
            MARK TUKAOFFICIAL STORE 2026
          </p>
        </div>
      </div>
    </footer>
  );
}