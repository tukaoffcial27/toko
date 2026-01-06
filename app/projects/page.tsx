"use client";

import { useState, useEffect } from "react"; // Tambahkan ini
import { supabase } from "@/lib/supabase"; // Tambahkan ini
import Image from "next/image";
import Link from "next/link";

export default function ProjectPage() {
  // 1. Ubah array statis menjadi state dinamis
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 2. Ambil data dari Supabase saat halaman dibuka
  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setProjects(data);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 text-[#f9e2af]/80">
      {/* HEADER SECTION */}
      <div className="mb-20 text-center">
        <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.5em] text-[#d4af37]">Portfolio Showcase</h2>
        <h1 className="text-4xl md:text-6xl font-black text-[#f9e2af] uppercase tracking-tighter">
          Our Projects
        </h1>
        <p className="mt-6 mx-auto max-w-2xl text-base opacity-60">
          Kumpulan mahakarya digital yang telah kami bangun untuk klien eksklusif kami.
        </p>
        <div className="mx-auto mt-8 h-[1px] w-24 bg-[#d4af37] opacity-40"></div>
      </div>

      {/* GRID PROJECTS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {loading ? (
          <div className="col-span-full py-20 text-center opacity-50">Memuat Mahakarya...</div>
        ) : projects.length === 0 ? (
          <div className="col-span-full py-20 text-center opacity-50 uppercase tracking-widest text-xs">
            Project sedang dalam antrean pengerjaan eksklusif.
          </div>
        ) : (
          projects.map((proj) => (
            <div key={proj.id} className="group relative flex flex-col items-center rounded-2xl border border-white/5 bg-white/5 p-2 transition-all hover:border-[#d4af37]/30">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-zinc-900">
                {/* Pastikan menggunakan proj.image_url sesuai kolom di Supabase */}
                <img 
                   src={proj.image_url} 
                   alt={proj.title} 
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-80 z-10"></div>
              </div>
              <div className="p-4 text-center z-20">
                <h3 className="text-[11px] md:text-xs font-bold uppercase tracking-widest text-[#d4af37]">{proj.title}</h3>
                <p className="text-[9px] mt-1 opacity-50 uppercase">{proj.category}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* CTA SECTION */}
      <div className="mt-32 rounded-3xl border border-[#d4af37]/20 bg-gradient-to-b from-white/5 to-transparent p-12 text-center">
        <h3 className="mb-6 text-2xl font-bold text-[#f9e2af]">Ingin Menjadi Proyek Kami Selanjutnya?</h3>
        <Link 
          href="/offer" 
          className="inline-block rounded-full border border-[#d4af37] px-10 py-4 text-xs font-bold uppercase tracking-widest text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a192f] transition-all"
        >
          Mulai Konsultasi Eksklusif
        </Link>
      </div>
    </section>
  );
}