"use client";

import { Mail, Phone, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      {/* JUDUL HALAMAN */}
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.5em] text-[#d4af37]">Customer Care</h2>
        <h1 className="text-4xl md:text-5xl font-black text-[#f9e2af] uppercase tracking-tighter">
          Contact Center
        </h1>
        <div className="mx-auto mt-6 h-[1px] w-20 bg-[#d4af37] opacity-40"></div>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {/* INFO KONTAK KIRI */}
        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-[#f9e2af]/70">
            Tim dukungan TUKA Official siap membantu Anda setiap hari kerja. Hubungi kami melalui saluran resmi di bawah ini:
          </p>
          
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center gap-6 rounded-xl border border-[#d4af37]/10 bg-white/5 p-6 transition-all hover:border-[#d4af37]/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37]">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#d4af37]/50">Email Address</p>
                <p className="text-lg font-medium text-[#f9e2af]">tukaofficial27@gmail.com</p>
              </div>
            </div>

            {/* WhatsApp / Phone */}
            <div className="flex items-center gap-6 rounded-xl border border-[#d4af37]/10 bg-white/5 p-6 transition-all hover:border-[#d4af37]/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37]">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#d4af37]/50">Official WhatsApp</p>
                <p className="text-lg font-medium text-[#f9e2af]">08118885567</p>
              </div>
            </div>
          </div>
        </div>

        {/* TOMBOL CEPAT KANAN */}
        <div className="rounded-2xl border border-[#d4af37]/20 bg-[#050c18] p-10 flex flex-col justify-center items-center text-center shadow-2xl">
          <MessageSquare className="mb-6 text-[#d4af37]" size={48} />
          <h3 className="mb-4 text-xl font-bold text-[#f9e2af]">Respon Cepat via WhatsApp</h3>
          <p className="mb-8 text-sm text-[#f9e2af]/50">
            Dapatkan bantuan langsung mengenai produk SaaS atau konsultasi proyek website hanya dalam hitungan menit.
          </p>
          <a 
            href="https://wa.me/628118885567" 
            className="w-full rounded-full bg-[#d4af37] py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0a192f] transition-all hover:scale-105"
          >
            Chat Admin Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}