"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setProducts(data);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen bg-[#0a192f] pb-20">
      {/* 1. HEADER SECTION */}
      <header className="flex flex-col items-center pt-16 pb-8 px-6">
        <div className="relative w-24 h-24 mb-6">
          <Image src="/logo.png" alt="Tuka Logo" fill className="object-contain" priority />
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-center tracking-tighter">
          <span className="bg-gradient-to-b from-[#f9e2af] via-[#d4af37] to-[#8a6d3b] bg-clip-text text-transparent uppercase">
            TUKA Official Store
          </span>
        </h1>
        <div className="w-20 h-[1px] bg-[#d4af37] mt-6 opacity-40"></div>
      </header>

      {/* 2. MARKETING COPY SECTION (Kata-kata Marketing Bagus) */}
      <section className="max-w-3xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-[#f9e2af] text-xl md:text-2xl font-bold mb-4 uppercase tracking-wide">
          Otomatisasi Bisnis Anda dengan Standar Profesional
        </h2>
        <p className="text-[#f9e2af]/60 text-sm md:text-base leading-relaxed">
          Tingkatkan kredibilitas brand Anda dalam hitungan detik. Koleksi instrumen administrasi digital premium kami dirancang khusus untuk pengusaha yang mengutamakan kecepatan, ketepatan, dan tampilan mewah di mata klien.
        </p>
      </section>

      {/* 3. PRODUCT GRID SECTION */}
      <section className="max-w-[1400px] mx-auto px-4">
        {loading ? (
          <div className="text-center py-20 opacity-20 animate-pulse">
            <p className="text-[#d4af37] tracking-[0.2em] text-sm uppercase">Menyiapkan Koleksi Eksklusif...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 opacity-20">
            <p className="text-[#d4af37] tracking-[0.2em] text-sm uppercase">Koleksi Sedang Diperbarui</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="group relative flex flex-col bg-white/5 border border-[#d4af37]/10 rounded-xl overflow-hidden transition-all duration-500 hover:border-[#d4af37]/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
              >
                {/* Foto Produk */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-80 z-10"></div>
                  <img 
                    src={product.image_url} 
                    alt={product.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>

                {/* Info Produk & Tombol More Info */}
                <div className="p-4 flex flex-col items-center text-center z-20 space-y-3">
                  <h3 className="text-[12px] md:text-sm font-bold text-[#f9e2af] uppercase tracking-wider line-clamp-2 min-h-[40px]">
                    {product.name}
                  </h3>
                  
                  {/* Fitur More Info (Eksplorasi Fitur) */}
                  <a 
                    href={product.funnel_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 border border-[#d4af37]/30 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a192f] transition-all duration-300"
                  >
                    Eksplorasi Fitur
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}