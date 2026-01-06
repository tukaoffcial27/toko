import { Metadata } from "next";
import dataSeoRaw from "@/data-seo.json";
import { notFound } from "next/navigation";

// 1. DEFINISI TIPE (Agar VS Code tidak MERAH)
interface SEOData {
  id: number;
  slug: string;
  profesi: string;
  kota: string;
  produk: string;
  link_funnel: string;
  copywriting: { h1: string; p1: string };
  rich_content: {
    intro: string;
    masalah: string;
    solusi: string;
    faq: { q: string; a: string }[];
  };
}

const dataSeo = dataSeoRaw as SEOData[];

// 2. PENAMBAHAN ISR: Mengizinkan halaman di luar 200 pertama di-generate otomatis saat diakses
export const dynamicParams = true; 

// 3. MODIFIKASI: Hanya render 200 page utama saat 'build' agar Vercel cepat
export async function generateStaticParams() {
  return dataSeo.slice(0, 200).map((item) => ({
    slug: item.slug,
  }));
}

// 4. METADATA DINAMIS (Next.js 15: params bersifat Promise)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = dataSeo.find((d) => d.slug === slug);
  
  if (!item) return { title: "Not Found" };
  
  return {
    title: item.copywriting.h1,
    description: item.copywriting.p1,
    alternates: {
      canonical: `https://toko.guidify.app/id/${slug}`,
    },
  };
}

// 5. KOMPONEN HALAMAN UTAMA
export default async function pSEOPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Mencari data berdasarkan slug
  const data = dataSeo.find((item) => item.slug === slug);
  
  // Jika data tidak ditemukan di JSON
  if (!data) notFound();

  return (
    <main className="min-h-screen bg-[#0a192f] text-[#f9e2af] selection:bg-[#d4af37] selection:text-[#0a192f] py-24 px-6">
      <div className="mx-auto max-w-4xl">
        
        {/* HERO SECTION */}
        <div className="text-center mb-16 border-b border-[#d4af37]/20 pb-16">
          <h2 className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.7em] mb-8">
            Exclusive Business Solutions
          </h2>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-10">
            {data.profesi} <br/> 
            <span className="text-[#d4af37]">{data.kota} Edition</span>
          </h1>
          <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
            {data.rich_content.intro}
          </p>
        </div>

        {/* CONTENT ARTICLE */}
        <article className="prose prose-invert max-w-none space-y-20">
          <div>
            <h2 className="text-3xl font-bold text-[#d4af37] mb-8 uppercase italic">
              Tantangan Bisnis {data.profesi}
            </h2>
            <p className="text-lg leading-loose opacity-70 text-justify">
              {data.rich_content.masalah}
            </p>
          </div>

          <div className="bg-white/5 p-12 rounded-[40px] border border-[#d4af37]/20 my-16 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-white uppercase">
              Solusi Strategis TUKA
            </h2>
            <p className="text-lg leading-loose opacity-70 italic text-justify">
              {data.rich_content.solusi}
            </p>
          </div>

          {/* FAQ SECTION */}
          <div className="pt-12 border-t border-[#d4af37]/10">
            <h3 className="text-4xl font-black uppercase text-center mb-16 tracking-tighter">
              Diskusi Terkait {data.profesi}
            </h3>
            <div className="space-y-8">
              {data.rich_content.faq.map((f, i) => (
                <div key={i} className="group border border-white/5 p-8 rounded-3xl hover:border-[#d4af37]/30 transition-all bg-zinc-900/40">
                  <h4 className="text-xl font-bold text-[#d4af37] mb-4">Q: {f.q}</h4>
                  <p className="text-lg opacity-60 leading-relaxed text-justify">A: {f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* CTA BUTTON */}
        <div className="mt-24 text-center pb-10">
          <a 
            href={data.link_funnel} 
            className="inline-block bg-[#d4af37] text-[#0a192f] px-16 py-6 rounded-full font-black uppercase tracking-[0.3em] text-sm hover:scale-105 transition-all shadow-[0_20px_60px_rgba(212,175,55,0.4)]"
          >
            Mulai di {data.kota} Sekarang
          </a>
        </div>

      </div>
    </main>
  );
}